// Chronicle of Azeroth — timeline data
// Each event lives in an era; eras flow top → bottom from the dawn of the cosmos
// down to the recorded ages of Azeroth.

window.TIMELINE_ERAS = [
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
    subtitle: "K'aresh unmade",
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
];

window.TIMELINE_EVENTS = [
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
    glyph: "☼",
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
      "Demons cannot truly die in the Nether; they simply unravel and reform. This makes them the universe's most patient predators, and the most useful tool for anyone who hates patience.",
    refs: ["Chronicle Vol. 1, p. 21"],
    tags: ["Demons", "Twisting Nether"],
  },
  {
    era: "mythos",
    id: "zovaal-betrayal",
    side: "right",
    glyph: "⚯",
    title: "Zovaal's Betrayal",
    kicker: "The First is bound",
    body:
      "The Eternal Ones banish their leader Zovaal — the Banished One — to the prison realm of the Maw. To replace his judgement, they craft the Arbiter, an unfeeling sorter of souls.",
    detail:
      "Zovaal's crime is never fully spoken. What is known is that his exile reshapes the entire cycle of death, and the seed of his patient, millennia-long vengeance is planted in that moment.",
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
      "Sire Denathrius stages the expulsion of the nathrezim from Revendreth. They are not cast out so much as released — sent into the cosmos as spies and saboteurs, with their master's compliments.",
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
      "Convinced that all of creation is a lost cause, he abandons his brethren, frees an army of imprisoned demons, and remakes them into the Burning Legion. Order's mightiest weapon becomes Order's nightmare.",
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
    kicker: "Azeroth's first wound",
    body:
      "The Old Gods crash into the young world of Azeroth, sink their tendrils through its crust, and enslave the Elemental Lords. Within an age, the planet is a single, screaming Black Empire.",
    detail:
      "Ragnaros, Neptulon, Therazane, and Al'Akir bow. The shaping voice of the world becomes the shaping voice of the Old Gods, and Azeroth's worldsoul — a titan of nearly unimaginable potential — begins to dream in nightmares.",
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
      "The Pantheon finds Azeroth and is appalled. From the planet's own crust they forge the titan-forged — earthen, mechagnomes, vrykul, and others — to march against the Old Gods.",
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
      "The titans cannot remove the Old Gods without killing the worldsoul; instead they imprison them in vaults beneath Azeroth's skin. The cure is to leave the disease in place, sleeping, and pray it never wakes.",
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
      "Their war shatters Draenor's surface, but seeds the next age. From Grond's broken body come the breakers; from the Sporemounds, the primals. Two lineages, locked in inheritance.",
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
      "Across Draenor, Breakers and Primals — children of Grond and the Sporemounds — collide for ages. The continent's rivers run with sap and slag alike.",
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
    title: "The Mosh'Ogg Bounty",
    kicker: "The first dated artifact",
    body:
      "A carbon-dating potion places a strange cache, recovered from the Mosh'Ogg ogres of Stranglethorn, at one hundred and fifty thousand years old — the earliest date any mortal can verify.",
    detail:
      "Its contents are believed, by goblin scholars and worried Explorers' League veterans alike, to be of Old God origin. Whatever it is, it is older than recorded history, and someone wanted it forgotten.",
    refs: ["Perfectly Pure", "Too Big For His Britches", "Garley's Journal"],
    tags: ["Old Gods", "Mosh'Ogg", "Archaeology"],
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
      "Across the silent vacuum, the K'areshi hear a vast, harmonic warning — the Radiant Song — sent by their planet's own worldsoul. Something is coming.",
    detail:
      "They cannot yet imagine what it is. Their philosophers, dancers, and architects record the Song's pattern in crystal and silk, certain they have decades to prepare. They do not.",
    refs: ["Radiant Warnings"],
    tags: ["K'aresh", "Worldsoul", "K'areshi"],
  },
  {
    era: "devouring",
    id: "devouring-war",
    side: "right",
    glyph: "✸",
    title: "The Devouring War",
    kicker: "Dimensius finds K'aresh",
    body:
      "Dimensius the All-Devouring, a void lord wearing the shape of a storm of suns, falls upon K'aresh. Cities of light and song are unmade in days.",
    detail:
      "There is no army that can fight a void lord. There is only the choice of how, and where, to die. The K'areshi choose to die on their own terms.",
    refs: ["The Doom of K'aresh"],
    tags: ["Dimensius", "K'aresh", "Void Lord"],
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
      "In a final, terrible act, K'areshi engineers unleash the Ravel — a weapon that unweaves reality itself. Their world dissolves. Dimensius is scattered, but not killed.",
    detail:
      "What remains of K'aresh hangs in the Twisting Nether like a frayed tapestry. Its inhabitants survive — in pieces, in echoes, in light without bodies.",
    refs: ["Unwrapped and Unraveled"],
    tags: ["Ravel", "K'aresh", "Twisting Nether"],
  },
  {
    era: "devouring",
    id: "ethereals-brokers",
    side: "right",
    glyph: "⌖",
    title: "Ethereals and Brokers",
    kicker: "A diaspora of light",
    body:
      "The dispossessed K'areshi reshape themselves: some become the ethereals, wrapped in cloth and barely-bound starlight, wandering the Great Dark as merchants and thieves. Others slip into death itself, becoming the brokers of the Shadowlands.",
    detail:
      "Both peoples remember K'aresh. Both refuse to talk about it. Both deal — politely, profitably — with anyone who can offer them a way home.",
    refs: ["Veni Vidi Ve'nari"],
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
      "On the world of Argus, the eredar arise — tall, golden-skinned, fiercely intelligent, and gifted with magic the way other races are gifted with thumbs. Three rule: Velen, Kil'jaeden, Archimonde.",
    detail:
      "Their cities of crystal and obsidian stretch from horizon to horizon. Their schools of magic begin where most civilizations' end. They are, by every reasonable measure, the most accomplished mortal race the cosmos has yet produced — which is precisely why Sargeras will, in time, come for them.",
    refs: ["Burning Crusade Townhall: Draenei"],
    tags: ["Eredar", "Argus", "Velen", "Kil'jaeden", "Archimonde"],
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
      "Not every primal welcomes this. The proto-dragon Raszageth, daughter of the storm, becomes the third Primal Incarnate, swearing that the Aspects' 'order' is just another cage. The first crack in the dragonflights opens here.",
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
    title: "Loken's Betrayal",
    kicker: "A whisper finds a Keeper",
    body:
      "Deep beneath Ulduar, Yogg-Saron — bound but never silent — finds the Keeper Loken's lonely heart and begins to speak. Loken listens.",
    detail:
      "He slays his fellow Keeper Thorim's mortal wife, frames their own, sets the Keepers against each other, and assumes leadership of a divided Pantheon-on-Azeroth. The Old Gods do not need to break their chains; their jailer has already broken himself.",
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
];
