System.register(['express'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express_1;
    var Auth;
    return {
        setters:[
            function (express_1_1) {
                express_1 = express_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth() {
                }
                Auth.init = function (app) {
                    var router = express_1.Router();
                    router
                        .route('/')
                        .get(function (req, res) {
                        res.render('index');
                    });
                    app.use('/auth', router);
                };
                return Auth;
            }());
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=auth.js.map