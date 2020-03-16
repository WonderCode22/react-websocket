import React, { Component } from 'react';
import MachineDetail from './MachineDetail';
import { connect } from 'react-redux';
import { Fragment } from 'react';

/* eslint-disable react/prop-types */
class MachineDetailContainer extends Component {
    render(){
        return (
            <Fragment>
                { this.props.data && <MachineDetail data={this.props.data} /> }
            </Fragment>)
    }
}

export default connect(
    (state, props) => ({
        data: state.machines.find(row => row.id === props.match.params.id)
    })
)(MachineDetailContainer);
/* eslint-enable react/prop-types */