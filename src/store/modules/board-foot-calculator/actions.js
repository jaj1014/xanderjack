import { boardFootCalculator } from '../../../api'

export default {
    addItem({ commit, state }, newItem) {
        const newState = { ...state }
        newState.shoppingList.push(newItem)
        boardFootCalculator.postData(newState)

        commit('setNewState', newState)
    },
    removeItem({ commit, state }, index) {
        const newState = { ...state }
        newState.shoppingList.splice(index, 1)
        boardFootCalculator.postData(newState);

        commit('setNewState', newState);
    },
    clearShoppingList({ commit }) {
        const newState = boardFootCalculator.resetData();

        commit('setNewState', newState)
    }
}