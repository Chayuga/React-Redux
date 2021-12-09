const petFavorite = (state = 5, action) => {
  switch (action.type) {
    case "PET_FAVORITE_INCREASED":
      return state + action.payload;
    case "PET_FAVORITE_DECREASED":
      return state - action.payload;
    default:
      return state;
  }
};

export default petFavorite;
