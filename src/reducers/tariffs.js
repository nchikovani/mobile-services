const initial = []

function tariffs(state=initial, action) {
  switch (action.type) {
    case 'SET_TARIFFS':
      return action.tariffs;
    case 'ADD_TARIFF':
      const newState = [...state];
      newState.push(action.tariff);
      return newState;
    default:
      return state;
  }
}

export default tariffs;