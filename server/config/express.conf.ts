'use strict';

import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as path from 'path';
import {Application, static as expressStatic} from 'express';

export class ExpressConfig {
  public static init(app: Application): void {
    app.set('views', path.join(__dirname, '../../client'));
    app.set('view engine', 'ejs');
    app.use(expressStatic(path.join(__dirname, '../../client')));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(helmet());
  }
}
