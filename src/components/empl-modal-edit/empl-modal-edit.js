import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../../components/empl-modal/empl-modal.css'
import {editEmpl, modalDisplayWindowEdit} from '../../actions';

class EmplModalEdit extends Component {
	itemId = this.props.itemId;
	empl = this.props.empls.find(item => item.id === +this.itemId);
	state = {
		id: +this.itemId,
		name: this.empl.name,
		surname: this.empl.surname,
		position: this.empl.position,
		subscribe: this.empl.subscribe
		};
	onLabelChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState(
			{[name]: value}
		);
	};
	editEmpls =(e) => {
		const {editEmpl,modalDisplayWindowEdit} = this.props;
		e.preventDefault();
		const newEmpl = {
			...this.state
		};
		editEmpl(newEmpl);
		modalDisplayWindowEdit(false);
	}
	modalAddClosed = () => {
		const {modalDisplayWindowEdit} = this.props;
		modalDisplayWindowEdit(false);
	};

	render(){
		console.log(this.props)
		const {modalWindowEdit} = this.props;
		if(modalWindowEdit) {	
			const {empls,itemId} = this.props;
			const empl = empls.find(item => item.id === +itemId);
			const {name, surname, position, subscribe} = empl;
				return(
					<React.Fragment>
						<div className="modal">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Изменить информацию</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.modalAddClosed}>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<form className="modal-body" onSubmit={this.editEmpls}>
										<input type="text" name="surname" className="form-control mr-sm-2" placeholder="Фамилия" onChange={this.onLabelChange} defaultValue={surname} required></input>
										<input type="text" name="name" className="form-control mr-sm-2" defaultValue={name} onChange={this.onLabelChange} required></input>
										<input type="text" onChange={this.onLabelChange} name="position" className="form-control mr-sm-2" defaultValue={position} required></input>
										<textarea name="subscribe" onChange={this.onLabelChange} className="form-control" defaultValue={subscribe}></textarea>
										<div className="modal-footer">
											<button type="submit" className="btn btn-primary">Сохранить</button>
											<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.modalAddClosed}>Закрыть</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="overlay_popup"></div>
					</React.Fragment>
			)
		}
		else {
			return null
		}
	}
}

const mapStateToProps = ({empls, modalWindow,modalWindowEdit}) => {
	return {empls,modalWindow,modalWindowEdit}
};
const mapDispatchToProps = {
	modalDisplayWindowEdit,
	editEmpl
}
export default connect(mapStateToProps,mapDispatchToProps)(EmplModalEdit);