import DashboardService from './endpoints'
export default {
  async getPosts(context) {
    try {
      context.dispatch('layout/setLoader', true, { root: true })
      const response = await DashboardService.getPosts()
      console.log(response)
      context.commit('SET_POSTS', response.data)
      context.dispatch('layout/setLoader', false, { root: true })
    } catch (err) {
      context.dispatch('layout/setLoader', false, { root: true })
      context.dispatch('errorHandler', err)
    }
  },
  async getComments(context, id) {
    try {
      context.dispatch('layout/setLoader', true, { root: true })
      const response = await DashboardService.getComments(id)
      context.commit('SET_COMMENTS', response.data)
      context.dispatch('layout/setLoader', false, { root: true })
    } catch (err) {
      context.dispatch('layout/setLoader', false, { root: true })
      context.dispatch('errorHandler', err)
    }
  },
  initComments(context) {
    context.commit('INIT_COMMENTS')
  },
  errorHandler(_, err) {
    console.log(err, err.response)
    const error = new Error('Failed to process request. Please try again later.')
    throw error
  }
}
