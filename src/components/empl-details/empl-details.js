import React,{Component} from 'react';
import './empl-details.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {modalDisplayWindowEdit} from '../../actions';

class EmplDetails extends Component {
	editEmpl = ()=> {
		const {modalDisplayWindowEdit} = this.props;
		modalDisplayWindowEdit(true)
	};
	render() {
		const {itemId, empls} = this.props;
		const empl = empls.find(item => item.id === +itemId);
		const {name, surname, position, subscribe} = empl;
		return (
			<div className="container">
				<table className="table">
				<thead>
					<tr>
						<th className="col">Имя</th>
						<th className="col">Фамилия</th>
						<th className="col">Должность</th>
						<th className="col description">Описание</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{surname}</td>
						<td>{position}</td>
						<td>{subscribe}</td>
					</tr>
				</tbody>
			</table>
			<div className="modal-footer">
				<Link to="/" className="btn btn-primary">К списку </Link>
				<button onClick={()=>this.editEmpl()} className="btn btn-primary">Редактировать</button>
			</div>
			</div>
		)
	}
}

const mapStateToProps = ({empls}) => {
	return {empls}
};
const mapDispatchToProps ={
	modalDisplayWindowEdit
}
export default connect(mapStateToProps,mapDispatchToProps)(EmplDetails);