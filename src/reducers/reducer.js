function reudcer(state = {}, action) {
  switch (action.type) {
    case 'getData':
      return {
        ...action.data
      }
      break;
    case 'changeTitle':
      return {
        ...state,
        title: action.title
      }
    break;
    default:
      return state;
      break;
  }
}

export default reudcer;