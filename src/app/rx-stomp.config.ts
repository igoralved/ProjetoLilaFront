import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';

export const myRxStompConfig: InjectableRxStompConfig = {
  //endereco do servidor 
  brokerURL: 'ws://localhost:8080/gameplay',
  webSocketFactory: () => new SockJS('http://localhost:8080/gameplay'),


  //TODO: Remover na produção
  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);    
  },
};