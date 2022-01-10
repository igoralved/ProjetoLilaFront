import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

export class WebSocketConnector {

    private stompClient: Client;

    constructor(private webSocketEndPoint: string, private topic: string, private onMessage: Function, private callbackError?: Function) {
        const errorCallback = callbackError || this.onError;
        this.connect(errorCallback);
        this.stompClient = {} as Client;
    }

    private connect(errorCallback: Function) {
        console.log("Starting a WebSocket connection");  
         
        this.stompClient = new Client();

        // this.stompClient.webSocketFactory = function(){
        //     return new SockJS("http://localhost:8080/gameplay");
        // }  
        this.stompClient.brokerURL = this.webSocketEndPoint;    

        this.stompClient.onConnect = frame =>{console.warn("conectado") };
        this.stompClient.activate();
    };

    private onError(error: any) {
        console.log("Error while connect: " + error);
        setTimeout(() => {
            console.log("Trying to connect again...");
            this.connect(this.onError);
        }, 3000);
    }


}