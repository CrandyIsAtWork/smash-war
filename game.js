const STATES = [
  {abbr:'AL',name:'Alabama'},{abbr:'AK',name:'Alaska'},{abbr:'AZ',name:'Arizona'},
  {abbr:'AR',name:'Arkansas'},{abbr:'CA',name:'California'},{abbr:'CO',name:'Colorado'},
  {abbr:'CT',name:'Connecticut'},{abbr:'DE',name:'Delaware'},{abbr:'FL',name:'Florida'},
  {abbr:'GA',name:'Georgia'},{abbr:'HI',name:'Hawaii'},{abbr:'ID',name:'Idaho'},
  {abbr:'IL',name:'Illinois'},{abbr:'IN',name:'Indiana'},{abbr:'IA',name:'Iowa'},
  {abbr:'KS',name:'Kansas'},{abbr:'KY',name:'Kentucky'},{abbr:'LA',name:'Louisiana'},
  {abbr:'ME',name:'Maine'},{abbr:'MD',name:'Maryland'},{abbr:'MA',name:'Massachusetts'},
  {abbr:'MI',name:'Michigan'},{abbr:'MN',name:'Minnesota'},{abbr:'MS',name:'Mississippi'},
  {abbr:'MO',name:'Missouri'},{abbr:'MT',name:'Montana'},{abbr:'NE',name:'Nebraska'},
  {abbr:'NV',name:'Nevada'},{abbr:'NH',name:'New Hampshire'},{abbr:'NJ',name:'New Jersey'},
  {abbr:'NM',name:'New Mexico'},{abbr:'NY',name:'New York'},{abbr:'NC',name:'North Carolina'},
  {abbr:'ND',name:'North Dakota'},{abbr:'OH',name:'Ohio'},{abbr:'OK',name:'Oklahoma'},
  {abbr:'OR',name:'Oregon'},{abbr:'PA',name:'Pennsylvania'},{abbr:'RI',name:'Rhode Island'},
  {abbr:'SC',name:'South Carolina'},{abbr:'SD',name:'South Dakota'},{abbr:'TN',name:'Tennessee'},
  {abbr:'TX',name:'Texas'},{abbr:'UT',name:'Utah'},{abbr:'VT',name:'Vermont'},
  {abbr:'VA',name:'Virginia'},{abbr:'WA',name:'Washington'},{abbr:'WV',name:'West Virginia'},
  {abbr:'WI',name:'Wisconsin'},{abbr:'WY',name:'Wyoming'}
];
const ADJ = {AL:['FL','GA','MS','TN'],AK:['OR','WA'],AZ:['CA','CO','NV','NM','UT'],AR:['LA','MS','MO','OK','TN','TX'],CA:['AZ','NV','OR','HI'],CO:['AZ','KS','NE','NM','OK','UT','WY'],CT:['MA','NY','RI'],DE:['MD','NJ','PA'],FL:['AL','GA'],GA:['AL','FL','NC','SC','TN'],HI:['CA','OR','WA'],ID:['MT','NV','OR','UT','WA','WY'],IL:['IN','IA','KY','MI','MO','WI'],IN:['IL','KY','MI','OH'],IA:['IL','MN','MO','NE','SD','WI'],KS:['CO','MO','NE','OK'],KY:['IL','IN','MO','OH','TN','VA','WV'],LA:['AR','MS','TX'],ME:['NH'],MD:['DE','PA','VA','WV'],MA:['CT','NH','NY','RI','VT'],MI:['IL','IN','OH','WI'],MN:['IA','ND','SD','WI'],MS:['AL','AR','LA','TN'],MO:['AR','IL','IA','KS','KY','NE','OK','TN'],MT:['ID','ND','SD','WY'],NE:['CO','IA','KS','MO','SD','WY'],NV:['AZ','CA','ID','OR','UT'],NH:['ME','MA','VT'],NJ:['DE','NY','PA'],NM:['AZ','CO','OK','TX','UT'],NY:['CT','MA','NJ','PA','VT'],NC:['GA','SC','TN','VA'],ND:['MN','MT','SD'],OH:['IN','KY','MI','PA','WV'],OK:['AR','CO','KS','MO','NM','TX'],OR:['CA','ID','NV','WA','HI','AK'],PA:['DE','MD','NJ','NY','OH','WV'],RI:['CT','MA'],SC:['GA','NC'],SD:['IA','MN','MT','NE','ND','WY'],TN:['AL','AR','GA','KY','MS','MO','NC','VA'],TX:['AR','LA','NM','OK'],UT:['AZ','CO','ID','NV','NM','WY'],VT:['MA','NH','NY'],VA:['KY','MD','NC','TN','WV'],WA:['ID','OR','HI','AK'],WV:['KY','MD','OH','PA','VA'],WI:['IL','IA','MI','MN'],WY:['CO','ID','MT','NE','SD','UT']};
['HI','AK'].forEach(s => (ADJ[s]||[]).forEach(n => { if(!ADJ[n]) ADJ[n]=[]; if(!ADJ[n].includes(s)) ADJ[n].push(s); }));



const PORTRAIT = {
  "Mario":"mario","Donkey Kong":"donkey_kong","Link":"link","Samus":"samus","Dark Samus":"dark_samus",
  "Yoshi":"yoshi","Kirby":"kirby","Fox":"fox","Pikachu":"pikachu","Luigi":"luigi","Ness":"ness",
  "Captain Falcon":"captain_falcon","Jigglypuff":"jigglypuff","Peach":"peach","Daisy":"daisy","Bowser":"bowser",
  "Ice Climbers":"ice_climbers","Sheik":"sheik","Zelda":"zelda","Dr. Mario":"dr_mario","Pichu":"pichu",
  "Falco":"falco","Marth":"marth","Lucina":"lucina","Young Link":"young_link","Ganondorf":"ganondorf",
  "Mewtwo":"mewtwo","Roy":"roy","Chrom":"chrom","Mr. Game & Watch":"mr_game_and_watch","Meta Knight":"meta_knight",
  "Pit":"pit","Dark Pit":"dark_pit","Zero Suit Samus":"zero_suit_samus","Wario":"wario","Snake":"snake",
  "Ike":"ike","Pokemon Trainer":"pokemon_trainer","Diddy Kong":"diddy_kong","Lucas":"lucas","Sonic":"sonic",
  "King Dedede":"king_dedede","Olimar":"olimar","Lucario":"lucario","R.O.B.":"rob","Toon Link":"toon_link",
  "Wolf":"wolf","Villager":"villager","Mega Man":"mega_man","Wii Fit Trainer":"wii_fit_trainer",
  "Rosalina & Luma":"rosalina_and_luma","Little Mac":"little_mac","Greninja":"greninja","Palutena":"palutena",
  "Pac-Man":"pac_man","Robin":"robin","Shulk":"shulk","Bowser Jr.":"bowser_jr","Duck Hunt":"duck_hunt",
  "Ryu":"ryu","Ken":"ken","Cloud":"cloud","Corrin":"corrin","Bayonetta":"bayonetta","Inkling":"inkling",
  "Ridley":"ridley","Simon":"simon","Richter":"richter","King K. Rool":"king_k_rool","Incineroar":"incineroar",
  "Piranha Plant":"piranha_plant","Joker":"joker","Hero":"hero","Banjo & Kazooie":"banjo_and_kazooie",
  "Terry":"terry","Byleth":"byleth","Steve":"steve","Sephiroth":"sephiroth","Pyra & Mythra":"pyra_mythra",
  "Kazuya":"kazuya","Isabelle":"isabelle","Min Min":"minmin","Sora":"sora","Dark Samus":"dark_samus"
};

const CIRCUIT_GRID = [
  ['BF','FD','SV','PS'],
  ['LC','TC','YS','DL'],
  ['KS','HW','SD','NC'],
  ['MH','SP','MC','KH']
];
const CIRCUIT_NAMES = {
  BF:'Battlefield', FD:'Final Destination', SV:'Smashville', PS:'Pokemon Stadium',
  LC:'Lylat Cruise', TC:'Town & City', YS:"Yoshi's Story", DL:'Dream Land',
  KS:'Kalos Pokemon League', HW:'Hollow Bastion', SD:'Small Battlefield', NC:'Northern Cave',
  MH:'Mementos', SP:'Spring Stadium', MC:'Minecraft World', KH:'KOF Stadium'
};
const CIRCUIT = CIRCUIT_GRID.flat().map(abbr => ({abbr, name: CIRCUIT_NAMES[abbr]}));
const CIRCUIT_ADJ = (() => {
  const adj = {};
  CIRCUIT.forEach(s => adj[s.abbr] = []);
  for(let r=0;r<CIRCUIT_GRID.length;r++){
    for(let c=0;c<CIRCUIT_GRID[r].length;c++){
      const a = CIRCUIT_GRID[r][c];
      const dirs = [[r-1,c],[r+1,c],[r,c-1],[r,c+1]];
      dirs.forEach(([rr,cc]) => {
        if(rr<0||cc<0||rr>=CIRCUIT_GRID.length||cc>=CIRCUIT_GRID[rr].length) return;
        const b = CIRCUIT_GRID[rr][cc];
        if(!adj[a].includes(b)) adj[a].push(b);
      });
    }
  }
  return adj;
})();
function activePack(){ return (typeof MAP_PACKS!=='undefined' && MAP_PACKS[currentMapId]) ? MAP_PACKS[currentMapId] : {type:'usa'}; }
function activeTerritories(){
  const p = activePack();
  if(p.type==='circuit') return CIRCUIT;
  if(p.terr) return p.terr;
  return STATES;
}
function activeAdj(){
  const p = activePack();
  if(p.type==='circuit') return CIRCUIT_ADJ;
  if(currentMapId==='na' && typeof naAdj==='function') return naAdj();
  if(p.adj) return p.adj;
  return ADJ;
}

function portraitUrl(f){ const k = PORTRAIT[f]; return k ? 'portraits/'+k+'.png' : null; }

const ICON = {
  "Mario":"mario.png","Donkey Kong":"donkey_kong.png","Link":"link.png","Samus":"samus.png","Dark Samus":"dark_samus.png",
  "Yoshi":"yoshi.png","Kirby":"kirby.png","Fox":"fox.png","Pikachu":"pikachu.png","Luigi":"luigi.png","Ness":"ness.png",
  "Captain Falcon":"captain_falcon.png","Jigglypuff":"jigglypuff.png","Peach":"peach.png","Daisy":"daisy.png","Bowser":"bowser.png",
  "Ice Climbers":"ice_climbers.png","Sheik":"sheik.png","Zelda":"zelda.png","Dr. Mario":"dr_mario.png","Pichu":"pichu.png",
  "Falco":"falco.png","Marth":"marth.png","Lucina":"lucina.png","Young Link":"young_link.png","Ganondorf":"ganondorf.png",
  "Mewtwo":"mewtwo.png","Roy":"roy.png","Chrom":"chrom.png","Mr. Game & Watch":"mr_game_and_watch.png","Meta Knight":"meta_knight.png",
  "Pit":"pit.png","Dark Pit":"dark_pit.png","Zero Suit Samus":"zero_suit_samus.png","Wario":"wario.png","Snake":"snake.png",
  "Ike":"ike.png","Pokemon Trainer":"pokemon_trainer.png","Diddy Kong":"diddy_kong.png","Lucas":"lucas.png","Sonic":"sonic.png",
  "King Dedede":"king_dedede.png","Olimar":"olimar.png","Lucario":"lucario.png","R.O.B.":"rob.png","Toon Link":"toon_link.png",
  "Wolf":"wolf.png","Villager":"villager.png","Mega Man":"mega_man.png","Wii Fit Trainer":"wii_fit_trainer.png",
  "Rosalina & Luma":"rosalina_and_luma.png","Little Mac":"little_mac.png","Greninja":"greninja.png","Palutena":"palutena.png",
  "Pac-Man":"pac_man.png","Robin":"robin.png","Shulk":"shulk.png","Bowser Jr.":"bowser_jr.png","Duck Hunt":"duck_hunt.png",
  "Ryu":"ryu.png","Ken":"ken.png","Cloud":"cloud.png","Corrin":"corrin.png","Bayonetta":"bayonetta.png","Inkling":"inkling.png",
  "Ridley":"ridley.png","Simon":"simon.png","Richter":"richter.png","King K. Rool":"king_k_rool.png","Isabelle":"isabelle.png",
  "Incineroar":"gaogaen.png","Piranha Plant":"packun_flower.png","Joker":"joker.png","Hero":"dq_hero.png",
  "Banjo & Kazooie":"banjo_and_kazooie.png","Terry":"Terry.png","Byleth":"byleth.png","Min Min":"minmin.png",
  "Steve":"steve.png","Sephiroth":"sephiroth.png","Pyra & Mythra":"homura.png.webp","Kazuya":"kazuya.png","Sora":"sora.png"
};
function iconUrl(f){ return ICON[f] ? 'icons/'+ICON[f] : null; }

const FIGHTERS = ["Mario","Donkey Kong","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pikachu","Luigi","Ness","Captain Falcon","Jigglypuff","Peach","Daisy","Bowser","Ice Climbers","Sheik","Zelda","Dr. Mario","Pichu","Falco","Marth","Lucina","Young Link","Ganondorf","Mewtwo","Roy","Chrom","Mr. Game & Watch","Meta Knight","Pit","Dark Pit","Zero Suit Samus","Wario","Snake","Ike","Pokemon Trainer","Diddy Kong","Lucas","Sonic","King Dedede","Olimar","Lucario","R.O.B.","Toon Link","Wolf","Villager","Mega Man","Wii Fit Trainer","Rosalina & Luma","Little Mac","Greninja","Palutena","Pac-Man","Robin","Shulk","Bowser Jr.","Duck Hunt","Ryu","Ken","Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon","Richter","King K. Rool","Isabelle","Incineroar","Piranha Plant","Joker","Hero","Banjo & Kazooie","Terry","Byleth","Min Min","Steve","Sephiroth","Pyra & Mythra","Kazuya","Sora"];
const WHEEL = [
  {type:'advantage',title:'Damage Handicap on Opponent',desc:'Opponent starts at 50%.'},
  {type:'advantage',title:'Giant Form',desc:'You play as Giant.'},
  {type:'advantage',title:'Metal Form',desc:'You play as Metal.'},
  {type:'advantage',title:'Stage Choice',desc:'You choose the stage.'},
  {type:'advantage',title:'Wacky Items ON',desc:'Items High + wildest items.'},
  
  {type:'advantage',title:'Air Strike Token',desc:'Gain +1 Air Strike token.'},
  {type:'advantage',title:'Challenge Anyone',desc:'Ignore adjacency for your next attack this turn.'},
  {type:'punishment',title:'Self Damage Handicap',desc:'You start at 50%.'},
  {type:'punishment',title:'Tiny Mode',desc:'You must play Tiny.'},
  {type:'punishment',title:'Sudden Death Start',desc:'Both start at 300%.'},
  {type:'punishment',title:'Annoying Items on You',desc:'Annoying items forced on you.'},
  {type:'punishment',title:'Opponent Chooses Stage + Rules',desc:'Opponent picks stage and rules.'},
  
  {type:'punishment',title:'Random Character',desc:'You must pick a completely random fighter for this match.'}
];


const COLORS = ['#e94560','#0f3460','#00c853','#ff9800','#9c27b0','#2196f3','#ff5722','#4caf50','#607d8b','#795548','#009688','#cddc39','#ff4081','#7c4dff','#00bcd4','#8bc34a','#ffc107','#e91e63','#3f51b5','#00695c'];

let diceEnabled=true;
let weakenEnabled=true;
let enabledMemes={};
let currentMapId='usa';
let historyStack=[], futureStack=[];

let players=[], clumps=[], nextClumpId=1, fighters={}, currentPlayerIdx=0;
let selectedFriendly=null, selectedEnemy=null, selectedEnemy2=null, matchModifier=null, airstrikeActive=false, gameLog=[];
let twoResult = {d1:null, d2:null};
let draftOrder=[], draftIdx=0, availableStates=[], availableFighters=[];

function log(msg){ gameLog.unshift(msg); if(gameLog.length>50) gameLog.pop(); const el=document.getElementById('game-log'); if(el) el.innerHTML=gameLog.map(m=>`<div>${m}</div>`).join(''); }
function getPlayer(id){ return players.find(p=>p.id===id); }
function getClumpsOf(pid){ return clumps.filter(c=>c.ownerId===pid); }
function getClumpByState(abbr){ return clumps.find(c=>c.states.includes(abbr)); }
function areClumpsAdjacent(c1,c2){ const A=activeAdj(); for(const s of c1.states) for(const n of (A[s]||[])) if(c2.states.includes(n)) return true; return false; }
function showScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); }

document.getElementById('num-players').onchange = buildNameInputs;
function buildNameInputs(){
  const n = Math.min(50, Math.max(1, parseInt(document.getElementById('num-players').value)||2));
  document.getElementById('num-players').value = n;
  const box = document.getElementById('name-inputs');
  box.innerHTML = '';
  const show = Math.min(n, 8);
  for(let i=0;i<show;i++){
    const d = document.createElement('div');
    d.style.marginBottom = '.45rem';
    const col = COLORS[i % COLORS.length];
    d.innerHTML = `P${i+1}: <input id="pname-${i}" value="Player ${i+1}" style="width:100px"> 
      <input type="color" id="pcolor-${i}" value="${col}" title="Choose color" style="width:36px;height:28px;padding:0;border:none;vertical-align:middle">
      <label><input type="checkbox" id="pcpu-${i}"> CPU</label>`;
    box.appendChild(d);
  }
  if(n>8) box.innerHTML += `<p style="color:var(--muted);font-size:.78rem">+${n-8} more will be auto-named with default colors.</p>`;
}
buildNameInputs();

document.getElementById('btn-start-draft').onclick = () => {
  const diceChk = document.getElementById('chk-dice');
  diceEnabled = diceChk ? diceChk.checked : true;
  const weakChk = document.getElementById('chk-weaken');
  weakenEnabled = weakChk ? weakChk.checked : true;
  const mapEl = document.getElementById('sel-map');
  currentMapId = mapEl ? mapEl.value : 'usa';
  document.querySelectorAll('#meme-toggles input[type=checkbox]').forEach(ch => {
    enabledMemes[ch.dataset.id] = ch.checked;
  });

  const n = parseInt(document.getElementById('num-players').value)||2;
  players = [];
  for(let i=0;i<n;i++){
    const nameEl = document.getElementById(`pname-${i}`);
    const name = nameEl ? nameEl.value : `Player ${i+1}`;
    const cpuEl = document.getElementById(`pcpu-${i}`);
    const isCPU = n===1 ? false : (cpuEl ? cpuEl.checked : false);
    const colorEl = document.getElementById(`pcolor-${i}`);
    const color = colorEl ? colorEl.value : COLORS[i%COLORS.length];
    players.push({id:i, name, isCPU, color, airstrikeTokens:1, leaderChanged:false});
  }
  const terr = activeTerritories();
  if(n===1){
    const extra = Math.max(1, terr.length-1);
    for(let i=1;i<extra;i++) players.push({id:i, name:`CPU ${i}`, isCPU:true, color:COLORS[i%COLORS.length], airstrikeTokens:0, leaderChanged:false});
  }

  // Randomly deal every territory as its own clump
  const bag = terr.map(s=>s.abbr);
  for(let i=bag.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [bag[i],bag[j]]=[bag[j],bag[i]]; }
  draftOrder = [];
  const ids = players.map(p=>p.id);
  let fwd = true;
  while(draftOrder.length < bag.length){
    if(fwd) for(const id of ids) draftOrder.push(id);
    else for(let i=ids.length-1;i>=0;i--) draftOrder.push(ids[i]);
    fwd = !fwd;
  }
  draftOrder = draftOrder.slice(0, bag.length);
  clumps = []; nextClumpId = 1; fighters = {};
  bag.forEach((abbr,i) => {
    const pid = draftOrder[i];
    clumps.push({id:nextClumpId++, ownerId:pid, states:[abbr], leaderChanged:false, weakened:false});
    fighters[abbr] = null;
  });

  availableFighters = [...FIGHTERS];
  for(let i=availableFighters.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [availableFighters[i],availableFighters[j]]=[availableFighters[j],availableFighters[i]]; }
  draftIdx = 0;
  historyStack = []; futureStack = [];
  showScreen('screen-draft');
  renderDraft();
};

function renderDraft(){
  const clump = clumps[draftIdx];
  const p = clump ? getPlayer(clump.ownerId) : null;
  const terrName = clump ? ((activeTerritories().find(t=>t.abbr===clump.states[0])||{}).name || clump.states[0]) : '';
  document.getElementById('draft-banner').textContent = p ? `${p.name} drafts a fighter for ${terrName}` : 'Draft complete!';
  const grid = document.getElementById('draft-grid');
  grid.innerHTML = '';
  availableFighters.forEach(f => {
    const d = document.createElement('div');
    d.className = 'draft-card';
    const pic = portraitUrl(f) || iconUrl(f);
    d.innerHTML = `${pic?`<img src="${pic}" alt="">`:''}<div>${f}</div>`;
    d.onclick = () => pickFighter(f);
    grid.appendChild(d);
  });
  document.getElementById('btn-finish-draft').disabled = clumps.some(c => !fighters[c.states[0]]);
  if(p && p.isCPU && availableFighters.length && clump) setTimeout(()=> pickFighter(availableFighters[0]), 200);
}

function pickFighter(name){
  if(!availableFighters.includes(name)) return;
  const clump = clumps[draftIdx];
  if(!clump) return;
  fighters[clump.states[0]] = name;
  availableFighters = availableFighters.filter(f => f !== name);
  draftIdx++;
  if(draftIdx >= clumps.length || !availableFighters.length){
    document.getElementById('btn-finish-draft').disabled = false;
    document.getElementById('draft-banner').textContent = 'Draft complete!';
    // leftover states without fighters get random remaining
    clumps.forEach(c => {
      if(!fighters[c.states[0]] && availableFighters.length){
        fighters[c.states[0]] = availableFighters.shift();
      }
    });
  } else renderDraft();
}

document.getElementById('btn-finish-draft').onclick = () => {
  currentPlayerIdx = 0; selectedFriendly=null; selectedEnemy=null; selectedEnemy2=null; matchModifier=null; airstrikeActive=false; gameLog=[];
  showScreen('screen-game');
  setupBoard();

  // SVG is already inlined – just set up listeners and sizing
  const svg = document.querySelector('#map-container svg');
  if(svg){
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.style.width = '100%';
    svg.style.height = 'auto';
  }
  STATES.forEach(s=>{
    const path = document.querySelector(`#map-container #${s.abbr}`);
    if(!path) return;
    path.addEventListener('click', ()=> onStateClick(s.abbr));
    path.addEventListener('mouseenter', e => {
      const tip = document.getElementById('tooltip');
      if(!tip) return;
      const c = getClumpByState(s.abbr);
      const f = fighters[s.abbr];
      const ic = portraitUrl(f) || iconUrl(f);
      const tipIcon = document.getElementById('tip-icon');
      if(tipIcon){
        tipIcon.src = ic || '';
        tipIcon.style.display = ic ? 'block' : 'none';
      }
      const tipTitle = document.getElementById('tip-title');
      if(tipTitle) tipTitle.textContent = s.name + ' (' + s.abbr + ')';
      const owner = c ? getPlayer(c.ownerId) : null;
      const tipSub = document.getElementById('tip-sub');
      if(tipSub) tipSub.textContent = (f||'') + (owner ? ' • ' + owner.name : '');
      tip.style.display = 'block';
    });
    path.addEventListener('mousemove', e => {
      const tip = document.getElementById('tooltip');
      if(tip){ tip.style.left = (e.pageX+12)+'px'; tip.style.top = (e.pageY+12)+'px'; }
    });
    path.addEventListener('mouseleave', () => {
      const tip = document.getElementById('tooltip');
      if(tip) tip.style.display = 'none';
    });
  });
  startTurn();
};




function mapNodes(abbr){
  const wrap = document.getElementById('map-container');
  if(!wrap) return [];
  return Array.from(wrap.querySelectorAll('path,polygon,circle,g')).filter(n => n.id===abbr || n.getAttribute('data-id')===abbr);
}

function colorMap(){
  activeTerritories().forEach(s=>{
    const nodes = mapNodes(s.abbr);
    if(!nodes.length) return;
    const c = getClumpByState(s.abbr);
    if(!c){ nodes.forEach(path => path.style.fill='#333'); return; }
    const p = getPlayer(c.ownerId);
    nodes.forEach(path => {
      path.style.fill = p ? p.color : '#555';
      path.style.pointerEvents = 'auto';
      path.classList.toggle('selected', !!(c && ((selectedFriendly&&selectedFriendly.id===c.id)||(selectedEnemy&&selectedEnemy.id===c.id)||(selectedEnemy2&&selectedEnemy2.id===c.id))));
      path.classList.toggle('weakened', !!(c && c.weakened));
      path.classList.toggle('legal', !!(selectedFriendly && c && canTarget(selectedFriendly, c)));
    });
  });
  document.querySelectorAll('.circuit-cell').forEach(el => {
    const c = getClumpByState(el.dataset.abbr);
    const p = c ? getPlayer(c.ownerId) : null;
    el.style.background = p ? p.color+'55' : '#222';
    el.classList.toggle('selected', !!(c && ((selectedFriendly&&selectedFriendly.id===c.id)||(selectedEnemy&&selectedEnemy.id===c.id)||(selectedEnemy2&&selectedEnemy2.id===c.id))));
    el.classList.toggle('legal', !!(selectedFriendly && c && canTarget(selectedFriendly, c)));
    const f = c ? (c.leader || fighters[c.states[0]]) : '';
    const pic = portraitUrl(f) || iconUrl(f);
    const name = (activeTerritories().find(t=>t.abbr===el.dataset.abbr)||{}).name || el.dataset.abbr;
    el.innerHTML = `${pic?`<img src="${pic}" style="width:36px;height:36px;object-fit:contain">`:''}<div>${name}</div>${c&&c.weakened?'<div style="color:#ffb703">WEAK</div>':''}`;
  });
  
}

function setTicker(text){
  const el = document.getElementById('game-ticker');
  if(!el) return;
  const unit = text + '   •   ';
  el.textContent = unit.repeat(12);
}

function startTurn(){
  const p = players[currentPlayerIdx];
  setTicker(`NOW PLAYING: ${p.name}${p.isCPU?' (CPU)':''}  •  YOUR MOVE  •  SSBU STATE WAR`);
  document.getElementById('status').textContent = p.isCPU ? 'CPU is choosing a target...' : 'Select one of your clumps, then an enemy clump.';
  selectedFriendly=null; selectedEnemy=null; selectedEnemy2=null; matchModifier=null; airstrikeActive=false;
  updateAttackUI(); renderMyClumps(); renderPlayers(); colorMap(); updateAirstrikeBtn();
  if(p.isCPU){
    setTimeout(cpuTurn, 600);
  } else if(diceEnabled){
    setTimeout(()=> doChaosRoll(p), 200);
  }
}

function renderMyClumps(){
  const p = players[currentPlayerIdx];
  const list = document.getElementById('my-clumps');
  const mine = getClumpsOf(p.id);
  list.innerHTML = mine.map(c=>{
    // show first state's fighter icon as representative
    const first = c.states[0];
    const f = c.leader || fighters[first];
    const ic = portraitUrl(f) || iconUrl(f);
    return `<div class="clump-card ${selectedFriendly&&selectedFriendly.id===c.id?'selected':''} ${c.weakened?'weakened':''}" data-id="${c.id}">
      ${ic?`<img src="${ic}" alt="" onerror="this.style.display='none'">`:''}
      <div><strong>Clump ${c.id}${c.weakened?' ⚠ Weak':''}</strong><div class="states">${c.states.join(', ')} (${c.states.length})</div>
      <div style="font-size:.7rem;color:#aaa">${f||''}${c.weakened?' • next loss they get taken':''}</div></div>
    </div>`;
  }).join('') || '<span style="color:var(--muted)">None</span>';
  list.querySelectorAll('.clump-card').forEach(el=>{
    el.onclick = ()=>{ selectedFriendly = clumps.find(c=>c.id===+el.dataset.id); selectedEnemy=null; updateAttackUI(); colorMap(); renderMyClumps(); const bl=document.getElementById('btn-change-leader'); if(bl){ const own=selectedFriendly&&getPlayer(selectedFriendly.ownerId); bl.disabled=!selectedFriendly || !!(own&&own.leaderChanged); } };
  });
}

function renderPlayers(){
  document.getElementById('player-list').innerHTML = players.map((p,i)=>{
    const cnt = getClumpsOf(p.id).reduce((s,c)=>s+c.states.length,0);
    return `<div class="player-chip ${i===currentPlayerIdx?'current':''}" style="background:${p.color}33;border-color:${p.color}">${p.name} (${cnt})</div>`;
  }).join('');
}

function canTarget(fromClump, toClump){
  if(!fromClump || !toClump) return false;
  if(fromClump.id === toClump.id) return false;
  if(fromClump.ownerId === toClump.ownerId) return false;
  return airstrikeActive || (matchModifier && matchModifier.includes('Challenge Anyone')) || areClumpsAdjacent(fromClump, toClump);
}

function onStateClick(abbr){
  const c = getClumpByState(abbr);
  if(!c){
    const st = document.getElementById('status');
    if(st) st.textContent = 'No clump on ' + abbr;
    return;
  }
  const p = players[currentPlayerIdx];
  if(!p) return;
  if(selectedFriendly) selectedFriendly = clumps.find(x=>x.id===selectedFriendly.id) || selectedFriendly;
  if(c.ownerId === p.id){
    selectedFriendly = c;
    selectedEnemy = null;
    selectedEnemy2 = null;
    const st = document.getElementById('status');
    if(st) st.textContent = 'Attacking from [' + c.states.join(', ') + ']. Now click an adjacent enemy.';
  } else if(selectedFriendly){
    if(!canTarget(selectedFriendly, c)){
      document.getElementById('status').textContent = 'Not adjacent. Arm Air Strike to hit far away.';
      return;
    }
    if(!selectedEnemy){
      selectedEnemy = c;
    } else if(selectedEnemy.id === c.id){
      selectedEnemy = selectedEnemy2;
      selectedEnemy2 = null;
    } else if(selectedEnemy2 && selectedEnemy2.id === c.id){
      selectedEnemy2 = null;
    } else if(!selectedEnemy2){
      if(c.ownerId === selectedEnemy.ownerId){
        document.getElementById('status').textContent = '2v1 must be two different players.';
        return;
      }
      selectedEnemy2 = c;
    } else {
      if(c.ownerId === selectedEnemy.ownerId){
        document.getElementById('status').textContent = '2v1 must be two different players.';
        return;
      }
      selectedEnemy2 = c;
    }
  }
  updateAttackUI(); colorMap(); renderMyClumps();
}

function updateAttackUI(){
  const info = document.getElementById('attack-info');
  const can = selectedFriendly && selectedEnemy;
  const conf = document.getElementById('btn-confirm-battle');
  if(conf) conf.disabled = !can;
  if(can && selectedEnemy2){
    const fA = selectedFriendly.leader || fighters[selectedFriendly.states[0]];
    const fB = selectedEnemy.leader || fighters[selectedEnemy.states[0]];
    const fC = selectedEnemy2.leader || fighters[selectedEnemy2.states[0]];
    info.innerHTML = `<div class="attack-icons">
      <b>${selectedFriendly.states.join('+')}</b> VS
      <b>${selectedEnemy.states.join('+')}</b> +
      <b>${selectedEnemy2.states.join('+')}</b>
    </div>
    <div style="font-size:.8rem">${fA} vs ${fB} and ${fC}</div>
    <div style="color:#00fff7;font-size:.8rem">2v1: report each result separately. You keep any clump you beat.</div>
    ${matchModifier?`<div style="color:#7afcff;margin-top:.3rem">${matchModifier}</div>`:''}`;
  } else if(can){
    const fA = selectedFriendly.leader || fighters[selectedFriendly.states[0]];
    const fB = selectedEnemy.leader || fighters[selectedEnemy.states[0]];
    const icA = iconUrl(fA), icB = iconUrl(fB);
    info.innerHTML = `<div class="attack-icons">
      ${icA?`<img src="${icA}" alt="">`:''}<b>${selectedFriendly.states.join('+')}</b>
      <span style="font-size:1.2rem">VS</span>
      ${icB?`<img src="${icB}" alt="">`:''}<b>${selectedEnemy.states.join('+')}</b>
    </div>
    <div style="font-size:.8rem">${fA} vs ${fB}</div>
    <div style="font-size:.78rem;color:#aaa">Click another enemy clump to make this a 2v1.</div>
    ${matchModifier?`<div style="color:#7afcff;margin-top:.3rem">${matchModifier}</div>`:''}`;
  } else if(selectedFriendly) info.textContent = `From ${selectedFriendly.states.join(', ')}. Click 1 or 2 enemy clumps.`;
  else info.textContent = 'Select your clump first.';
}

document.getElementById('btn-confirm-battle').onclick = ()=> openFightOverlay();


function snapshot(){
  historyStack.push(JSON.stringify({
    players, clumps, fighters, currentPlayerIdx, nextClumpId, gameLog, diceEnabled, weakenEnabled, currentMapId, enabledMemes
  }));
  if(historyStack.length > 40) historyStack.shift();
  futureStack = [];
}
function restoreSnap(raw){
  const d = JSON.parse(raw);
  players = d.players; clumps = d.clumps; fighters = d.fighters;
  currentPlayerIdx = d.currentPlayerIdx; nextClumpId = d.nextClumpId;
  gameLog = d.gameLog||[]; diceEnabled = d.diceEnabled!==false;
  weakenEnabled = d.weakenEnabled!==false; currentMapId = d.currentMapId||'usa';
  enabledMemes = d.enabledMemes||enabledMemes;
  selectedFriendly=null; selectedEnemy=null; selectedEnemy2=null;
  renderPlayers(); renderMyClumps(); colorMap(); updateAttackUI(); updateAirstrikeBtn();
}
function undoMove(){
  if(!historyStack.length) return;
  futureStack.push(JSON.stringify({players, clumps, fighters, currentPlayerIdx, nextClumpId, gameLog, diceEnabled, weakenEnabled, currentMapId, enabledMemes}));
  restoreSnap(historyStack.pop());
  log('Undo');
}
function redoMove(){
  if(!futureStack.length) return;
  historyStack.push(JSON.stringify({players, clumps, fighters, currentPlayerIdx, nextClumpId, gameLog, diceEnabled, weakenEnabled, currentMapId, enabledMemes}));
  restoreSnap(futureStack.pop());
  log('Redo');
}

function absorbClump(att, def){
  att.states.push(...def.states);
  clumps = clumps.filter(c => c.id !== def.id);
  log(`${getPlayer(att.ownerId).name} absorbed [${def.states.join(',')}]`);
}

function applyAttackerLoss(att, def){
  if(!weakenEnabled){
    log(`${getPlayer(def.ownerId).name} defended`);
    return false;
  }
  if(att.weakened){
    absorbClump(def, att);
    log(`${getPlayer(def.ownerId).name} finished a weakened clump`);
    return true;
  }
  att.weakened = true;
  log(`${getPlayer(att.ownerId).name}'s [${att.states.join(',')}] is now WEAK. Lose one more attack and it gets taken.`);
  return false;
}

function resolveAttack(attWins){
  if(!selectedFriendly||!selectedEnemy) return;
  snapshot();
  const att = selectedFriendly, def = selectedEnemy;
  if(attWins){
    att.weakened = false;
    absorbClump(att, def);
  } else {
    applyAttackerLoss(att, def);
  }
  selectedFriendly=null; selectedEnemy=null; selectedEnemy2=null; matchModifier=null; airstrikeActive=false;
  colorMap(); nextTurn();
}

function resolveTwoAttack(beat1, beat2){
  if(!selectedFriendly||!selectedEnemy||!selectedEnemy2) return;
  snapshot();
  const att = selectedFriendly;
  const d1 = selectedEnemy, d2 = selectedEnemy2;
  if(beat1) absorbClump(att, d1);
  else log(`${getPlayer(d1.ownerId).name} defended [${d1.states.join(',')}]`);
  const stillD2 = clumps.find(c => c.id === d2.id);
  if(beat2 && stillD2) absorbClump(att, stillD2);
  else if(!beat2) log(`${getPlayer(d2.ownerId).name} defended [${d2.states.join(',')}]`);
  const stillAtt = clumps.find(c => c.id === att.id);
  if(stillAtt){
    if(beat1 || beat2) stillAtt.weakened = false;
    else {
      const taker = beat1 ? d2 : d1;
      const stillTaker = clumps.find(c => c.id === taker.id) || d1;
      applyAttackerLoss(stillAtt, stillTaker);
    }
  }
  selectedFriendly=null; selectedEnemy=null; selectedEnemy2=null; matchModifier=null; airstrikeActive=false;
  twoResult = {d1:null,d2:null};
  colorMap(); nextTurn();
}

document.getElementById('btn-pass').onclick = ()=>{ snapshot(); log(`${players[currentPlayerIdx].name} passed`); nextTurn(); };

function nextTurn(){
  const alive = players.filter(p=>getClumpsOf(p.id).length>0);
  if(alive.length<=1){
    setTicker(alive[0] ? `🏆 ${alive[0].name} WINS THE TOURNAMENT  •  CHAMPION  •  ` : 'DRAW');
    document.getElementById('status').textContent = 'Game over';
    if(alive[0]){
      const clumpsOf = getClumpsOf(alive[0].id);
      const f = (clumpsOf[0] && (clumpsOf[0].leader || fighters[clumpsOf[0].states[0]])) || 'Mario';
      showMemeResult(f, null, alive[0].name + ' WINS THE USA', CHAMP_MEME);
    }
    return;
  }
  let s=0;
  do{ currentPlayerIdx=(currentPlayerIdx+1)%players.length; s++; } while(getClumpsOf(players[currentPlayerIdx].id).length===0 && s<players.length+2);
  startTurn();
}

function cpuTurn(){
  const p = players[currentPlayerIdx];
  const mine = getClumpsOf(p.id);
  if(!mine.length){ nextTurn(); return; }
  let found=null;
  for(const fc of mine){
    for(const ec of clumps){
      if(ec.ownerId!==p.id && areClumpsAdjacent(fc,ec)){ found={fc,ec}; break; }
    }
    if(found) break;
  }
  if(found){
    selectedFriendly=found.fc; selectedEnemy=found.ec; updateAttackUI();
    const defender = getPlayer(found.ec.ownerId);
    // Only auto-resolve if BOTH sides are CPU. If a human is involved, open the fight overlay.
    if(p.isCPU && defender && defender.isCPU){
      setTimeout(()=> resolveAttack(Math.random()<0.55), 650);
    } else {
      // Human is involved — show the portrait fight screen and wait for them
      document.getElementById('status').textContent = 'CPU challenges you! Play the match in SSBU, then pick the winner.';
      setTimeout(()=> openFightOverlay(), 400);
    }
  } else setTimeout(()=>{ log(`${p.name} (CPU) passed`); nextTurn(); }, 400);
}

function doChaosRoll(player){
  const ov = document.getElementById('fate-overlay');
  const title = document.getElementById('fate-title');
  const dice = document.getElementById('dice-result');
  const wheel = document.getElementById('wheel-result');
  title.textContent = `${player.name} rolls...`;
  wheel.style.display='none';
  ov.classList.add('active');
  let cnt=0;
  const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];
  const iv=setInterval(()=>{
    dice.textContent = faces[Math.floor(Math.random()*6)];
    cnt++;
    if(cnt>12){
      clearInterval(iv);
      const roll = Math.floor(Math.random()*6)+1;
      dice.textContent = faces[roll-1];
      if(roll%2===1){
        title.textContent = `${player.name} rolled ${roll} (Odd)`;
        wheel.style.display='block';
        wheel.innerHTML='Nothing happens.';
        log(`${player.name} rolled ${roll} → nothing`);
      } else {
        const sec = WHEEL[Math.floor(Math.random()*WHEEL.length)];
        title.textContent = `${player.name} rolled ${roll} (Even) – Wheel!`;
        wheel.style.display='block';
        const col = sec.type==='advantage'?'#00e676':'#ff5252';
        wheel.innerHTML = `<div style="color:${col};font-weight:700">${sec.type==='advantage'?'✨ ADVANTAGE':'💥 PUNISHMENT'}</div><div style="font-size:1.2rem;margin:.3rem 0">${sec.title}</div><div>${sec.desc}</div>`;
        if(sec.title==='Air Strike Token'){ player.airstrikeTokens++; log(`${player.name} +1 Air Strike`); }
        else if(sec.title==='Challenge Anyone'){ airstrikeActive=true; matchModifier=sec.title; }
        else matchModifier=sec.title;
        log(`${player.name}: ${sec.title}`);
      }
      setTimeout(()=> document.getElementById('fate-overlay').classList.remove('active'), 1600);
    }
  },70);
}
function closeFate(){ const ov=document.getElementById('fate-overlay'); if(ov) ov.classList.remove('active'); }
const fateClose=document.getElementById('fate-close');
if(fateClose) fateClose.onclick = closeFate;
const fateOv=document.getElementById('fate-overlay');
if(fateOv) fateOv.addEventListener('click', closeFate);



document.getElementById('btn-change-leader').onclick = () => {
  if(!selectedFriendly) return;
  const owner = getPlayer(selectedFriendly.ownerId);
  if(owner && owner.leaderChanged){
    log('You already used your one leader change this game.');
    return;
  }
  const picker = document.getElementById('leader-picker');
  if(picker.style.display === 'block'){
    picker.style.display = 'none';
    return;
  }
  // Show fighter list
  let html = '<div style="font-size:.8rem;margin-bottom:.3rem">Choose new leader for this clump:</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:.3rem">';
  // Show unique fighters currently in the clump first, then all
  const current = selectedFriendly.states.map(s => fighters[s]);
  const unique = [...new Set(current)];
  FIGHTERS.forEach(f => {
    const ic = iconUrl(f);
    html += `<div class="leader-opt" data-f="${f}" style="cursor:pointer;text-align:center;padding:2px;border:1px solid #333;border-radius:4px;${unique.includes(f)?'border-color:#ffd700':''}">
      ${ic?`<img src="${ic}" style="width:32px;height:32px;object-fit:contain">`:''}
      <div style="font-size:.65rem;max-width:48px;overflow:hidden;text-overflow:ellipsis">${f}</div>
    </div>`;
  });
  html += '</div>';
  picker.innerHTML = html;
  picker.style.display = 'block';
  picker.querySelectorAll('.leader-opt').forEach(el => {
    el.onclick = () => {
      const newF = el.dataset.f;
      // Set the first state of the clump as the "leader" carrier, or all states? 
      // Better: set the fighter of the first state, and also store a clump.leader
      selectedFriendly.leader = newF;
      const own = getPlayer(selectedFriendly.ownerId);
      if(own) own.leaderChanged = true;
      fighters[selectedFriendly.states[0]] = newF; // make first state carry the leader
      picker.style.display = 'none';
      updateAttackUI();
      renderMyClumps();
      
      log(`Clump ${selectedFriendly.id} leader changed to ${newF}`);
    };
  });
};

// Enable/disable the button when selection changes
const _origUpdate = updateAttackUI;
updateAttackUI = function(){
  _origUpdate();
  const btn = document.getElementById('btn-change-leader');
  if(btn){ const own=selectedFriendly&&getPlayer(selectedFriendly.ownerId); btn.disabled=!selectedFriendly || !!(own&&own.leaderChanged); }
};


document.getElementById('btn-deal-remaining').onclick = () => {
  while(draftIdx < clumps.length && availableFighters.length){
    fighters[clumps[draftIdx].states[0]] = availableFighters.shift();
    draftIdx++;
  }
  document.getElementById('btn-finish-draft').disabled = clumps.some(c => !fighters[c.states[0]]);
  document.getElementById('draft-banner').textContent = 'Remaining fighters dealt randomly!';
  renderDraft();
  log('Remaining fighters were dealt randomly.');
};


function updateAirstrikeBtn(){
  const btn = document.getElementById('btn-airstrike');
  if(!btn) return;
  const p = players[currentPlayerIdx];
  if(!p){ btn.disabled=true; return; }
  btn.textContent = `✈️ Air Strike (${p.airstrikeTokens||0})`;
  btn.disabled = (p.airstrikeTokens||0) <= 0 || p.isCPU;
}
document.getElementById('btn-airstrike').onclick = () => {
  const p = players[currentPlayerIdx];
  if(!p || (p.airstrikeTokens||0) <= 0) return;
  p.airstrikeTokens--;
  airstrikeActive = true;
  log(`${p.name} armed Air Strike (${p.airstrikeTokens} left)`);
  updateAirstrikeBtn();
  document.getElementById('status').textContent = 'Air Strike armed! You may attack a non-adjacent clump.';
};


function fillSide(prefix, clump){
  const player = getPlayer(clump.ownerId);
  const f = clump.leader || fighters[clump.states[0]];
  const pic = portraitUrl(f) || iconUrl(f);
  document.getElementById(prefix+'-player').textContent = player ? player.name : '';
  document.getElementById(prefix+'-name').textContent = (f||'') + '  [' + clump.states.join(', ') + ']';
  const img = document.getElementById(prefix+'-img');
  img.src = pic || '';
  img.style.display = pic ? 'block' : 'none';
}

function openFightOverlay(){
  if(!selectedFriendly || !selectedEnemy) return;
  twoResult = {d1:null, d2:null};
  fillSide('fight-left', selectedFriendly);
  fillSide('fight-right', selectedEnemy);
  document.getElementById('fight-left').classList.remove('winner','loser');
  document.getElementById('fight-right').classList.remove('winner','loser');
  const r2 = document.getElementById('fight-right2');
  const a1 = document.getElementById('fight-actions-1v1');
  const a2 = document.getElementById('fight-actions-2v1');
  if(selectedEnemy2){
    r2.style.display = 'block';
    fillSide('fight-right2', selectedEnemy2);
    document.getElementById('fight-right2').classList.remove('winner','loser');
    a1.style.display = 'none';
    a2.style.display = 'flex';
    document.getElementById('d1-pick').textContent = '';
    document.getElementById('d2-pick').textContent = '';
    document.getElementById('fight-2v1-confirm').disabled = true;
    document.getElementById('fight-hint').textContent = 'Play both matches in SSBU. Report each result. You keep any clump you beat.';
  } else {
    r2.style.display = 'none';
    a1.style.display = 'flex';
    a2.style.display = 'none';
    document.getElementById('fight-hint').textContent = 'Play the match in Super Smash Bros. Ultimate, then choose the winner';
  }
  document.getElementById('fight-overlay').classList.add('active');
}

function playWinnerAnim(attackerWon, cb){
  const L = document.getElementById('fight-left');
  const R = document.getElementById('fight-right');
  L.classList.remove('winner','loser');
  R.classList.remove('winner','loser');
  if(attackerWon){ L.classList.add('winner'); R.classList.add('loser'); }
  else { R.classList.add('winner'); L.classList.add('loser'); }
  setTimeout(cb, 1400);
}
document.getElementById('fight-a-wins').onclick = () => {
  playWinnerAnim(true, () => {
    document.getElementById('fight-overlay').classList.remove('active');
    const att = selectedFriendly, def = selectedEnemy;
    const wF = att.leader || fighters[att.states[0]];
    const lF = def.leader || fighters[def.states[0]];
    window._afterMeme = () => resolveAttack(true);
    showMemeResult(wF, lF, (getPlayer(att.ownerId).name) + ' WINS');
  });
};
document.getElementById('fight-d-wins').onclick = () => {
  playWinnerAnim(false, () => {
    document.getElementById('fight-overlay').classList.remove('active');
    const att = selectedFriendly, def = selectedEnemy;
    const wF = def.leader || fighters[def.states[0]];
    const lF = att.leader || fighters[att.states[0]];
    window._afterMeme = () => resolveAttack(false);
    showMemeResult(wF, lF, (getPlayer(def.ownerId).name) + ' DEFENDS');
  });
};
document.getElementById('fight-cancel').onclick = () => {
  document.getElementById('fight-overlay').classList.remove('active');
};
document.getElementById('fight-cancel-2').onclick = () => {
  document.getElementById('fight-overlay').classList.remove('active');
};

function refreshTwoConfirm(){
  document.getElementById('d1-pick').textContent = twoResult.d1===true?'Won':(twoResult.d1===false?'Lost':'');
  document.getElementById('d2-pick').textContent = twoResult.d2===true?'Won':(twoResult.d2===false?'Lost':'');
  document.getElementById('fight-2v1-confirm').disabled = (twoResult.d1===null || twoResult.d2===null);
}
document.getElementById('d1-win').onclick = () => { twoResult.d1 = true; refreshTwoConfirm(); };
document.getElementById('d1-lose').onclick = () => { twoResult.d1 = false; refreshTwoConfirm(); };
document.getElementById('d2-win').onclick = () => { twoResult.d2 = true; refreshTwoConfirm(); };
document.getElementById('d2-lose').onclick = () => { twoResult.d2 = false; refreshTwoConfirm(); };
document.getElementById('fight-2v1-confirm').onclick = () => {
  const L = document.getElementById('fight-left');
  const R = document.getElementById('fight-right');
  const R2 = document.getElementById('fight-right2');
  L.classList.add( (twoResult.d1||twoResult.d2) ? 'winner' : 'loser' );
  R.classList.add(twoResult.d1 ? 'loser' : 'winner');
  R2.classList.add(twoResult.d2 ? 'loser' : 'winner');
  setTimeout(() => {
    document.getElementById('fight-overlay').classList.remove('active');
    const att = selectedFriendly, d1 = selectedEnemy, d2 = selectedEnemy2;
    const wClump = twoResult.d1 ? att : d1;
    const lClump = twoResult.d1 ? d1 : att;
    const wF = wClump.leader || fighters[wClump.states[0]];
    const lF = lClump.leader || fighters[lClump.states[0]];
    window._afterMeme = () => resolveTwoAttack(twoResult.d1, twoResult.d2);
    showMemeResult(wF, lF, getPlayer(att.ownerId).name + ' 2v1 RESULTS');
  }, 900);
};

function exportGameState(){
  const data = {
    version: 1,
    savedAt: new Date().toISOString(),
    players, clumps, nextClumpId, fighters, currentPlayerIdx,
    matchModifier, airstrikeActive, gameLog, diceEnabled, weakenEnabled, currentMapId, enabledMemes
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ssbu-state-save.json';
  a.click();
  URL.revokeObjectURL(a.href);
  try { localStorage.setItem('ssbuStateSave', JSON.stringify(data)); } catch(e){}
  log('Game saved.');
}

function attachMapHandlers(){
  const svg = document.querySelector('#map-container svg');
  if(svg){
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.style.width = '100%';
    svg.style.height = 'auto';
  }
  STATES.forEach(s=>{
    const path = document.querySelector('#map-container #'+s.abbr);
    if(!path) return;
    if(path.dataset.bound) return;
    path.dataset.bound = '1';
    path.addEventListener('click', ()=> onStateClick(s.abbr));
    path.addEventListener('mouseenter', e => {
      const tip = document.getElementById('tooltip');
      if(!tip) return;
      const c = getClumpByState(s.abbr);
      const f = fighters[s.abbr];
      const ic = portraitUrl(f) || iconUrl(f);
      const tipIcon = document.getElementById('tip-icon');
      if(tipIcon){ tipIcon.src = ic || ''; tipIcon.style.display = ic ? 'block' : 'none'; }
      const tipTitle = document.getElementById('tip-title');
      if(tipTitle) tipTitle.textContent = s.name + ' (' + s.abbr + ')';
      const owner = c ? getPlayer(c.ownerId) : null;
      const tipSub = document.getElementById('tip-sub');
      if(tipSub) tipSub.textContent = (f||'') + (owner ? ' • ' + owner.name : '');
      tip.style.display = 'block';
    });
    path.addEventListener('mousemove', e => {
      const tip = document.getElementById('tooltip');
      if(tip){ tip.style.left = (e.pageX+12)+'px'; tip.style.top = (e.pageY+12)+'px'; }
    });
    path.addEventListener('mouseleave', () => {
      const tip = document.getElementById('tooltip');
      if(tip) tip.style.display = 'none';
    });
  });
}

function importGameState(data){
  if(!data || !data.players || !data.clumps){
    alert('Invalid save file.');
    return;
  }
  players = data.players;
  clumps = data.clumps.map(c => ({...c, leaderChanged: !!c.leaderChanged, weakened: !!c.weakened}));
  nextClumpId = data.nextClumpId || (Math.max(0, ...clumps.map(c=>c.id))+1);
  fighters = data.fighters || {};
  currentPlayerIdx = data.currentPlayerIdx || 0;
  matchModifier = data.matchModifier || null;
  airstrikeActive = !!data.airstrikeActive;
  gameLog = data.gameLog || [];
  diceEnabled = data.diceEnabled !== false;
  weakenEnabled = data.weakenEnabled !== false;
  currentMapId = data.currentMapId || 'usa';
  enabledMemes = data.enabledMemes || enabledMemes;
  selectedFriendly = null;
  selectedEnemy = null;
  selectedEnemy2 = null;
  showScreen('screen-game');
  setupBoard();
  attachMapHandlers();
  startTurn();
  log('Game imported.');
}

function handleImportFile(file){
  const reader = new FileReader();
  reader.onload = () => {
    try { importGameState(JSON.parse(reader.result)); }
    catch(e){ alert('Could not read that save file.'); }
  };
  reader.readAsText(file);
}

const importInput = document.getElementById('import-file');
const saveBtn = document.getElementById('btn-save-game');
const importGameBtn = document.getElementById('btn-import-game');
const importSetupBtn = document.getElementById('btn-import-setup');
if(saveBtn) saveBtn.onclick = exportGameState;
if(importInput){
  importInput.onchange = () => {
    if(importInput.files && importInput.files[0]) handleImportFile(importInput.files[0]);
    importInput.value = '';
  };
}
if(importGameBtn) importGameBtn.onclick = () => importInput && importInput.click();
if(importSetupBtn) importSetupBtn.onclick = () => importInput && importInput.click();


const MEMES = [
  {
    id:'batman-joker', file:'memes/batman-joker.jpg',
    winner:{x:36,y:28,s:26,rot:0},
    loser:{x:74,y:63,s:26,rot:190}
  },
  {
    id:'venom-dunk', file:'memes/venom-dunk.jpg',
    winner:{x:43,y:24,s:28,rot:0},
    loser:{x:59,y:69,s:24,rot:12}
  },
  {
    id:'ali-ko', file:'memes/ali-ko.jpg',
    winner:{x:40,y:28,s:22,rot:0},
    loser:{x:70,y:85,s:22,rot:90}
  },
  {
    id:'chad', file:'memes/chad.jpg',
    winner:{x:50,y:20,s:58,rot:0},
    loser:null
  },
  {
    id:'halo-win', file:'memes/halo-win.jpg',
    winner:{x:50,y:22,s:36,rot:0},
    loser:null
  },
  {
    id:'gigachad', file:'memes/gigachad.jpg',
    winner:{x:50,y:28,s:28,rot:0},
    loser:null
  }
];

const CHAMP_MEME = {
  id:'buzz-champ', file:'memes/buzz-champ.jpg',
  winner:{x:52,y:28,s:40,rot:0},
  loser:null
};

function showMemeResult(winnerFighter, loserFighter, caption, forcedTpl){
  const pool = MEMES.filter(m => enabledMemes[m.id] !== false);
  const tpl = forcedTpl || (pool.length ? pool[Math.floor(Math.random()*pool.length)] : MEMES[0]);
  const frame = document.getElementById('meme-frame');
  const bg = document.getElementById('meme-bg');
  frame.querySelectorAll('.meme-face').forEach(n => n.remove());
  bg.src = tpl.file;
  const wUrl = iconUrl(winnerFighter);
  const lUrl = iconUrl(loserFighter);
  function place(slot, url){
    if(!slot || !url) return;
    const img = document.createElement('img');
    img.className = 'meme-face';
    img.src = url;
    img.style.left = slot.x + '%';
    img.style.top = slot.y + '%';
    img.style.width = slot.s + '%';
    img.style.height = slot.s + '%';
    img.style.transform = 'translate(-50%,-50%) rotate('+(slot.rot||0)+'deg)';
    frame.appendChild(img);
  }
  place(tpl.winner, wUrl);
  place(tpl.loser, lUrl);
  document.getElementById('meme-caption').textContent = caption || '';
  document.getElementById('meme-overlay').classList.add('active');
}

document.getElementById('meme-close').onclick = () => {
  document.getElementById('meme-overlay').classList.remove('active');
  if(window._afterMeme) { const fn = window._afterMeme; window._afterMeme = null; fn(); }
};


function bindMapDelegate(){
  const wrap = document.getElementById('map-container');
  if(!wrap || wrap.dataset.delegateBound) return;
  wrap.dataset.delegateBound = '1';
  wrap.addEventListener('click', ev => {
    let el = ev.target;
    if(el && el.correspondingUseElement) el = el.correspondingUseElement;
    while(el && el !== wrap){
      const id = el.getAttribute && (el.getAttribute('data-id') || el.getAttribute('id'));
      if(id && activeTerritories().some(t => t.abbr === id)){
        ev.preventDefault();
        onStateClick(id);
        return;
      }
      el = el.parentNode;
    }
  });
}

function attachAllMapClicks(){
  bindMapDelegate();
  const wrap = document.getElementById('map-container');
  if(!wrap) return;
  const svg = wrap.querySelector('svg');
  if(svg){
    svg.removeAttribute('width'); svg.removeAttribute('height');
    svg.style.width='100%'; svg.style.height='auto';
    svg.style.pointerEvents='auto';
  }
  wrap.querySelectorAll('circle, text, #layer3, #points, #label_points').forEach(n => {
    n.style.pointerEvents = 'none';
  });
  const ids = new Set(activeTerritories().map(t=>t.abbr));
  wrap.querySelectorAll('path, polygon, circle').forEach(n => {
    const id = n.getAttribute('data-id') || n.id;
    if(id && ids.has(id)){
      n.style.cursor = 'pointer';
      n.style.pointerEvents = 'auto';
    }
  });
}

function setupBoard(){
  const svgWrap = document.getElementById('map-container');
  const grid = document.getElementById('circuit-board');
  const pack = activePack();
  if(!window._usaSvgHtml && svgWrap) window._usaSvgHtml = svgWrap.innerHTML;
  if(pack.type==='circuit'){
    if(svgWrap) svgWrap.style.display='none';
    if(grid){
      grid.style.display='grid';
      grid.innerHTML = CIRCUIT_GRID.flat().map(abbr=>`<div class="circuit-cell" data-abbr="${abbr}"></div>`).join('');
      grid.querySelectorAll('.circuit-cell').forEach(el => el.onclick = () => onStateClick(el.dataset.abbr));
    }
    colorMap();
    return;
  }
  if(grid) grid.style.display='none';
  if(svgWrap) svgWrap.style.display='block';
  if(pack.type==='usa' || !pack.file){
    if(window._usaSvgHtml) svgWrap.innerHTML = window._usaSvgHtml;
    attachAllMapClicks();
    colorMap();
    return;
  }
  const apply = (txt) => {
    svgWrap.innerHTML = txt;
    attachAllMapClicks();
    colorMap();
  };
  if(window.MAP_SVG && window.MAP_SVG[currentMapId]){
    apply(window.MAP_SVG[currentMapId]);
    return;
  }
  fetch(pack.file).then(r=>r.text()).then(apply).catch(()=>{
    svgWrap.innerHTML = '<p style="color:#ff2bd6;padding:1rem">Could not load '+pack.file+'. Keep the maps/ folder next to index.html, or open this folder with a local server.</p>';
  });
}

function buildMemeToggles(){
  const box = document.getElementById('meme-toggles');
  if(!box) return;
  box.innerHTML = MEMES.map(m => `<label><input type="checkbox" data-id="${m.id}" checked> ${m.id}</label>`).join('');
}

buildMemeToggles();
const bu=document.getElementById('btn-undo'); if(bu) bu.onclick=undoMove;
const br=document.getElementById('btn-redo'); if(br) br.onclick=redoMove;

try{ bindMapDelegate(); }catch(e){}
