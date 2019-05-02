import COLORS from '../themes';

const initialState = {
  colorData: COLORS.light,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      if (action.payload.name === 'dark') {
        return { ...state, colorData: COLORS.dark };
      }
      return { ...state, colorData: COLORS.light };
    }
    default:
      return state;
  }
};

export default theme;
