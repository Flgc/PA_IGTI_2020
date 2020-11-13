import { Base } from './model';
import { connectOn, connectOFF } from './dao/mysql';

(async () => {
  await connectOn();

  await connectOFF();
})();
