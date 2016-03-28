System.register(['express'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express_1;
    var Apis;
    return {
        setters:[
            function (express_1_1) {
                express_1 = express_1_1;
            }],
        execute: function() {
            Apis = (function () {
                function Apis() {
                }
                Apis.init = function (app) {
                    var router = express_1.Router();
                    router
                        .route('/')
                        .get(function (req, res) {
                        res.render('index');
                    });
                    app.use('/api', router);
                };
                return Apis;
            }());
            exports_1("Apis", Apis);
        }
    }
});
//# sourceMappingURL=apis.js.map