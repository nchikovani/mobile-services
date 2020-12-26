const initial = {
	isOpen: false,
  modal: null,
}

function modalWindow(state=initial, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
      	isOpen: true,
        modal: action.modal,
      };
    case 'CLOSE_MODAL':
      return {
      	isOpen: false,
        modal: null,
      };
    default:
      return state;
  }
}

export default modalWindow;