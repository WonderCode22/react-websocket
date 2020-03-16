import store from './redux/store';
import { update_machine_health } from './redux/machineRedux';

const sock = new WebSocket('ws://localhost:1337');

sock.onopen = function open(){
    
}

sock.onmessage = function msg(event){
    const msg = event.data;
    const data = JSON.parse(msg);
    
    if(data){
        switch(data.type){
            case 'HEALTH_UPDATE':
                store.dispatch(update_machine_health(data.id, data.health));
                break;
            default:
                console.log('SOCKET invalid type')
                break;
        }
    }
}