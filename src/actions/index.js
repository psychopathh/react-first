const emplsLoaded = (newEmpls) => {
	return {
		type: 'EMPLS_LOADED',
		payload: newEmpls
	};
};

const modalDisplayWindow = (boolean) => {
	return {
		type: 'MODAL_WINDOW',
		payload: boolean
	};
}
const modalDisplayWindowEdit = (boolean) => {
	return {
		type: 'MODAL_WINDOW_EDIT',
		payload: boolean
	};
}
const addNewEmpl = (newEmpl) => {
	return {
		type: 'ADD_NEW_EMPL',
		payload: newEmpl
	}
}
const editEmpl = (newEmpl) => {
	return {
		type: 'EDIT_EMPL',
		payload: newEmpl
	}
}
export {
	emplsLoaded,
	modalDisplayWindow,
	addNewEmpl,
	editEmpl,
	modalDisplayWindowEdit
}