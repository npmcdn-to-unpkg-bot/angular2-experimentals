import {Application, Request, Response, Router} from 'express';

export class Auth {
  public static init(app: Application) {
    const router = Router();
    router
      .route('/')
      .get((req: Request, res: Response) => {
        res.render('index');
      });
    app.use('/auth', router);
  }
}
