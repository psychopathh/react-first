import React,{Component} from 'react';
import {connect} from 'react-redux';
import EmplItem from '../empl-item';
import {emplsLoaded,modalDisplayWindow} from '../../actions';

const EmplList = ({empls,addNewEmpl}) => {
	return (
		<div className="container">
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col">Имя</th>
						<th className="col">Фамилия</th>
						<th className="col">Должность</th>
					</tr>
				</thead>
				<tbody>
					{
						empls.map((empl) => {
							return <EmplItem empl={empl} key={empl.id}/>
						})
					}
				</tbody>
			</table>
			<button 
				className="btn btn-primary"
				onClick={() => addNewEmpl()}
				>Добавить сотрудника </button>
		</div>
	)
};

class EmplListContainer extends Component {
	addNewEmpl = ()=> {
		const {modalDisplayWindow} = this.props;
		modalDisplayWindow(true)
	};

	render() {
		const {empls} = this.props;
		return <EmplList empls={empls} addNewEmpl={this.addNewEmpl}/>
	}
};

const mapStateToProps = ({empls, modalWindow}) => {
	return {empls,modalWindow}
};

const mapDispatchToProps ={
	emplsLoaded,
	modalDisplayWindow
}
export default connect(mapStateToProps,mapDispatchToProps)(EmplListContainer);