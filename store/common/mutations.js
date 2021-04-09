export default {

  setError (state, error) {
    state.error = error
  },

  resetError (state) {
    state.error = null
  },

  setLoadingData (state, loading) {
    state.loading_data = loading
  },

  setLoadingDialog (state, loading) {
    state.loading_dialog = loading
  },

  setLoadingDelete (state, loading) {
    state.loading_delete = loading
  }

}
