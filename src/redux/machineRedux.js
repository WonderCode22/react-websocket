import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

const FETCH_MACHINES_REQUEST = 'FETCH_MACHINES requested';
const FETCH_MACHINE_SUCCESS = 'FETCH_MACHINE success';
const UPDATE_MACHINE_HEALTH = 'MACHINE_HEALTH update';

export const fetch_machines_request = createAction(FETCH_MACHINES_REQUEST);
export const fetch_machines_success = createAction(FETCH_MACHINE_SUCCESS, machines => machines);
export const update_machine_health = createAction(UPDATE_MACHINE_HEALTH, (id, health) => ({id, health}))

const initialState = {
    loading: false,
    machines: []
}

export const fetchMachines = () => {
    return (dispatch) => {
        dispatch(fetch_machines_request());
        axios.get('http://localhost:8080/machines')
        .then(response => {
            const machines = response.data;
            dispatch(fetch_machines_success(machines));
        });
    }
}

export const fetchMachineDetail = (id) => {
    return (dispatch) => {
        dispatch(fetch_machines_request());
        axios.get('http://localhost:8080/machines')
        .then(response => {
            const machines = response.data;
            dispatch(fetch_machines_success(machines));
        });
    }
}

export const machineReducer = handleActions({
    [FETCH_MACHINES_REQUEST]: (state, action) => ({
        ...state,
        loading: true
    }),

    [FETCH_MACHINE_SUCCESS]: (state, action) => ({
        loading: false,
        machines: action.payload
    }),

    [UPDATE_MACHINE_HEALTH]: (state, action) => ({
        ...state,
        machines: state.machines.map(row => row.id === action.payload.id ? {...row, health:action.payload.health} : row)
    })
}, initialState)