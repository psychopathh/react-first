import React from 'react';
import './empl-item.css';
import {withRouter} from 'react-router-dom';
import EmplDetails from '../../components/empl-details';
const EmplItem = ({empl, history}) => {
	const {name, surname, position} = empl;
	return (
		<tr className="empl-item-tr" onClick={()=>{
			history.push(`/details/${empl.id}`);
			return <EmplDetails empl={empl} />
		}}>
			<td>{name}</td>
			<td>{surname}</td>
			<td>{position}</td>
		</tr>
	)
};

export default withRouter(EmplItem);