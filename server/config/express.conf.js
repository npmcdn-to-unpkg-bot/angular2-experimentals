System.register(['morgan', 'body-parser', 'helmet', 'path', 'express'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var morgan, bodyParser, helmet, path, express_1;
    var ExpressConfig;
    return {
        setters:[
            function (morgan_1) {
                morgan = morgan_1;
            },
            function (bodyParser_1) {
                bodyParser = bodyParser_1;
            },
            function (helmet_1) {
                helmet = helmet_1;
            },
            function (path_1) {
                path = path_1;
            },
            function (express_1_1) {
                express_1 = express_1_1;
            }],
        execute: function() {
            ExpressConfig = (function () {
                function ExpressConfig() {
                }
                ExpressConfig.init = function (app) {
                    app.set('views', path.join(__dirname, '../../client'));
                    app.set('view engine', 'ejs');
                    app.use(express_1.static(path.join(__dirname, '../../client')));
                    app.use(bodyParser.json());
                    app.use(morgan('dev'));
                    app.use(helmet());
                };
                return ExpressConfig;
            }());
            exports_1("ExpressConfig", ExpressConfig);
        }
    }
});
//# sourceMappingURL=express.conf.js.map