export default {
    shoppingListTotal: state => state.shoppingList.reduce((total, item) => Number(item.cost) + total, 0).toFixed(2)
}