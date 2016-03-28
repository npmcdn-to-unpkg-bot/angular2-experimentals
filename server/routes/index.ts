import {Application, Request, Response, Router} from 'express';
import {Apis} from './apis';
import {Users} from './users';
import {Auth} from './auth';

export class Routes {
  public static init(app: Application): void {
    const router = Router();
    router
      .route('/')
      .get((req: Request, res: Response) => {
        res.render('index');
      });
    app.use('/', router);
    Users.init(app);
    Apis.init(app);
    Auth.init(app);
  }
}
