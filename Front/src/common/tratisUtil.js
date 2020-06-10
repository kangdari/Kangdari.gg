const traits = [
  {
    key: "Set3_Blademaster",
    name: "Blademaster",
    description:
      "Blademasters' Basic Attacks have a chance to trigger two additional attacks against their target. These additional attacks deal damage like Basic Attacks and trigger on-hit effects.",
    type: "class",
    kr_name: "검사",
    kr_description:
      "검사는 기본 공격 시 일정 확률로 대상에게 두 번의 추가 공격을 가합니다. 추가 공격은 기본 공격 시의 피해를 입히며 적중 시 효과가 적용됩니다.",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Blaster",
    name: "Blaster",
    description:
      "Every fourth Basic Attack from a Blaster fires additional attacks at random enemies. These additional attacks deal damage like Basic Attacks, trigger on-hit effects, and can critically hit.",
    type: "class",
    kr_name: "총잡이",
    kr_description:
      "총잡이는 네 번째 기본 공격마다 무작위 적에게 추가 공격을 가합니다. 추가 공격은 기본 공격 시의 피해를 입히며 적중 시 효과가 적용됩니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "Set3_Brawler",
    name: "Brawler",
    description: "Brawlers gain bonus Maximum Health.",
    type: "class",
    kr_name: "싸움꾼",
    kr_description: "싸움꾼은 추가 최대 체력을 얻습니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        min: 4,
      },
    ],
  },
  {
    key: "Set3_Celestial",
    name: "Celestial",
    description: "All allies heal for some of the damage they deal with spells and attacks.",
    type: "origin",
    kr_name: "천상",
    kr_description: "모든 아군이 스킬과 기본 공격으로 입히는 피해량 중 일부만큼 체력을 회복합니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "Chrono",
    name: "Chrono",
    description: "All allies gain attack speed every few seconds.",
    type: "origin",
    kr_name: "시공간",
    kr_description: "수 초마다 모든 아군의 공격 속도가 15% 증가합니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "Cybernetic",
    name: "Cybernetic",
    description: "Cybernetic champions with at least one item gain Health and Attack Damage.",
    type: "origin",
    kr_name: "사이버네틱",
    kr_description: "사이버네틱 챔피언은 하나 이상의 아이템을 장착하면 체력과 공격력을 얻습니다.",
    sets: [
      {
        style: "silver",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "DarkStar",
    name: "Dark Star",
    description:
      "When a Dark Star champion dies they give increased damage, plus any previous stacks of this effect, to the nearest ally Dark Star champion.",
    type: "origin",
    kr_name: "암흑의 별",
    kr_description: "암흑의 별 챔피언이 죽으면 모든 아군 암흑의 별 챔피언의 공격력 및 주문력이 증가합니다.",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Demolitionist",
    name: "Demolitionist",
    description: "Damage from Demolitionists' spellcasts stuns their targets for a few seconds. (Once per spellcast)",
    type: "class",
    kr_name: "폭파광",
    kr_description: "폭파광에게 스킬 피해를 입은 대상은 1.50초 동안 기절합니다. (스킬 사용당 1회)",
    sets: [
      {
        style: "gold",
        min: 2,
      },
    ],
  },
  {
    key: "Infiltrator",
    name: "Infiltrator",
    innate: "At the start of combat, Infiltrators move to the enemy's backline.",
    description: "Infiltrators gain Attack Speed for a few seconds at the start of combat.",
    type: "class",
    kr_name: "잠입자",
    kr_innate: "고유: 전투 시작 시 잠입자는 적의 후방으로 이동합니다.",
    kr_description: "전투 시작 시 잠입자의 공격 속도가 6초 동안 증가하며 처치 관여 시 초기화됩니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "ManaReaver",
    name: "Mana-Reaver",
    description: "Mana-Reavers' Basic Attacks increase the mana cost of their target's next spellcast by a percentage.",
    type: "class",
    kr_name: "마나 약탈자",
    kr_description: "마나 약탈자의 공격이 대상의 다음 스킬 마나 소모량을 40% 증가시킵니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "MechPilot",
    name: "Mech-Pilot",
    description:
      "At the start of combat, three random Mech-Pilots are teleported into a Super-Mech. The Super-Mech has the combined Health, Attack Damage, and Traits of its pilots, as well as 3 random items from among them. When the Super-Mech dies the Pilots are ejected, granted Mana, and continue to fight.",
    type: "origin",
    kr_name: "메카 파일럿",
    kr_description:
      "슈퍼 메카의 체력과 공격력, 특성은 파일럿들의 능력치를 모두 합친 값과 같으며 파일럿들의 아이템 중 3개를 무작위로 장착합니다. 슈퍼 메카가 죽으면 파일럿들이 탈출해 전투를 계속합니다.",
    sets: [
      {
        style: "gold",
        min: 3,
      },
    ],
  },
  {
    key: "Mercenary",
    name: "Mercenary",
    innate: "Upgrades for Mercenaries' spells have a chance to appear in the shop.",
    type: "class",
    kr_name: "용병",
    kr_innate: "고유: 용병은 상점에서 스킬을 업그레이드 할 수 있습니다.",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },
  {
    key: "Set3_Mystic",
    name: "Mystic",
    description: "All allies gain Magic Resistance.",
    type: "class",
    kr_name: "신비술사",
    kr_description: "모든 아군이 마법 저항력을 얻습니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "Protector",
    name: "Protector",
    description:
      "Protectors shield themselves for a few seconds whenever they cast a spell. This shield doesn't stack.",
    type: "class",
    kr_name: "수호자",
    kr_description: "수호자는 스킬을 사용할 때 마다 4초 동안 보호막을 얻습니다. 이 보호막은 중첩되지 않습니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
        max: 5,
      },
      {
        style: "chromatic",
        min: 6,
      },
    ],
  },
  {
    key: "Rebel",
    name: "Rebel",
    description:
      "At the start of combat, Rebels gain a shield and bonus damage for each adjacent Rebel. The shield lasts for a few seconds.",
    type: "origin",
    kr_name: "반군",
    kr_description: "전투 시작 시 반군은 주변에 있는 반군의 수에 따라 보호막을 얻고 입히는 피해량이 증가합니다.",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 8,
      },
      {
        style: "chromatic",
        min: 9,
      },
    ],
  },
  {
    key: "Sniper",
    name: "Sniper",
    description: "Snipers deal percentage increased damage for each hex between themselves and their target.",
    type: "class",
    kr_name: "저격수",
    kr_description: "저격수와 대상 사이에 놓인 칸 하나당 해당 저격수가 입히는 피해량이 15% 증가합니다.",
    sets: [
      {
        style: "gold",
        min: 2,
      },
    ],
  },
  {
    key: "Set3_Sorcerer",
    name: "Sorcerer",
    description: "All allies have increased Spell Power.",
    type: "class",
    kr_name: "마법사",
    kr_description: "모든 아군의 주문력이 증가합니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
        max: 7,
      },
      {
        style: "chromatic",
        min: 8,
      },
    ],
  },
  {
    key: "SpacePirate",
    name: "Space Pirate",
    description: "Whenever a Space Pirate lands a killing blow on a Champion there is a chance to drop extra loot.",
    type: "origin",
    kr_name: "우주 해적",
    kr_description: "우주 해적 챔피언이 마무리 일격 시 일정 확률로 아이템이 추가로 떨어집니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "StarGuardian",
    name: "Star Guardian",
    description: "Star Guardians' spellcasts grant Mana to other Star Guardians, spread among them.",
    type: "origin",
    kr_name: "별 수호자",
    kr_description: "별 수호자는 스킬 사용 시 다른 별 수호자들에게 마나를 부여합니다. (서로 적용)",
    sets: [
      {
        style: "bronze",
        min: 3,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
  {
    key: "Starship",
    name: "Starship",
    innate:
      "Starships gain mana per second, maneuver around the board, and are immune to movement impairing effects, but can't make Basic Attacks.",
    type: "class",
    kr_name: "우주선",
    kr_innate:
      "고유: 우주선은 매초 마나를 40씩 획득하며 전장 주위를 돕니다. 이동 방해 효과에 면역이지만, 기본 공격은 할 수 없습니다.",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },
  {
    key: "Valkyrie",
    name: "Valkyrie",
    description: "Valkyrie attacks and spells always critically hit targets below a percentage health.",
    type: "origin",
    kr_name: "발키리",
    kr_description: "발키리는 체력이 40% 미만인 대상에게 기본 공격 또는 스킬 사용 시 항상 치명타가 적용됩니다.",
    sets: [
      {
        style: "gold",
        min: 2,
      },
    ],
  },
  {
    key: "Vanguard",
    name: "Vanguard",
    description: "Vanguard champions gain bonus Armor.",
    type: "class",
    kr_name: "선봉대",
    kr_description: "선봉대 챔피언은 추가 방어력을 얻습니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "gold",
        min: 4,
      },
    ],
  },
  {
    key: "Set3_Void",
    name: "Void",
    description: "Attacks and spells from Void champions deal true damage.",
    type: "origin",
    kr_name: "공허",
    kr_description: "공허 챔피언의 기본 공격과 스킬은 고정 피해를 입힙니다.",
    sets: [
      {
        style: "gold",
        min: 3,
      },
    ],
  },

  {
    key: "Paragon",
    name: "Paragon",
    description: "Your team’s basic attacks are converted to magic damage.",
    type: "origin",
    kr_name: "인도자",
    kr_description:
      "아군 별 수호자의 기본 공격이 입히는 피해가 고정 피해로 전환됩니다. 다른 아군은 기본 공격이 입히는 피해가 마법 피해로 전환됩니다.",
    sets: [
      {
        style: "gold",
        min: 1,
      },
    ],
  },

  {
    key: "Astro",
    name: "Astro",
    description: "Reduce your Astro champs’ mana costs by 30.",
    type: "origin",
    kr_name: "우주비행사",
    kr_description: "우주비행사 챔피언의 마나 소모량이 30만큼 감소합니다.",
    sets: [
      {
        style: "gold",
        min: 3,
      },
    ],
  },

  {
    key: "Battlecast",
    name: "Battlecast",
    description:
      "Battlecast champions, upon dealing or taking 10 instances of damage, trigger a bonus effect based on their current health. If they’re above half health, they deal 75/150/225 magic damage to the nearest enemy. If they’re below half health, they heal for 75/150/225 instead.",
    type: "origin",
    kr_name: "전투 기계",
    kr_description:
      "전투 기계 챔피언은 피해를 10회 입히거나 입으면 현재 체력에 따라 추가 효과를 적용받습니다. 체력이 절반 이상인 경우 가장 가까운 적에게 마법 피해를 입힙니다. 체력이 절반 이하인 경우 체력을 회복합니다.",
    sets: [
      {
        style: "bronze",
        min: 2,
        max: 3,
      },
      {
        style: "silver",
        min: 4,
        max: 5,
      },
      {
        style: "gold",
        min: 6,
      },
    ],
  },
];

// 시너지 이름 및 설명 검색 (한글)
export const getTrait = (name) => {
  const trait_name = traits.find((trait) => trait.key === name).kr_name;
  const trait_description = traits.find((trait) => trait.key === name).kr_description;

  return {
    trait_name,
    trait_description,
  };
};
