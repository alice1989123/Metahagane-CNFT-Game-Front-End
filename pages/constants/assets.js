export const materials = [
  {
    label: "Charcoal",
    value: "charcoal",
    class: "rawMaterial",
    src: "/Card-Charcoal.png",
  },
  {
    label: "Iron ore",
    value: "ironore",
    class: "rawMaterial",
    src: "/Card-IronOre.png",
  },
  {
    label: "Iron sands",
    value: "ironsands",
    class: "rawMaterial",
    src: "/Card-IronSands.png",
  },
  {
    label: "Oakwood",
    value: "oakwood",
    class: "rawMaterial",
    src: "/Card-Oakwood.png",
  },
  {
    label: "Leather",
    value: "leather",
    class: "rawMaterial",
    src: "/Card-Leather.png",
  },
  {
    label: "Gemstone",
    value: "gemstones",
    class: "rawMaterial",
    src: "/Card-Gemstone.png",
  },
  {
    label: "Silver coin",
    value: "silvercoin",
    class: "rawMaterial",
    src: "/Card-Silver.png",
  },
  {
    label: "Gold coin",
    value: "goldcoin",
    class: "rawMaterial",
    src: "/Card-Gold.png",
  },
  {
    label: "WOOTZ steal",
    value: "wootzsteal",
    class: "materialIngot",
    recipe: [4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    src: "/Card-Wootz.png",
  },
  {
    label: "TAMAHAGANE Steel",
    value: "tamahaganesteal",
    class: "materialIngot",
    recipe: [4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    src: "/Card-Tamahagane.png",
  },
  {
    label: "BLOOM Iron",
    value: "bloomiron",
    class: "materialIngot",
    recipe: [2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    src: "/Card-BloomIron.png",
  },
];

export const weapons = [
  {
    label: "Anvil",
    value: "anvil",
    class: "tool",
    recipe: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 6],
    src: "/Card-Anvil.png",
  },
  {
    label: "Hammer",
    value: "hammer",
    class: "tool",
    recipe: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
    src: "/Card-Hammer.png",
  },
  {
    label: "Tongs",
    value: "tongs",
    class: "tool",
    recipe: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    src: "/Card-Tongs.png",
  },
  {
    label: "Splitter",
    value: "splitter",
    class: "tool",
    recipe: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
    src: "/Card-Splitter.png",
  },
  {
    label: "Sword",
    value: "sword",
    class: "uncommonWeapon",
    recipe: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],
    src: "/Card-Sword.png",
  },
  {
    label: "Axe",
    value: "axe",
    class: "uncommonWeapon",
    recipe: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3],
    src: "/Card-Axe.png",
  },
  {
    label: "Spear",
    value: "spear",
    class: "uncommonWeapon",
    recipe: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2],
    src: "/Card-Spear.png",
  },
  {
    label: "Dagger",
    value: "dagger",
    class: "uncommonWeapon",
    recipe: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
    src: "/Card-Dagger.png",
  },
  {
    label: "Crusader Sword",
    value: "crusaderSword",
    class: "rareWeapon",
    recipe: [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3],
    src: "/Card-CrusaderSword.png",
  },
  {
    label: "Medieval Sword",
    value: "medievalSword",
    class: "rareWeapon",
    recipe: [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3],
    src: "/Card-MedievalSword.png",
  },
  {
    label: "Persian Shamir Sword",
    value: "persianSword",
    class: "epicWeapon",
    recipe: [2, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0],
    src: "/Card-ShamshirSword.png",
  },
  {
    label: "Persian Jambiya Dagger",
    value: "persianDagger",
    class: "epicWeapon",
    recipe: [2, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0],
    src: "/Card-JambiyaDagger.png",
  },
  {
    label: "Japanese Katana",
    value: "Katana",
    class: "epicWeapon",
    recipe: [0, 0, 0, 1, 1, 0, 1, 1, 0, 3, 0],
    src: "/Card-Katana.png",
  },
  {
    label: "Japanese Wakizashi",
    value: "japaneseWakizashi",
    class: "epicWeapon",
    recipe: [0, 0, 0, 1, 1, 0, 1, 0, 0, 3, 0],
    src: "/Card-wakizashi.png",
  },
  {
    label: "Crystal Jade Sword",
    value: "jadeSword",
    class: "legendaryWeapon",
    recipe: [0, 0, 0, 0, 1, 3, 1, 1, 0, 0, 1],
    src: "/Card-CrystalJade.png",
  },
  {
    label: "Gemed Snake Sword",
    value: "snakeSword",
    class: "legendaryWeapon",
    recipe: [0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 3],
    src: "/Card-SnakeSword.png",
  },
];

export const assets = materials.concat(weapons);

export const materialsClasses = [
  { label: "Tools", value: "tools" },
  { label: "Weapons", value: "weapons" },
  { label: "Ingots", value: "ingot" },
  { label: "Raw Material", value: "rawMaterial" },
];

export const weaponsClasses = [
  { label: "Raw options", value: "commonWeapon" },
  { label: "Raw options", value: "uncommonWeapon" },
  { label: "Raw options", value: "rareWeapon" },
  { label: "Raw options", value: "epicWeapon" },
  { label: "Raw options", value: "legendaryWeapon" },
];
