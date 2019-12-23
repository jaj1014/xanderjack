import Vue from 'vue'

export default {
    updateShoppingList (state, shoppingList) {
        Vue.set(state, 'shoppingList', shoppingList)
    },
    removeItemFromShoppingList (state, index) {
        Vue.delete(state.shoppingList, index)
    }
}