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
