'use strict';

import * as mongoose from 'mongoose';

export class DBConfig {
  public static init(): void {
    const db = mongoose.connection;
    mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/angular2-experimental');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log("Successfully connected to mongoDB");
    });
  }
}
