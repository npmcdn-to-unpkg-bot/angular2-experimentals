System.register(['express'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express_1;
    var Users;
    return {
        setters:[
            function (express_1_1) {
                express_1 = express_1_1;
            }],
        execute: function() {
            Users = (function () {
                function Users() {
                }
                Users.init = function (app) {
                    var router = express_1.Router();
                    router
                        .route('/')
                        .get(function (req, res) {
                        res.render('index');
                    });
                    app.use('/users', router);
                };
                return Users;
            }());
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=users.js.map