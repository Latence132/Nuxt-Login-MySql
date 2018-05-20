import api from '~/api'

export const state = () => ({
  persos: []
})

export const actions = {
  addAll ({commit}) {
    return api.persos.addAll()
      .then(reponse => {
        commit('ADD_ALL', reponse.data.persos)
        return reponse
      })
      .catch(error => {
        return error
      })
  }
}

export const mutations = {
  ADD_ALL (state, persos) {
    state.persos = persos
  }
}

export const getters = {
  allPersos (state) {
    return state.persos
  },
  getId (state, id) {
    return state.persos[id]
  }
}
