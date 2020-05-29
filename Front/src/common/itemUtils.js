import items from './items.json'

// 아아템 한글 이름 
export const getItemName = (id) => {
    const kr_item_name = items.find(item => item.id === id).kr_name;

    return kr_item_name;
}