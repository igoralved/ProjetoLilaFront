import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

export const myRxStompConfig: InjectableRxStompConfig = {
  //endereco do servidor 
  brokerURL: environment.WEBSOCKET_URL+'gameplay',
  webSocketFactory: () => new SockJS(environment.API_URL+'gameplay'),


  //DEBUG: Remover na produção
  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};