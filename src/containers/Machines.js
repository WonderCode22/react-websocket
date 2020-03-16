import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import { ProgressBar} from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles'


/* eslint-disable react/prop-types */
function Machines({ loading, machines, onSelect }){

	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>IP Address</TableCell>
						<TableCell>Health</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
				{machines.map(row => (
					<TableRow key={row.id} onClick={(e) => onSelect(row.id)}>
						<TableCell component="th" scope="row">
							{row.name}
						</TableCell>
						<TableCell>{row.ip_address}</TableCell>
						<TableCell>
							<ProgressBar now={row.health} label={`${row.health}`}/>
						</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
/* eslint-enable react/prop-types */
export default Machines