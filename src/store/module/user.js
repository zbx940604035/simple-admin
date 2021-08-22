const state = {
    name: '王吧',
    age: 88
}

const mutations = {
    updateName(state, name) {
        state.name = name
    }
}

const actions = {
    updateNameAsync(store, name){
        setTimeout(() => {
            store.commit('updateName', name)
        },1000)
    }
}

const getters = {
    decorationName (state) {
        return `大家好，我叫${state.name}今年${state.age}岁`
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}