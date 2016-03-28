System.register(['mongoose'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var mongoose;
    var DBConfig;
    return {
        setters:[
            function (mongoose_1) {
                mongoose = mongoose_1;
            }],
        execute: function() {
            DBConfig = (function () {
                function DBConfig() {
                }
                DBConfig.init = function () {
                    var db = mongoose.connection;
                    mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/angular2-experimental');
                    db.on('error', console.error.bind(console, 'connection error:'));
                    db.once('open', function () {
                        console.log("Successfully connected to mongoDB");
                    });
                };
                return DBConfig;
            }());
            exports_1("DBConfig", DBConfig);
        }
    }
});
//# sourceMappingURL=db.conf.js.map