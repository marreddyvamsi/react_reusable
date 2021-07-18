function reducer(state = { color: "" }, action) {
  if (action.type === "CHANGECOLOR") {
    let { val } = action.payload;
    if (val === "Reset") {
      return { ...state, color: "" };
    }
    return { ...state, color: val };
  }
  return state;
}

export default reducer;
