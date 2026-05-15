// Chronicle of Azeroth — timeline data (full history through The War Within)

export type Era = {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  blurb: string;
  palette: string;
};

export type TimelineEvent = {
  era: string;
  id: string;
  side: "left" | "right";
  glyph: string;
  title: string;
  kicker: string;
  body: string;
  detail: string;
  refs: string[];
  tags: string[];
  feature?: boolean;
};

export type Pullquote = {
  /** Insert after the era at this index in the eras array. */
  afterEraIndex: number;
  id: string;
  text: string;
  cite: string;
};

export const ERAS: Era[] = [
  {
    id: "mythos",
    chapter: "I",
    title: "Mythos",
    subtitle: "Before time was measured",
    dateLabel: "In the beginning…",
    blurb:
      "From a sea of pure energy and pure annihilation, the cosmos took its first uneven breath. Before suns. Before stone. Before the word.",
    palette: "mythos",
  },
  {
    id: "primordial",
    chapter: "II",
    title: "Primordial History",
    subtitle: "Worlds take shape",
    dateLabel: "Unknown dates",
    blurb:
      "Titans wandered the new dark, seeding life into sleeping worlds. The Old Gods followed in their wake — a slow corruption pressing into every wound.",
    palette: "primordial",
  },
  {
    id: "ancient",
    chapter: "III",
    title: "Whispers in the Stone",
    subtitle: "The first measurable scar",
    dateLabel: "−150,000",
    blurb:
      "The earliest date a mortal hand can pin to a relic. Carbon-dated, Old God-tainted, and unearthed by a tavern of curious goblins.",
    palette: "ancient",
  },
  {
    id: "devouring",
    chapter: "IV",
    title: "The Devouring War",
    subtitle: "K’aresh unmade",
    dateLabel: "−100,000 (approx.)",
    blurb:
      "A world heard its own soul sing a warning, and answered with the most violent silence in the Great Dark. From its ashes drifted the ethereals.",
    palette: "devouring",
  },
  {
    id: "argus",
    chapter: "V",
    title: "The Eredar Rise",
    subtitle: "A doomed perfection",
    dateLabel: "−25,000 (approx.)",
    blurb:
      "On a world of crystal cities a brilliant race awoke — beautiful, brilliant, and exactly the kind of prize that a fallen titan would come hunting for.",
    palette: "argus",
  },
  {
    id: "scaleborn",
    chapter: "VI",
    title: "Age of Scale",
    subtitle: "The Aspects take their oath",
    dateLabel: "−20,285 → −20,255",
    blurb:
      "Five proto-dragons stand against a devouring elder, and rise as the Aspects of Azeroth. The first towers of the Dragon Isles begin to climb.",
    palette: "scaleborn",
  },
  {
    id: "betrayal",
    chapter: "VII",
    title: "The Great Betrayal",
    subtitle: "Order shatters",
    dateLabel: "−20,055",
    blurb:
      "Sargeras turns on his pantheon. A Keeper turns on his kin. Far below Ulduar, a whisper finds the cracks in the world and begins, patiently, to widen them.",
    palette: "betrayal",
  },
  {
    id: "incarnates",
    chapter: "VIII",
    title: "War of the Incarnates",
    subtitle: "Dragon against dragon",
    dateLabel: "−20,000 → −19,775",
    blurb:
      "The Aspects had barely raised their first towers when a rebellion split the sky. The Primal Incarnates fought for a world without order — and one Aspect heard their argument and answered it with the void.",
    palette: "incarnates",
  },
  {
    id: "ancient-kalimdor",
    chapter: "IX",
    title: "Ancient Kalimdor",
    subtitle: "Empires of stone and shadow",
    dateLabel: "−16,000 → −15,000",
    blurb:
      "Long before elves walked the shores of the Well of Eternity, trolls and aqir waged war for an entire continent. A titan's curse turned metal to flesh, and from that flesh would one day come humanity.",
    palette: "ancient-kalimdor",
  },
  {
    id: "corruption-eredar",
    chapter: "X",
    title: "The Corruption of Argus",
    subtitle: "The night a world chose fire",
    dateLabel: "−13,000",
    blurb:
      "Sargeras promised the eredar a universe without death. Most of them said yes. The few who said no became the cosmos's most hunted people — and its most desperate hope.",
    palette: "corruption-eredar",
  },
  {
    id: "war-ancients",
    chapter: "XI",
    title: "War of the Ancients",
    subtitle: "The night that remade everything",
    dateLabel: "−10,000",
    blurb:
      "A queen's obsession cracked the sky open. A million demons stepped through. When it was over, eighty percent of the world was at the bottom of the sea — and nothing would ever be the same.",
    palette: "war-ancients",
  },
  {
    id: "long-vigil",
    chapter: "XII",
    title: "The Long Vigil",
    subtitle: "Ten thousand years of watching",
    dateLabel: "−9,400 → −2,800",
    blurb:
      "The druids slept. The Sentinels watched. While the night elves kept their ancient oath on Kalimdor, a new civilization grew in the east — quarrelsome, short-lived, and dangerously gifted with fire.",
    palette: "long-vigil",
  },
  {
    id: "doom-draenor",
    chapter: "XIII",
    title: "Doom of Draenor",
    subtitle: "Fel fire swallows a world",
    dateLabel: "−45 → −1",
    blurb:
      "Kil'jaeden found a shaman willing to listen. What followed was the systematic destruction of an entire civilization, the corruption of a people, and a gate between worlds born in blood.",
    palette: "doom-draenor",
  },
  {
    id: "great-wars",
    chapter: "XIV",
    title: "The Great Wars",
    subtitle: "Two worlds at each other's throats",
    dateLabel: "Year 0 → Year 8",
    blurb:
      "The orcs came through the Dark Portal like a fist through glass. Seven years of devastation, heroism, betrayal, and ultimately a victory that cost the victors nearly everything they had.",
    palette: "great-wars",
  },
  {
    id: "third-war",
    chapter: "XV",
    title: "The Third War",
    subtitle: "The plague that swallowed a continent",
    dateLabel: "Year 20 → Year 22",
    blurb:
      "Arthas Menethil was meant to save his kingdom. Instead he picked up a cursed sword in a glacier and became the very thing he had been sent to destroy. The Lich King had found his perfect vessel.",
    palette: "third-war",
  },
  {
    id: "classic-wow",
    chapter: "XVI",
    title: "A World at War",
    subtitle: "Heroes rise across a scarred Azeroth",
    dateLabel: "Year 25",
    blurb:
      "The dust from two Great Wars had barely settled. The Horde's internment camps were emptied, its prisoners free. The Alliance, fractured. Into this uneasy silence, a generation of heroes walked — and the Old Gods opened one eye.",
    palette: "classic-wow",
  },
  {
    id: "burning-crusade",
    chapter: "XVII",
    title: "The Burning Crusade",
    subtitle: "Through the portal, into the fel",
    dateLabel: "Year 26",
    blurb:
      "The Dark Portal flared open again — not to invade, but to purge. Azeroth's champions crossed into Outland, a world already destroyed, hunting the last traces of the Burning Legion on its broken soil.",
    palette: "burning-crusade",
  },
  {
    id: "wrath",
    chapter: "XVIII",
    title: "Wrath of the Lich King",
    subtitle: "The frozen throne must fall",
    dateLabel: "Year 27",
    blurb:
      "Arthas sat at the top of the world and waited. The armies of the living came, as he had always known they would, and his father's ghost watched from within his stolen blade.",
    palette: "wrath",
  },
  {
    id: "cataclysm",
    chapter: "XIX",
    title: "Cataclysm",
    subtitle: "The black dragon comes home",
    dateLabel: "Year 28",
    blurb:
      "Deathwing had been underground for years, his sanity pooled in the wounds where Old God-given corruption had fused elementium plates to his body. When he emerged, he remade the face of the world.",
    palette: "cataclysm",
  },
  {
    id: "mists",
    chapter: "XX",
    title: "Mists of Pandaria",
    subtitle: "A continent that chose its own peace — then found war",
    dateLabel: "Year 29",
    blurb:
      "Pandaria had been veiled for ten thousand years. When the mists parted, the Alliance and Horde tumbled through the same gap and proceeded to ruin it, then save it, then ruin their own leadership in the process.",
    palette: "mists",
  },
  {
    id: "warlords",
    chapter: "XXI",
    title: "Warlords of Draenor",
    subtitle: "An echo of conquest that never was",
    dateLabel: "Year 30",
    blurb:
      "Garrosh Hellscream slipped through time and handed an orcish warlord the means to resist damnation. The Iron Horde was born — and so was the opening move of the Burning Legion's final invasion.",
    palette: "warlords",
  },
  {
    id: "legion",
    chapter: "XXII",
    title: "The Legion's Last March",
    subtitle: "Every demon in creation, all at once",
    dateLabel: "Year 31 → 32",
    blurb:
      "Gul'dan opened the gate on the Broken Shore. The Burning Legion poured through in numbers unseen since the War of the Ancients. At the end, the titan himself plunged his sword into the world and was dragged away screaming.",
    palette: "legion",
  },
  {
    id: "bfa",
    chapter: "XXIII",
    title: "Battle for Azeroth",
    subtitle: "Azeroth bleeds; old gods laugh",
    dateLabel: "Year 33 → 34",
    blurb:
      "Sargeras' blade left a wound in Silithus that bled azerite — the raw essence of a worldsoul. Both factions raced to claim it. And while they bled each other dry, N'Zoth, the last Old God, waited patiently for its moment.",
    palette: "bfa",
  },
  {
    id: "shadowlands",
    chapter: "XXIV",
    title: "The Shadowlands",
    subtitle: "Death itself, undone",
    dateLabel: "Year 35 → 36",
    blurb:
      "Sylvanas Windrunner shattered the Helm of Domination and tore a hole between the living world and the realm of death. The Maw — a place of no return — began to overflow. Everything that had ever died was in danger.",
    palette: "shadowlands",
  },
  {
    id: "dragonflight",
    chapter: "XXV",
    title: "Dragonflight",
    subtitle: "A fire ten thousand years waiting",
    dateLabel: "Year 40",
    blurb:
      "The Dragon Isles had been sealed since the Sundering. When they woke, so did everything sleeping within them — including the Primal Incarnates, still furious, and the secrets Neltharion had buried alongside his guilt.",
    palette: "dragonflight",
  },
  {
    id: "war-within",
    chapter: "XXVI",
    title: "The War Within",
    subtitle: "The Worldsoul Saga begins",
    dateLabel: "Year 42 → 43+",
    blurb:
      "Below the surface of Azeroth, in the deep places where the earthen keep their long memories, a shadow moved. Xal'atath had gathered the power she needed. The worldsoul itself would have to answer.",
    palette: "war-within",
  },
];

export const EVENTS: TimelineEvent[] = [
  // ============ MYTHOS ============
  {
    era: "mythos",
    id: "great-dark",
    side: "left",
    glyph: "✦",
    title: "Origins of the Great Dark Beyond",
    kicker: "The First Clash",
    body:
      "The universe is born from the collision of two opposing forces — the radiant Light and the all-devouring Void. Their endless struggle leaves the Great Dark Beyond strewn with the embers of creation.",
    detail:
      "From this primordial conflict came every star, every shadow, and every law of reality that would follow. Neither force was ever truly defeated; their war simply became the medium in which everything else would happen.",
    refs: ["Chronicle Vol. 1, p. 18"],
    tags: ["Light", "Void", "Cosmos"],
  },
  {
    era: "mythos",
    id: "first-ones",
    side: "right",
    glyph: "✶",
    title: "The First Ones",
    kicker: "Architects of reality",
    body:
      "Beings beyond mortal comprehension shape the six Cosmic Forces — Light, Void, Life, Death, Order, and Disorder — and craft pantheons and realms to embody each.",
    detail:
      "Within the white sands of Zereth Mortis, the First Ones forge the Eternal Ones to serve as the Pantheon of Death. The other five realms — Zereth Lumin, Tenebris, Vitae, Aeternus, and Furor — are seeded in kind.",
    refs: ["The Grimoire of the Shadowlands and Beyond, p. 150–151", "Oracle, Heal Thyself"],
    tags: ["First Ones", "Cosmic Forces", "Zereth Mortis"],
  },
  {
    era: "mythos",
    id: "titans-awaken",
    side: "left",
    glyph: "☸",
    title: "The Titans Awaken",
    kicker: "Worldsouls open their eyes",
    body:
      "Within the largest planets, vast slumbering spirits — worldsouls — slowly rouse. The first to wake become the Pantheon of Order: golden, mountain-sized, and devoted to the perfection of all things.",
    detail:
      "These titans roam the cosmos seeking other nascent worldsouls to awaken. They are not gods, but something closer to gardeners — tending the very young, very rare, very precious thing that is a planet learning to think.",
    refs: ["Chronicle Vol. 1, p. 19"],
    tags: ["Titans", "Worldsouls", "Order"],
  },
  {
    era: "mythos",
    id: "old-gods-rise",
    side: "right",
    glyph: "◉",
    title: "Birth of the Old Gods",
    kicker: "A counter-offering",
    body:
      "The Void Lords answer the rise of the titans by birthing the Old Gods — parasitic horrors flung across the cosmos to find sleeping worldsouls and corrupt them from within.",
    detail:
      "An Old God is not a being but an infection. Where one lands, it grows tendrils into the very crust of the world, whispering madness into stone, water, and dream until the planet itself becomes a weapon.",
    refs: ["Chronicle Vol. 1, p. 21"],
    tags: ["Old Gods", "Void Lords", "Corruption"],
  },
  {
    era: "mythos",
    id: "demons-rise",
    side: "left",
    glyph: "✺",
    title: "The Rise of Demons",
    kicker: "The Twisting Nether stirs",
    body:
      "Within the chaotic in-between realm of the Twisting Nether, the first demons coalesce — beings of malice and ambition, drawn to power the way moths are drawn to a god-sized fire.",
    detail:
      "Demons cannot truly die in the Nether; they simply unravel and reform. This makes them the universe’s most patient predators, and the most useful tool for anyone who hates patience.",
    refs: ["Chronicle Vol. 1, p. 21"],
    tags: ["Demons", "Twisting Nether"],
  },
  {
    era: "mythos",
    id: "zovaal-betrayal",
    side: "right",
    glyph: "⚯",
    title: "Zovaal’s Betrayal",
    kicker: "The First is bound",
    body:
      "The Eternal Ones banish their leader Zovaal — the Banished One — to the prison realm of the Maw. To replace his judgement, they craft the Arbiter, an unfeeling sorter of souls.",
    detail:
      "Zovaal’s crime is never fully spoken. What is known is that his exile reshapes the entire cycle of death, and the seed of his patient, millennia-long vengeance is planted in that moment.",
    refs: ["Covenants Renewed"],
    tags: ["Shadowlands", "Eternal Ones", "Arbiter"],
  },
  {
    era: "mythos",
    id: "nathrezim-exile",
    side: "left",
    glyph: "⚸",
    title: "Exile of the Nathrezim",
    kicker: "A theatrical lie",
    body:
      "Sire Denathrius stages the expulsion of the nathrezim from Revendreth. They are not cast out so much as released — sent into the cosmos as spies and saboteurs, with their master’s compliments.",
    detail:
      "The dreadlords become master infiltrators of the Burning Legion, carrying with them an ancient loyalty no demon prince suspects. The con runs for tens of thousands of years.",
    refs: ["Convoy of the Covenants"],
    tags: ["Nathrezim", "Revendreth", "Denathrius"],
  },
  {
    era: "mythos",
    id: "sargeras-fall",
    side: "right",
    glyph: "✦",
    title: "Sargeras and the Worldsoul",
    kicker: "The keeper turns executioner",
    body:
      "Sargeras, champion of the Pantheon of Order, discovers a nascent worldsoul already irreparably corrupted by the Void. In horror, he slays it — and never recovers.",
    detail:
      "Convinced that all of creation is a lost cause, he abandons his brethren, frees an army of imprisoned demons, and remakes them into the Burning Legion. Order’s mightiest weapon becomes Order’s nightmare.",
    refs: ["Chronicle Vol. 1, p. 23"],
    tags: ["Sargeras", "Burning Legion", "Pantheon of Order"],
    feature: true,
  },

  // ============ PRIMORDIAL ============
  {
    era: "primordial",
    id: "old-gods-arrive",
    side: "left",
    glyph: "◉",
    title: "Coming of the Old Gods",
    kicker: "Azeroth’s first wound",
    body:
      "The Old Gods crash into the young world of Azeroth, sink their tendrils through its crust, and enslave the Elemental Lords. Within an age, the planet is a single, screaming Black Empire.",
    detail:
      "Ragnaros, Neptulon, Therazane, and Al’Akir bow. The shaping voice of the world becomes the shaping voice of the Old Gods, and Azeroth’s worldsoul — a titan of nearly unimaginable potential — begins to dream in nightmares.",
    refs: ["Chronicle Vol. 1, p. 29"],
    tags: ["Old Gods", "Black Empire", "Elemental Lords"],
  },
  {
    era: "primordial",
    id: "titan-forged",
    side: "right",
    glyph: "⚒",
    title: "Wrath of the Titan-Forged",
    kicker: "An army of living stone",
    body:
      "The Pantheon finds Azeroth and is appalled. From the planet’s own crust they forge the titan-forged — earthen, mechagnomes, vrykul, and others — to march against the Old Gods.",
    detail:
      "These constructs are not merely soldiers. Each is shaped to a purpose: keepers to lead, watchers to remember, makers to build. The greatest of them will rule what remains of Azeroth for millennia.",
    refs: ["Chronicle Vol. 1, p. 30–37"],
    tags: ["Titan-Forged", "Keepers", "Old Gods"],
  },
  {
    era: "primordial",
    id: "ordering",
    side: "left",
    glyph: "✶",
    title: "The Ordering of Azeroth",
    kicker: "Seas, skies, and seasons",
    body:
      "With the Old Gods bound but not killed, the titans and their Keepers stitch the world back together. Continents rise. Rivers learn their courses. The first true life — beyond malice — is seeded.",
    detail:
      "The titans cannot remove the Old Gods without killing the worldsoul; instead they imprison them in vaults beneath Azeroth’s skin. The cure is to leave the disease in place, sleeping, and pray it never wakes.",
    refs: ["Chronicle Vol. 1, p. 37–42"],
    tags: ["Pantheon of Order", "Keepers", "Azeroth"],
    feature: true,
  },
  {
    era: "primordial",
    id: "ordering-draenor",
    side: "right",
    glyph: "✷",
    title: "The Ordering of Draenor",
    kicker: "Grond and the Evergrowth",
    body:
      "Far across the Great Dark, Aggramar finds Draenor overgrown by a single botanical mind — the Evergrowth. He forges the stone colossus Grond to fight it. They destroy each other.",
    detail:
      "Their war shatters Draenor’s surface, but seeds the next age. From Grond’s broken body come the breakers; from the Sporemounds, the primals. Two lineages, locked in inheritance.",
    refs: ["Chronicle Vol. 2, p. 12–16"],
    tags: ["Draenor", "Aggramar", "Grond", "Evergrowth"],
  },
  {
    era: "primordial",
    id: "age-colossals",
    side: "left",
    glyph: "⚔",
    title: "Age of Colossals",
    kicker: "Stone and seed make war",
    body:
      "Across Draenor, Breakers and Primals — children of Grond and the Sporemounds — collide for ages. The continent’s rivers run with sap and slag alike.",
    detail:
      "This war shapes nearly every species that will live on Draenor: ogron, gronn, magnaron, genesaur, botani. None of them remember peace, because there has never been any.",
    refs: ["Chronicle Vol. 2, p. 16–21"],
    tags: ["Breakers", "Primals", "Draenor"],
  },
  {
    era: "primordial",
    id: "gods-arak",
    side: "right",
    glyph: "✺",
    title: "The Gods of Arak",
    kicker: "A curse swallowed in flight",
    body:
      "Three godlike beings rise above the spires of Arak — Anzu the Raven, Rukhmar the Solar Hawk, and Sethe the Serpent. Sethe attacks his siblings and is struck down.",
    detail:
      "With his last breath Sethe tries to curse Arak itself. Anzu, in an act of catastrophic love, takes the curse into his own feathers, becoming a being of shadow forever. The arakkoa inherit this split soul.",
    refs: ["Chronicle Vol. 2, p. 21–24"],
    tags: ["Arak", "Anzu", "Rukhmar", "Sethe"],
  },

  // ============ ANCIENT ============
  {
    era: "ancient",
    id: "moshogg-bounty",
    side: "left",
    glyph: "⌘",
    title: "The Mosh’Ogg Bounty",
    kicker: "The first dated artifact",
    body:
      "A carbon-dating potion places a strange cache, recovered from the Mosh’Ogg ogres of Stranglethorn, at one hundred and fifty thousand years old — the earliest date any mortal can verify.",
    detail:
      "Its contents are believed, by goblin scholars and worried Explorers’ League veterans alike, to be of Old God origin. Whatever it is, it is older than recorded history, and someone wanted it forgotten.",
    refs: ["Perfectly Pure", "Too Big For His Britches", "Garley’s Journal"],
    tags: ["Old Gods", "Mosh’Ogg", "Archaeology"],
  },

  // ============ DEVOURING ============
  {
    era: "devouring",
    id: "radiant-song",
    side: "left",
    glyph: "♪",
    title: "The Radiant Song",
    kicker: "A world tries to scream",
    body:
      "Across the silent vacuum, the K’areshi hear a vast, harmonic warning — the Radiant Song — sent by their planet’s own worldsoul. Something is coming.",
    detail:
      "They cannot yet imagine what it is. Their philosophers, dancers, and architects record the Song’s pattern in crystal and silk, certain they have decades to prepare. They do not.",
    refs: ["Radiant Warnings"],
    tags: ["K’aresh", "Worldsoul", "K’areshi"],
  },
  {
    era: "devouring",
    id: "devouring-war",
    side: "right",
    glyph: "✸",
    title: "The Devouring War",
    kicker: "Dimensius finds K’aresh",
    body:
      "Dimensius the All-Devouring, a void lord wearing the shape of a storm of suns, falls upon K’aresh. Cities of light and song are unmade in days.",
    detail:
      "There is no army that can fight a void lord. There is only the choice of how, and where, to die. The K’areshi choose to die on their own terms.",
    refs: ["The Doom of K’aresh"],
    tags: ["Dimensius", "K’aresh", "Void Lord"],
    feature: true,
  },
  {
    era: "devouring",
    id: "ravel",
    side: "left",
    glyph: "✕",
    title: "The Ravel",
    kicker: "A world detonates itself",
    body:
      "In a final, terrible act, K’areshi engineers unleash the Ravel — a weapon that unweaves reality itself. Their world dissolves. Dimensius is scattered, but not killed.",
    detail:
      "What remains of K’aresh hangs in the Twisting Nether like a frayed tapestry. Its inhabitants survive — in pieces, in echoes, in light without bodies.",
    refs: ["Unwrapped and Unraveled"],
    tags: ["Ravel", "K’aresh", "Twisting Nether"],
  },
  {
    era: "devouring",
    id: "ethereals-brokers",
    side: "right",
    glyph: "⌖",
    title: "Ethereals and Brokers",
    kicker: "A diaspora of light",
    body:
      "The dispossessed K’areshi reshape themselves: some become the ethereals, wrapped in cloth and barely-bound starlight, wandering the Great Dark as merchants and thieves. Others slip into death itself, becoming the brokers of the Shadowlands.",
    detail:
      "Both peoples remember K’aresh. Both refuse to talk about it. Both deal — politely, profitably — with anyone who can offer them a way home.",
    refs: ["Veni Vidi Ve’nari"],
    tags: ["Ethereals", "Brokers", "Diaspora"],
  },

  // ============ ARGUS ============
  {
    era: "argus",
    id: "eredar-rise",
    side: "left",
    glyph: "✦",
    title: "The Eredar Awaken",
    kicker: "A jewel-bright civilization",
    body:
      "On the world of Argus, the eredar arise — tall, golden-skinned, fiercely intelligent, and gifted with magic the way other races are gifted with thumbs. Three rule: Velen, Kil’jaeden, Archimonde.",
    detail:
      "Their cities of crystal and obsidian stretch from horizon to horizon. Their schools of magic begin where most civilizations’ end. They are, by every reasonable measure, the most accomplished mortal race the cosmos has yet produced — which is precisely why Sargeras will, in time, come for them.",
    refs: ["Burning Crusade Townhall: Draenei"],
    tags: ["Eredar", "Argus", "Velen", "Kil’jaeden", "Archimonde"],
    feature: true,
  },

  // ============ SCALEBORN ============
  {
    era: "scaleborn",
    id: "galakrond",
    side: "left",
    glyph: "🜲",
    title: "The Charge of the Dragonflights",
    kicker: "Five against the devourer",
    body:
      "Galakrond — the proto-dragon who grew so vast he began to eat his own kind — terrorizes the lands that would become Northrend. Five proto-dragons defy him, and prevail.",
    detail:
      "The Keepers, watching, see something in these five. They empower them with gifts drawn from the Pantheon itself: Alexstrasza of Life, Malygos of Magic, Nozdormu of Time, Ysera of Dream, and Neltharion of Earth. The Dragon Aspects are born.",
    refs: ["Chronicle Vol. 1, p. 42–47", "War of the Scaleborn, ch. 3"],
    tags: ["Galakrond", "Dragon Aspects", "Keepers"],
    feature: true,
  },
  {
    era: "scaleborn",
    id: "wyrmrest-rises",
    side: "right",
    glyph: "▲",
    title: "Wyrmrest Rises",
    kicker: "Eggs taken in, towers raised",
    body:
      "The Aspects take in abandoned primal dragon eggs from the Dragonwilds and transform them into ordered dragons. Construction of Wyrmrest Temple begins on the Dragon Isles.",
    detail:
      "Not every primal welcomes this. The proto-dragon Raszageth, daughter of the storm, becomes the third Primal Incarnate, swearing that the Aspects’ ‘order’ is just another cage. The first crack in the dragonflights opens here.",
    refs: ["War of the Scaleborn, part 2"],
    tags: ["Wyrmrest", "Raszageth", "Primal Incarnates"],
  },
  {
    era: "scaleborn",
    id: "obsidian-citadel",
    side: "left",
    glyph: "◆",
    title: "Obsidian Citadel and Vakthros",
    kicker: "Stone made permanent",
    body:
      "The black dragonflight raises the Obsidian Citadel. The first great towers of Vakthros climb above what will one day be called the Azure Span.",
    detail:
      "For a moment, the new order looks like it might hold. Roads of stone, cities of scale, a watchful peace between flights. It is — like every peace in this chronicle — temporary.",
    refs: ["War of the Scaleborn, part 2"],
    tags: ["Obsidian Citadel", "Vakthros", "Dragon Isles"],
  },

  // ============ BETRAYAL ============
  {
    era: "betrayal",
    id: "nihilam",
    side: "left",
    glyph: "✦",
    title: "Sargeras at Nihilam",
    kicker: "The Pantheon falls",
    body:
      "On the dead world of Nihilam, Sargeras and the Burning Legion meet the Pantheon of Order in battle. The titans — the gods who shaped reality — are slain. Their spirits scatter.",
    detail:
      "Their physical forms are destroyed, but their essences endure, drifting outward as soul-fragments. In time, those fragments will find new vessels on Azeroth, and ride dragons into a future none of them can quite predict.",
    refs: ["Chronicle Vol. 1, p. 48–54"],
    tags: ["Sargeras", "Pantheon", "Burning Legion"],
    feature: true,
  },
  {
    era: "betrayal",
    id: "lokens-betrayal",
    side: "right",
    glyph: "⚸",
    title: "Loken’s Betrayal",
    kicker: "A whisper finds a Keeper",
    body:
      "Deep beneath Ulduar, Yogg-Saron — bound but never silent — finds the Keeper Loken’s lonely heart and begins to speak. Loken listens.",
    detail:
      "He slays his fellow Keeper Thorim’s mortal wife, frames their own, sets the Keepers against each other, and assumes leadership of a divided Pantheon-on-Azeroth. The Old Gods do not need to break their chains; their jailer has already broken himself.",
    refs: ["Chronicle Vol. 1, p. 54–59"],
    tags: ["Loken", "Yogg-Saron", "Ulduar", "Keepers"],
  },
  {
    era: "betrayal",
    id: "winterskorn",
    side: "left",
    glyph: "❅",
    title: "The Winterskorn War",
    kicker: "Iron meets the curse",
    body:
      "Loken exiles the Winterskorn vrykul clan from Ulduar. War breaks out between the Winterskorn and the rest of the titan-forged. It does not end the way the Winterskorn imagined.",
    detail:
      "Mid-war, the Curse of Flesh begins to take them — their metal skin growing brittle, their joints aching, their children born softer and smaller than their parents. They sleep in the ice for thousands of years. When they wake, they will be the ancestors of humanity.",
    refs: ["Chronicle Vol. 1, p. 60–65"],
    tags: ["Winterskorn", "Vrykul", "Curse of Flesh"],
  },

  // ============ INCARNATES ============
  {
    era: "incarnates",
    id: "first-dracthyr",
    side: "left",
    glyph: "◈",
    title: "The First Dracthyr",
    kicker: "A weapon made from dragons",
    body:
      "In the hidden laboratory of Aberrus, Neltharion secretly creates the dracthyr — soldiers shaped from proto-dragon stock and infused with the powers of all five flights, answerable to him alone.",
    detail:
      "The Aspects do not know. That is the point. Neltharion has already begun to distrust his kin, and the whispers from beneath Azeroth’s surface tell him, again and again, that trust is a weapon his enemies will use against him.",
    refs: ["War of the Scaleborn, ch. 9"],
    tags: ["Dracthyr", "Neltharion", "Aberrus"],
  },
  {
    era: "incarnates",
    id: "scaleborn-war-begins",
    side: "right",
    glyph: "✺",
    title: "The Primal Incarnates Strike",
    kicker: "The ordered world at war",
    body:
      "Led by the storm-born Raszageth and three other Primal Incarnates, the primalists begin their rebellion in earnest — their first target the Reach, the seat of the Aspects’ new order.",
    detail:
      "Their grievance is legitimate: the Aspects took primal dragon eggs from the Dragonwilds and transformed them without consent. Their methods are catastrophic. The Dragon Isles run red for fifty years.",
    refs: ["War of the Scaleborn, part 3"],
    tags: ["Raszageth", "Incarnates", "Primalists"],
  },
  {
    era: "incarnates",
    id: "neltharion-void",
    side: "left",
    glyph: "◉",
    title: "The Voice in the Deep",
    kicker: "An Aspect hears a different answer",
    body:
      "Neltharion, beset on all sides and hearing constant whispers from the Old Gods below, uses their offered power to imprison Raszageth within the Froststone Vault — ending her invasion. He tells no one where the power came from.",
    detail:
      "The void does not give power for free. In exchange for Raszageth’s imprisonment, Neltharion gives something of himself he can never recover. The wound is invisible. It will only show much, much later.",
    refs: ["War of the Scaleborn, parts 3–5"],
    tags: ["Neltharion", "Old Gods", "Void", "Raszageth"],
    feature: true,
  },
  {
    era: "incarnates",
    id: "harrowsdeep",
    side: "right",
    glyph: "◆",
    title: "End of the Scaleborn War",
    kicker: "One crime answers another",
    body:
      "The Aspects invade Harrowsdeep, the primalists’ mountainous stronghold. Neltharion, calling upon the void once more, captures the last free Incarnate, Iridikron. The war is over. Its scars are not.",
    detail:
      "All four Primal Incarnates are imprisoned. The dracthyr are sealed in the Forbidden Reach and put into stasis. Neltharion tells his flight what was necessary. He does not tell them what it cost.",
    refs: ["War of the Scaleborn, ch. 27"],
    tags: ["Iridikron", "Aspects", "Dragon Isles"],
  },

  // ============ ANCIENT KALIMDOR ============
  {
    era: "ancient-kalimdor",
    id: "aqir-troll-war",
    side: "left",
    glyph: "⚔",
    title: "Aqir and Troll War",
    kicker: "The first recorded war on Azeroth",
    body:
      "The trolls of primordial Kalimdor, led by the Empire of Zul, clash with the insectoid aqir in a war of extermination. The aqir are driven back; their survivors retreat to form the colonies of Ahn’Qiraj and Azjol-Nerub.",
    detail:
      "The loa Sethraliss falls defeating the C’Thrax Mythrax. The Amani trolls slay the C’Thrax Kith’ix and raise their city of Zul’Aman on the corpse of their victory. Two c’thrax, slain. Two civilizations founded in their blood.",
    refs: ["Chronicle Vol. 1, p. 70"],
    tags: ["Trolls", "Aqir", "Empire of Zul", "Ahn’Qiraj"],
  },
  {
    era: "ancient-kalimdor",
    id: "thunder-king",
    side: "right",
    glyph: "✦",
    title: "Lei Shen and the Mogu Empire",
    kicker: "A tyrant learns from the Titans",
    body:
      "The Curse of Flesh transforms the titan-forged mogu into flesh. The mogu warlord Lei Shen steals the power of the Keeper Ra and founds an empire — enslaving the jinyu, hozen, and pandaren for millennia.",
    detail:
      "Lei Shen calls himself the Thunder King and builds his empire in the image of the titan-forged: all order, no mercy. His rule lasts until the pandaren rise up and break it. He will not stay broken forever.",
    refs: ["Chronicle Vol. 1, p. 78"],
    tags: ["Lei Shen", "Mogu", "Pandaria", "Curse of Flesh"],
  },
  {
    era: "ancient-kalimdor",
    id: "night-elves-rise",
    side: "left",
    glyph: "✶",
    title: "Rise of the Night Elves",
    kicker: "Trolls become something else",
    body:
      "A tribe of dark trolls settles along the shores of the Well of Eternity at the heart of Kalimdor. Over generations, the arcane energies transform them into a new race: the kaldorei — Children of the Stars.",
    detail:
      "The kaldorei are beautiful, long-lived, and drunk on magic from birth. The ones who resist the Well’s pull warn of the dangers of dependence. Their warnings are not heeded. They never are.",
    refs: ["Chronicle Vol. 1, p. 93"],
    tags: ["Night Elves", "Well of Eternity", "Kaldorei"],
  },

  // ============ CORRUPTION OF THE EREDAR ============
  {
    era: "corruption-eredar",
    id: "sargeras-offer",
    side: "left",
    glyph: "✺",
    title: "The Promise of Sargeras",
    kicker: "A titan comes bearing gifts",
    body:
      "Sargeras appears to the rulers of Argus — Velen, Kil’jaeden, and Archimonde — offering to make their people the commanders of his Burning Legion. The power to reshape the cosmos. Most of the eredar say yes.",
    detail:
      "Kil’jaeden and Archimonde accept with the eagerness of the brilliant told they are also the most powerful. Velen receives a vision from the naaru showing what they would become — and refuses. That refusal costs him everything he has ever known.",
    refs: ["Bringer of the Light"],
    tags: ["Sargeras", "Kil’jaeden", "Archimonde", "Velen"],
  },
  {
    era: "corruption-eredar",
    id: "velens-flight",
    side: "right",
    glyph: "⌖",
    title: "The Draenei Exodus",
    kicker: "The exiled ones",
    body:
      "With the aid of the naaru, Velen escapes Argus on a dimensional ship called the Genedar. His followers — those eredar who rejected Sargeras — are renamed the draenei: the Exiled Ones. They will wander the Great Dark for thirteen thousand years.",
    detail:
      "Kil’jaeden is not gracious about rejection. He pursues them across the cosmos for millennia, slaughtering every civilization they shelter with. The draenei grow very good at running, and very quiet about their hope.",
    refs: ["Rise of the Horde", "Chronicle Vol. 2, p. 50"],
    tags: ["Draenei", "Velen", "Naaru", "Genedar"],
    feature: true,
  },

  // ============ WAR OF THE ANCIENTS ============
  {
    era: "war-ancients",
    id: "azshara-compact",
    side: "left",
    glyph: "◉",
    title: "Queen Azshara’s Compact",
    kicker: "A queen opens a door",
    body:
      "The Highborne, addicted to the Well of Eternity’s power, use it to reach across the cosmos. Sargeras, dreaming of invasion, hears them. He sends his lieutenant Mannoroth through Queen Azshara — already corrupted, already willing.",
    detail:
      "Azshara is brilliant, narcissistic, and utterly convinced that her power places her beyond consequence. She will be right about one thing: she will survive what follows. She will merely wish she hadn’t.",
    refs: ["Chronicle Vol. 1, p. 98"],
    tags: ["Azshara", "Highborne", "Well of Eternity"],
  },
  {
    era: "war-ancients",
    id: "legion-descends",
    side: "right",
    glyph: "✦",
    title: "The Burning Legion on Azeroth",
    kicker: "The worst night in history",
    body:
      "The Burning Legion pours through the portal opened by the Highborne and begins destroying night-elf civilization. Malfurion Stormrage — the world’s first druid — rallies resistance with Tyrande Whisperwind and, reluctantly, his own brother Illidan.",
    detail:
      "The dragons come. The demigods come. The Legion does not care. For every demon killed, two more step through. The portal must close — whatever the cost.",
    refs: ["Chronicle Vol. 1, p. 98–106"],
    tags: ["Burning Legion", "Malfurion", "Tyrande", "Illidan"],
    feature: true,
  },
  {
    era: "war-ancients",
    id: "great-sundering",
    side: "left",
    glyph: "✸",
    title: "The Great Sundering",
    kicker: "A world breaks its own back to survive",
    body:
      "To close the portal, Malfurion and the druids destroy the Well of Eternity. The resulting cataclysm — the Sundering — shatters eighty percent of Kalimdor into the sea, leaving only scattered continents where one had stood.",
    detail:
      "The portal closes. Sargeras does not enter. Azshara is swallowed by the waves and transformed — by the Old Gods — into the serpentine naga queen. The night elves inherit a world in ruins and name their survival a victory.",
    refs: ["Chronicle Vol. 1, p. 106"],
    tags: ["Sundering", "Well of Eternity", "Kalimdor", "Azshara"],
    feature: true,
  },
  {
    era: "war-ancients",
    id: "illidan-imprisoned",
    side: "right",
    glyph: "⚸",
    title: "Illidan Imprisoned",
    kicker: "The price of a second Well",
    body:
      "Illidan Stormrage, in secret, filled a vial of the Well and poured it into a mountain lake — creating a second Well of Eternity. Malfurion, appalled, imprisons his brother beneath Hyjal. The World Tree Nordrassil is planted above it.",
    detail:
      "The Aspects bless Nordrassil: as long as the tree stands, the worldsoul beneath it sleeps safely. The druids enter the Emerald Dream. The long vigil begins. Illidan waits in the dark, and waits, and waits.",
    refs: ["Chronicle Vol. 1, p. 112"],
    tags: ["Illidan", "Nordrassil", "Well of Eternity", "Hyjal"],
  },

  // ============ LONG VIGIL ============
  {
    era: "long-vigil",
    id: "long-vigil-begins",
    side: "left",
    glyph: "☽",
    title: "The Long Vigil Begins",
    kicker: "Ten thousand years of watching",
    body:
      "The night elf druids enter the Emerald Dream. The Sisterhood of Elune takes the reins of society. The Sentinels are forged into history’s most patient army. Kalimdor is shrouded in mist. Nothing passes in or out for millennia.",
    detail:
      "It is not stagnation. It is a conscious choice — a civilization that has seen what unbridled ambition does, and has decided that the greatest act of power is restraint. Most of the world will never understand this.",
    refs: ["Chronicle Vol. 1, p. 114", "The Sentinels and the Long Vigil"],
    tags: ["Night Elves", "Malfurion", "Tyrande", "Sentinels"],
  },
  {
    era: "long-vigil",
    id: "high-elves-exile",
    side: "right",
    glyph: "✦",
    title: "Exile of the High Elves",
    kicker: "The east calls",
    body:
      "The Highborne are exiled from Kalimdor for practicing arcane magic. They sail east, eventually founding the kingdom of Quel’Thalas and naming themselves the quel’dorei — the high elves.",
    detail:
      "Their skin loses its violet hue. Their need for magic — inherited from the Well of Eternity — remains. In seven thousand years, that addiction will be the opening through which the Scourge ends their civilization.",
    refs: ["Chronicle Vol. 1, p. 117"],
    tags: ["High Elves", "Quel’Thalas", "Highborne"],
  },
  {
    era: "long-vigil",
    id: "humanity-rises",
    side: "left",
    glyph: "⚒",
    title: "The Birth of Arathor",
    kicker: "From vrykul to empire",
    body:
      "The vrykul cursed by the Flesh Curse have been sleeping for millennia. Their offspring — smaller, softer, wholly mortal — wake and multiply. In the north they unite as the kingdom of Arathor, and with elven aid, defeat the Amani trolls.",
    detail:
      "In exchange for their victory, the elves teach arcane magic to humans. Humanity will never be the same. A race with twenty-year generations and no hesitation about change will reshape civilizations on geological timescales.",
    refs: ["Chronicle Vol. 1, p. 126–131"],
    tags: ["Arathor", "Humanity", "Vrykul", "Troll Wars"],
  },
  {
    era: "long-vigil",
    id: "guardians-tirisfal",
    side: "right",
    glyph: "✷",
    title: "The Guardians of Tirisfal",
    kicker: "Magic’s secret police",
    body:
      "Human mages in Dalaran, alarmed by the demons their reckless peers are attracting, form a secret council to fight the Burning Legion’s scouts in silence. Their greatest weapon: a single champion empowered by the whole council — the Guardian of Tirisfal.",
    detail:
      "The Guardians protect the world for centuries, each serving a century before passing power to an apprentice. The last is Medivh. Who is also, without knowing it, the vessel of Sargeras himself. The system has a flaw.",
    refs: ["Chronicle Vol. 1, p. 134–135"],
    tags: ["Dalaran", "Guardians", "Tirisfal", "Mages"],
  },

  // ============ DOOM OF DRAENOR ============
  {
    era: "doom-draenor",
    id: "kil-jaeden-conspiracy",
    side: "left",
    glyph: "⚸",
    title: "The Shadow Pact",
    kicker: "Kil’jaeden finds his instrument",
    body:
      "The exiled orc shaman Gul’dan, rejected by the elements, is contacted by Kil’jaeden and offered fel power in exchange for one service: manipulate the orcish clans into destroying the draenei. Gul’dan accepts without hesitation.",
    detail:
      "Gul’dan creates the Shadow Council, corrupts the most ambitious shaman into warlocks, and frames the draenei for orc deaths. By the time anyone suspects the lie, the entire orcish society has already chosen war.",
    refs: ["Chronicle Vol. 2, p. 68–69"],
    tags: ["Gul’dan", "Kil’jaeden", "Shadow Council", "Draenor"],
  },
  {
    era: "doom-draenor",
    id: "blood-of-mannoroth",
    side: "right",
    glyph: "◉",
    title: "Blood of Mannoroth",
    kicker: "A people hand over their souls",
    body:
      "At the Throne of Kil’jaeden, the orcish clans drink the blood of the pit lord Mannoroth. Their skin turns green. Their minds fill with rage. They are no longer a people — they are an instrument of the Legion’s war.",
    detail:
      "The Frostwolf clan and Orgrim Doomhammer refuse. They will be hunted for it. But the Frostwolves’ chieftain Durotan will have a son named Thrall, who will one day break the curse — which Mannoroth very much should have thought about.",
    refs: ["Chronicle Vol. 2, p. 88–96"],
    tags: ["Mannoroth", "Orcs", "Horde", "Fel"],
    feature: true,
  },
  {
    era: "doom-draenor",
    id: "draenei-fall",
    side: "left",
    glyph: "✕",
    title: "Genocide on Draenor",
    kicker: "A civilization nearly unmade",
    body:
      "The Horde’s assault on the draenei is swift and nearly total. Shattrath falls to the red mist. Karabor burns and is renamed the Black Temple. The draenei are scattered, broken, or dead. Velen and a remnant flee into the wilderness.",
    detail:
      "The world of Draenor, its soil poisoned by decades of fel magic, begins to die. Animals go extinct. Rivers run dry. The orcs do not notice until it is too late. Hunger has a way of focusing attention.",
    refs: ["Chronicle Vol. 2, p. 84–100"],
    tags: ["Draenei", "Shattrath", "Karabor", "Velen"],
  },
  {
    era: "doom-draenor",
    id: "dark-portal-opens",
    side: "right",
    glyph: "✦",
    title: "Opening of the Dark Portal",
    kicker: "Two worlds made one wound",
    body:
      "Medivh — possessed by Sargeras — contacts Gul’dan and shows him a vision of Azeroth. Together they construct the Dark Portal. The Horde crosses into the human kingdom of Stormwind. Year One of the counting begins.",
    detail:
      "Medivh believes he is steering events toward salvation. Gul’dan believes he is claiming a new world. Both are being used. Neither will see the end of this story alive — though one of them will return.",
    refs: ["Chronicle Vol. 2, p. 114–119"],
    tags: ["Dark Portal", "Medivh", "Gul’dan", "First War"],
    feature: true,
  },

  // ============ GREAT WARS ============
  {
    era: "great-wars",
    id: "fall-stormwind",
    side: "left",
    glyph: "✸",
    title: "Fall of Stormwind",
    kicker: "A city in flames",
    body:
      "Three years of war end with Stormwind City put to the torch. Garona, mind-controlled by the Shadow Council, assassinates King Llane Wrynn. Anduin Lothar gathers what survivors he can and burns the ships behind him, fleeing north to Lordaeron.",
    detail:
      "Khadgar had already slain Medivh, catching Sargeras’ spirit mid-transfer and aging himself past his prime in an instant. The Guardian is dead. The king is dead. The kingdom is ash. The First War is over — and the Second is about to begin.",
    refs: ["Chronicle Vol. 2, p. 135–136"],
    tags: ["Stormwind", "Garona", "Lothar", "First War"],
    feature: true,
  },
  {
    era: "great-wars",
    id: "alliance-forms",
    side: "right",
    glyph: "✶",
    title: "The Alliance of Lordaeron",
    kicker: "Seven kingdoms, one army",
    body:
      "Anduin Lothar arrives in Lordaeron with Stormwind’s refugees and calls the human kingdoms to council. King Terenas Menethil forges the Alliance of Lordaeron. The Order of the Silver Hand is founded — producing history’s first paladins.",
    detail:
      "Elves, dwarves, and gnomes join. The Horde is stronger than ever — and weaker, because Gul’dan is still alive, still dreaming of the Tomb of Sargeras, and still loyal to no one but himself.",
    refs: ["Chronicle Vol. 2, p. 142–154"],
    tags: ["Alliance", "Lordaeron", "Order of the Silver Hand", "Paladins"],
  },
  {
    era: "great-wars",
    id: "second-war-ends",
    side: "left",
    glyph: "⚒",
    title: "Victory and Its Price",
    kicker: "The Second War ends",
    body:
      "Gul’dan abandons the Horde mid-siege to pursue the Tomb of Sargeras, causing the Horde to shatter. Orgrim Doomhammer slays Anduin Lothar in single combat — and is immediately overwhelmed by Turalyon’s forces. The Alliance is victorious.",
    detail:
      "Lothar’s death transforms him into the Alliance’s defining martyr. Gul’dan’s death — torn apart by demons in the Tomb he came so far to find — is a footnote. The orc prisoners fill the internment camps. A boy named Thrall watches from behind bars.",
    refs: ["Chronicle Vol. 2, p. 167–174"],
    tags: ["Second War", "Orgrim", "Turalyon", "Lothar"],
  },
  {
    era: "great-wars",
    id: "draenor-shatters",
    side: "right",
    glyph: "✺",
    title: "Draenor Becomes Outland",
    kicker: "A world tears itself apart",
    body:
      "Ner’zhul, desperate, uses stolen artifacts to rip open innumerable portals on Draenor. The energy tears the planet apart — its fragments hanging in orbit around the rift between worlds. Khadgar destroys the Dark Portal from the inside. The Sons of Lothar are stranded.",
    detail:
      "Kil’jaeden captures Ner’zhul in the chaos and tortures him across the veil between life and death until the shaman breaks. What remains is sealed in armor and dropped into Northrend. The Lich King is born. He’ll need years to recover. That’s fine. He has nothing but time.",
    refs: ["Chronicle Vol. 2, p. 195–197", "Chronicle Vol. 3, p. 17–19"],
    tags: ["Draenor", "Outland", "Ner’zhul", "Lich King"],
    feature: true,
  },

  // ============ THIRD WAR ============
  {
    era: "third-war",
    id: "plague-undeath",
    side: "left",
    glyph: "◉",
    title: "Plague of Undeath",
    kicker: "Kel’Thuzad’s gift to Lordaeron",
    body:
      "The necromancer Kel’Thuzad, following the Lich King’s whispers, founds the Cult of the Damned and begins seeding Lordaeron’s grain with the Plague of Undeath. The infected rise. The living flee or become the dead.",
    detail:
      "Prince Arthas Menethil, heir to Lordaeron, is sent to investigate. He is a gifted paladin, a devoted prince, and completely unprepared for what the Lich King is about to make him into.",
    refs: ["Chronicle Vol. 3, p. 29–46"],
    tags: ["Plague", "Kel’Thuzad", "Scourge", "Lordaeron"],
  },
  {
    era: "third-war",
    id: "arthas-frostmourne",
    side: "right",
    glyph: "❅",
    title: "Frostmourne Hungers",
    kicker: "A paladin becomes something else",
    body:
      "Arthas hunts the Plague to Northrend. In a glacier, he finds the runeblade Frostmourne — a sword that claims its wielder’s soul. He picks it up anyway. He then returns to Lordaeron, kills his father, and brings the rest of his kingdom to ruin.",
    detail:
      "Every paladin who trained him. Every citizen who loved him. Every hope his father’s dying face held. Frostmourne harvests them all. The Lich King needed a perfect instrument: a good man, broken exactly right.",
    refs: ["Chronicle Vol. 3, p. 46–52"],
    tags: ["Arthas", "Frostmourne", "Lich King", "Death Knight"],
    feature: true,
  },
  {
    era: "third-war",
    id: "fall-silvermoon",
    side: "left",
    glyph: "⚸",
    title: "Fall of Silvermoon",
    kicker: "Elves mourn ten thousand years of beauty",
    body:
      "Arthas marches north through Quel’Thalas, raising every elf he slaughters as an undead soldier. He reaches the Sunwell — the source of high elven power — and uses its energy to resurrect Kel’Thuzad as a lich, corrupting it permanently.",
    detail:
      "Kael’thas Sunstrider renames his shattered people the blood elves in honor of the fallen. The Sunwell is defiled. Their addiction to magic is no longer sustainable. The survivors will do desperate things. So will their prince.",
    refs: ["Chronicle Vol. 3, p. 57–66"],
    tags: ["Quel’Thalas", "Silvermoon", "Blood Elves", "Sunwell"],
  },
  {
    era: "third-war",
    id: "battle-mount-hyjal",
    side: "right",
    glyph: "✦",
    title: "Battle of Mount Hyjal",
    kicker: "Wisps win a war",
    body:
      "Archimonde marches on the World Tree Nordrassil, seeking the power of Azeroth’s worldsoul. The combined forces of night elves, orcs, and humans hold long enough for the night elves to unleash the spirits of their dead — a wisp explosion that consumes Archimonde.",
    detail:
      "Nordrassil is shattered in the blast. The night elves lose their immortality. Malfurion’s plan required trading everything the night elves had left for one moment’s victory. They took it. The price was worth it, if only barely.",
    refs: ["Chronicle Vol. 3, p. 75–80"],
    tags: ["Archimonde", "Mount Hyjal", "Night Elves", "Nordrassil"],
    feature: true,
  },
  {
    era: "third-war",
    id: "arthas-ascends",
    side: "left",
    glyph: "✺",
    title: "The Lich King Ascendant",
    kicker: "A king becomes a crown",
    body:
      "Illidan’s magical assault weakens the Frozen Throne. The Lich King summons Arthas to Icecrown to defend him. They duel; Arthas wins. He climbs the Citadel, shatters the Frozen Throne, and merges with Ner’zhul — the new Lich King.",
    detail:
      "The Scourge has its king. The Forsaken — undead who broke the Lich King’s control under Sylvanas Windrunner — have their grudge. A year of silence from Northrend follows, while Arthas consolidates his power and prepares something worse.",
    refs: ["Chronicle Vol. 3, p. 98–103"],
    tags: ["Arthas", "Lich King", "Icecrown", "Frozen Throne"],
    feature: true,
  },

  // ============ CLASSIC WOW ============
  {
    era: "classic-wow",
    id: "classic-begins",
    side: "left",
    glyph: "✦",
    title: "A World at War with Itself",
    kicker: "The age of heroes begins",
    body:
      "Five years after the Third War, the Alliance and Horde have built fragile parallel civilizations on a broken world. Thrall rules from Orgrimmar; the Alliance rebuilds behind their walls. And everywhere, the Old Gods begin to move.",
    detail:
      "It is the age of the adventurer — people who cannot stay home, cannot stop fighting, cannot look at a locked dungeon and feel anything but curiosity. The age begins with the exploration of a wounded, beautiful, dangerous world and ends with the world nearly ending.",
    refs: ["Chronicle Vol. 3, p. 114"],
    tags: ["Classic WoW", "Horde", "Alliance", "Azeroth"],
  },
  {
    era: "classic-wow",
    id: "ahn-qiraj-gates",
    side: "right",
    glyph: "◉",
    title: "The Gates of Ahn’Qiraj",
    kicker: "An Old God walks free — briefly",
    body:
      "Cho’gall and the Twilight’s Hammer break the seals on Ahn’Qiraj, freeing C’Thun. The Might of Kalimdor — Alliance, Horde, and dragons together — forge the Scepter of the Shifting Sands and storm the ruins. C’Thun is struck down within its own temple.",
    detail:
      "C’Thun is the first Old God to be slain. Each death raises the same question: when you kill something that has been dreaming malevolence into the crust of the world for millions of years, what happens to the dream?",
    refs: ["Chronicle Vol. 3, p. 123–125"],
    tags: ["C’Thun", "Ahn’Qiraj", "Old Gods", "Twilight’s Hammer"],
    feature: true,
  },

  // ============ BURNING CRUSADE ============
  {
    era: "burning-crusade",
    id: "portal-reopens",
    side: "left",
    glyph: "✺",
    title: "Into Outland",
    kicker: "The broken world opens its gates",
    body:
      "Lord Kazzak opens the Dark Portal and pours Legion forces through, until the Argent Dawn pushes them back. The Alliance and Horde follow into Outland — the shattered remains of Draenor — to break the last organized Burning Legion forces.",
    detail:
      "Outland is a world in pieces, orbiting the wound between dimensions. Its sky is wrong. Its terrain is the exposed interior of a planet. And in a black fortress above it all, Illidan Stormrage has been running his own war for two decades.",
    refs: ["Chronicle Vol. 3, p. 151"],
    tags: ["Dark Portal", "Outland", "Burning Legion", "Illidan"],
  },
  {
    era: "burning-crusade",
    id: "fall-illidan",
    side: "right",
    glyph: "⚸",
    title: "The Fall of Illidan",
    kicker: "The demon hunter comes full circle",
    body:
      "The combined armies of Azeroth, Shattrath, and the betrayed Akama assault the Black Temple. Illidan is defeated. His final words: ‘You are not prepared.’ He has been fighting the Burning Legion alone for ten thousand years in one form or another.",
    detail:
      "Illidan is not killed — though the champions don’t know that. Maiev Shadowsong takes what she believes is a corpse. He knows something they don’t. He is also, at this particular moment, defeated. These two facts coexist.",
    refs: ["Chronicle Vol. 3, p. 156"],
    tags: ["Illidan", "Black Temple", "Maiev", "Akama"],
    feature: true,
  },
  {
    era: "burning-crusade",
    id: "sunwell-restored",
    side: "left",
    glyph: "✦",
    title: "The Sunwell Reborn",
    kicker: "A naaru’s sacrifice, a world’s redemption",
    body:
      "Kael’thas, driven mad by fel corruption, attempts to summon Kil’jaeden through the restored Sunwell. He is stopped and killed. Velen uses the heart of the naaru M’uru to cleanse the Sunwell — making it a font of both holy and arcane power.",
    detail:
      "The blood elves’ addiction to magic does not end. But it no longer requires a demon’s blood. Lady Liadrin and the Blood Knights lay down their stolen power and take up something given freely. The Sunwell burns with both kinds of light.",
    refs: ["Chronicle Vol. 3, p. 159"],
    tags: ["Sunwell", "Velen", "Blood Elves", "M’uru", "Kil’jaeden"],
  },

  // ============ WRATH ============
  {
    era: "wrath",
    id: "wrathgate",
    side: "left",
    glyph: "❅",
    title: "The Battle of Angrathar",
    kicker: "Three armies, one catastrophe",
    body:
      "At the gates of Icecrown, Alliance and Horde forces face the Lich King — until the Royal Apothecary Society fires blight onto the battlefield, killing friend and foe alike. Bolvar Fordragon falls. Nothing is the same.",
    detail:
      "Putress acted on Varimathras’ orders. Sylvanas didn’t know. Varian Wrynn doesn’t care about the distinction. The already-fragile peace between Horde and Alliance fractures completely. The Lich King, watching from his citadel, may have planned exactly this.",
    refs: ["Chronicle Vol. 3, p. 178"],
    tags: ["Wrathgate", "Bolvar", "Sylvanas", "Lich King"],
  },
  {
    era: "wrath",
    id: "lich-king-falls",
    side: "right",
    glyph: "✦",
    title: "Fall of the Lich King",
    kicker: "The end of a long corruption",
    body:
      "The Ashen Verdict storms Icecrown Citadel. Arthas Menethil is defeated at the top of the world — and in his final moments, his father’s ghost comes to take him home.",
    detail:
      "Tirion Fordring shatters Frostmourne with the Ashbringer. The trapped souls escape. Arthas dies as Arthas — not as the Lich King — a prince who had wanted only to save his people. The cost of that wanting is written in plague across half a continent.",
    refs: ["Chronicle Vol. 3, p. 186–190"],
    tags: ["Arthas", "Icecrown", "Tirion", "Ashbringer"],
    feature: true,
  },
  {
    era: "wrath",
    id: "bolvar-lich-king",
    side: "left",
    glyph: "◈",
    title: "The New Lich King",
    kicker: "Someone must wear the crown",
    body:
      "Bolvar Fordragon — burned half to death by Alexstrasza’s flame at Angrathar — places the Helm of Domination on his own head, binding himself to the Scourge to keep them leashed. He becomes the Lich King, never to be freed.",
    detail:
      "He tells Tirion to tell no one what happened. The Lich King must remain feared. The Scourge must remain controlled. Bolvar Fordragon descends into the ice — until the day a banshee queen decides the Maw should be everyone’s problem.",
    refs: ["Chronicle Vol. 3, p. 190"],
    tags: ["Bolvar", "Helm of Domination", "Scourge", "Lich King"],
  },

  // ============ CATACLYSM ============
  {
    era: "cataclysm",
    id: "deathwing-cataclysm",
    side: "left",
    glyph: "✦",
    title: "The Cataclysm",
    kicker: "The black dragon comes home",
    body:
      "Deathwing — the Aspect of Earth, driven mad by Old God whispers and the elementium bolted to his body — erupts from Deepholm and tears across Azeroth. Coasts sink. Continents crack. The world the Alliance and Horde thought they knew burns.",
    detail:
      "He is not destroying. He is freeing. The Old Gods have worked on him for years, and their definition of freedom for the world’s earth aspect is volcanic in nature. He was the greatest of the Dragon Aspects. Now he is the worst of their enemies.",
    refs: ["Chronicle Vol. 3, p. 195–199"],
    tags: ["Deathwing", "Cataclysm", "Old Gods", "Aspects"],
    feature: true,
  },
  {
    era: "cataclysm",
    id: "dragon-soul",
    side: "right",
    glyph: "◉",
    title: "Twilight of the Aspects",
    kicker: "The Dragon Aspects give everything",
    body:
      "Nozdormu leads the heroes through time to reclaim the Dragon Soul. Deathwing is lured to the Maelstrom and torn apart. The Aspects pour their immortal power into the Dragon Soul — and lose it forever. They become mortal.",
    detail:
      "Deathwing dies screaming. The Dragon Aspects’ purpose, the titans had told them, was to protect the worldsoul until it could protect itself. They fulfilled it. Now they are merely dragons — and dragons are enough.",
    refs: ["Chronicle Vol. 3"],
    tags: ["Dragon Soul", "Deathwing", "Dragon Aspects", "Wyrmrest"],
  },

  // ============ MISTS ============
  {
    era: "mists",
    id: "pandaria-discovery",
    side: "left",
    glyph: "⌘",
    title: "Landfall on Pandaria",
    kicker: "A continent that hid from war finds it again",
    body:
      "Alliance and Horde forces crash on the shores of Pandaria simultaneously — a land hidden behind magical mists for ten thousand years. The sha, dark energy given physical form, begin to stir as the war-hungry newcomers spread across the continent.",
    detail:
      "The sha are the shattered remains of Y’Shaarj, the Old God the Pantheon pulled from the world’s crust. Pandaria has been suppressing them for ten millennia. The newcomers’ hatred and pride feed them like sunlight feeds a garden.",
    refs: [],
    tags: ["Pandaria", "Pandaren", "Sha", "Y’Shaarj"],
  },
  {
    era: "mists",
    id: "siege-orgrimmar",
    side: "right",
    glyph: "✸",
    title: "Siege of Orgrimmar",
    kicker: "The Horde turns on its own",
    body:
      "Garrosh Hellscream, using the heart of Y’Shaarj, attempts to purge the Horde of all but pure orcs and usher in a new age of conquest. The Alliance and the Darkspear Rebellion storm Orgrimmar. Vol’jin leads his revolution home.",
    detail:
      "Garrosh is captured, not killed — taken for trial. Vol’jin becomes Warchief, the first non-orc to lead the Horde. His rule will be short. His instinct, naming Sylvanas as his successor in death, will echo for years.",
    refs: [],
    tags: ["Garrosh", "Horde", "Vol’jin", "Orgrimmar"],
    feature: true,
  },

  // ============ WARLORDS ============
  {
    era: "warlords",
    id: "iron-horde",
    side: "left",
    glyph: "⚒",
    title: "The Iron Horde",
    kicker: "An orc warlord, a timeline, and a grudge",
    body:
      "Garrosh escapes to an alternate timeline before the blood corruption and hands the Warlords of Draenor modern weapons and industry. The Iron Horde is born — their first act is aiming a Dark Portal at Azeroth.",
    detail:
      "This Draenor’s orcs never drank the blood. They are what the Horde might have been without Gul’dan — still dangerous, still warlike, but free. Garrosh calls it salvation. They call it their right. The heroes of Azeroth call it their problem.",
    refs: [],
    tags: ["Iron Horde", "Garrosh", "Draenor", "Dark Portal"],
  },
  {
    era: "warlords",
    id: "guldan-returns",
    side: "right",
    glyph: "✺",
    title: "Archimonde’s Second Death",
    kicker: "And a gate opens somewhere new",
    body:
      "Kil’jaeden’s plan for the alternate Draenor was always this: let the Iron Horde fail, then use Gul’dan to open a portal for the Legion. Archimonde comes through — and is destroyed again, hurling Gul’dan through a portal to Azeroth.",
    detail:
      "The portal Gul’dan falls through opens over the Broken Shore. The Burning Legion’s final invasion begins in the following year. Archimonde dies with something like satisfaction — he has been the Legion’s opening move in a plan ten thousand years in the making.",
    refs: [],
    tags: ["Gul’dan", "Archimonde", "Burning Legion", "Broken Shore"],
    feature: true,
  },

  // ============ LEGION ============
  {
    era: "legion",
    id: "broken-shore",
    side: "left",
    glyph: "✦",
    title: "The Battle of the Broken Shore",
    kicker: "Everything breaks at once",
    body:
      "The combined forces of the Alliance and Horde assault the Legion’s beachhead. King Varian Wrynn falls to Gul’dan’s magic. Vol’jin is mortally wounded. Both factions shattered, the Legion’s invasion rolls inland.",
    detail:
      "Varian dies fighting demons off the deck of a crashing airship. Vol’jin whispers a final prophecy before he dies: the Loa told him who should lead the Horde. His dying breath names Sylvanas Windrunner as Warchief.",
    refs: [],
    tags: ["Broken Shore", "Varian", "Vol’jin", "Sylvanas", "Gul’dan"],
    feature: true,
  },
  {
    era: "legion",
    id: "pillars-creation",
    side: "right",
    glyph: "✶",
    title: "Order Halls and the Artifacts",
    kicker: "Champions gather at the edge of the end",
    body:
      "Heroes from every class gather in Order Halls — ancient places of power — to claim Azeroth’s most powerful weapons. The Pillars of Creation are recovered and used to seal the Tomb of Sargeras.",
    detail:
      "The Pillars were left on Azeroth by the Pantheon, buried across the world like keys to a lock they hoped would never need opening. They needed opening. The heroes used them. Then they went to Argus to finish this.",
    refs: [],
    tags: ["Order Halls", "Artifacts", "Tomb of Sargeras", "Pillars"],
  },
  {
    era: "legion",
    id: "argus-falls",
    side: "left",
    glyph: "◉",
    title: "The Fall of Antorus",
    kicker: "The Legion’s heart, torn out",
    body:
      "Azeroth’s champions travel to Argus and assault Antorus, the Burning Throne. They free the worldsoul Argus the Unmaker and destroy the Legion’s means of infinite resurrection. The Pantheon returns as spirit-fragments and traps Sargeras beyond time.",
    detail:
      "Sargeras reaches back before they drag him away and drives his sword into Silithus. The wound bleeds azerite — the raw essence of a worldsoul. The world screams. It is the beginning of the next age.",
    refs: [],
    tags: ["Antorus", "Argus", "Sargeras", "Pantheon", "Sword of Sargeras"],
    feature: true,
  },

  // ============ BATTLE FOR AZEROTH ============
  {
    era: "bfa",
    id: "teldrassil-burns",
    side: "left",
    glyph: "✸",
    title: "The War of Thorns",
    kicker: "A world tree, burning",
    body:
      "Sylvanas Windrunner orders Teldrassil burned. The night elves’ second World Tree — the symbol of their rebuilt civilization — burns to the waterline. The Alliance responds by shattering the Undercity with blight. There is no going back.",
    detail:
      "There are a thousand justifications and none of them are enough. Sylvanas has a plan the world won’t understand for years. In the meantime, tens of thousands of night elves are dead and the War of Thorns is why two factions cannot look at each other without flinching.",
    refs: [],
    tags: ["Teldrassil", "Sylvanas", "Night Elves", "War"],
    feature: true,
  },
  {
    era: "bfa",
    id: "nzoth-rises",
    side: "right",
    glyph: "◉",
    title: "N’Zoth the Corruptor",
    kicker: "The last Old God wakes",
    body:
      "N’Zoth — the last and most patient of the Old Gods — engineers his own release from the Titan Prison. Azshara, Deathwing, the Emerald Nightmare — all bore his mark. Now his direct touch unmakes minds across Azeroth.",
    detail:
      "N’Zoth’s final gambit is trapping the heroes in a Nightmare Azeroth where the world already belongs to the Void. The heroes resist. They destroy him — and his vision of what Azeroth could be, if the Old Gods had won. The age of the Old Gods ends not with an earthquake but with a vision.",
    refs: [],
    tags: ["N’Zoth", "Old Gods", "Black Empire", "Ny’alotha"],
    feature: true,
  },

  // ============ SHADOWLANDS ============
  {
    era: "shadowlands",
    id: "helm-shatters",
    side: "left",
    glyph: "✦",
    title: "The Veil Torn",
    kicker: "Sylvanas ends the Lich King",
    body:
      "Sylvanas Windrunner defeats Bolvar Fordragon atop Icecrown and shatters the Helm of Domination — the artifact that keeps the Scourge bound and the barrier between the living world and the Shadowlands intact. The Maw opens. All souls flow into it.",
    detail:
      "It is the fulfillment of Zovaal’s plan — a plan so old it predates the Banished One’s own imprisonment. Sylvanas had been his agent since her death. She will spend the rest of her existence trying to make that mean something different.",
    refs: [],
    tags: ["Sylvanas", "Helm of Domination", "Maw", "Shadowlands"],
    feature: true,
  },
  {
    era: "shadowlands",
    id: "covenants",
    side: "right",
    glyph: "⌖",
    title: "The Realms of Death",
    kicker: "Afterlife, pluralized",
    body:
      "Heroes venture into the Shadowlands and discover it is not one place but many: Bastion for the noble, Maldraxxus for the combative, Ardenweald for the wild, and Revendreth for the prideful. All of them are in danger.",
    detail:
      "The Arbiter, who sorts souls to their proper realm, has been silenced by Zovaal’s stolen essence. Every soul is going directly to the Maw. Heroes broker alliances with the four Covenants — the great powers of death — to stop the Banished One before he can unmake reality.",
    refs: [],
    tags: ["Covenants", "Arbiter", "Maw", "Shadowlands"],
  },
  {
    era: "shadowlands",
    id: "zovaal-falls",
    side: "left",
    glyph: "✸",
    title: "The Banished One Defeated",
    kicker: "Death’s oldest prisoner, denied",
    body:
      "Zovaal seizes the Sepulcher of the First Ones and nearly destroys the cosmic cycle to remake reality in his image. Heroes stop him. The Arbiter — reborn — begins sorting souls again. Sylvanas regains her soul and witnesses the damage she caused.",
    detail:
      "Zovaal’s crime, finally revealed: he had tried to access the First Ones’ secrets to fix a fundamental flaw in the cosmic order. His methods were catastrophic. His goal remains unaddressed. Death never really resolves things — it just reorders them.",
    refs: [],
    tags: ["Zovaal", "Sepulcher", "First Ones", "Arbiter"],
    feature: true,
  },

  // ============ DRAGONFLIGHT ============
  {
    era: "dragonflight",
    id: "dragon-isles-return",
    side: "left",
    glyph: "✦",
    title: "The Dragon Isles Awaken",
    kicker: "Ten thousand years sealed, then unsealed",
    body:
      "The Dragon Isles, sealed after the Sundering, reawaken. Azeroth’s heroes travel there — the first mortals to set foot on the Isles in ten millennia — finding the dragonflights rebuilding an identity beyond their lost cosmic powers.",
    detail:
      "The Aspects lost their immortality in the Dragon Soul. They gained something the titans never gave them: choice. What does an Aspect become when they are no longer obligated by cosmic mandate? All four answer differently.",
    refs: [],
    tags: ["Dragon Isles", "Aspects", "Dracthyr", "Dragonflight"],
    feature: true,
  },
  {
    era: "dragonflight",
    id: "raszageth-freed",
    side: "right",
    glyph: "✺",
    title: "The Storm Eater Walks Free",
    kicker: "Ten thousand years of rage, released",
    body:
      "The Primalist Incarnates, using Neltharion’s own forbidden research, free Raszageth from the Froststone Vault. The Vault of the Incarnates falls. Raszageth storms across the Dragon Isles, ten millennia of fury pouring from her in one terrible night.",
    detail:
      "She is killed — but she is also partly right. Neltharion did use forbidden power to imprison her. The Aspects did take primal dragon eggs without consent. The resentment the Incarnates embodied was real. Their methods were not. Killing them cannot kill the question.",
    refs: [],
    tags: ["Raszageth", "Vault of the Incarnates", "Primal Incarnates"],
  },
  {
    era: "dragonflight",
    id: "amirdrassil",
    side: "left",
    glyph: "✶",
    title: "Amirdrassil, the Dream’s Hope",
    kicker: "A world tree grows in dragon land",
    body:
      "Fyrakk the Blazing, last of the freed Incarnates, attacks the nascent World Tree Amirdrassil growing in the Emerald Dream. He is defeated — but the World Tree blooms into the waking world, rooting itself in the Dragon Isles as a new home for the night elves.",
    detail:
      "Teldrassil burned. Nordrassil was shattered. Andrassil was corrupted and felled. Amirdrassil blooms from a dream, protected by heroes of every faction. A fourth attempt. The night elves have always been patient.",
    refs: [],
    tags: ["Amirdrassil", "Fyrakk", "Emerald Dream", "World Tree", "Night Elves"],
    feature: true,
  },

  // ============ WAR WITHIN ============
  {
    era: "war-within",
    id: "khaz-algar",
    side: "left",
    glyph: "⌘",
    title: "Beneath the Surface",
    kicker: "The earthen remember what the world forgot",
    body:
      "Following Xal’atath — the former blade made flesh, now an agent of ancient power — heroes descend into Khaz Algar, a hidden continent carved into the rock beneath the Great Sea, where the earthen have maintained the Titans’ archives through every catastrophe above.",
    detail:
      "The earthen of Khaz Algar never took the Curse of Flesh. They are what the dwarves were before mortality — shaped from stone, patient as mountains, and deeply alarmed by what Xal’atath is collecting. The worldsoul is closer here. You can almost hear it breathing.",
    refs: [],
    tags: ["Khaz Algar", "Earthen", "Xal’atath", "Worldsoul"],
  },
  {
    era: "war-within",
    id: "xalatath-plan",
    side: "right",
    glyph: "◉",
    title: "Xal’atath’s Gambit",
    kicker: "The knife that became a god",
    body:
      "Xal’atath — once an Old God’s essence sealed into a ceremonial dagger — has spent years gathering power since her liberation. Her goal: to awaken something in the depths of Azeroth before the heroes can stop her.",
    detail:
      "She is an entity of the Void who has lived through everything: the Black Empire, the imprisonment of the Old Gods, the War of the Ancients, millennia sealed in silver. She is not patient out of virtue. She is patient because she knows what patience costs, and she has always been willing to pay it.",
    refs: [],
    tags: ["Xal’atath", "Void", "Old Gods", "Nerub-ar"],
  },
  {
    era: "war-within",
    id: "worldsoul-stirs",
    side: "left",
    glyph: "✦",
    title: "The Worldsoul Stirring",
    kicker: "Azeroth wakes slowly, and in pain",
    body:
      "Deep in the Nerub-ar Palace, beneath the bones of the ancient nerubian empire, the consequences of Xal’atath’s plan cascade into a confrontation that threatens to wake the sleeping worldsoul before its time.",
    detail:
      "The First Ones built the cosmos knowing that worldsouls are the most precious and powerful things in existence. Everything in this chronicle — every war, every betrayal, every act of desperate heroism — has been, in the end, about what Azeroth is becoming. The chronicle is not over. The world is not done dreaming.",
    refs: [],
    tags: ["Worldsoul", "Nerub-ar", "Azeroth", "Xal’atath"],
    feature: true,
  },
];

export const PULLQUOTES: Pullquote[] = [
  {
    afterEraIndex: 2,
    id: "pullquote-mid",
    text: "The world dreams in nightmares. The titans, in their kindness, do not wake it.",
    cite: "— Marginalia, Chronicle Vol. 1",
  },
  {
    afterEraIndex: 10,
    id: "pullquote-sundering",
    text: "In the hour the sky broke and the seas rose to swallow a continent, the price of victory was written in coastlines that no longer exist.",
    cite: "— Chronicle Vol. 1, on the Sundering of the World",
  },
  {
    afterEraIndex: 14,
    id: "pullquote-arthas",
    text: "He turned the blade upon the Frozen Throne and sat down in the cold — and the prince of Lordaeron was never seen again.",
    cite: "— Arthas: Rise of the Lich King",
  },
  {
    afterEraIndex: 21,
    id: "pullquote-sargeras",
    text: "The sword of Sargeras pierced the world and still it would not die. That, perhaps, is the most terrifying sentence in all of history.",
    cite: "— Marginalia, Chronicle Vol. 3",
  },
];
