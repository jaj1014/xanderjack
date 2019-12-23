import { boardFootCalculator } from '../../../api'

export default {
    addItem({ commit, state }, newItem) {
        commit('updateShoppingList', [...state.shoppingList, newItem])
        boardFootCalculator.postData(state)
    },
    removeItem({ commit, state }, index) {
        commit('removeItemFromShoppingList', index)
        boardFootCalculator.postData(state)
    },
    clearShoppingList({ commit }) {
        const newState = boardFootCalculator.resetData()
        commit('updateShoppingList', JSON.parse(newState)[0].shoppingList)
    }
}