#!/usr/bin/env node
System.register(['express', 'os', './config/express.conf', './config/db.conf', './routes/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, os, express_conf_1, db_conf_1, index_1;
    var app, port;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (os_1) {
                os = os_1;
            },
            function (express_conf_1_1) {
                express_conf_1 = express_conf_1_1;
            },
            function (db_conf_1_1) {
                db_conf_1 = db_conf_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            /**
             * Get express application
             */
            app = express();
            express_conf_1.ExpressConfig.init(app);
            db_conf_1.DBConfig.init();
            index_1.Routes.init(app);
            // TODO add authentication
            port = process.env.PORT || 3000;
            app.listen(port, function () {
                console.log("up and running @ " + os.hostname() + " on port: " + port);
            });
        }
    }
});
//# sourceMappingURL=app.js.map