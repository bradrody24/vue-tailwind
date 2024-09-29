export default {
  setModalData(context, payload) {
    context.commit('SET_MODAL_DATA', payload)
    !payload && context.dispatch('dashboard/initComments', null, { root: true })
  }
}
