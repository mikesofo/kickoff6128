#!/usr/bin/env node
/*
 Kickoff 6128 - technical health check
 Usage:  node tests/selftest.js [path/to/index.html] [--quick]
 Needs:  node + playwright (npm i playwright && npx playwright install chromium)
 It builds a private copy of the page that exposes the game's internals, then:
   1  syntax check of the game script
   2  option audit: duplicate keys, keys missing from defaults, broken labels
   3  every menu screen builds and draws
   4  every on/off option is switched ON and OFF and the game is stepped and drawn
   5  full matches in all competition sets, random weather / time / surface
   6  training drills, both tutorials, each pitch invader, each preset
   7  free kick regression: a curled / dipped kick must be able to score
 Exit code 0 = all green, 1 = at least one failure.
*/
const fs=require('fs'),path=require('path'),vm=require('vm');
const quick=process.argv.includes('--quick');
const file=path.resolve(process.argv.slice(2).find(a=>!a.startsWith('--'))||path.join(__dirname,'..','index.html'));
const html=fs.readFileSync(file,'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const fails=[],notes=[];
const fail=(a,b)=>{fails.push(a+': '+b);console.log('  FAIL',a,'-',b)};
const ok=a=>console.log('  ok  ',a);
function section(n){console.log('\n'+n)}
(async()=>{
section('1. syntax');
try{new vm.Script(scripts[scripts.length-1],{filename:'game.js'});ok('game script parses')}catch(e){fail('syntax',e.message);finish()}
const marker='requestAnimationFrame(frame);\n})();';
if(!html.includes(marker)){fail('build','could not find the end of the game closure');finish()}
const tmp=path.join(require('os').tmpdir(),'kickoff6128-selftest.html');
fs.writeFileSync(tmp,html.replace(marker,'window.__ev=c=>eval(c);\n'+marker));
let chromium;try{({chromium}=require('playwright'))}catch(e){console.log('playwright is not installed: npm i playwright && npx playwright install chromium');process.exit(2)}
const b=await chromium.launch();const p=await b.newPage({viewport:{width:640,height:480}});
const pageErrs=[];p.on('pageerror',e=>pageErrs.push(String(e.message||e).slice(0,160)));
await p.addInitScript(()=>{window.requestAnimationFrame=()=>0;localStorage.setItem('kickoff6128',JSON.stringify({seen:1,boot:0}))});
await p.goto('file://'+tmp);await p.waitForTimeout(400);
const run=(fn,arg)=>p.evaluate(([src,a])=>window.__ev('('+src+')('+JSON.stringify(a===undefined?null:a)+')'),[fn.toString(),arg]);
const errNow=()=>run(()=>ERRL);
const prep=()=>run(()=>{O.replay=0;O.intro=0;O.prog=0;O.tun=0;O.cel=0;O.walk=0;O.hts=0;S.menu=[];S.pg=null;S.wo=null;S.tn=null;S.boot=null;S.pause=0;S.spd=1});
const freshMatch=(a,b2)=>run(([a,b2])=>{M.kind='AI';beginMatch([a,b2],[],1,null);O.replay=0;O.intro=0;S.menu=[];S.pg=null;S.wo=null;S.tn=null;S.boot=null;S.pause=0;S.spd=1;S.so=null;return 1},[a,b2]);
let T=1e5;const frames=n=>run(([n,t0])=>{let t=t0;for(let i=0;i<n;i++){t+=17;frame(t)}},[n,T]).then(()=>{T+=17*n});

section('2. option audit');
const aud=await run(()=>{const it=optionItems();const out={dup:[],miss:[],blank:[],n:it.length};const seen={};
 for(const x of it){if(!x.label||!String(x.label).trim())out.blank.push(x.key);if(x.key){if(!(x.key in O))out.miss.push(x.key);if(x.onoff){if(seen[x.key])out.dup.push(x.key+':'+seen[x.key]+' / '+x.label);else seen[x.key]=x.label}}
  try{String(x.val&&x.val())}catch(e){out.blank.push('val() throws for '+x.label)}}
 return out});
console.log('  options:',aud.n);
if(aud.dup.length)fail('duplicate keys',aud.dup.join('; '));else ok('no duplicate on/off keys');
if(aud.miss.length)fail('keys missing from defaults',aud.miss.join(','));else ok('every key exists in the defaults');
if(aud.blank.length)fail('broken option items',aud.blank.join(','));else ok('all option labels and values read');

section('3. menus');
const ids=[...html.matchAll(/^  case'([a-z_0-9]+)'/gm)].map(m=>m[1]);
const menuRes=await run(ids=>{const bad=[],okc=[];const args={pg:0,slot:0,cat:0,c:0,i:0,n:0,k:0,t:0,team:0,idx:0,sel:0};
 for(const id of ids){try{const m=Object.assign({id,sel:0},args);const sp=buildMenu(m);if(!sp||!Array.isArray(sp.items))throw new Error('no items');for(const it of sp.items){if(it.k!=='sep'&&!('label' in it)&&!it.text&&!it.t)throw new Error('item without label')}okc.push(id)}catch(e){bad.push(id+': '+String(e.message||e).slice(0,70))}}
 return {bad,n:okc.length}},ids);
console.log('  menus built:',menuRes.n,'of',ids.length);
if(menuRes.bad.length)notes.push('menus needing arguments (not failures): '+menuRes.bad.join(' | '));
const unexpected=menuRes.bad.filter(x=>/is not defined|Cannot read|undefined|not a function/.test(x)&&!/^(keys|optcat|stedit|players|kited|lineup|pstats|scorers|album|tstats|rivals|result|postnote|campd|qcd|ctv|reel|pcup|half|boss|subs|ko|pre|series|m_comp|saves|daily|qc|camp|cchal|league|table|stats|old|advice|online|mixer)/.test(x));
if(unexpected.length)fail('menus throw unexpectedly',unexpected.join(' | '));else ok('menu screens build');
const drawn=await run(()=>{let bad=0;for(const id of ['main','options','presets','custom','profiles','k_ctrl','k_sys','about','instr','pause']){try{S.menu=[{id,sel:0}];}catch(e){bad++}}return bad});
await prep();let e0=await errNow();
for(const id of ['main','options','presets','custom','profiles','k_ctrl','k_team','k_sys','about','instructions','train']){
  await run(id=>{S.menu=[{id,sel:0}]},id);try{await frames(2)}catch(e){fail('draw menu '+id,String(e.message).slice(0,100))}}
const e1=await errNow();if(e1!==e0)fail('menu draw',e1);else ok('main menus draw without errors');

section('4. every on/off option, ON and OFF');
await prep();await freshMatch(0,1);
const keys=await run(()=>[...new Set(optionItems().filter(x=>x.onoff&&x.key).map(x=>x.key))]);
let optFail=0;
for(const k of keys){
  for(const v of [1,0]){
    const r=await run(([k,v])=>{const old=O[k];O[k]=v;let bad=0;try{S.sp=null;for(let i=0;i<50;i++)step();}catch(e){return 'step: '+e.message}
      for(const q of players)if(!isFinite(q.x)||!isFinite(q.y))bad++;if(!isFinite(ball.x))bad++;O[k]=old;return bad?'NaN positions':''},[k,v]);
    let msg=r;
    if(!msg){try{await run(([k,v])=>{O[k]=v},[k,v]);await frames(4);await run(([k,v])=>{},[k,v])}catch(e){msg='frame: '+String(e.message).slice(0,80)}}
    const e2=await errNow();
    if(!msg&&e2!==e0){msg='error log: '+e2;e0=e2}
    if(msg){optFail++;fail('option '+k+'='+v,msg)}
  }
}
if(!optFail)ok(keys.length+' options x 2 states');

section('5. full matches');
const sims=quick?3:9;
const simRes=await run(sims=>{const out={bad:0,stuck:0,exc:[],runs:0,goals:0};const R=n=>Math.floor(Math.random()*n);
 for(let m=0;m<sims;m++){try{
  applySet(m%3);Object.assign(O,{weather:R(5),tod:R(4),surf:R(5),rq:R(5),clip:0,vr:R(2),pens:1,fouls:1,offs:1,evt:R(2),inv:R(8),pyro:R(2),replay:0,intro:0,prog:0,tun:0,walk:0,cel:0,hts:0});
  M.kind='AI';const a=R(8);let b=(a+1+R(6))%8;beginMatch([a,b],[],1+R(2),null);S.menu=[];S.pg=null;S.wo=null;S.tn=null;S.boot=null;S.pause=0;S.spd=1;S.so=null;
  let steps=0,last=-1,same=0;
  while(steps<100000){S.pg=null;S.wo=null;if(S.mode==='play')S.menu=[];if(S.replay){const k=S.replay.done;S.replay=null;k();continue}if(S.mode==='half'){startHalf(1);continue}if(S.mode!=='play')break;step();steps++;
   if(steps%400===0){draw();for(const p of players)if(!isFinite(p.x)||!isFinite(p.y))out.bad++;if(!isFinite(ball.x)||!isFinite(ball.y))out.bad++;const k=S.clock+S.half*1e6;if(k===last){if(++same>60){out.stuck++;break}}else{same=0;last=k}}}
  out.goals+=S.score[0]+S.score[1];out.runs++}catch(e){out.exc.push(String(e&&e.stack||e).slice(0,160))}}
 applySet(0);return out},sims);
console.log('  matches:',simRes.runs,' goals:',simRes.goals);
if(simRes.bad)fail('matches','NaN positions x'+simRes.bad);if(simRes.stuck)fail('matches','stuck clock x'+simRes.stuck);if(simRes.exc.length)fail('matches',simRes.exc[0]);
if(!simRes.bad&&!simRes.stuck&&!simRes.exc.length)ok('matches run to full time');

section('6. training, tutorials, invaders, presets');
const misc=await run(()=>{const out=[];const T=(n,f)=>{try{f();out.push(['ok',n])}catch(e){out.push(['FAIL',n+': '+String(e.message||e).slice(0,100)])}};
 const setup=()=>{M.kind='AI';beginMatch([0,1],[],1,null);O.replay=0;O.intro=0;S.menu=[];S.pg=null;S.wo=null;S.tn=null;S.boot=null;S.pause=0;S.spd=1;S.so=null};
 for(let d=0;d<5;d++)T('drill '+d,()=>{beginTraining(d);S.menu=[];S.wo=null;S.pg=null;for(let i=0;i<150;i++)step();draw()});
 T('tutorial A',()=>{beginTutorial();S.menu=[];S.wo=null;for(let i=0;i<150;i++)step();draw()});
 T('shooting masterclass',()=>{beginShootTut();S.menu=[];S.wo=null;for(let i=0;i<150;i++)step();draw()});
 for(const o of [1,2,3,4,6,7])T('invader option '+o,()=>{setup();O.inv=o;S.invDone=false;S.invT=0;S.sp=null;S.owner=null;for(let i=0;i<500;i++){step();if(i%100===0)draw()}});
 for(const id of ['classic','full','pure'])T('preset '+id,()=>{applyPreset(id);setup();for(let i=0;i<200;i++)step();draw()});
 T('restore defaults',()=>{O.inv=5;O.rad=0});
 return out});
for(const [s,n] of misc){if(s==='ok')ok(n);else fail('misc',n)}

section('7. free kick regression');
const fk=await run(()=>{let goals=0,n=12;const R=(a,b)=>a+Math.random()*(b-a);
 for(let i=0;i<n;i++){applySet(0);O.bph=1;O.fkw=1;M.kind='AI';beginMatch([0,1],[],1,null);O.replay=0;O.intro=0;O.vr=0;O.fouls=0;S.menu=[];S.pg=null;S.wo=null;S.tn=null;S.boot=null;S.pause=0;S.spd=1;S.so=null;
  const x=X1-48,y=(Y0+Y1)/2+R(-20,20);startSet('FREE',0,x,y);for(let k=0;k<58;k++)step();
  const sp=S.sp;if(!sp)continue;const tk=sp.taker,gy=(Y0+Y1)/2,s=Math.random()<.5?-1:1,ty=gy+s*GH*.7;
  HU.push({ctrl:tk,team:0});sp.fv=i%2?4:2;const dx=X1-x,dy=ty-y,L=Math.hypot(dx,dy);kickBall(tk,dx/L,dy/L,.6,i%2?0:-s*.05,false);HU.length=0;
  const s0=S.score[0];for(let k=0;k<150;k++){step();if(S.score[0]>s0||S.mode!=='play'){if(S.score[0]>s0)goals++;break}}}
 return {goals,n}});
console.log('  curled/dipped free kicks scored:',fk.goals,'of',fk.n);
if(fk.goals<2)fail('free kicks','only '+fk.goals+'/'+fk.n+' scored - direct free kicks are too hard again');else ok('direct free kicks can score');

section('page errors');
if(pageErrs.length)fail('page errors',pageErrs.slice(0,3).join(' | '));else ok('no uncaught page errors');
await b.close();
finish();
function finish(){
 console.log('\n'+(notes.length?'notes:\n  '+notes.join('\n  ')+'\n':''));
 if(fails.length){console.log('SELFTEST FAILED ('+fails.length+')');fails.forEach(f=>console.log(' - '+f));process.exit(1)}
 console.log('SELFTEST PASSED');process.exit(0)}
})().catch(e=>{console.error('selftest crashed:',e);process.exit(1)});
