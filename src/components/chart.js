import React from 'react';

//sparkline is the parent, sparkLinesLine is a child
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color ={props.color} />
			</Sparklines>
		</div>
	); 
}