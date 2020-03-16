import React from 'react'
import { ProgressBar, Jumbotron } from 'react-bootstrap'

/* eslint-disable react/prop-types */
const MachineDetail = ({data}) => {
    return(
        <div className='row'>
            <div className='col-lg-6'>
                <h2>{data.name}</h2>
                <h4>Update Device</h4>
            </div>
            <div className='col-lg-6'>
                <Jumbotron>
                    <h1>{data.health}</h1>
                    <ProgressBar now={data.health}/>
                </Jumbotron>
                <h3>Stats</h3>
                <p>{data.ip_address}</p>
            </div>
        </div>
    )
}

export default MachineDetail;
/* eslint-enable react/prop-types */