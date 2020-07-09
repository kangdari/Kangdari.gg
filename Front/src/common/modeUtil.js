const mode = [
  {
    key: "TFT3_GameVariation_BigLittleLegends",
    name: "Medium Legends",
    description: "Little Legends are bigger and have +25 starting health.",
    kr_name: "성장기 전설이",
    kr_description: "꼬마 전설이의 크기가 커지며 시작 체력이 25만큼 증가합니다.",
  },
  {
    key: "TFT3_GameVariation_Bonanza",
    name: "Treasure Trove",
    description: "All minions and monsters drop a loot orb.",
    kr_name: "보물창고",
    kr_description: "모든 미니언 및 몬스터가 전리품 구를 떨어뜨립니다.",
  },
  {
    key: "TFT3_GameVariation_FourCostFirstCarousel",
    name: "Lilac Nebula",
    description: "The first carousel contains only four cost units.",
    kr_name: "라일락 성운",
    kr_description: "첫 공동 선택 라운드에 4단계 챔피언만 등장합니다.",
  },
  {
    key: "TFT3_GameVariation_FreeNeekos",
    name: "The Neekoverse",
    description: "Everyone gets two free copies of Neeko’s Help.",
    kr_name: "니코의 세계",
    kr_description: "모든 플레이어가 니코의 도움 2개를 가지고 게임을 시작합니다.",
  },
  {
    key: "TFT3_GameVariation_FreeRerolls",
    name: "Trade Sector",
    description: "All players receive one free reroll per round. Free rerolls cannot be saved up.",
    kr_name: "교환의 장",
    kr_description: "모든 플레이어가 라운드당 한 번 상점을 무료로 새로고침할 수 있습니다.",
  },
  {
    key: "TFT3_GameVariation_MidGameFoN",
    name: "uperdense Galaxy",
    description: "Receive a free Force of Nature after the stage 3 carousel.",
    kr_name: "성장기 전설이",
    kr_description: "3 스테이지 공동 선택 라운드에서 대자연의 힘을 무료로 획득합니다.",
  },
  {
    key: "TFT3_GameVariation_None",
    name: "Normal Game",
    description: "No special rules.",
    kr_name: "일반 은하계",
    kr_description: "",
  },
  {
    key: "TFT3_GameVariation_StartingItems",
    name: "Galactic Armory",
    description: "All players start with the same 2 completed items.",
    kr_name: "우주 무기고",
    kr_description: "모든 플레이어가 같은 종류의 온전한 아이템 2개를 가지고 시작합니다.",
  },
  {
    key: "TFT3_GameVariation_TwoStarCarousels",
    name: "Star Cluster",
    description: "1, 2, and 3 cost units on carousels have two stars.",
    kr_name: "성단",
    kr_description: "공동 선택 라운드의 모든 1/2/3단계 챔피언이 2성으로 등장합니다.",
  },
  {
    key: "TFT3_GameVariation_LittlerLegends",
    name: "Littler Legends",
    description: "",
    kr_name: "꼬꼬마 전설이",
    kr_description: "모든 플레이어가 100이 아닌 85의 체력으로 게임을 시작합니다.",
  },
  {
    key: "TFT3_GameVariation_TwoItemMax",
    name: "Binary Star",
    description: "",
    kr_name: "두개의 별",
    kr_description: "챔피언이 두 개의 아이템만 소지할 수 있습니다.",
  },
  {
    key: "TFT3_GameVariation_SmallerBoards",
    name: "Dwarf Planet",
    description: "",
    kr_name: "왜행성",
    kr_description: "모든 결투장의 첫 번째 및 마지막 열이 비활성화됩니다.",
  },
];

// 게임 모드 및 설명
export const getMode = (key) => {
  const game = mode.find((item) => item.key === key);

  return {
    mode_name: game.kr_name,
    mode_description: game.kr_description,
  };
};
