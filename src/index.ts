import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';

(async () => {
  await connectOn({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'whatsapp',
  });

  //

  await connectOFF();
})();
