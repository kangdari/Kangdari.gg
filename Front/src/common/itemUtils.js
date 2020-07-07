import items from "./items.json";

// 아아템 한글 이름
export const getItemName = (id) => {
  // 두개의 별 모드 아이템 분기 처리를 위한 if문 추가
  if (id !== 999) {
    const kr_item_name = items.find((item) => item.id === id).kr_name;
    return kr_item_name;
  }
};
