export const state = () => ({
  counter: 0
})

export const getters = {
  get (state) {
    return state.counter
  }
}

export const mutations = {
  increment (state) {
    state.counter++
  }
}
