#!/usr/bin/env node

import * as express from 'express';
import * as os from 'os';
import {ExpressConfig} from './config/express.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';
import {Application} from 'express';

/**
 * Get express application
 */
const app: Application = express();

ExpressConfig.init(app);
DBConfig.init();
Routes.init(app);

// TODO add authentication

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`up and running @ ${os.hostname()} on port: ${port}`);
});
