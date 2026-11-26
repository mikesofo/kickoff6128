# Kickoff 6128

A five-a-side football game that runs in a single HTML file. No assets, no libraries, no install: everything is drawn on an HTML5 canvas.

**Play it:** https://mikesofo.github.io/kickoff6128/

Kickoff 6128 is an original tribute to *Match Day II* on the Amstrad CPC. It uses a raised, pseudo-isometric view, eight Greek clubs (or eight 1980s national teams) and a lot of 1980s atmosphere. It is not affiliated with the original game or its makers, and it uses none of its code or artwork.

## Features

**Modes**
- 1 player, 2 players, and twin (two humans against the CPU)
- Super League season: eight clubs, home and away, saved table, champions trophy
- Matchday Cup: two-leg ties, extra time and penalty shootouts
- Penalty shootout, 2-player shootout and a penalty cup with a nerves meter
- Daily challenge, plus shareable challenge codes and a custom challenge
- Training: finishing, free kicks over a wall, and a skills arena
- Online match for two players using two short codes (no server)

**Match play**
- Charge-and-release kicking with curl, lobs, lofted and low crosses, headers, slide tackles, skill moves and a once-per-half time warp
- Shooting assist, stamina, offsides, fouls, yellow and red cards, penalties
- Injuries and automatic substitutes; a team reduced to two players forfeits 3-0
- Substitutions, formations, playing styles, corner and free-kick routines
- Captain, penalty taker and free-kick taker
- Referee personalities, weather events, floodlight failure, fog and storms
- Commentary ticker, crowd chants, attendance, replays from three cameras
- Match stats, man of the match, achievements and unlockable balls and kits

**Clubs and players**
- Panathinaikos, Olympiakos, AEK, Panionios, Aris, PAOK, OFI and Panachaiki
- Named 1980s stars with pace, shooting, tackling and goalkeeping ratings
- Line-ups with shirt numbers, a top scorers table and rivalry history

## Release notes

### 10.7
- MOTOR OIL adboard (blue/white, oil drop) in the Greek ad set.

### 10.6
- Weather mostly clear; fixed weather never changes mid-match, RANDOM changes rarely.
- Options WEATHER = LOCAL and TIME OF DAY = LOCAL (real weather via open-meteo + device clock).
- Fans throw flares in derbies (referee stops play, stewards clear them) and bottles when a team trails by 3+.
- Phones: touch stick/swipe also work in the black side bars (landscape); SND label hidden on touch devices.
- Options regrouped: WEATHER AND LIGHTING / PITCH AND STADIUM / CROWD AND FANS.

### 10.5
- OFI gets a GATE 4 banner (home and away).

### 10.4
- Club fan banners in home and away stands for PAO (GATE 13; result-dependent ΕΙΜΑΣΤΕ ΑΠΟ ΤΟ ΜΕΛΛΟΝ / ΑΛΑΦΟΥΖΟ ΖΗΣΕ), OLY (NO POLITICA, GATE 7), AEK, PANIONIOS, ARIS, PAOK, PANACHAIKI. Switch: OPTIONS > CLUB FAN BANNERS.

### 10.3
- Second Panathinaikos fan banner "ΑΛΑΦΟΥΖΟ ΖΗΣΕ" in home matches, held by fans in the stands.
- Fan banners now sit inside the stands (behind adboards, under fog and night shading) and are held up by fans, not floating poles.
- Fixed: after winning the coin toss and choosing differently from the pre-rolled result, the second half did not switch ends. Ends and kick-off now follow your choice.

### 10.2
- Floodlights come on earlier at dusk and fade up smoothly.
- One soft shadow per floodlight tower for every player (four towers, four shadows); towers drawn at all four corners.
- Clear half-time cue: the half-time screen, arrows and commentary show the teams switching ends.

### 10.1
- The poster is the first screen: an animated title (crowd, floodlights, striker, diving keeper, goal or save in turns).
- Menu music starts on the title screen and carries on into the menus; the first key press unlocks sound if the browser blocks it.
- New options: Title Poster Screen, CPC Boot Before Title, Music Only on Title Screen.

### 10.0
- Manager Career: seasons in the league with budget, training, transfer window, ageing and board targets.
- Hall of Fame (personal records) and Match History (last 40 matches) with written match stories.
- Club Creator (generated badges, random kit and squad) and Formation Library (3 slots, mirror, copy).
- Tutorial Progress page: every lesson with stars, jump straight in.
- Extra commentary variety (Greek included) and a language switch in the pause menu.
- 10.0 title card; rebuilt Instructions start page. Every feature has an on/off option.

### 9.17
- What's New popup lists all versions since last played.
- Phone landscape: no more 8px vertical scroll.
- Audit: menus/tutorial panels checked for overlap/overflow (none).

### 9.16
- New CORNERS AND THROW-INS and PENALTY ACADEMY tutorials.
- Replay your last kick (Z / L3) in training and tutorials, with path trace.
- Gamepad button guide screen.

### 9.15
- Tutorial stars (1-3 per lesson, saved in `kickoff6128-tutstars`), totals in the Training menu.
- Gamepad: coin toss choice with D-pad/stick + X; Select/Back skips a tutorial lesson.

### 9.14
- New FREE KICK ACADEMY tutorial (Training): 16 lessons, one per free kick type, with event detection for over/around the wall and each style.
- Fixed the ΡΙΖΟΣΠΑΣΤΗΣ adboard hammer and sickle (was upside down).

### 9.13
- New FOULS AND CARDS TUTORIAL (Training menu): 12 lessons with scripted tasks for free kick, penalty, yellow, second yellow/red, straight red, winning a free kick, winning a penalty and advantage.

### 9.12
- Pre-match coin toss: if a human wins the toss they pick KICK OFF or CHOOSE ENDS (keys/tap); AI winners still pick automatically.

### 9.11
- Keepers weaker and scaled by their own GK rating (new `gkSk`, later reactions, bigger aim error, lower save odds).
- Rule switch KEEPER CAN PICK UP BACK-PASSES (1980S), default ON (replaces BACK-PASS RULE).

### 9.10
- Fixed Saravakos (and any other player) being bald on one side of the pitch: hair style no longer depends on the team side.

### 9.9
- Back-pass rule is a separate switch, off by default (1980s)
- Free kick wall signal (through-ball button: auto / jumps / stays); a jumping wall can be beaten low
- Free kick aim line with goal-line marker
- Pitch invader fans are met by two stewards and escorted off, keeping their flag

### 9.8
- Fixes: gamepad X for throw-ins, free kicks and corners; Saravakos hair stays the same in both halves; Panathinaikos tifo anchored in the stands for 50 s; keepers react later and dive slower so aimed corners score; flip-digit scoreboard removed

### 9.7
- Option presets (Classic 1986 / Full atmosphere / Pure gameplay) and a custom page with every on/off switch
- Direct free kicks can score: wall further back and lower, blind keeper behind the wall, auto-loft for curler and dipper, five-lesson free kick tutorial
- Fixes: gamepad X for throw-ins/set pieces, Saravakos hair, PAO tifo anchored, keepers slower to react (aimed corners score), flip scoreboard removed
- Throw-ins: pass button throws to the teammate you face, hold lob (circle) for a charged long throw; crowd scrolls almost with the boards; tifo/flares stay in the stands; smaller boom-mic man
- Free kick practice uses the real set-piece mode (V styles, match wall distance)
- Stands: crowd follows the pitch camera (no fans showing through the grass in front of the boards) and scrolls closer to board speed; score-bug digits drawn crisp, no shadow; ΠΑΣΟΚ fan flag uses the real logo green; `pasok_flag.svg` added
- Free kick school and tutorial: how to curve and dip the ball, low vs high corners; scoreboard digits without shadow
- Automated health check: `node tests/selftest.js index.html [--quick]`
- Fix: seven options did not persist; curl trail and CPU offside trap shared one switch

### 9.6
- Fix: players looked partly bald running towards camera (front hair covered only the top); detailed crowd option (shaded fans, hair colours, eyes, flags, caps, open mouths)

### 9.5
- Ball bounce: friction-based bounce, surface-dependent, squash on impact, impact-scaled thud (BALL PHYSICS: ENHANCED)

### 9.4
- Quit to desktop menu item; 50/50 crowd in national matches; enhanced ball physics option; gamepad defaults R1 skill / X press / triangle jockey

### 9.3
- Half time kiosk (souvlaki queue), boom mic operator along the touchline, radio mode (off by default). Each has an option.

### 9.2
- Ad boards: shadow removed, bigger lettering; LACTA and ION red with white letters; the Λεωνίδας board is two lines (ΨΗΣΤΑΡΙΕΣ / Ο ΛΕΩΝΙΔΑΣ)
- FREE KICK SCHOOL: full instruction panel in the FREE KICKS drill (option), more coach tips, four new free-kick lessons in the shooting course
- New pitch invaders: a ΠΑΣΟΚ fan with a rising-sun flag, and two dogs who sometimes get very friendly (non-graphic). Both in the PITCH INVADER option.

### 9.1
- Ad boards: taller, shadowed lettering, taglines, pictograms; Greek mode adds REXONA, LACTA and ΛΕΩΝΙΔΑΣ (colours are best-known brand colours, no official logos).
- SKYCAM RIG, RAINBOW AFTER RAIN (rain stops once in light-rain day matches), LIGHTNING BOLTS (visible bolt + commentary). All switchable.

### 9.0
- GOAL AND BOX SIZE option (classic / wide +25% / extra wide +50%): goal mouth, six-yard box, penalty area, spot and arc scale together (markings and rules). Default wide.

### 8.9
- Isometric camera now also follows the ball vertically (option ISOMETRIC CAMERA FOLLOWS UP AND DOWN).

### 8.8
- Player size normal restored to the v8.5 size (option range -20%..+50% kept).
- Pitch and goals drawn 20% larger in all views (visual scale; gameplay distances unchanged).

### 8.7
- Black screen FIXED: banner list `S.ban` clashed with the suspension counters `S.ban=[0,0]` after a menu reset (drawBan0 crashed on `0`). Renamed to `S.bnr`.
- Duplicate GAMEPLAY SPEED menu entry removed; menu song plays twice then stops.
- Stand weather (umbrellas, ponchos, fans, sun hats, breath), fans leave after a heavy home defeat (with PA and commentary), sweaty/wrinkled shirts, facial hair, ball styles (leather, winter orange, hi-vis, auto), full-time handshakes and walk-off, SHOOTING MASTERCLASS in Training. All have options.

### 8.6
- Black screen hardening: simulation errors are caught, located (About > LAST ERROR) and recovered from.
- Players 20% smaller by default; PLAYER SIZE option -20%..+50%.
- Isometric zoom FAR/NORMAL/NEAR/CLOSE, ] key cycles it in every view.

### 8.5
- Set piece close-up (picture-in-picture) at penalties and free kicks; stadium PA announcer strip with chime; top-down jump pose. Both new features are options.

### 8.4
- Jump pose: arms up and knees tucked while a player or keeper is in the air.

### 8.3
- Keepers jump for high shots (leap, or dive and leap) and reach higher; curl aim guide matches the natural curl.

### 8.2
- Curled shots now start along the aim and bend toward the steered direction (no more launch to the opposite side first); low curls bend more.

### 8.1
- Fan chants on/off option; new chant style DRUMS AND CLAPS (default, also applied once to existing saves): drum beat, rhythmic crowd claps and cheers. Booing when the visitors attack now only in the final third of the pitch.

### 8.0
- Floodlight shadows (four per player at night), heat shimmer and dust on hot dry days, knee-slide and shirt-over-head celebrations (the latter may draw a yellow card), trophy ceremony with a kitted-out squad and fireworks. Each is switchable in the options.

### 7.9
- ΡΙΖΟΣΠΑΣΤΗΣ ad board restyled: black lettering, white background, red hammer and sickle each side.

### 7.8
- Gradual puddles with splashes and ripples; card mosaics, scarves and phone flashes in the crowd; more frequent Mexican waves.
- Tired and limping players, referee signals, substitution board, goal shot map. Each switchable.

### 7.7
- Top-down stands and boards (steps, stairways, rail, stewards, end boards, wider camera) and detailed goal nets (options).

### 7.6
- Top-down extra detail: grass grain, worn patches, socks, shirt shading, collars, cuffs, ball highlight (option).

### 7.5
- VAR and goal-line technology only for dubious goals (missed offside or foul beforehand, or a hair's-breadth margin).

### 7.4
- [ and ] keys for view and zoom during a match; pause menu has VIEW, ZOOM, SOUND and all options at the top.
- New ad board for Greek-set matches.

### 7.3
- Crowd sound: English-only chants, fuller and louder, repeated; louder ambience; rebuilt booing (default every match).
- CCCP and Spain away kits; hair visible from above; rabbit size fixed.

### 7.2
- Keeper goes up for late corners and free kicks when losing (or level in a must-win match).
- Goal-line cam replay only for close calls (option), flip-digit board at the midline, wind-driven corner flags.
- Fix: free-kick spray line no longer clashes with the offside trap.

### 7.1
- Rain on the camera lens, free-kick spray line, announcer ticker, score bar auto-hide in replays, training retake (R). Each switchable in options.

### 7.0
- Flags in the broadcast score bar for national teams (toggle: SCORE BAR SHOWS).

### 6.9
- Broadcast score bug (abbreviated names, top left or right) with SCORE DISPLAY option; scorer caption after goals.
- Turf marks (skid lines, divots, snow footprints), wet-pitch reflections, replay depth of field, visible ball spin, blimp and birds in the park stadium. Each is switchable in options.

### 6.8
- What's new screen once per update, team records page, coach advice, goal celebrations, dynamic shadows

### 6.7
- No low-sun glare in rain, storm or fog
- Pitch inspection only in a storm or dense fog (no longer in plain wind)
- Chants rebuilt: the default CROWD style is breathy crowd noise shaped into vowels with a few wavering voices; the old sound is CLASSIC SYNTH in CHANT STYLE

### 6.6
- Any gamepad button now works on PRESS ANY KEY screens, even when the controls device is keyboard
- Removed the small tagline text under the ad board names

### 6.5
- Gamepad uses the PES layout by default: X low pass, O lob/cross, Square shoot, Triangle through ball, R2 skill, L2 trap/wall, L1 switch player, R1 press, R3 time warp (the game has no dash button)
- Gamepad layout choice is now saved
- Full-time safety net: opens the result screen if it is ever missing

### 6.4
- Reactive crowd banners, derby chant duels, cheeky ball boys, muddy second-half goalmouths with slips in the wet, retro TV broadcast mode (VHS replays, full 80s TV)

### 6.3
- Pause summary panel, stamina bar, goal-line check, coach substitution hints, optional full-time highlights, three option profile slots

### 6.2
- Free kick styles (knuckleball, curler, driven, dipper) chosen with SKILL; aftertouch strength option; chant style option; European 1980s ad boards for the European set (ad board option now has four choices)

### 6.1
- New stadium ad boards: Marlboro, Camel and Assos in their brand colours

### 6.0
- Third team set: European clubs of the 1980s (Liverpool, Real Madrid, AC Milan, Juventus, Bayern, Porto, Barcelona, Dynamo Kiev) with squads, kits, stadiums, derbies, a European Cup, a Euro League season and 40 more stickers (album 120).

### 5.25
- Keeper rules: hands in the area, back-pass rule, 5 second rule with indirect free kick. Chants softened (no more gunshot sound).

### 5.24
- Fan chants rebuilt (grouped voices, vibrato, softer waveform, no comb echo).

### 5.23
- Keepers keep the ball against attackers in their own area; aftertouch toned down.

### 5.22
- Fix: black screen with only the crowd visible after some matches (a draw error left a clip active). Drawing errors are now caught, the canvas state is reset, and the last error shows on the ABOUT screen.

### 5.21
- Panathinaikos: Zajec blond, everyone else black hair (also Zajec for Yugoslavia).

### 5.20
- Individual skin tone and hair colour for every club and national player and their benches.

### 5.19
- Corner kicks training drill with coach grading, more fan chants, match cards are an option (off by default).

### 5.18
- Colour-blind mode (team rings), menu text size, match autosave with CONTINUE MATCH, best-of series, rivalry tags, pre-match tactical cards.

### 5.17
- Fan mood system with effects on atmosphere and a small home boost (option FAN MOOD EFFECTS)
- Storm or fog can abandon a match; postponed matches resume from the main menu (option ABANDONED MATCHES)
- Coach feedback after every shot in training
- Fan variety and richer ad boards (patterns, taglines, LED sweep)

### 5.16
- Player hair styles (short, afro, bald, long, headband, beard) in all views
- PLAYER NUMBERS option: shirt / off / above players / both
- GAMEPAD LAYOUT: PES STYLE context-sensitive button layout

### 5.15
- Visible shirt numbers (back, chest, side, top-down) with contrast colours; more player and ad-board detail
- Ball physics: pitch-dependent bounce, spin swerve on landing
- Captain argues with the referee and can be booked for dissent
- SUBSTITUTIONS option: rolling, unlimited, on the fly (G key; CPU rotates tired players)
- Match report page: shot map with xG, player ratings, save as picture

### 5.14
- Ad boards: two in three carry ads, in brand-style colours, with many more 1980s Greek brands; PROPO always present
- Removed the stadium scoreboard from behind the pitch

### 5.13
- Chants rebuilt as shouted crowd voices with a bass drum on the beat
- Offside: never in own half, never from throw-ins or other restarts
- Greek spoken voice disabled (text commentary stays)

### 5.12
- Keepers stop conceding slow long-range shots (they reliably gather or block slow balls)
- Throw-ins are no longer affected by aftertouch

### 5.11
- Ad boards show Greek 1980s brands (Softex, Olympic Airways, Eleftherotypia, Ethnos, Tasty, BMW, Fix, EBGA, Delta); PROPO is always on the boards
- AD BOARD BRANDS option to switch back to generic brands

### 5.10
- Top-down views: players and ball scale with the zoom level, and PLAYER SIZE now applies

### 5.9
- Replays and highlights can use any view (isometric, sideways, vertical) or cycle through all angles; new REPLAY VIEW and REPLAY ZOOM options
- During a replay, V changes the view and Z changes the zoom

### 5.8
- Fixed rebounds and keeper clearances bouncing into the team's own goal; own goals are only credited when the scorer's own side touched the ball last
- Keepers avoid passing to a closely marked defender
- VAR review replays the incident from isometric, sideways and vertical views in turn
- Top-down views: new CLOSE zoom and CAMERA FOCUS option (ball / ball and your player / your player)
- Tunnel, walk-out and programme always use the isometric view

### 5.7
- **Top-down fix:** stand tifo banners, flares and smoke no longer appear over the pitch in the top-down views (they are isometric-only).

### 5.6
- **Update fix:** UPDATE TO Vx (RELOAD) refreshes the HTTP cache, clears the old service worker and caches, and reloads from a fresh address so the new version loads (GitHub Pages caches files for 10 minutes). Update check now also runs in a normal browser tab, a few seconds after opening and when a new service worker takes over. The service worker fetches the page, sw.js and the page address with revalidation, and registers with updateViaCache none.

### 5.5
- **Tidier menus:** short main menu with COMPETITIONS, CHALLENGES AND TRAINING, TEAM AND PLAYERS and RECORDS AND EXTRAS pages; MATCHDAY OPTIONS split into eight groups (search and pinned favourites still work across all); KEYS AND OPTIONS in four sections; pause menu keeps subs, plan and tactics up front with MATCH INFO and TOOLS AND COMMENTARY pages; QUIT MENU is now < BACK.

### 5.4
- **Realistic chants:** the stands sing with a crowd of detuned voices through vowel formants, breath noise, echo and stadium reverb instead of beeps. Three chants (OLE OLE, long NAME! shouts, name-name-name) followed by thicker, reverbed clapping.

### 5.3
- Fan signs stay in the stands: banners/flags are clipped to the stands, the fan chant text moved from the pitch into the stands (hidden in top-down views), none shown in the goal-replay camera.

### 5.2
- **Aftertouch:** after a pass, shot, lob, corner or free kick, hold a direction while the ball is in flight: sideways bends it, back dips it, forward floats it. Option AFTERTOUCH.
- **Top-down surroundings:** crowd, floodlight corners, and ball boys, photographers, cameraman, dog and invader redrawn from above.
- **View settings:** TOP-DOWN ZOOM, TOP-DOWN LOOK-AHEAD, MAP SIZE, MAP CORNER, MAP OPACITY.
- The banana skin is now drawn on the pitch (it was missing in 4.10).
- Tactics board and Set Piece Designer already existed (TACTICS > DRAW FORMATION, main menu SET PIECE DESIGNER).

### 5.1
- **Two top-down views:** VIEW now offers ISOMETRIC, TOP-DOWN SIDEWAYS (as 5.0) and TOP-DOWN VERTICAL (Sensible Soccer style, goals top and bottom; your team always attacks up and the controls are rotated to match; online games fall back to sideways).
- **Passing map:** a transparent radar in the corner with all players, the ball, the camera window, the offside line and a dashed lane along your facing direction, to help long and through passes. PASSING MAP: OFF, TOP-DOWN VIEWS (default) or ALL VIEWS.

### 5.0
- **Top-down view:** KEYS AND OPTIONS > VIEW > TOP-DOWN gives an overhead Sensible Soccer style camera that scrolls in both directions, overhead player sprites (kit, boots, head, swinging arms and legs, keeper dives), boards along both touchlines and a larger ball. ISOMETRIC keeps the classic view. Controls and rules are identical.

### 4.10
- **Matchday extras:** photographers behind both goals (flashes on shots and goals), a TV cameraman tracking the ball along the touchline, sprinklers before each kick-off, low dazzling sun at dusk (one end washed out, keeper there slightly worse), flags and scarves waved after goals, silly fan banners.
- **Boots:** yellow, orange, white or mostly black, random per player.
- **Funny moments:** rare banana skin (likelier when wet), keeper fumbles and air-kicks, ball kicked out of the ground with a ball boy fetching a new one.
- **Blooper reel:** half-time and full-time menus replay own goals, missed sitters, gaffes, slips and lost balls.
- Options: MATCHDAY EXTRAS and FUNNY MOMENTS can be switched off.

### 4.9
Gameplay
- New skill moves on SKILL: OVERHEAD KICK (high ball in front of goal), RABONA (with the ball near the touchline, facing goal: a cross) and NUTMEG (defender straight ahead; it can be blocked).
- Shielding: hold PRESS while you have the ball. You move slower, and most tackles bounce off. The computer shields too when pressured.
- Scrambles: after a parry or a rebound off the woodwork, players near the ball move faster for a moment.
- Wall jump: when defending a free kick, SKILL jumps the wall. Time it against the run-up. The computer still jumps by itself when it defends.
- Second wind for tired players, and substitutes arrive with fresher legs.
Graphics
- Kits get muddy through the match (slides, falls and wet pitches); tired players and snow or ice nights show breath puffs.
- The back net ripples after a goal; scoreboard with score and clock, plus cycling ads (invented brands) on the boards (option STADIUM ADS AND CLOCK).
- Streamers join the confetti on trophy wins; soft floodlight glow at night and a vignette during replays (option FLOODLIGHT GLOW AND VIGNETTE).
- Full time: up to three pairs of players swap shirts and then the result screen appears; any key skips it. Refusals are random, much more common in derbies (option SHIRT SWAP AT FULL TIME).
Already in the game, so not rebuilt: penalty when advantage fails inside the box, stamina drain, confetti.
Not done: captain's role, mascot, birds.

### 4.8
- Corners: when you take one, SKILL (V / touch SKILL) cycles FREE AIM, NEAR POST, FAR POST, EDGE OF BOX and SHORT. A ring shows the target, teammates run the matching routine, weak kicks scatter more. Computer corners now swing in (inswing and outswing), and a short corner is followed by a cross.
- Computer offside trap: CPU back lines (PRESS HIGH teams, and sometimes balanced ones, more often on harder difficulties) step up together when an attacker is level with the line. A defender can be slow, and then the attacker is through. Commentary notes a trap that works or is beaten. Option CPU OFFSIDE TRAP.
- Goalkeeper communication: speech bubbles (MINE!, MARK UP!, STEP UP!, CLOSE HIM DOWN!), and defenders now mark attackers man-to-man at corners. Option KEEPER SHOUTS AND MARKING.
- Touch controls: a fourth page on the controls screen lets each on-screen button have one job with the ball and another without it (player 1 touch only).
- Pitch wear already existed (option PITCH WEAR), so nothing new there.
- Advantage rule already existed, so nothing new there.

### 4.7
- Goalkeeper styles: STOPPER (best shot-stopper, stays near his line), SWEEPER (rushes out to clear through balls, plays short), SAFE HANDS (holds more shots, distributes long) and FLAMBOYANT (far off his line, parries more, sometimes caught out). The style is chosen from the keeper's name, or set by hand in EDIT PLAYERS > KEEPER STYLE. Option KEEPER STYLES turns the whole thing off.
- Goal kicks are proper set pieces: the keeper takes his time, then rolls it short to a defender or hits it long depending on his style, the score of passing options and how many opponents are pressing. Commentary notices the choice.
- A keeper outside his own box cannot use his hands: he clears or passes with his feet, and a team can be punished when he is caught far off his line.
- Posts and crossbar: shots that hit the woodwork rebound into play with a clang, a message and commentary instead of passing through. New option POSTS AND CROSSBAR.
- Not yet changed: general ball physics (waiting for a concrete case: dribbling, crosses or bounces).

### 4.6
- Update check: an installed app (and any visit through the KEYS AND OPTIONS > CHECK FOR UPDATE item) fetches the server's sw.js, compares its version label with the running version and offers UPDATE (RELOAD) at the top of the main menu. This needs `APPV` in index.html and `CACHE` in sw.js to be bumped together on every release.
- Substitutes warming up on the touchline wear full long-sleeve, long-leg tracksuits in the club colours.
- Derbies: the computer tackles less and fouls less, and the referee hesitates over cards (a red may become a yellow, a yellow a stern word).
- Injuries are scarcer (roughly 60% fewer) and bring the medical staff onto the pitch; the injured player lies on the ground while they treat him.
- Time wasting starts at 65 minutes (60 in derbies) for computer teams that lead. New option FAKE CRAMPS (on by default): a leading computer team may have a player go down with cramp; sometimes the referee stops play for first aid (restart: free kick to the other side), sometimes the clock just runs, and now and then the player is booked.
- Cards are drawn beside the offender with his shirt number rather than over whoever is next to him, and a sent-off player walks off the pitch.
- Physics: bounces lose more speed and height, spin dies quickly on the ground, slow balls stop more naturally, air drag is a little stronger at speed. On a wet pitch tackles and slides last and travel further.

### 4.5
- Controls screen: a teletext-style page (KEYS AND OPTIONS > CONTROLS SCREEN, also in the pause menu) with a drawn keyboard for each player and a PlayStation-style pad. Select any key or button and give it one job when your player has the ball (attack) and a different job when he does not (defence), for example PASS in attack and PRESS in defence. Jobs: shoot, lob, pass, skill, through ball, press, time warp, offside trap / wall, or none.
- Keys: arrows or taps select (Enter then a key to pick one by pressing it), A and D change the attack and defence jobs (Shift goes back), C clears, R resets the page, Tab switches player 1 / player 2 / pad, Esc leaves. Unused keys can be given jobs too, and one job can sit on several keys.
- The job is fixed when you press, so holding a button while the ball leaves your feet does not change it halfway through a shot. Movement keys stay in PLAYER KEYS. Touch buttons are not context-sensitive.
- Plain key and pad settings from earlier versions keep working: the screen only adds exceptions on top of them.

### 4.4.1
- West Germany replaces Germany in the nations set (saved games are migrated).
- Substitutes can be renamed for every club and nation: in EDIT PLAYERS, scroll the PLAYER row past the five starters to SUB 1 to SUB 5 and use NAME.
- Commentary moves to the very bottom of the screen. The pause menu has COMMENTARY (off, text, text and voice) and COMMENTARY POSITION (bottom or above the hints), also under KEYS AND OPTIONS; F2 toggles commentary during play.

### 4.4
- Free play (Training): one player on an empty pitch with a keeper at each end. R (or the pause menu) puts a new ball on the centre spot; the pause menu adds or removes opponents and teammates. Goals and own goals are counted.
- Street football (main menu): 3-a-side on the park, walls all round (the ball bounces off them), no offside, fouls, VAR or injuries, and the first to 3, 5, 7 or 10 wins. One player, co-op against the CPU, or two players head to head.
- Tournament builder (main menu): 4 or 8 teams, straight knockout or groups then knockout, and extra time plus penalties or straight to penalties when level. You play your own matches (one player or co-op) and the computer simulates the rest, or it plays your matches too. The tournament is kept for the session only.
- Co-op in Campaign and Quick Challenges: the CO-OP PLAYER 2 option on each challenge screen puts a second human on your side. (TWIN PLAYER MATCHDAY already did this for friendlies.)
- Photo mode (pause menu): pan, zoom and save a screenshot with no HUD. Arrows or drag to pan, +/- or pinch or wheel to zoom, C to centre, Space or the KICK button to save, Esc or MENU to leave.
- Named referees: every match has a fictional referee with a personality (BY THE BOOK, THE SHERIFF, LET IT FLOW, HOMETOWN) shown in the programme, the commentary and the press conference.
- Touch and gamepad: a TRAP button on the touch pad (offside trap, or wall size at a free kick) and an OFFSIDE TRAP entry in the gamepad remap list (default LT / button 7).

### 4.3
- Captain: after conceding (when not leading) and in the half-time talk (when behind) the captain rallies the team: a little stamina and momentum for everyone, with commentary. If the captain is sent off the armband passes to a teammate.
- Touchline managers: a manager for each side paces the technical area, shouts instructions that match the team's style or game plan (PRESS HIGH!, COUNTER!, HOLD THE LINE!, SEE IT OUT!, ALL OUT!), celebrates goals and shouts HEADS UP! after a goal against. CPU managers' HEADS UP! briefly switches that team to pressing. Option TOUCHLINE MANAGERS.
- Season reel (main menu): your last 8 goals are saved automatically (option SAVE GOALS TO SEASON REEL) and can be replayed one by one or as a whole reel, with Enter/Space to skip and Esc to stop.
- Colour vision option: CLEAR KITS (blue and amber) or HIGH CONTRAST (white and yellow) recolours both teams, and adds a ring under team 1 players and a square under team 2 players so the sides can be told apart without colour.

### 4.2
- Skills: DRAG BACK (steer straight backwards while pressing SKILL with the ball) and ROULETTE (steer diagonally backwards) join the step-over, knock-on and volley.
- Club chants now show their words on screen (club name, "OLE OLE OLE OLE"), vary in pitch, and return after home goals and when the crowd is at full volume.
- Commentary memory: remembers wasted shots ("four shots and no goal", "at last!") and keeper form ("three saves already", "had made 4 saves before that one").
- Replays: new SCORER CAM angle after the close-up (option SCORER CAM IN REPLAYS).
- Club badges: import any image for each club in the KIT EDITOR; it is shrunk to a 24x24 pixel badge and shown beside the team names at the bottom of the screen.
- Stadium editor (KEYS AND OPTIONS): custom stand colours, advertising board colours and texts, pitch pattern (stripes, wide, checkerboard, plain) and stadium name.
- Player stats (main menu): matches, goals, assists, shots, ball wins and distance per player, saved between sessions.
- Online: the host can ADD A SPECTATOR from the pause menu; a friend chooses ONLINE MATCH, WATCH A MATCH and follows live, with no controls.

### 4.1
- Physics: air drag now grows a little with ball speed; rolling balls lose a fixed amount of speed so they settle sooner instead of creeping; bounces are livelier (less so on wet grass), kill some of the ball's curl, and the aim guide and offside predictor use the same numbers.
- Pre-match tunnel: the two mascot children are gone. The tunnel walk-out comes first, then the handshakes, then the coin toss.

### 4.0.1
- INSTALL AS AN APP now gives browser-specific help (desktop Firefox cannot install web apps; Chrome, Edge, Android and iOS can).

### 4.0 - Boss key, smarter CPU, campaign, installable app

- **Boss key**: press ` (backquote) or F8 to hide the game behind a plain work screen. The match pauses, sound and commentary stop and the tab title changes. Press the same key to return (Esc, double-click or double-tap also work). Touch: tap the top-left corner three times. In KEYS AND OPTIONS > BOSS KEY SETUP you can capture your own desktop (browser screen-share picker) or load any image as the boss screen; otherwise a neutral blank spreadsheet is shown.
- **Match engine 2.0**:
  - CLUB PERSONALITIES (option, on by default): each CPU club has a style (press, counter, park the bus) unless you set one by hand, and the CPU adapts when two goals up or down.
  - OFFSIDE TRAP: press G (player 2: Y) to push your defence up as a line; the CPU press-high clubs use it too.
  - WALL CONTROL: when defending a free kick press G to change the wall size.
  - QUICK FREE KICK: take it within about a second and the defence is caught out; counter-attacking CPU sides do it too.
- **Campaign**: ten chapters from the main menu, each a scripted match with story, objective and 1-3 stars. Winning a chapter unlocks the next. Progress is saved.
- **Install as an app**: manifest, service worker and icons added (manifest.webmanifest, sw.js, icon-192.png, icon-512.png). Host all five files together; then INSTALL AS AN APP in KEYS AND OPTIONS (or the browser's install icon) installs it and it works offline.
- **Panathinaikos banners**: home (and away) end banners now read "ΕΙΜΑΣΤΕ ΑΠΟ ΤΟ ΜΕΛΛΟΝ. ΠΟΥΛΑ ΚΑΙ ΦΥΓΕ".

### 3.9.1
- Tutorial fix: jockey (X) and press (N) now work in the defending lessons, and the tutorial attacker dribbles slowly towards your goal instead of shooting straight away.

### 3.9
- **Header duels**: when two players jump for the same ball, the better-timed jump wins. A JUMP cue appears over your player when a high ball is close (green = right moment).
- **Puddles** appear on the pitch in rain and storms. They slow the ball and players, with ripples as the ball runs through (option PUDDLES IN THE RAIN).
- **Match summary** screen (result screen, or SUMMARY + HEAT MAP in match stats): stat bars, possession heat maps for both teams and a key-moments timeline (goals, cards, penalties, half time).
- **Stick options**: TOUCH STICK DEAD ZONE, TOUCH DIAGONALS and PAD STICK DEAD ZONE.

### 3.8
- **Touch**: THRU (through ball) and PRESS buttons (option EXTRA TOUCH BUTTONS); the tutorial now covers them on touch too.
- **One-button mode**: tap KICK to pass, hold to shoot; KICK also switches player or tackles when defending. Touch shows only the stick and KICK.
- **Controls help** in the pause menu lists your current keys.
- **Stamina and card strip** under the score (stamina bars, yellow cards, red-card markers) and **control hints** at the start of a match (OFF / FADE OUT / ALWAYS).
- **Subtitle size and time** options for the commentary text.
- **Match intro**: FULL / SHORT (no tunnel, short walk-out) / SKIP.
- **Options**: SEARCH OPTIONS, PIN FAVOURITE OPTIONS (pinned options move to the top) and EXPORT / IMPORT SETTINGS codes to move your setup between devices.

### 3.7
- **Tutorial match**: 17 guided lessons with on-screen checklists (moving, dribbling, shooting, curl, chip and finesse, passing, through balls, one-two, lobs, skills, switching, jockey, tackling, pressing, pause menu, rules). ENTER or a tap on the instructions skips a lesson. Reach it from the main menu or the training menu.
- **Quick rematch**: REMATCH after a friendly, and PLAY AGAIN at the top of the main menu (remembered between sessions).
- **Sound mixer**: separate music, crowd, effects and commentary-voice levels.
- **Pause when switched away**: the match pauses when the tab loses focus or the phone locks (option PAUSE WHEN SWITCHED AWAY).

### 3.6
- **Through ball** (B, pad button 4): a pass into the space ahead of a runner, who sprints onto it.
- **One-two**: tap PASS twice quickly; the receiver returns it first time while you keep control and run into space.
- **Press** (N, pad right trigger): hold while the opponent has the ball to send your two nearest team-mates to close him down. Costs stamina. Player 2 uses U (through) and O (press); keys can be remapped.
- **Chip and finesse**: while charging a shot, press SKILL to cycle normal / CHIP / FINESSE (extra curl).
- **Parries and rebounds**: keepers now parry harder shots, sometimes straight back into the danger zone, instead of always catching or pushing wide.
- **Game plan** in the pause menu: AUTO / WASTE TIME / ALL OUT for each human team. The computer plays out late leads and goes all out when behind.

### 3.5
- **Greek commentary subtitles** now show in Greek letters (accents dropped, capitals) instead of Greeklish. New option GREEK TEXT (GREEKLISH / GREEK LETTERS, default Greek letters) next to COMMENTARY LANGUAGE. Long lines shrink to fit the screen.

### 3.4
- **Advantage**: the referee raises both arms while advantage runs; fouls inside the box can also be played on when the attacker keeps the ball with a shot on, and the penalty is given if the chance is lost.
- **Dusk sky**: on the Village Green stadium the sky fades from blue to orange sunset to night during a dusk match.
- **Bench reactions**: subs freeze after a goal conceded, stand still when a teammate is booked or sent off, and take short warm-up sprints along the touchline.

### 3.3
- **Player switching** option: nearest to ball, ball direction (anticipates where the ball is heading) or manual. Press PASS while defending to switch by hand in any mode.
- **Switch speed**: slow, normal or fast.
- **Input buffer** (off / short / long): a kick, pass or lob pressed just before the ball arrives still fires on first touch.
- **Gamepad buttons** remapping screen (kick, lob/jockey, pass/switch, skill, time warp) with two presets; time warp now works from the pad.

### 3.2
- **Audio**: booing is now a low, drawn-out falling "boooo" with a few stand whistles, clearly different from the brighter cheer.
- **Claps**: scattered applause after goals, at half time and at full time, and rhythmic clapping with the crowd chants.

### 3.1
- **Aim guide** for keyboard shooting (OFF / SHORT / LONG); automatically off on MASTER.
- **Curl power** option and a visible **curl trail** behind the ball.
- **Jockey / marking**: hold X while the opponent has the ball to shadow him towards your goal.
- **Fog** (hard to see the ball) and **moths** around the floodlights at night.
- **Offside**: linesman raises the flag and the offside line is shown while play is frozen.
- **Commentary memory**: second/third goals, repeat fouler, already-booked players.
- **Shot map** in practice mode (pause menu): goals, saves and misses plotted on the pitch.
- **Tactics board**: draw a custom formation for each team by dragging players (CUSTOM (BOARD) formation, saved).
- **League form**: last-five-results form shown in fixture preview and slightly affecting team strength.

### 3.0
- New MASTER computer skill level (above HIGH): faster and sharper opponents and better goalkeepers. On MASTER the shooting assist is switched off and cannot be turned on.

### 2.9
- SHOOTING ASSIST is now adjustable: off, standard (as before), strong, very strong and lock-on. Stronger levels work from further out, with lower shot power and with wider aim, and pull the shot closer to the goal mouth while avoiding the keeper.

### 2.8
- STAMINA DRAIN option (low, normal, high). Match length is counted in game time, so the gameplay speed setting does not change stamina balance.
- Skill moves now wrong-foot nearby defenders: after a step-over or knock-on they are left slowed for about a second.
- Goalkeepers sweep: a computer keeper rushes out of the box to a loose ball he can reach before the attackers.
- Three new training drills in QUICK CHALLENGES with medals: Finishing Practice, Crossing Drill and Possession Rondo.
- Stewards: when a dog, fan or other animal runs on, two stewards in hi-vis jackets come on, play is paused and they catch or escort it off.
- Half-time screen (option HALF-TIME SCREEN): first-half goals and saves are replayed on a stadium screen at the break, and can be replayed from the half-time menu.
- Controls: keyboard presets (arrows, WASD, IJKL) in the player key menus, and a TOUCH LAYOUT option with right-hand, left-hand, D-pad and big-button layouts.

### 2.7
- Normal gameplay speed (0%) is now 20% slower than before (64% of the original game speed); -50% and +50% scale from there.

### 2.6
- GAMEPLAY SPEED is now relative: 0% is the normal speed (the old -20%), -50% is the slow Match Day II pace and +50% is faster. Saved speed settings reset to 0%.

### 2.5
- GAMEPLAY SPEED: -20% is now labelled NORMAL speed (the default); -50% is labelled MATCH DAY II.

### 2.4
- New GAMEPLAY SPEED option (-50% to +50%, in Options and Keys and Options). The default is -20% (20% slower than before); the CLASSIC MATCH DAY II rules preset sets -50%.
- New 2.5 minute halves, now the default match length (existing saved settings are reset once to the new defaults).
- Handshake scene: the teams now step in together and shake hands at the same time.
- Fix: saved MY DESIGN corner and free-kick choices are no longer reset when the game reloads.

### 2.3
- Handshakes: each pair now steps together, stops and shakes hands with arms joined, instead of marching on the spot.
- Set Piece Designer: MY DESIGN is now a choice in KEYS AND OPTIONS for corners and free kicks (and is selected automatically when you save a design), so your routine is actually used in matches.

### 2.2
- The tunnel, handshake and coin toss scenes now use the same player and referee sprites as the pitch, in the real kits.

### 2.1
- Save and load: three save slots for matches in progress (pause menu: SAVE GAME / LOAD GAME; main menu: LOAD GAME). Saves keep the score, clock, line-ups, cards, sent-off players, stats, subs and weather.
- Goal flares now come only from the scoring team's fans (home fans or the away end), not both.
- The ball is 25% smaller and scales with the PLAYER SIZE option.

### 2.0
- Away end: visiting fans fill about a third of the home crowd's space at the left or right end of the stand, behind a fence, in the away kit colours, with their own banner and flares (smoke in the away colours) at derbies and when the away team scores.
- Quick Challenges: five scenarios (Three Men Standing, Corner Specialist, Goal Rush, Clean Sheet, Comeback Kid) with bronze, silver and gold medals.
- Set Piece Designer (option SET PIECE DESIGNER): draw runner positions and the target for your corners and free kicks; your computer-controlled players use them.
- Rain delays (option RAIN DELAYS): in storms the referee may stop play for a pitch inspection; groundstaff repair the worn pitch and the lost time is added on.
- Broadcast mode (option BROADCAST MODE): TV graphics bar with possession and shots, player lower thirds, and a tighter ball-following camera.
- Pre-match tunnel (option PRE-MATCH TUNNEL): mascots, handshakes and a coin toss that decides kick-off and ends.
- Fix: players sent off now appear correctly in replays and highlights.

### 1.9
- Penalty run-up styles: press V on a penalty to choose Normal, Power, Stutter or Panenka. Keepers can read power shots, bite on a stutter, or stay put and catch a panenka.
- Free-kick wall: defenders line up a wall near the goal, may jump, and block low shots. The computer sometimes curls or lofts the ball over it, and a decoy runner sometimes runs over the ball.
- Season stories: a new teletext page, 108, with live storylines such as the title race, unbeaten runs, relegation battle, best attack and defence, and the top scorer.
- Screen filter option: Off, CRT scanlines, Green Screen (Amstrad monitor) or Glow.
- Highlights reel: after full time, play back every goal and the best saves from the match. Press Enter for the next clip or Esc to stop, and F10 saves the reel as a video where the browser supports it.

### 1.8
- Player Size option: Small, Normal (the new default), Large (the old size) and Extra Large.
- Floodlights: night matches show floodlight towers, and now and then the lights fail and play is suspended until they come back (Floodlight Failures option).
- Ball boys: a ball boy runs in with the ball for throw-ins and corners (Ball Boys option).
- Time wasting: a team protecting a late lead takes its time over set pieces, the ball boy slows down, the clock runs into stoppage time and the referee can book repeat offenders (Time Wasting option).
- Half-time team talk: pick Calm, Fire Up or Shout for your team on the half-time screen. Each changes stamina, pace and discipline in the second half. The computer picks one for its own team.
- Flare smoke is thinner and clears much faster in rain, wind and storms, and wind blows it sideways.
- Press conference: after a match you played, open the Press Conference screen for a headline and quotes that depend on the score, the cards and the referee rating.

### 1.7
- Camera option (Wide, Medium, Close). Wide is the default; Close is about 1.5 times closer.
- Players are drawn 30% smaller, to sit better against the pitch and goals.
- The loading screen now has a grey background so the 3-inch disc is easy to see.
- Stoppage time: each half runs over by a few minutes, based on the time lost to goals, cards, injuries and VAR checks. The fourth official's board shows the minutes and the clock reads 45+1. Weak referees can play more or less than the board says.
- Match controversies: a log of missed offsides, phantom fouls, harsh cards, VAR corrections and board errors, with a referee rating out of 10. Open it from Match Stats.
- Greek commentary: TAKIS and MAKIS can speak Greek (Commentary Language option). The ticker is written in Latin letters and the voice uses your browser's Greek voice if it has one.
- Pitch wear: the penalty areas and busy zones get cut up as the match goes on, which slows the players and the ball, and more so in rain. Can be switched off.
- Goal clips: the goal replay is recorded and can be saved as a video with F10 (or from the pause menu). Needs a recent desktop browser.
- The VAR panel is now small and sits in the top-right corner so it no longer covers the action.
- Flare smoke now takes the colour of the team that scored.
- Menus are more compact: smaller text and panels.

### 1.6
- VAR now also reviews penalties and red cards. It can overturn a wrong penalty (no foul, free kick) or downgrade a wrong red card.
- Referees make mistakes both ways: weak referees can award fouls and offsides that were not there and book too harshly, as well as miss real ones. How often depends on Referee Quality.
- Referee Favours: a seven-step slider (in Options and in the pause menu, during the match) that tilts the referee towards one team. It is set to Fair in the middle by default. A favoured team gets more missed fouls and offsides and fewer cards, while the other side gets more phantom fouls and harsh cards.
- Weather Changes now works with any weather setting, not only Random: a dry match can turn to rain or a storm part-way through.

### 1.5
- Referee quality (Perfect, Good, Average, Poor or Random, in Options): weaker referees miss offsides and fouls, so play simply carries on.
- VAR: some goals are reviewed with a replay. When the referee missed an offside or a foul in the build-up, VAR often (not always) corrects it and the goal is ruled out. Can be switched off.
- Fan banners unfurl in the stands at derby kickoffs, together with the flares (option renamed Flares and Banners).
- A Mexican wave starts now and then when the match is dull or the home side is well ahead.
- Menu music: "When the Saints Go Marching In" as a chiptune on the menus, with an on/off option.
- Match programme at kickoff with line-ups, bench, stadium, attendance, referee, rivalry and head-to-head record (any key skips it; can be switched off).

### 1.4
- National anthems: in the nations set, each team's anthem plays at the walk-out (home, then away). Press any key to skip. The tunes are short synthesised phrases (about 10 to 13 seconds each) taken from MIDI files for Holland, CCCP, France, Spain, Germany, Italy and Yugoslavia. England's tune is written from memory.
- The "DEMO - PRESS ANY KEY" banner moved off the score row, and the spectate speed label moved with it.
- Stamina percentage now sits beside its bar, and the player name moved up beside the warp label.
- Louder crowd: stronger cheers and boos, plus a continuous crowd murmur that swells with the home crowd's mood.
- The boot screen now types `run "kickoff6128.bin"` and loads KICKOFF6128.BIN.
- Computer-controlled players make fewer and shorter slide tackles.
- Flares and smoke now use the home team's colour, and the smoke is much heavier.
- Derbies: flares at kickoff and on goals, a louder crowd, and a new BOOING option (OFF, DERBIES or ALWAYS) so the home crowd boos the visitors when they attack.
- The loading screen border no longer flashes colours.

### 1.3
- Nations set: Holland, CCCP, England, France, Spain, Germany, Italy and Yugoslavia with 1980s stars, shirt numbers, kits, stadiums and chants. Switch sets in Teams options; World Cup and Nations League replace the cup and league.
- Panini-style sticker album (80 stickers) with earned cards.
- Commentator booth: TAKIS and MAKIS with catchphrases and optional speech.
- Goal-line camera replay and man of the match.

### 1.2
- Opening Amstrad-style boot screen, walk-out with a 3-inch disc kickoff, pyro flares and smoke.
- Teletext pages for results, tables and scorers.
- Dogs and fans on the pitch (invaders), plus a trophy ceremony.
- Spectate speed, screenshots (F9) and a demo mode that starts after a while on the main menu.

### 1.1
- Injuries, automatic substitutes and the two-player forfeit rule, corrected Greek squads and shirt numbers.

## Controls

| Key | Action |
| --- | --- |
| Arrows or WASD | Move |
| Space | Hold to charge, release to kick; jump for a header; slide tackle without the ball |
| X | Lob (tap twice for a lofted cross, three times for a low cross) |
| C | Pass to the teammate you face |
| V | Skill move |
| T | Time warp (rewind 2.5 seconds, once per half) |
| P or H | Pause menu |
| F | Spectate speed (watch mode) |
| F9 | Save a screenshot |
| F10 | Save the last goal clip |
| M | Sound |

On phones and tablets the game has a floating joystick, swipe to shoot and on-screen buttons. Full instructions are in the **Instructions** menu in the game.

## Run it locally

Open `index.html` in any modern browser. That is all.

## Credits

Created by M. Sofopoulos (msofopoulos@gmail.com), built with Claude.

Match Day II is a trademark of its owners. This project is a fan tribute made for fun.
