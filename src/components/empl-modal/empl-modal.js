import React,{Component} from 'react';
import {connect} from 'react-redux';
import './empl-modal.css'
import {modalDisplayWindow,addNewEmpl} from '../../actions';

class EmplModal extends Component {
	maxId = 100;

	state = {
		id: 0,
		name: '',
		surname: '',
		position: '',
		subscribe: ''
		};
	
	modalAddClosed = () => {
		const {modalDisplayWindow} = this.props;
		modalDisplayWindow(false);
	};
	onLabelChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState(
			{[name]: value}
		);
	};

	addNewEmpls = (e) => {
		const {addNewEmpl,modalDisplayWindow} = this.props;
		e.preventDefault();
		const newEmpl = {
			...this.state,
			id: ++this.maxId
		};
		addNewEmpl(newEmpl);
		modalDisplayWindow(false);
	};

	render(){
		const {modalWindow,} = this.props;
			if(modalWindow) {	
				return(
					<React.Fragment>
						<div className="modal">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Добавить нового сотрудника</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.modalAddClosed}>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<form className="modal-body" onSubmit={this.addNewEmpls}>
										<input type="text" name="surname" className="form-control mr-sm-2" placeholder="Фамилия" onChange={this.onLabelChange} required></input>
										<input type="text" name="name" className="form-control mr-sm-2" placeholder="Имя" onChange={this.onLabelChange} required></input>
										<input type="text" onChange={this.onLabelChange} name="position" className="form-control mr-sm-2" placeholder="Должность" required></input>
										<textarea name="subscribe" onChange={this.onLabelChange} className="form-control" placeholder="Описание"></textarea>
										<div className="modal-footer">
											<button type="submit" className="btn btn-primary">Добавить сотрудника</button>
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

const mapStateToProps = ({empls,modalWindow}) => {
	return {empls,modalWindow}
};
const mapDispatchToProps = {
	modalDisplayWindow,
	addNewEmpl
}
export default connect(mapStateToProps,mapDispatchToProps)(EmplModal);