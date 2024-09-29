export default {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
  SET_COMMENTS(state, payload) {
    state.comments = payload
  },
  INIT_COMMENTS(state) {
    state.comments.splice(0)
  }
}
