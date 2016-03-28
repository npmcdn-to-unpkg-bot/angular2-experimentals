System.register(['express', './apis', './users', './auth'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express_1, apis_1, users_1, auth_1;
    var Routes;
    return {
        setters:[
            function (express_1_1) {
                express_1 = express_1_1;
            },
            function (apis_1_1) {
                apis_1 = apis_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            }],
        execute: function() {
            Routes = (function () {
                function Routes() {
                }
                Routes.init = function (app) {
                    var router = express_1.Router();
                    router
                        .route('/')
                        .get(function (req, res) {
                        res.render('index');
                    });
                    app.use('/', router);
                    users_1.Users.init(app);
                    apis_1.Apis.init(app);
                    auth_1.Auth.init(app);
                };
                return Routes;
            }());
            exports_1("Routes", Routes);
        }
    }
});
//# sourceMappingURL=index.js.map