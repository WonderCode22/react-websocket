import React, { Component } from 'react';
import { connect } from 'react-redux';
import Machines from './Machines';
import { fetchMachines } from '../redux/machineRedux';
import { withRouter } from 'react-router-dom'

/* eslint-disable react/prop-types */

class MachineContainer extends Component{
    componentDidMount = () => {
        this.props.fetchMatchines()
    }
    
    handleSelect = (id) => {
        this.props.history.push(`/machines/${id}`)
    }

    render(){
        const { loading, machines } = this.props;
        const { handleSelect } = this;
        return (
            <Machines machines={machines} loading={loading} onSelect={handleSelect}/>
        )
    }
}

export default connect(
    (state) => ({
        loading: state.loading,
        machines: state.machines
    }),
    (dispatch) => ({
        fetchMatchines: () => dispatch(fetchMachines())
    })
)(withRouter(MachineContainer))
/* eslint-enable react/prop-types */