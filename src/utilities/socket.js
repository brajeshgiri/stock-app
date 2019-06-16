
// import { STOCK_WEB_SOCKET_URI } from './uriConstants';
const STOCK_WEB_SOCKET_URI = "ws://stocks.mnet.website";

export default (onMessage) => {
    if (typeof WebSocket !== 'undefined') {
        const ws = new WebSocket(STOCK_WEB_SOCKET_URI);

        ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const data = JSON.parse(evt.data)
            onMessage(data);
        }

        ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            // ws = new WebSocket(URL),
        }
    }
}