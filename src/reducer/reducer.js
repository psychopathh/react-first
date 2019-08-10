const initialState = {
	empls: [],
	modalWindow: false,
	modalWindowEdit: false
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'EMPLS_LOADED':
			return {
				...state,
				empls: action.payload
			}
		case 'MODAL_WINDOW':
			return {
				...state,
				modalWindow: action.payload
			}
		case 'MODAL_WINDOW_EDIT':
			return {
				...state,
				modalWindowEdit: action.payload
			}
		case 'ADD_NEW_EMPL':
			return {
				...state,
				empls: [...state.empls, action.payload]
			}
		case 'EDIT_EMPL':
			const index = state.empls.findIndex(item=> item.id === action.payload.id)
			return {
				...state,
				empls: [
					...state.empls.slice(0, +index),
					action.payload,
					...state.empls.slice(+index+1)
					]
			}
		default:
			return state;
	}
}

export default reducer;