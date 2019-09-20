(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node/src/_client/_config.ts":
/*!**************************************!*\
  !*** ../node/src/_client/_config.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


var Configuration = /** @class */ (function () {
    function Configuration() {
        this._defConfiguration = {
            EXPRESS_HOST: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].EXPRESS_HOST,
            EXPRESS_PORT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].EXPRESS_PORT,
            SOCKET_HOST: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SOCKET_HOST,
            SOCKET_PORT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SOCKET_PORT,
            SOCKET_TIMEOUT_MILLIS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SOCKET_TIMEOUT_MILLIS
        };
    }
    Object.defineProperty(Configuration, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "production", {
        get: function () {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "ExpressPort", {
        get: function () {
            return this._defConfiguration.EXPRESS_PORT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "ExpressHost", {
        get: function () {
            return this._defConfiguration.EXPRESS_HOST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "SocketPort", {
        get: function () {
            return this._defConfiguration.SOCKET_PORT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "SocketHost", {
        get: function () {
            return this._defConfiguration.SOCKET_HOST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "SocketTimeoutMillis", {
        get: function () {
            return this._defConfiguration.SOCKET_TIMEOUT_MILLIS;
        },
        enumerable: true,
        configurable: true
    });
    Configuration.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("_defConfiguration: ", this._defConfiguration);
                return [2 /*return*/];
            });
        });
    };
    Configuration._instance = new Configuration();
    return Configuration;
}());
/* harmony default export */ __webpack_exports__["default"] = (Configuration.Instance);


/***/ }),

/***/ "../node/src/_client/_init.ts":
/*!************************************!*\
  !*** ../node/src/_client/_init.ts ***!
  \************************************/
/*! exports provided: Initializer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initializer", function() { return Initializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager/ConnectionManager */ "../node/src/_client/manager/ConnectionManager.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_config */ "../node/src/_client/_config.ts");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "../node/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);




var Initializer = /** @class */ (function () {
    function Initializer() {
        this._initialized = false;
    }
    Object.defineProperty(Initializer.prototype, "calledInit", {
        get: function () {
            return this._calledInit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Initializer.prototype, "initialized", {
        get: function () {
            return this._initialized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Initializer.prototype, "eventEmitter", {
        get: function () {
            return this._eventEmitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Initializer, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Initializer.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._calledInit) return [3 /*break*/, 3];
                        this._calledInit = true;
                        this._eventEmitter = new events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
                        return [4 /*yield*/, _config__WEBPACK_IMPORTED_MODULE_2__["default"].init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"].init()];
                    case 2:
                        _a.sent();
                        this._initialized = true;
                        this._eventEmitter.emit('completed');
                        return [3 /*break*/, 5];
                    case 3:
                        if (!!this._initialized) return [3 /*break*/, 5];
                        return [4 /*yield*/, new Promise(function (accept) {
                                _this._eventEmitter.on('completed', accept);
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Initializer._instance = new Initializer();
    return Initializer;
}());

/* harmony default export */ __webpack_exports__["default"] = (Initializer.Instance);


/***/ }),

/***/ "../node/src/_client/controller/auth.ts":
/*!**********************************************!*\
  !*** ../node/src/_client/controller/auth.ts ***!
  \**********************************************/
/*! exports provided: AuthController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/ConnectionManager */ "../node/src/_client/manager/ConnectionManager.ts");
/* harmony import */ var _enums_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/routes */ "../node/src/_client/enums/routes.ts");



var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    Object.defineProperty(AuthController, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    AuthController.prototype.signUp = function (request) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"].call(_enums_routes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ROUTES"].SIGN_UP, request)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthController.prototype.signIn = function (request) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"].call(_enums_routes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ROUTES"].SIGN_IN, request)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthController.prototype.changePassword = function (request, jwt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"].call(_enums_routes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ROUTES"].CHANGE_PASSWORD, request, jwt)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthController._instance = new AuthController();
    return AuthController;
}());

/* harmony default export */ __webpack_exports__["default"] = (AuthController.Instance);


/***/ }),

/***/ "../node/src/_client/controller/price.ts":
/*!***********************************************!*\
  !*** ../node/src/_client/controller/price.ts ***!
  \***********************************************/
/*! exports provided: PriceController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceController", function() { return PriceController; });
/* harmony import */ var _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/ConnectionManager */ "../node/src/_client/manager/ConnectionManager.ts");
/* harmony import */ var _enums_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/routes */ "../node/src/_client/enums/routes.ts");
/* harmony import */ var _enums_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/symbols */ "../node/src/_client/enums/symbols.ts");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "../node/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);




var PriceController = /** @class */ (function () {
    function PriceController() {
        this._callbacks = {};
    }
    Object.defineProperty(PriceController, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PriceController.prototype.getRoute = function (symbol) {
        if (symbol === _enums_symbols__WEBPACK_IMPORTED_MODULE_2__["SYMBOL"].XBT) {
            return _enums_routes__WEBPACK_IMPORTED_MODULE_1__["PRICE_ROUTES"].PRICE_UPDATE_XBT;
        }
        return null;
    };
    PriceController.prototype.listenToPrice = function (symbol, token) {
        var _this = this;
        if (this._callbacks[symbol]) {
            return this._callbacks[symbol].emitter;
        }
        this._callbacks[symbol] = { emitter: new events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]() };
        var handler = function (payload) {
            if (_this._callbacks[symbol]) {
                _this._callbacks[symbol].emitter.emit(symbol, payload);
            }
            else {
                _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_0__["default"].unlisten(symbol, handler);
            }
        };
        _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_0__["default"].listen(this.getRoute(symbol), handler);
        return this._callbacks[symbol].emitter;
    };
    PriceController.prototype.unlistenToPrice = function (symbol, listener) {
        if (listener) {
            this._callbacks[symbol].emitter.removeListener(symbol, listener);
        }
        else {
            this._callbacks[symbol].emitter.removeAllListeners();
            delete this._callbacks[symbol];
        }
    };
    PriceController._instance = new PriceController();
    return PriceController;
}());

/* harmony default export */ __webpack_exports__["default"] = (PriceController.Instance);


/***/ }),

/***/ "../node/src/_client/controller/user.ts":
/*!**********************************************!*\
  !*** ../node/src/_client/controller/user.ts ***!
  \**********************************************/
/*! exports provided: UserController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/ConnectionManager */ "../node/src/_client/manager/ConnectionManager.ts");
/* harmony import */ var _enums_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/routes */ "../node/src/_client/enums/routes.ts");



var UserController = /** @class */ (function () {
    function UserController() {
    }
    Object.defineProperty(UserController, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    UserController.prototype.updateAccount = function (request, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"]
                            .call(_enums_routes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ROUTES"].UPDATE_ACCOUNT, request, token)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserController.prototype.fetchAccount = function (request, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_1__["default"]
                            .call(_enums_routes__WEBPACK_IMPORTED_MODULE_2__["AUTH_ROUTES"].FETCH_ACCOUNT, request, token)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserController._instance = new UserController();
    return UserController;
}());

/* harmony default export */ __webpack_exports__["default"] = (UserController.Instance);


/***/ }),

/***/ "../node/src/_client/enums/Country.ts":
/*!********************************************!*\
  !*** ../node/src/_client/enums/Country.ts ***!
  \********************************************/
/*! exports provided: USED_COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USED_COUNTRIES", function() { return USED_COUNTRIES; });
var USED_COUNTRIES = [{ "code": "AFG", "name": " Afghanistan" },
    { "code": "ALA", "name": " Åland Islands" },
    { "code": "ALB", "name": " Albania" },
    { "code": "DZA", "name": " Algeria" },
    { "code": "ASM", "name": " American Samoa" },
    { "code": "AND", "name": " Andorra" },
    { "code": "AGO", "name": " Angola" },
    { "code": "AIA", "name": " Anguilla" },
    { "code": "ATA", "name": " Antarctica [a]" },
    { "code": "ATG", "name": " Antigua and Barbuda" },
    { "code": "ARG", "name": " Argentina" },
    { "code": "ARM", "name": " Armenia" },
    { "code": "ABW", "name": " Aruba" },
    { "code": "AUS", "name": " Australia [b]" },
    { "code": "AUT", "name": " Austria" },
    { "code": "AZE", "name": " Azerbaijan" },
    { "code": "BHS", "name": " Bahamas (the)" },
    { "code": "BHR", "name": " Bahrain" },
    { "code": "BGD", "name": " Bangladesh" },
    { "code": "BRB", "name": " Barbados" },
    { "code": "BLR", "name": " Belarus" },
    { "code": "BEL", "name": " Belgium" },
    { "code": "BLZ", "name": " Belize" },
    { "code": "BEN", "name": " Benin" },
    { "code": "BMU", "name": " Bermuda" },
    { "code": "BTN", "name": " Bhutan" },
    { "code": "BOL", "name": " Bolivia (Plurinational State of)" },
    { "code": "BES", "name": " Bonaire\n Sint Eustatius\n Saba" },
    { "code": "BIH", "name": " Bosnia and Herzegovina" },
    { "code": "BWA", "name": " Botswana" },
    { "code": "BVT", "name": " Bouvet Island" },
    { "code": "BRA", "name": " Brazil" },
    { "code": "IOT", "name": " British Indian Ocean Territory (the)" },
    { "code": "BRN", "name": " Brunei Darussalam [e]" },
    { "code": "BGR", "name": " Bulgaria" },
    { "code": "BFA", "name": " Burkina Faso" },
    { "code": "BDI", "name": " Burundi" },
    { "code": "CPV", "name": " Cabo Verde [f]" },
    { "code": "KHM", "name": " Cambodia" },
    { "code": "CMR", "name": " Cameroon" },
    { "code": "CAN", "name": " Canada" },
    { "code": "CYM", "name": " Cayman Islands (the)" },
    { "code": "CAF", "name": " Central African Republic (the)" },
    { "code": "TCD", "name": " Chad" },
    { "code": "CHL", "name": " Chile" },
    { "code": "CHN", "name": " China" },
    { "code": "CXR", "name": " Christmas Island" },
    { "code": "CCK", "name": " Cocos (Keeling) Islands (the)" },
    { "code": "COL", "name": " Colombia" },
    { "code": "COM", "name": " Comoros (the)" },
    { "code": "COD", "name": " Congo (the Democratic Republic of the)" },
    { "code": "COG", "name": " Congo (the) [g]" },
    { "code": "COK", "name": " Cook Islands (the)" },
    { "code": "CRI", "name": " Costa Rica" },
    { "code": "CIV", "name": " Côte d'Ivoire [h]" },
    { "code": "HRV", "name": " Croatia" },
    { "code": "CUB", "name": " Cuba" },
    { "code": "CUW", "name": " Curaçao" },
    { "code": "CYP", "name": " Cyprus" },
    { "code": "CZE", "name": " Czechia [i]" },
    { "code": "DNK", "name": " Denmark" },
    { "code": "DJI", "name": " Djibouti" },
    { "code": "DMA", "name": " Dominica" },
    { "code": "DOM", "name": " Dominican Republic (the)" },
    { "code": "ECU", "name": " Ecuador" },
    { "code": "EGY", "name": " Egypt" },
    { "code": "SLV", "name": " El Salvador" },
    { "code": "GNQ", "name": " Equatorial Guinea" },
    { "code": "ERI", "name": " Eritrea" },
    { "code": "EST", "name": " Estonia" },
    { "code": "SWZ", "name": " Eswatini [j]" },
    { "code": "ETH", "name": " Ethiopia" },
    { "code": "FLK", "name": " Falkland Islands (the) [Malvinas] [k]" },
    { "code": "FRO", "name": " Faroe Islands (the)" },
    { "code": "FJI", "name": " Fiji" },
    { "code": "FIN", "name": " Finland" },
    { "code": "FRA", "name": " France [l]" },
    { "code": "GUF", "name": " French Guiana" },
    { "code": "PYF", "name": " French Polynesia" },
    { "code": "ATF", "name": " French Southern Territories (the) [m]" },
    { "code": "GAB", "name": " Gabon" },
    { "code": "GMB", "name": " Gambia (the)" },
    { "code": "GEO", "name": " Georgia" },
    { "code": "DEU", "name": " Germany" },
    { "code": "GHA", "name": " Ghana" },
    { "code": "GIB", "name": " Gibraltar" },
    { "code": "GRC", "name": " Greece" },
    { "code": "GRL", "name": " Greenland" },
    { "code": "GRD", "name": " Grenada" },
    { "code": "GLP", "name": " Guadeloupe" },
    { "code": "GUM", "name": " Guam" },
    { "code": "GTM", "name": " Guatemala" },
    { "code": "GGY", "name": " Guernsey" },
    { "code": "GIN", "name": " Guinea" },
    { "code": "GNB", "name": " Guinea-Bissau" },
    { "code": "GUY", "name": " Guyana" },
    { "code": "HTI", "name": " Haiti" },
    { "code": "HMD", "name": " Heard Island and McDonald Islands" },
    { "code": "VAT", "name": " Holy See (the) [n]" },
    { "code": "HND", "name": " Honduras" },
    { "code": "HKG", "name": " Hong Kong" },
    { "code": "HUN", "name": " Hungary" },
    { "code": "ISL", "name": " Iceland" },
    { "code": "IND", "name": " India" },
    { "code": "IDN", "name": " Indonesia" },
    { "code": "IRN", "name": " Iran (Islamic Republic of)" },
    { "code": "IRQ", "name": " Iraq" },
    { "code": "IRL", "name": " Ireland" },
    { "code": "IMN", "name": " Isle of Man" },
    { "code": "ISR", "name": " Israel" },
    { "code": "ITA", "name": " Italy" },
    { "code": "JAM", "name": " Jamaica" },
    { "code": "JPN", "name": " Japan" },
    { "code": "JEY", "name": " Jersey" },
    { "code": "JOR", "name": " Jordan" },
    { "code": "KAZ", "name": " Kazakhstan" },
    { "code": "KEN", "name": " Kenya" },
    { "code": "KIR", "name": " Kiribati" },
    { "code": "PRK", "name": " Korea (the Democratic People's Republic of) [o]" },
    { "code": "KOR", "name": " Korea (the Republic of) [p]" },
    { "code": "KWT", "name": " Kuwait" },
    { "code": "KGZ", "name": " Kyrgyzstan" },
    { "code": "LAO", "name": " Lao People's Democratic Republic (the) [q]" },
    { "code": "LVA", "name": " Latvia" },
    { "code": "LBN", "name": " Lebanon" },
    { "code": "LSO", "name": " Lesotho" },
    { "code": "LBR", "name": " Liberia" },
    { "code": "LBY", "name": " Libya" },
    { "code": "LIE", "name": " Liechtenstein" },
    { "code": "LTU", "name": " Lithuania" },
    { "code": "LUX", "name": " Luxembourg" },
    { "code": "MAC", "name": " Macao [r]" },
    { "code": "MKD", "name": " North Macedonia [s]" },
    { "code": "MDG", "name": " Madagascar" },
    { "code": "MWI", "name": " Malawi" },
    { "code": "MYS", "name": " Malaysia" },
    { "code": "MDV", "name": " Maldives" },
    { "code": "MLI", "name": " Mali" },
    { "code": "MLT", "name": " Malta" },
    { "code": "MHL", "name": " Marshall Islands (the)" },
    { "code": "MTQ", "name": " Martinique" },
    { "code": "MRT", "name": " Mauritania" },
    { "code": "MUS", "name": " Mauritius" },
    { "code": "MYT", "name": " Mayotte" },
    { "code": "MEX", "name": " Mexico" },
    { "code": "FSM", "name": " Micronesia (Federated States of)" },
    { "code": "MDA", "name": " Moldova (the Republic of)" },
    { "code": "MCO", "name": " Monaco" },
    { "code": "MNG", "name": " Mongolia" },
    { "code": "MNE", "name": " Montenegro" },
    { "code": "MSR", "name": " Montserrat" },
    { "code": "MAR", "name": " Morocco" },
    { "code": "MOZ", "name": " Mozambique" },
    { "code": "MMR", "name": " Myanmar [t]" },
    { "code": "NAM", "name": " Namibia" },
    { "code": "NRU", "name": " Nauru" },
    { "code": "NPL", "name": " Nepal" },
    { "code": "NLD", "name": " Netherlands (the)" },
    { "code": "NCL", "name": " New Caledonia" },
    { "code": "NZL", "name": " New Zealand" },
    { "code": "NIC", "name": " Nicaragua" },
    { "code": "NER", "name": " Niger (the)" },
    { "code": "NGA", "name": " Nigeria" },
    { "code": "NIU", "name": " Niue" },
    { "code": "NFK", "name": " Norfolk Island" },
    { "code": "MNP", "name": " Northern Mariana Islands (the)" },
    { "code": "NOR", "name": " Norway" },
    { "code": "OMN", "name": " Oman" },
    { "code": "PAK", "name": " Pakistan" },
    { "code": "PLW", "name": " Palau" },
    { "code": "PSE", "name": " Palestine, State of" },
    { "code": "PAN", "name": " Panama" },
    { "code": "PNG", "name": " Papua New Guinea" },
    { "code": "PRY", "name": " Paraguay" },
    { "code": "PER", "name": " Peru" },
    { "code": "PHL", "name": " Philippines (the)" },
    { "code": "PCN", "name": " Pitcairn [u]" },
    { "code": "POL", "name": " Poland" },
    { "code": "PRT", "name": " Portugal" },
    { "code": "PRI", "name": " Puerto Rico" },
    { "code": "QAT", "name": " Qatar" },
    { "code": "REU", "name": " Réunion" },
    { "code": "ROU", "name": " Romania" },
    { "code": "RUS", "name": " Russian Federation (the) [v]" },
    { "code": "RWA", "name": " Rwanda" },
    { "code": "BLM", "name": " Saint Barthélemy" },
    { "code": "SHN", "name": " Saint Helena\n Ascension Island\n Tristan da Cunha" },
    { "code": "KNA", "name": " Saint Kitts and Nevis" },
    { "code": "LCA", "name": " Saint Lucia" },
    { "code": "MAF", "name": " Saint Martin (French part)" },
    { "code": "SPM", "name": " Saint Pierre and Miquelon" },
    { "code": "VCT", "name": " Saint Vincent and the Grenadines" },
    { "code": "WSM", "name": " Samoa" },
    { "code": "SMR", "name": " San Marino" },
    { "code": "STP", "name": " Sao Tome and Principe" },
    { "code": "SAU", "name": " Saudi Arabia" },
    { "code": "SEN", "name": " Senegal" },
    { "code": "SRB", "name": " Serbia" },
    { "code": "SYC", "name": " Seychelles" },
    { "code": "SLE", "name": " Sierra Leone" },
    { "code": "SGP", "name": " Singapore" },
    { "code": "SXM", "name": " Sint Maarten (Dutch part)" },
    { "code": "SVK", "name": " Slovakia" },
    { "code": "SVN", "name": " Slovenia" },
    { "code": "SLB", "name": " Solomon Islands" },
    { "code": "SOM", "name": " Somalia" },
    { "code": "ZAF", "name": " South Africa" },
    { "code": "SGS", "name": " South Georgia and the South Sandwich Islands" },
    { "code": "SSD", "name": " South Sudan" },
    { "code": "ESP", "name": " Spain" },
    { "code": "LKA", "name": " Sri Lanka" },
    { "code": "SDN", "name": " Sudan (the)" },
    { "code": "SUR", "name": " Suriname" },
    { "code": "SJM", "name": " Svalbard\n Jan Mayen" },
    { "code": "SWE", "name": " Sweden" },
    { "code": "CHE", "name": " Switzerland" },
    { "code": "SYR", "name": " Syrian Arab Republic (the) [x]" },
    { "code": "TWN", "name": " Taiwan (Province of China) [y]" },
    { "code": "TJK", "name": " Tajikistan" },
    { "code": "TZA", "name": " Tanzania, the United Republic of" },
    { "code": "THA", "name": " Thailand" },
    { "code": "TLS", "name": " Timor-Leste [aa]" },
    { "code": "TGO", "name": " Togo" },
    { "code": "TKL", "name": " Tokelau" },
    { "code": "TON", "name": " Tonga" },
    { "code": "TTO", "name": " Trinidad and Tobago" },
    { "code": "TUN", "name": " Tunisia" },
    { "code": "TUR", "name": " Turkey" },
    { "code": "TKM", "name": " Turkmenistan" },
    { "code": "TCA", "name": " Turks and Caicos Islands (the)" },
    { "code": "TUV", "name": " Tuvalu" },
    { "code": "UGA", "name": " Uganda" },
    { "code": "UKR", "name": " Ukraine" },
    { "code": "ARE", "name": " United Arab Emirates (the)" },
    { "code": "GBR", "name": " United Kingdom of Great Britain and Northern Ireland (the)" },
    { "code": "UMI", "name": " United States Minor Outlying Islands (the) [ac]" },
    { "code": "USA", "name": " United States of America (the)" },
    { "code": "URY", "name": " Uruguay" },
    { "code": "UZB", "name": " Uzbekistan" },
    { "code": "VUT", "name": " Vanuatu" },
    { "code": "VEN", "name": " Venezuela (Bolivarian Republic of)" },
    { "code": "VNM", "name": " Viet Nam [ae]" },
    { "code": "VGB", "name": " Virgin Islands (British) [af]" },
    { "code": "VIR", "name": " Virgin Islands (U.S.) [ag]" },
    { "code": "WLF", "name": " Wallis and Futuna" },
    { "code": "ESH", "name": " Western Sahara [ah]" },
    { "code": "YEM", "name": " Yemen" },
    { "code": "ZMB", "name": " Zambia" },
    { "code": "ZWE", "name": " Zimbabwe" }];


/***/ }),

/***/ "../node/src/_client/enums/allowedImages.ts":
/*!**************************************************!*\
  !*** ../node/src/_client/enums/allowedImages.ts ***!
  \**************************************************/
/*! exports provided: IMAGE_TYPES, MAX_PROFILE_IMAGE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_TYPES", function() { return IMAGE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PROFILE_IMAGE_SIZE", function() { return MAX_PROFILE_IMAGE_SIZE; });
var IMAGE_TYPES = [
    "image/webp",
    "image/gif",
    "image/png",
    "image/jpg",
    "image/svg"
];
var MAX_PROFILE_IMAGE_SIZE = 1024; //1024kb


/***/ }),

/***/ "../node/src/_client/enums/codes.ts":
/*!******************************************!*\
  !*** ../node/src/_client/enums/codes.ts ***!
  \******************************************/
/*! exports provided: RESULT_CODE, UI_RESULT_CODE, AUTH_STATE_CHANGE, SUCCESS_UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT_CODE", function() { return RESULT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_RESULT_CODE", function() { return UI_RESULT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_STATE_CHANGE", function() { return AUTH_STATE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_UI", function() { return SUCCESS_UI; });
var RESULT_CODE;
(function (RESULT_CODE) {
    RESULT_CODE[RESULT_CODE["SUCCESS"] = 200] = "SUCCESS";
    RESULT_CODE[RESULT_CODE["INVALID_PAYLOAD"] = -1] = "INVALID_PAYLOAD";
    RESULT_CODE[RESULT_CODE["INVALID_AUTH_TOKEN"] = -2] = "INVALID_AUTH_TOKEN";
    RESULT_CODE[RESULT_CODE["NOT_YET_IMPLEMENTED"] = -60] = "NOT_YET_IMPLEMENTED";
    RESULT_CODE[RESULT_CODE["EMAIL_ALREADY_REGISTERED"] = -100] = "EMAIL_ALREADY_REGISTERED";
    RESULT_CODE[RESULT_CODE["USERNAME_ALREADY_REGISTERED"] = -101] = "USERNAME_ALREADY_REGISTERED";
    RESULT_CODE[RESULT_CODE["EMAIL_DOES_NOT_EXIST"] = -102] = "EMAIL_DOES_NOT_EXIST";
    RESULT_CODE[RESULT_CODE["INVALID_PASSWORD"] = -103] = "INVALID_PASSWORD";
    RESULT_CODE[RESULT_CODE["INVALID_FIELD_AMMOUNT"] = -104] = "INVALID_FIELD_AMMOUNT";
    RESULT_CODE[RESULT_CODE["INVALID_TOKEN"] = -115] = "INVALID_TOKEN";
    RESULT_CODE[RESULT_CODE["INTERNAL_ERROR"] = -500] = "INTERNAL_ERROR";
})(RESULT_CODE || (RESULT_CODE = {}));
var UI_RESULT_CODE;
(function (UI_RESULT_CODE) {
    UI_RESULT_CODE[UI_RESULT_CODE["SUCCESS"] = 200] = "SUCCESS";
    UI_RESULT_CODE[UI_RESULT_CODE["INVALID_DATA"] = -1] = "INVALID_DATA";
    UI_RESULT_CODE[UI_RESULT_CODE["ERROR_INSERTING_DATA"] = -20] = "ERROR_INSERTING_DATA";
    UI_RESULT_CODE[UI_RESULT_CODE["INVALID_TABLE_NAME"] = -21] = "INVALID_TABLE_NAME";
    UI_RESULT_CODE[UI_RESULT_CODE["AUTH_INVALID"] = -22] = "AUTH_INVALID";
    UI_RESULT_CODE[UI_RESULT_CODE["PROFILE_IMAGE_TOO_BIG"] = -23] = "PROFILE_IMAGE_TOO_BIG";
})(UI_RESULT_CODE || (UI_RESULT_CODE = {}));
var AUTH_STATE_CHANGE;
(function (AUTH_STATE_CHANGE) {
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["LOGGED_IN"] = 25] = "LOGGED_IN";
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["LOGGED_OUT"] = 26] = "LOGGED_OUT";
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["CHANGED"] = 27] = "CHANGED"; //Loaded state, unspecified (i.e., when the app first starts)
})(AUTH_STATE_CHANGE || (AUTH_STATE_CHANGE = {}));
var SUCCESS_UI;
(function (SUCCESS_UI) {
    SUCCESS_UI[SUCCESS_UI["CREATED_ACCOUNT"] = 24] = "CREATED_ACCOUNT";
    SUCCESS_UI[SUCCESS_UI["LOGGED_IN"] = 25] = "LOGGED_IN";
    SUCCESS_UI[SUCCESS_UI["LOGGED_OUT"] = 26] = "LOGGED_OUT";
    SUCCESS_UI[SUCCESS_UI["CHANGED_PASSWORD"] = 27] = "CHANGED_PASSWORD";
})(SUCCESS_UI || (SUCCESS_UI = {}));


/***/ }),

/***/ "../node/src/_client/enums/routes.ts":
/*!*******************************************!*\
  !*** ../node/src/_client/enums/routes.ts ***!
  \*******************************************/
/*! exports provided: AUTH_ROUTES, PRICE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ROUTES", function() { return AUTH_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_ROUTES", function() { return PRICE_ROUTES; });
var AUTH_ROUTES;
(function (AUTH_ROUTES) {
    AUTH_ROUTES["SIGN_UP"] = "auth::signup";
    AUTH_ROUTES["SIGN_IN"] = "auth::signin";
    AUTH_ROUTES["CHANGE_PASSWORD"] = "auth::change_password";
    AUTH_ROUTES["UPDATE_ACCOUNT"] = "auth::update_account";
    AUTH_ROUTES["FETCH_ACCOUNT"] = "auth::fetch_account";
})(AUTH_ROUTES || (AUTH_ROUTES = {}));
var PRICE_ROUTES;
(function (PRICE_ROUTES) {
    PRICE_ROUTES["PRICE_UPDATE_XBT"] = "price::listen::xbt";
})(PRICE_ROUTES || (PRICE_ROUTES = {}));


/***/ }),

/***/ "../node/src/_client/enums/symbols.ts":
/*!********************************************!*\
  !*** ../node/src/_client/enums/symbols.ts ***!
  \********************************************/
/*! exports provided: SYMBOL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYMBOL", function() { return SYMBOL; });
var SYMBOL;
(function (SYMBOL) {
    SYMBOL["XBT"] = "XBT";
})(SYMBOL || (SYMBOL = {}));


/***/ }),

/***/ "../node/src/_client/enums/tables.ts":
/*!*******************************************!*\
  !*** ../node/src/_client/enums/tables.ts ***!
  \*******************************************/
/*! exports provided: TABLE_NAME, TABLE_FIELD_AUTH, TABLE_FIELD_USER, FIELD_NAMES_USER_RECORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAME", function() { return TABLE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_FIELD_AUTH", function() { return TABLE_FIELD_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_FIELD_USER", function() { return TABLE_FIELD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_NAMES_USER_RECORD", function() { return FIELD_NAMES_USER_RECORD; });
var TABLE_NAME;
(function (TABLE_NAME) {
    TABLE_NAME["AUTH"] = "auth";
    TABLE_NAME["USER"] = "user";
})(TABLE_NAME || (TABLE_NAME = {}));
var TABLE_FIELD_AUTH;
(function (TABLE_FIELD_AUTH) {
    TABLE_FIELD_AUTH["id"] = "id";
    TABLE_FIELD_AUTH["jwt"] = "jwt";
})(TABLE_FIELD_AUTH || (TABLE_FIELD_AUTH = {}));
/**
 * @description Fields selectable from the client database
 */
var TABLE_FIELD_USER;
(function (TABLE_FIELD_USER) {
    TABLE_FIELD_USER["id"] = "id";
    TABLE_FIELD_USER["createdAt"] = "createdAt";
    TABLE_FIELD_USER["updatedAt"] = "updatedAt";
    TABLE_FIELD_USER["firstName"] = "firstName";
    TABLE_FIELD_USER["lastName"] = "lastName";
    TABLE_FIELD_USER["username"] = "username";
    TABLE_FIELD_USER["email"] = "email";
    TABLE_FIELD_USER["country"] = "country";
    TABLE_FIELD_USER["photo"] = "photo";
})(TABLE_FIELD_USER || (TABLE_FIELD_USER = {}));
/**
 * @description Fields selectable from the server record
 */
var FIELD_NAMES_USER_RECORD = {
    id: "id",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    firstName: "firstName",
    lastName: "lastName",
    username: "username",
    email: "email",
    country: "country",
    photo: "photo"
};


/***/ }),

/***/ "../node/src/_client/manager/ConnectionManager.ts":
/*!********************************************************!*\
  !*** ../node/src/_client/manager/ConnectionManager.ts ***!
  \********************************************************/
/*! exports provided: ConnectionManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionManager", function() { return ConnectionManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "../node/node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_config */ "../node/src/_client/_config.ts");



var ConnectionManager = /** @class */ (function () {
    function ConnectionManager() {
    }
    Object.defineProperty(ConnectionManager, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ConnectionManager.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.socketClient = socket_io_client__WEBPACK_IMPORTED_MODULE_1__("" + _config__WEBPACK_IMPORTED_MODULE_2__["default"].SocketHost, {
                            transports: ['websocket']
                        });
                        setTimeout(function () {
                            console.log("Connected? ", _this.socketClient.connected);
                        }, 1000);
                        return [4 /*yield*/, new Promise(function (accept, reject) {
                                _this.socketClient.once('connect', function () {
                                    _this._IOClientSocket = _this.socketClient;
                                    accept();
                                });
                                _this.socketClient.once('connect_error', function (error) {
                                    console.log(error);
                                    accept(false);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionManager.prototype.call = function (route, payload, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _request, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _request = {
                            _meta: {
                                _id: (Math.floor(Math.random() * 2e15)).toString(16),
                                _issuedAt: new Date().getTime(),
                                _authToken: token ? token : null
                            },
                            _payload: payload
                        };
                        return [4 /*yield*/, new Promise(function (accept, reject) {
                                _this._IOClientSocket.emit(route, _request);
                                var timeout = setTimeout(function () {
                                    reject(-5);
                                }, _config__WEBPACK_IMPORTED_MODULE_2__["default"].SocketTimeoutMillis);
                                var emitter = _this._IOClientSocket.on(route, function handleResult(_payload) {
                                    if (_payload._meta._id === _request._meta._id) {
                                        clearTimeout(timeout);
                                        emitter.off(route);
                                        accept(_payload);
                                    }
                                });
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ConnectionManager.prototype.listen = function (route, callback, token) {
        this._IOClientSocket.on(route, callback);
    };
    ConnectionManager.prototype.unlisten = function (route, callback) {
        console.log("Unlistening: ", callback);
        this._IOClientSocket.removeListener(route, callback);
    };
    ConnectionManager._instance = new ConnectionManager();
    return ConnectionManager;
}());

/* harmony default export */ __webpack_exports__["default"] = (ConnectionManager.Instance);


/***/ }),

/***/ "../node/src/_client/manager/DatabaseManager.ts":
/*!******************************************************!*\
  !*** ../node/src/_client/manager/DatabaseManager.ts ***!
  \******************************************************/
/*! exports provided: DatabaseManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManager", function() { return DatabaseManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lovefield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lovefield */ "../node/node_modules/lovefield/dist/lovefield.min.js");
/* harmony import */ var lovefield__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lovefield__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/tables */ "../node/src/_client/enums/tables.ts");



var DatabaseManager = /** @class */ (function () {
    function DatabaseManager() {
    }
    Object.defineProperty(DatabaseManager.prototype, "builder", {
        get: function () {
            return this._builder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseManager.prototype, "db", {
        get: function () {
            return this._db;
        },
        enumerable: true,
        configurable: true
    });
    DatabaseManager.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setUpDatabase()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseManager.prototype.setUpDatabase = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._builder = lovefield__WEBPACK_IMPORTED_MODULE_1__["schema"].create('main', 3);
                        this._builder.createTable(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_NAME"].AUTH)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_AUTH"].id, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].NUMBER)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_AUTH"].jwt, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addPrimaryKey([_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_AUTH"].id]);
                        this._builder.createTable(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_NAME"].USER)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].id, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].NUMBER)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].createdAt, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].DATE_TIME)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].updatedAt, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].DATE_TIME)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].firstName, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].lastName, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].username, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].email, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].country, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addColumn(_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].photo, lovefield__WEBPACK_IMPORTED_MODULE_1__["Type"].STRING)
                            .addNullable([
                            _enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].firstName,
                            _enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].lastName,
                            _enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].username,
                            _enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].country,
                            _enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].photo,
                        ])
                            .addPrimaryKey([_enums_tables__WEBPACK_IMPORTED_MODULE_2__["TABLE_FIELD_USER"].id]);
                        _a = this;
                        return [4 /*yield*/, this._builder.connect()];
                    case 1:
                        _a._db = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseManager.Instance = new DatabaseManager();
    return DatabaseManager;
}());

/* harmony default export */ __webpack_exports__["default"] = (DatabaseManager.Instance);


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/page/index/index.component */ "./src/app/component/page/index/index.component.ts");
/* harmony import */ var _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/page/trade/trade.component */ "./src/app/component/page/trade/trade.component.ts");
/* harmony import */ var _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/page/profile/profile.component */ "./src/app/component/page/profile/profile.component.ts");
/* harmony import */ var _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/page/deposit/deposit.component */ "./src/app/component/page/deposit/deposit.component.ts");
/* harmony import */ var _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/page/withdraw/withdraw.component */ "./src/app/component/page/withdraw/withdraw.component.ts");
/* harmony import */ var _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/page/order-history/order-history.component */ "./src/app/component/page/order-history/order-history.component.ts");
/* harmony import */ var _component_page_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/page/auth/sign-in/sign-in.component */ "./src/app/component/page/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _component_page_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/page/auth/sign-up/sign-up.component */ "./src/app/component/page/auth/sign-up/sign-up.component.ts");











var routes = [{
        path: '',
        component: _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }, {
        path: 'trade',
        component: _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_4__["TradeComponent"]
    }, {
        path: 'profile',
        component: _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
        path: 'deposit',
        component: _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"]
    }, {
        path: 'withdraw',
        component: _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawComponent"]
    }, {
        path: 'order_history',
        component: _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryComponent"]
    }, {
        path: 'sign_in',
        component: _component_page_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"]
    }, {
        path: 'sign_up',
        component: _component_page_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-modal></app-loading-modal>\n<app-message-modal></app-message-modal>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_init_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider/init/init.service */ "./src/app/provider/init/init.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_InitService) {
        this._InitService = _InitService;
        this.title = 'angularapp1';
        this._InitService.init()
            .catch(function (e) {
            if (e == 1) {
                console.log("Failed to initialize connection to socket server");
            }
            else {
                console.log("Other issues...");
                console.log(e);
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_init_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/page/index/index.component */ "./src/app/component/page/index/index.component.ts");
/* harmony import */ var _component_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/ui/navbar/navbar.component */ "./src/app/component/ui/navbar/navbar.component.ts");
/* harmony import */ var _component_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/ui/footer/footer.component */ "./src/app/component/ui/footer/footer.component.ts");
/* harmony import */ var _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/page/trade/trade.component */ "./src/app/component/page/trade/trade.component.ts");
/* harmony import */ var _component_ui_widget_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/ui/widget/buy-sell/buy-sell.component */ "./src/app/component/ui/widget/buy-sell/buy-sell.component.ts");
/* harmony import */ var _component_ui_widget_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/ui/widget/orderbook/orderbook.component */ "./src/app/component/ui/widget/orderbook/orderbook.component.ts");
/* harmony import */ var _component_ui_widget_chart_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/ui/widget/chart/chart.component */ "./src/app/component/ui/widget/chart/chart.component.ts");
/* harmony import */ var _component_ui_widget_op_oo_ohistory_op_oo_ohistory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/ui/widget/op-oo-ohistory/op-oo-ohistory.component */ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.ts");
/* harmony import */ var _component_ui_widget_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/ui/widget/open-orders/open-orders.component */ "./src/app/component/ui/widget/open-orders/open-orders.component.ts");
/* harmony import */ var _component_ui_widget_open_positions_open_positions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/ui/widget/open-positions/open-positions.component */ "./src/app/component/ui/widget/open-positions/open-positions.component.ts");
/* harmony import */ var _component_ui_widget_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/ui/widget/order-history/order-history.component */ "./src/app/component/ui/widget/order-history/order-history.component.ts");
/* harmony import */ var _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/page/order-history/order-history.component */ "./src/app/component/page/order-history/order-history.component.ts");
/* harmony import */ var _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/page/profile/profile.component */ "./src/app/component/page/profile/profile.component.ts");
/* harmony import */ var _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/page/deposit/deposit.component */ "./src/app/component/page/deposit/deposit.component.ts");
/* harmony import */ var _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/page/withdraw/withdraw.component */ "./src/app/component/page/withdraw/withdraw.component.ts");
/* harmony import */ var _component_ui_widget_withdraw_history_withdraw_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/ui/widget/withdraw-history/withdraw-history.component */ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.ts");
/* harmony import */ var _component_ui_widget_deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/ui/widget/deposit-history/deposit-history.component */ "./src/app/component/ui/widget/deposit-history/deposit-history.component.ts");
/* harmony import */ var _component_page_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/page/auth/sign-in/sign-in.component */ "./src/app/component/page/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _component_page_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/page/auth/sign-up/sign-up.component */ "./src/app/component/page/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/ui/loading-modal/loading-modal.component */ "./src/app/component/ui/loading-modal/loading-modal.component.ts");
/* harmony import */ var _component_ui_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/ui/message-modal/message-modal.component */ "./src/app/component/ui/message-modal/message-modal.component.ts");
/* harmony import */ var _provider_init_init_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./provider/init/init.service */ "./src/app/provider/init/init.service.ts");
/* harmony import */ var _provider_database_database_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./provider/database/database.service */ "./src/app/provider/database/database.service.ts");
/* harmony import */ var _component_ui_widget_price_price_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/ui/widget/price/price.component */ "./src/app/component/ui/widget/price/price.component.ts");































function initializeApp(database, appInitService) {
    return function () {
        console.log("initializeApp -- 1");
        return appInitService.init();
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _component_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _component_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_9__["TradeComponent"],
                _component_ui_widget_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_10__["BuySellComponent"],
                _component_ui_widget_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_11__["OrderbookComponent"],
                _component_ui_widget_chart_chart_component__WEBPACK_IMPORTED_MODULE_12__["ChartComponent"],
                _component_ui_widget_op_oo_ohistory_op_oo_ohistory_component__WEBPACK_IMPORTED_MODULE_13__["OPOOOHistoryComponent"],
                _component_ui_widget_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_14__["OpenOrdersComponent"],
                _component_ui_widget_open_positions_open_positions_component__WEBPACK_IMPORTED_MODULE_15__["OpenPositionsComponent"],
                _component_ui_widget_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__["OrderHistoryComponent"],
                _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_19__["DepositComponent"],
                _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawComponent"],
                _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_17__["OrderHistoryComponent"],
                _component_ui_widget_withdraw_history_withdraw_history_component__WEBPACK_IMPORTED_MODULE_21__["WithdrawHistoryComponent"],
                _component_ui_widget_deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_22__["DepositHistoryComponent"],
                _component_page_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_23__["SignInComponent"],
                _component_page_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__["SignUpComponent"],
                _component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_26__["LoadingModalComponent"],
                _component_ui_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_27__["MessageModalComponent"],
                _component_ui_widget_price_price_component__WEBPACK_IMPORTED_MODULE_30__["PriceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]
            ],
            providers: [
                _provider_init_init_service__WEBPACK_IMPORTED_MODULE_28__["InitService"],
                _provider_database_database_service__WEBPACK_IMPORTED_MODULE_29__["DatabaseService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"], useFactory: initializeApp, deps: [_provider_database_database_service__WEBPACK_IMPORTED_MODULE_29__["DatabaseService"], _provider_init_init_service__WEBPACK_IMPORTED_MODULE_28__["InitService"]], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/page/auth/sign-in/sign-in.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/page/auth/sign-in/sign-in.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-dark\">\n\t<form [formGroup]=\"signInForm\" id=\"loginForm\">\n\t\t<h2 class=\"sr-only\">Login Form</h2>\n\t\t<div class=\"illustration\"><img src=\"assets/img/logo.svg\" style=\"margin:6vw;\"></div>\n\t\t<div class=\"form-group\"><input class=\"form-control\" \n\t\t\ttype=\"email\" name=\"email\" \n\t\t\tformControlName=\"email\"\n\t\t\tplaceholder=\"Email\"></div>\n\t\t<div class=\"form-group\"><input class=\"form-control\" \n\t\t\ttype=\"password\" name=\"password\" \n\t\t\tformControlName=\"password\"\n\t\t\tplaceholder=\"Password\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<button class=\"btn btn-primary btn-block\" \n\t\t\ttype=\"submit\" (click)=\"signIn()\">Log In</button>\n\t\t</div>\n\t\t<a class=\"forgot\">Forgot your email or password?</a>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/component/page/auth/sign-in/sign-in.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/page/auth/sign-in/sign-in.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-dark {\n  height: 1000px;\n  background: #475d62 url('star-sky.jpg');\n  background-size: cover;\n  position: relative; }\n\n.login-dark form {\n  max-width: 320px;\n  width: 90%;\n  background-color: #1e2833;\n  padding: 40px;\n  border-radius: 4px;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #fff;\n  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2); }\n\n.login-dark .illustration {\n  text-align: center;\n  padding: 15px 0 20px;\n  font-size: 100px;\n  color: #2980ef; }\n\n.login-dark form .form-control {\n  background: none;\n  border: none;\n  border-bottom: 1px solid #434a52;\n  border-radius: 0;\n  box-shadow: none;\n  outline: none;\n  color: inherit; }\n\n.login-dark form .btn-primary {\n  background: #214a80;\n  border: none;\n  border-radius: 4px;\n  padding: 11px;\n  box-shadow: none;\n  margin-top: 26px;\n  text-shadow: none;\n  outline: none; }\n\n.login-dark form .btn-primary:hover,\n.login-dark form .btn-primary:active {\n  background: #214a80;\n  outline: none; }\n\n.login-dark form .forgot {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: #6f7a85;\n  opacity: 0.9;\n  text-decoration: none; }\n\n.login-dark form .forgot:hover,\n.login-dark form .forgot:active {\n  opacity: 1;\n  text-decoration: none; }\n\n.login-dark form .btn-primary:active {\n  transform: translateY(1px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYztFQUNkLHVDQUErRDtFQUMvRCxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLDBDQUEwQyxFQUFBOztBQUczQztFQUNDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHZjtFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHZjtFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Q7O0VBRUMsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZDtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3RCOztFQUVDLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFHdEI7RUFDQywwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWRhcmsge1xuXHRoZWlnaHQ6IDEwMDBweDtcblx0YmFja2dyb3VuZDogIzQ3NWQ2MiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zdGFyLXNreS5qcGcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dpbi1kYXJrIGZvcm0ge1xuXHRtYXgtd2lkdGg6IDMyMHB4O1xuXHR3aWR0aDogOTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyODMzO1xuXHRwYWRkaW5nOiA0MHB4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdGNvbG9yOiAjZmZmO1xuXHRib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5sb2dpbi1kYXJrIC5pbGx1c3RyYXRpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDE1cHggMCAyMHB4O1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRjb2xvcjogIzI5ODBlZjtcbn1cblxuLmxvZ2luLWRhcmsgZm9ybSAuZm9ybS1jb250cm9sIHtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNGE1Mjtcblx0Ym9yZGVyLXJhZGl1czogMDtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0b3V0bGluZTogbm9uZTtcblx0Y29sb3I6IGluaGVyaXQ7XG59XG5cbi5sb2dpbi1kYXJrIGZvcm0gLmJ0bi1wcmltYXJ5IHtcblx0YmFja2dyb3VuZDogIzIxNGE4MDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDExcHg7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdG1hcmdpbi10b3A6IDI2cHg7XG5cdHRleHQtc2hhZG93OiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ubG9naW4tZGFyayBmb3JtIC5idG4tcHJpbWFyeTpob3Zlcixcbi5sb2dpbi1kYXJrIGZvcm0gLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XG5cdGJhY2tncm91bmQ6ICMyMTRhODA7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5sb2dpbi1kYXJrIGZvcm0gLmZvcmdvdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Y29sb3I6ICM2ZjdhODU7XG5cdG9wYWNpdHk6IDAuOTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4tZGFyayBmb3JtIC5mb3Jnb3Q6aG92ZXIsXG4ubG9naW4tZGFyayBmb3JtIC5mb3Jnb3Q6YWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4tZGFyayBmb3JtIC5idG4tcHJpbWFyeTphY3RpdmUge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/page/auth/sign-in/sign-in.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/page/auth/sign-in/sign-in.component.ts ***!
  \******************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/loading/loading.service */ "./src/app/provider/loading/loading.service.ts");
/* harmony import */ var src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/message/message.service */ "./src/app/provider/message/message.service.ts");
/* harmony import */ var src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/provider/message/text.service */ "./src/app/provider/message/text.service.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/provider/auth/auth.service */ "./src/app/provider/auth/auth.service.ts");








var SignInComponent = /** @class */ (function () {
    function SignInComponent(_formBuilder, _LoadingService, _MessageService, _TextService, _AuthService) {
        this._formBuilder = _formBuilder;
        this._LoadingService = _LoadingService;
        this._MessageService = _MessageService;
        this._TextService = _TextService;
        this._AuthService = _AuthService;
        this.setUpForm();
    }
    SignInComponent.prototype.setUpForm = function () {
        this.signInForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]]
        });
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, title, message, resPayload, text, _b, title, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signInForm.valid) return [3 /*break*/, 2];
                        this._LoadingService.show();
                        _a = this._TextService.getSucessMessage(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_6__["SUCCESS_UI"].LOGGED_IN), title = _a.title, message = _a.message;
                        return [4 /*yield*/, this._AuthService.signIn(this.signInForm.controls['email'].value, this.signInForm.controls['password'].value)];
                    case 1:
                        resPayload = _c.sent();
                        if (resPayload.result !== src_client_enums_codes__WEBPACK_IMPORTED_MODULE_6__["RESULT_CODE"].SUCCESS) {
                            text = this._TextService.getErrorMessage_ui(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_6__["UI_RESULT_CODE"].INVALID_DATA);
                            title = text.title;
                            message = text.message;
                        }
                        this._MessageService.showMessageBox(title, message);
                        this._LoadingService.hide();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = this._TextService.getErrorMessage_ui(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_6__["UI_RESULT_CODE"].INVALID_DATA), title = _b.title, message = _b.message;
                        this._MessageService.showMessageBox(title, message);
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/component/page/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/component/page/auth/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_5__["TextService"],
            src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/component/page/auth/sign-up/sign-up.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/page/auth/sign-up/sign-up.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-photo\">\n\t<div class=\"form-container\" id=\"mainFormContainer\">\n\t\t<div class=\"image-holder\"></div>\n\t\t<form [formGroup]=\"profileForm\" id=\"mainform\">\n\t\t\t<h2 class=\"text-center\"><strong>Create</strong> your account</h2>\n\t\t\t<div class=\"form-group\" class=\"avatar_img_group\">\n\t\t\t\t<img\n\t\t\t\tid=\"previewImage\"\n\t\t\t\tsrc=\"https://www.gravatar.com/avatar/1234566?size=200&d=mm\"\n\t\t\t\t(click)=\"selectImage()\"/>\n\t\t\t\t<input type='file' id=\"imageFile\" style=\"display: none\" />\n\t\t\t\t<br/>\n\t\t\t\t<br/>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\"><input class=\"form-control\" formControlName=\"firstName\" type=\"firstName\"\n\t\t\t\t\tname=\"firstName\" placeholder=\"First Name\">\n\t\t\t\t<small>\n\t\t\t\t\t<label *ngIf=\"(formSent && firstNameControl.errors) || (firstNameControl.dirty && firstNameControl.errors)\">You must provide a valid\n\t\t\t\t\t\tfirst name</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\"><input class=\"form-control\" formControlName=\"lastName\" type=\"lastName\"\n\t\t\t\t\tname=\"lastName\" placeholder=\"Last Name\">\n\t\t\t\t<small>\n\t\t\t\t\t<label *ngIf=\"(formSent && lastNameControl.errors) || (lastNameControl.dirty && lastNameControl.errors)\">You must provide a valid\n\t\t\t\t\t\tlast name</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\"><input class=\"form-control\" formControlName=\"username\" type=\"username\"\n\t\t\t\t\tname=\"username\" placeholder=\"Username\">\n\t\t\t\t<small>\n\t\t\t\t\t<label *ngIf=\"(formSent && usernameControl.errors) || (usernameControl.dirty && usernameControl.errors)\">You must provide a valid\n\t\t\t\t\t\tusername</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\tid=\"countrySelection\"\n\t\t\t\t\tformControlName=\"country\">\n\t\t\t\t\t\t<option value=\"-20\" selected=\"true\">Please select your country</option>\n\t\t\t\t\t\t<option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t<small>\n\t\t\t\t\t<label *ngIf=\"(formSent && countryControl.errors) || (countryControl.dirty && countryControl.errors)\">You must select a valid\n\t\t\t\t\t\tcountry</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" formControlName=\"email\" type=\"email\" name=\"email\"\n\t\t\t\t\tplaceholder=\"Email\">\n\t\t\t\t<small>\n\t\t\t\t\t<label\n\t\t\t\t\t\t*ngIf=\"formSent && emailControl.errors && (emailControl.errors['email'] || emailControl.errors['required'])\">You\n\t\t\t\t\t\tmust provide a valid email,</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" formControlName=\"password\" type=\"password\"\n\t\t\t\t\tname=\"password\" placeholder=\"Password\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\"><input class=\"form-control\" type=\"password\" formControlName=\"password2\"\n\t\t\t\t\tname=\"password-repeat\" placeholder=\"Password (repeat)\">\n\t\t\t\t<small>\n\t\t\t\t\t<label\n\t\t\t\t\t\t*ngIf=\"password2Control.errors\">Passwords must match</label>\n\t\t\t\t</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"form-check\"><label class=\"form-check-label\"><input class=\"form-check-input\"\n\t\t\t\t\t\t\tformControlName=\"accept\" type=\"checkbox\">I agree to the license terms.</label>\n\t\t\t\t\t<label\n\t\t\t\t\t\t*ngIf=\"acceptControl.errors && acceptControl.errors['mustAcceptTerms']\">Must\n\t\t\t\t\t\taccept the license terms.</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button class=\"btn btn-primary btn-block\" (click)=\"signUp()\" type=\"button\"\n\t\t\t\t\tstyle=\"background-color:rgb(13,6,101);\">Sign Up</button>\n\t\t\t</div><a href=\"#\" class=\"already\">You already have an account? Login here.</a>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/page/auth/sign-up/sign-up.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/page/auth/sign-up/sign-up.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-photo {\n  padding: 80px 0; }\n\n.register-photo .image-holder {\n  display: table-cell;\n  width: auto;\n  background: url('664115914_1.jpg');\n  background-size: cover; }\n\n.register-photo .form-container {\n  display: table;\n  max-width: 900px;\n  width: 90%;\n  margin: 0 auto;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); }\n\n.register-photo form {\n  display: table-cell;\n  width: 400px;\n  background-color: #ffffff;\n  padding: 40px 60px;\n  color: #505e6c; }\n\n@media (max-width: 991px) {\n  .register-photo form {\n    padding: 40px; } }\n\n.register-photo form h2 {\n  font-size: 24px;\n  line-height: 1.5;\n  margin-bottom: 30px; }\n\n.register-photo form .form-control {\n  background: #f7f9fc;\n  border: none;\n  border-bottom: 1px solid #dfe7f1;\n  border-radius: 0;\n  box-shadow: none;\n  outline: none;\n  color: inherit;\n  text-indent: 6px;\n  height: 40px; }\n\n.register-photo form .form-check {\n  font-size: 13px;\n  line-height: 20px; }\n\n.register-photo form .btn-primary {\n  background: #f4476b;\n  border: none;\n  border-radius: 4px;\n  padding: 11px;\n  box-shadow: none;\n  margin-top: 35px;\n  text-shadow: none;\n  outline: none !important; }\n\n.register-photo form .btn-primary:hover, .register-photo form .btn-primary:active {\n  background: #eb3b60; }\n\n.register-photo form .btn-primary:active {\n  transform: translateY(1px); }\n\n.register-photo form .already {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: #6f7a85;\n  opacity: 0.9;\n  text-decoration: none; }\n\n#mainFormContainer {\n  min-height: 120vh; }\n\n.avatar_img_group {\n  text-align: center; }\n\n.avatar_img_group img {\n    width: 250px;\n    height: 250px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBYyxFQUFBOztBQUdiO0VBQ0QsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixrQ0FBeUQ7RUFDekQsc0JBQXFCLEVBQUE7O0FBR3BCO0VBQ0QsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsVUFBUztFQUNULGNBQWE7RUFDYiwwQ0FBc0MsRUFBQTs7QUFHckM7RUFDRCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsY0FBYSxFQUFBOztBQUdaO0VBQ0Q7SUFDRSxhQUFZLEVBQUEsRUFDYjs7QUFHQTtFQUNELGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUdqQjtFQUNELG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0NBQStCO0VBQy9CLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlO0VBQ2YsWUFBVyxFQUFBOztBQUdWO0VBQ0QsZUFBYztFQUNkLGlCQUFnQixFQUFBOztBQUdmO0VBQ0QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQUE7O0FBR3RCO0VBQ0QsbUJBQWtCLEVBQUE7O0FBR2pCO0VBQ0QsMEJBQXlCLEVBQUE7O0FBR3hCO0VBQ0QsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsY0FBYTtFQUNiLFlBQVc7RUFDWCxxQkFBb0IsRUFBQTs7QUFHckI7RUFDQyxpQkFBZ0IsRUFBQTs7QUFLakI7RUFDQyxrQkFBa0IsRUFBQTs7QUFEbkI7SUFHRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLXBob3RvIHtcblx0cGFkZGluZzo4MHB4IDA7XG4gIH1cbiAgXG4gIC5yZWdpc3Rlci1waG90byAuaW1hZ2UtaG9sZGVyIHtcblx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuXHR3aWR0aDphdXRvO1xuXHRiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nLzY2NDExNTkxNF8xLmpwZyk7XG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLXBob3RvIC5mb3JtLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6dGFibGU7XG5cdG1heC13aWR0aDo5MDBweDtcblx0d2lkdGg6OTAlO1xuXHRtYXJnaW46MCBhdXRvO1xuXHRib3gtc2hhZG93OjFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLXBob3RvIGZvcm0ge1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG5cdHdpZHRoOjQwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG5cdHBhZGRpbmc6NDBweCA2MHB4O1xuXHRjb2xvcjojNTA1ZTZjO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xuXHQucmVnaXN0ZXItcGhvdG8gZm9ybSB7XG5cdCAgcGFkZGluZzo0MHB4O1xuXHR9XG4gIH1cbiAgXG4gIC5yZWdpc3Rlci1waG90byBmb3JtIGgyIHtcblx0Zm9udC1zaXplOjI0cHg7XG5cdGxpbmUtaGVpZ2h0OjEuNTtcblx0bWFyZ2luLWJvdHRvbTozMHB4O1xuICB9XG4gIFxuICAucmVnaXN0ZXItcGhvdG8gZm9ybSAuZm9ybS1jb250cm9sIHtcblx0YmFja2dyb3VuZDojZjdmOWZjO1xuXHRib3JkZXI6bm9uZTtcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RmZTdmMTtcblx0Ym9yZGVyLXJhZGl1czowO1xuXHRib3gtc2hhZG93Om5vbmU7XG5cdG91dGxpbmU6bm9uZTtcblx0Y29sb3I6aW5oZXJpdDtcblx0dGV4dC1pbmRlbnQ6NnB4O1xuXHRoZWlnaHQ6NDBweDtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLXBob3RvIGZvcm0gLmZvcm0tY2hlY2sge1xuXHRmb250LXNpemU6MTNweDtcblx0bGluZS1oZWlnaHQ6MjBweDtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLXBob3RvIGZvcm0gLmJ0bi1wcmltYXJ5IHtcblx0YmFja2dyb3VuZDojZjQ0NzZiO1xuXHRib3JkZXI6bm9uZTtcblx0Ym9yZGVyLXJhZGl1czo0cHg7XG5cdHBhZGRpbmc6MTFweDtcblx0Ym94LXNoYWRvdzpub25lO1xuXHRtYXJnaW4tdG9wOjM1cHg7XG5cdHRleHQtc2hhZG93Om5vbmU7XG5cdG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAucmVnaXN0ZXItcGhvdG8gZm9ybSAuYnRuLXByaW1hcnk6aG92ZXIsIC5yZWdpc3Rlci1waG90byBmb3JtIC5idG4tcHJpbWFyeTphY3RpdmUge1xuXHRiYWNrZ3JvdW5kOiNlYjNiNjA7XG4gIH1cbiAgXG4gIC5yZWdpc3Rlci1waG90byBmb3JtIC5idG4tcHJpbWFyeTphY3RpdmUge1xuXHR0cmFuc2Zvcm06dHJhbnNsYXRlWSgxcHgpO1xuICB9XG4gIFxuICAucmVnaXN0ZXItcGhvdG8gZm9ybSAuYWxyZWFkeSB7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRmb250LXNpemU6MTJweDtcblx0Y29sb3I6IzZmN2E4NTtcblx0b3BhY2l0eTowLjk7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuICB9XG5cbiNtYWluRm9ybUNvbnRhaW5lciB7XG5cdG1pbi1oZWlnaHQ6MTIwdmg7XG59XG4gIFxuICBcblxuLmF2YXRhcl9pbWdfZ3JvdXB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aW1nIHtcblx0XHR3aWR0aDogMjUwcHg7XG5cdFx0aGVpZ2h0OiAyNTBweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/page/auth/sign-up/sign-up.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/page/auth/sign-up/sign-up.component.ts ***!
  \******************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/auth/auth.service */ "./src/app/provider/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/provider/loading/loading.service */ "./src/app/provider/loading/loading.service.ts");
/* harmony import */ var src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/provider/message/message.service */ "./src/app/provider/message/message.service.ts");
/* harmony import */ var src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/provider/message/text.service */ "./src/app/provider/message/text.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_client_enums_Country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_client/enums/Country */ "../node/src/_client/enums/Country.ts");
/* harmony import */ var src_client_enums_allowedImages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_client/enums/allowedImages */ "../node/src/_client/enums/allowedImages.ts");













var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_AuthService, _formBuilder, _LoadingService, _MessageService, _TextService, _Router) {
        this._AuthService = _AuthService;
        this._formBuilder = _formBuilder;
        this._LoadingService = _LoadingService;
        this._MessageService = _MessageService;
        this._TextService = _TextService;
        this._Router = _Router;
        this.formSent = false;
        this.formSentInvalid_email = false;
        this.setUpForm();
    }
    SignUpComponent.prototype.setUpForm = function () {
        var _this = this;
        this.profileForm = this._formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            country: ['', [function (control) {
                        return src_client_enums_Country__WEBPACK_IMPORTED_MODULE_9__["USED_COUNTRIES"].findIndex(function (country) {
                            return country.code === control.value;
                        }) > -1 ? null : { invalidCountry: true };
                    }]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], [function (control) {
                        if (_this.profileForm && _this.profileForm.controls['password2']) {
                            if (_this.profileForm.controls['password2'].dirty) {
                                _this.profileForm.controls['password2'].updateValueAndValidity();
                            }
                        }
                        return new Promise(function (accept) {
                            accept(null);
                        });
                    }]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], [function (control) {
                        if (!_this.profileForm || !_this.profileForm.controls['password'])
                            return null;
                        return _this.hasSamePassword(control, _this.profileForm.controls['password'].value);
                    }]],
            accept: [true, [], [this.isTrue]]
        });
    };
    SignUpComponent.prototype.isTrue = function (control) {
        return new Promise(function (resolve) {
            resolve((control.value == true) ? null : { mustAcceptTerms: true });
        });
    };
    SignUpComponent.prototype.hasSamePassword = function (control, otherPassword) {
        return new Promise(function (resolve) {
            var hasSame = otherPassword === control.value;
            resolve(hasSame ? null : { requiresSamePassword: true });
        });
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.listenSelectImage();
    };
    Object.defineProperty(SignUpComponent.prototype, "passwordControl", {
        get: function () {
            return this.profileForm.controls['password'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "password2Control", {
        get: function () {
            return this.profileForm.controls['password2'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "acceptControl", {
        get: function () {
            return this.profileForm.controls['accept'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "emailControl", {
        get: function () {
            return this.profileForm.controls['email'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "usernameControl", {
        get: function () {
            return this.profileForm.controls['username'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "firstNameControl", {
        get: function () {
            return this.profileForm.controls['firstName'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "lastNameControl", {
        get: function () {
            return this.profileForm.controls['lastName'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "countryControl", {
        get: function () {
            return this.profileForm.controls['country'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "countries", {
        get: function () {
            return src_client_enums_Country__WEBPACK_IMPORTED_MODULE_9__["USED_COUNTRIES"];
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.previewImage = function (input) {
        if (input.files && input.files[0]) {
            if ((src_client_enums_allowedImages__WEBPACK_IMPORTED_MODULE_10__["IMAGE_TYPES"].indexOf(input.files[0].type) < 0)
                || (input.files[0].size > src_client_enums_allowedImages__WEBPACK_IMPORTED_MODULE_10__["MAX_PROFILE_IMAGE_SIZE"] * 1024)) {
                input.value = null;
                var _a = this._TextService.getErrorMessage_ui(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["UI_RESULT_CODE"].PROFILE_IMAGE_TOO_BIG), title = _a.title, message = _a.message;
                this._MessageService.showMessageBox(title, message);
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log(input.files[0]);
                $('#previewImage').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    SignUpComponent.prototype.listenSelectImage = function () {
        var _this = this;
        $("#imageFile")
            .change(function () {
            _this.previewImage($("#imageFile")[0]);
        });
    };
    SignUpComponent.prototype.selectImage = function () {
        $("#imageFile").click();
    };
    SignUpComponent.prototype.signUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var email, password, username, firstName, lastName, country, photo, payload, result, message, signInResult, message_1, message, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.formSent = true;
                        if (!this.profileForm.valid) return [3 /*break*/, 5];
                        this._LoadingService.show();
                        email = this.profileForm.controls['email'].value;
                        password = this.profileForm.controls['password'].value;
                        username = this.profileForm.controls['username'].value;
                        firstName = this.profileForm.controls['firstName'].value;
                        lastName = this.profileForm.controls['lastName'].value;
                        country = this.profileForm.controls['country'].value;
                        photo = $("#previewImage")[0].src;
                        payload = {
                            email: email, password: password, username: username, firstName: firstName, lastName: lastName, country: country, photo: photo
                        };
                        return [4 /*yield*/, this._AuthService.signUp(payload)];
                    case 1:
                        result = _a.sent();
                        this._LoadingService.hide();
                        if (!(result.result === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS)) return [3 /*break*/, 3];
                        message = this._TextService.getSucessMessage(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["SUCCESS_UI"].CREATED_ACCOUNT);
                        this._MessageService.showMessageBox(message.title, message.message);
                        return [4 /*yield*/, this._AuthService.signIn(email, password)];
                    case 2:
                        signInResult = _a.sent();
                        if (signInResult.result === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS) {
                            //let loggedIn = await this._AuthService.isLoggedIn();
                        }
                        else {
                            message_1 = this._TextService.getErrorMessage(result.result);
                            this._MessageService.showMessageBox(message_1.title, message_1.message);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        message = this._TextService.getErrorMessage(result.result);
                        this._MessageService.showMessageBox(message.title, message.message);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        message = this._TextService.getErrorMessage_ui(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["UI_RESULT_CODE"].INVALID_DATA);
                        this._MessageService.showMessageBox(message.title, message.message);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/component/page/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/component/page/auth/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_7__["TextService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/component/page/deposit/deposit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/page/deposit/deposit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"row\" id=\"DEPOSIT_MAIN_ROW\">\n\t\t<div class=\"col col-12 col-md-6\" id=\"DEPOSIT_COLUMN\">\n\t\t\t<form id=\"DEPOSIT_FORM\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div id=\"HEADING\">\n\t\t\t\t\t\t<h1>Deposit</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Token</span></div>\n\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t<option value=\"12\" selected>BTC</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" id=\"form_group_bitcoin_address\"><label>Your BTC deposit addess</label><input\n\t\t\t\t\t\tclass=\"form-control\" type=\"text\"></div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<h2>IMPORTANT NOTES</h2>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Do not send Litecoin, Bitcoin Cash, Tether to this address! Unfortunately, these networks\n\t\t\t\t\t\t\twill accept Bitcoin multisig addresses as valid. Any unsupported coins sent here will be\n\t\t\t\t\t\t\tlost.</li>\n\t\t\t\t\t\t<li>The minimum deposit ammount is 0.0001 XBT (10.000 Satoshi).</li>\n\t\t\t\t\t\t<li>Your deposit will be credited after 1 confirmation on the Bitcoin network.</li>\n\t\t\t\t\t\t<li>Only accepts Bitcoin deposits. To get Bitcoin, you can exchange your local currency at any\n\t\t\t\t\t\t\tmajor Bitcoin exchange.</li>\n\t\t\t\t\t\t<li>All deposits addresses are multi-signature cold wallet addresses. No wallets are ever read\n\t\t\t\t\t\t\tby an Internet-connected machine.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\"><button class=\"btn btn-success btn-block btn-lg\" type=\"button\">DEPOSIT</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col col-12 col-md-6\" id=\"DEPOSIT_HISTORY_COLUMN\">\n\t\t\t<div>\n\t\t\t\t<h2>Deposit History</h2>\n\t\t\t\t<app-deposit-history></app-deposit-history>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/page/deposit/deposit.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/component/page/deposit/deposit.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#DEPOSIT_FORM > .form-group > .input-group > .input-group-append {\n  display: none; }\n\n#DEPOSIT_FORM > .form-group > .input-group {\n  margin-bottom: .5em; }\n\n#form_group_bitcoin_address > label {\n  font-weight: bold; }\n\n#DEPOSIT_COLUMN {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 2em; }\n\n#DEPOSIT_MAIN_ROW > #DEPOSIT_HISTORY_COLUMN > div:first-child {\n  height: 4em; }\n\n#DEPOSIT_MAIN_ROW > #DEPOSIT_COLUMN > #DEPOSIT_FORM > .form-group:first-child > div#HEADING {\n  height: 4em; }\n\n#DEPOSIT_MAIN_ROW > #DEPOSIT_COLUMN > #DEPOSIT_FORM > .form-group:first-child > div#HEADING {\n  height: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL2RlcG9zaXQvZGVwb3NpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQWEsRUFBQTs7QUFHZDtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsV0FBVyxFQUFBOztBQUdaO0VBQ0MsV0FBVyxFQUFBOztBQUdaO0VBQ0MsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3BhZ2UvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0RFUE9TSVRfRk9STT4uZm9ybS1ncm91cD4uaW5wdXQtZ3JvdXA+LmlucHV0LWdyb3VwLWFwcGVuZCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbiNERVBPU0lUX0ZPUk0+LmZvcm0tZ3JvdXA+LmlucHV0LWdyb3VwIHtcblx0bWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuI2Zvcm1fZ3JvdXBfYml0Y29pbl9hZGRyZXNzPmxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNERVBPU0lUX0NPTFVNTiB7XG5cdHBhZGRpbmctbGVmdDogMWVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAxZW07XG5cdHBhZGRpbmctYm90dG9tOiAyZW07XG59XG5cbiNERVBPU0lUX01BSU5fUk9XPiNERVBPU0lUX0hJU1RPUllfQ09MVU1OPmRpdjpmaXJzdC1jaGlsZCB7XG5cdGhlaWdodDogNGVtO1xufVxuXG4jREVQT1NJVF9NQUlOX1JPVz4jREVQT1NJVF9DT0xVTU4+I0RFUE9TSVRfRk9STT4uZm9ybS1ncm91cDpmaXJzdC1jaGlsZD5kaXYjSEVBRElORyB7XG5cdGhlaWdodDogNGVtO1xufVxuXG4jREVQT1NJVF9NQUlOX1JPVz4jREVQT1NJVF9DT0xVTU4+I0RFUE9TSVRfRk9STT4uZm9ybS1ncm91cDpmaXJzdC1jaGlsZD5kaXYjSEVBRElORyB7XG5cdGhlaWdodDogNGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/page/deposit/deposit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/page/deposit/deposit.component.ts ***!
  \*************************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepositComponent = /** @class */ (function () {
    function DepositComponent() {
    }
    DepositComponent.prototype.ngOnInit = function () {
    };
    DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(/*! ./deposit.component.html */ "./src/app/component/page/deposit/deposit.component.html"),
            styles: [__webpack_require__(/*! ./deposit.component.scss */ "./src/app/component/page/deposit/deposit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepositComponent);
    return DepositComponent;
}());



/***/ }),

/***/ "./src/app/component/page/index/index.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/page/index/index.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div>\n\t\t<div class=\"container\" id=\"body_container\">\n\t\t\t<div class=\"row\" id=\"heading_row\">\n\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t<h1>Cryptocurrency Exchange and Index<br></h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tStart Trading Futures on Bitcoin Now.<br />\n\t\t\t\t\t\tFast and Secure CrytoTrading Platform\n\t\t\t\t\t</p>\n\t\t\t\t\t<div id=\"heading_container_buttons\">\n\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\"><button class=\"btn btn-success btn-lg\"\n\t\t\t\t\t\t\t\ttype=\"button\">Login</button><button class=\"btn btn-primary btn-lg\"\n\t\t\t\t\t\t\t\ttype=\"button\">Register</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"features-boxed\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"intro\">\n\t\t\t\t<h2 class=\"text-center\">Our Advantages</h2>\n\t\t\t</div>\n\t\t\t<div class=\"row justify-content-center features\">\n\t\t\t\t<div class=\"col-sm-6 col-md-5 col-lg-4 item\">\n\t\t\t\t\t<div class=\"box\"><i class=\"fa fa-clock-o icon\"></i>\n\t\t\t\t\t\t<h3 class=\"name\">Trading View Integration and Live Charts</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-5 col-lg-4 item\">\n\t\t\t\t\t<div class=\"box\"><i class=\"material-icons icon\">chrome_reader_mode</i>\n\t\t\t\t\t\t<h3 class=\"name\">Various Order Types</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-5 col-lg-4 item\">\n\t\t\t\t\t<div class=\"box\"><i class=\"material-icons icon\">playlist_add_check</i>\n\t\t\t\t\t\t<h3 class=\"name\">Fund your account with Bicoin, Ripple, Ether, Litecoin or Bitcoin Cash</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-5 col-lg-4 item\">\n\t\t\t\t\t<div class=\"box\"><i class=\"icon ion-lock-combination icon\"></i>\n\t\t\t\t\t\t<h3 class=\"name\">Secure deep-cold digital asset custody</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/page/index/index.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/page/index/index.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading_container_buttons {\n  text-align: left; }\n\n#heading_container_buttons > .btn-group > button {\n  margin-right: 20%;\n  border-radius: 20px; }\n\n#heading_row {\n  background-image: url('stock-2463798_960_720.jpg');\n  background-size: 100vw 140vw;\n  height: 100%;\n  position: absolute;\n  width: 100%; }\n\n#heading_row > div.col {\n  background-color: rgba(0, 0, 60, 0.5);\n  padding-top: 1em;\n  padding-bottom: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n@media (min-width: 576px) {\n  #body_container {\n    min-height: 50vh; } }\n\n@media (min-width: 300px) {\n  #body_container {\n    min-height: 60vh; } }\n\n#body_container {\n  min-width: 100%;\n  position: relative; }\n\n#heading_row > .col > h1 {\n  color: white;\n  padding-right: 20%; }\n\n@media (min-width: 576px) {\n  #heading_row > .col > h1 {\n    color: white;\n    padding-right: 10%; } }\n\n#heading_row > .col > h1 {\n  color: white;\n  padding-top: .5em;\n  padding-bottom: .5em; }\n\n#heading_row > .col > p {\n  color: white;\n  font-size: 1.5em; }\n\n.features-boxed {\n  color: white;\n  background-color: #00003c;\n  min-height: 60vh;\n  padding-bottom: 5em;\n  padding-top: 2em; }\n\n.features-boxed p {\n  color: #7d8285; }\n\n.features-boxed h2 {\n  font-weight: bold;\n  margin-bottom: 40px;\n  padding-top: 40px;\n  color: inherit; }\n\n@media (max-width: 767px) {\n  .features-boxed h2 {\n    margin-bottom: 25px;\n    padding-top: 25px;\n    font-size: 24px; } }\n\n@media (min-width: 768px) {\n  .features-boxed h2 {\n    margin-bottom: 25px;\n    padding-top: 25px;\n    font-size: 24px; } }\n\n.features-boxed .intro {\n  font-size: 16px;\n  max-width: 500px;\n  margin: 0 auto; }\n\n.features-boxed .intro p {\n  margin-bottom: 0; }\n\n.features-boxed .features {\n  padding: 0px; }\n\n.features-boxed .item {\n  text-align: center; }\n\n.features-boxed .item .box {\n  text-align: center;\n  padding: 20px;\n  padding-bottom: 0px; }\n\n.features-boxed .item .icon {\n  font-size: 60px;\n  color: #1485ee;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.features-boxed .item .name {\n  font-size: 18px;\n  margin-bottom: 8px;\n  margin-top: 0;\n  color: inherit; }\n\n.features-boxed .item .description {\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWUsRUFBQTs7QUFHZDtFQUNELGlCQUFnQjtFQUNoQixtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxrREFBc0U7RUFDdEUsNEJBQTJCO0VBQzNCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsV0FBVSxFQUFBOztBQUdUO0VBQ0QscUNBQWlDO0VBQ2pDLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsOEJBQTZCLEVBQUE7O0FBRzVCO0VBQ0Q7SUFDRSxnQkFBZSxFQUFBLEVBQ2hCOztBQUdBO0VBQ0Q7SUFDRSxnQkFBZSxFQUFBLEVBQ2hCOztBQUdBO0VBQ0QsZUFBYztFQUNkLGtCQUFpQixFQUFBOztBQUdoQjtFQUNELFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFHaEI7RUFDRDtJQUNFLFlBQVc7SUFDWCxrQkFBaUIsRUFBQSxFQUNsQjs7QUFHQTtFQUNELFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUE7O0FBR2xCO0VBQ0QsWUFBVztFQUNYLGdCQUFlLEVBQUE7O0FBR2Q7RUFDRCxZQUFXO0VBQ1gseUJBQStCO0VBQy9CLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdmO0VBQ0QsY0FBYSxFQUFBOztBQUdaO0VBQ0QsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsY0FBYSxFQUFBOztBQUdaO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGVBQWMsRUFBQSxFQUNmOztBQUdBO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGVBQWMsRUFBQSxFQUNmOztBQUdBO0VBQ0QsZUFBYztFQUNkLGdCQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUdaO0VBQ0QsZ0JBQWUsRUFBQTs7QUFHZDtFQUNELFlBQVcsRUFBQTs7QUFHVjtFQUNELGtCQUFpQixFQUFBOztBQUdoQjtFQUNELGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osbUJBQWtCLEVBQUE7O0FBR2pCO0VBQ0QsZUFBYztFQUNkLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUdqQjtFQUNELGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGNBQWEsRUFBQTs7QUFHWjtFQUNELGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3BhZ2UvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGluZ19jb250YWluZXJfYnV0dG9ucyB7XG5cdHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICBcbiAgI2hlYWRpbmdfY29udGFpbmVyX2J1dHRvbnMgPiAuYnRuLWdyb3VwID4gYnV0dG9uIHtcblx0bWFyZ2luLXJpZ2h0OjIwJTtcblx0Ym9yZGVyLXJhZGl1czoyMHB4O1xuICB9XG4gIFxuICAjaGVhZGluZ19yb3cge1xuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL3N0b2NrLTI0NjM3OThfOTYwXzcyMC5qcGcpO1xuXHRiYWNrZ3JvdW5kLXNpemU6MTAwdncgMTQwdnc7XG5cdGhlaWdodDoxMDAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0d2lkdGg6MTAwJTtcbiAgfVxuICBcbiAgI2hlYWRpbmdfcm93ID4gZGl2LmNvbCB7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsNjAsLjUwKTtcblx0cGFkZGluZy10b3A6MWVtO1xuXHRwYWRkaW5nLWJvdHRvbToxZW07XG5cdGRpc3BsYXk6ZmxleDtcblx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdCNib2R5X2NvbnRhaW5lciB7XG5cdCAgbWluLWhlaWdodDo1MHZoO1xuXHR9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkge1xuXHQjYm9keV9jb250YWluZXIge1xuXHQgIG1pbi1oZWlnaHQ6NjB2aDtcblx0fVxuICB9XG4gIFxuICAjYm9keV9jb250YWluZXIge1xuXHRtaW4td2lkdGg6MTAwJTtcblx0cG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgXG4gICNoZWFkaW5nX3JvdyA+IC5jb2wgPiBoMSB7XG5cdGNvbG9yOndoaXRlO1xuXHRwYWRkaW5nLXJpZ2h0OjIwJTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdCNoZWFkaW5nX3JvdyA+IC5jb2wgPiBoMSB7XG5cdCAgY29sb3I6d2hpdGU7XG5cdCAgcGFkZGluZy1yaWdodDoxMCU7XG5cdH1cbiAgfVxuICBcbiAgI2hlYWRpbmdfcm93ID4gLmNvbCA+IGgxIHtcblx0Y29sb3I6d2hpdGU7XG5cdHBhZGRpbmctdG9wOi41ZW07XG5cdHBhZGRpbmctYm90dG9tOi41ZW07XG4gIH1cbiAgXG4gICNoZWFkaW5nX3JvdyA+IC5jb2wgPiBwIHtcblx0Y29sb3I6d2hpdGU7XG5cdGZvbnQtc2l6ZToxLjVlbTtcbiAgfVxuICBcbiAgLmZlYXR1cmVzLWJveGVkIHtcblx0Y29sb3I6d2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsNjAsMSk7XG5cdG1pbi1oZWlnaHQ6NjB2aDtcblx0cGFkZGluZy1ib3R0b206NWVtO1xuXHRwYWRkaW5nLXRvcDogMmVtO1xuICB9XG4gIFxuICAuZmVhdHVyZXMtYm94ZWQgcCB7XG5cdGNvbG9yOiM3ZDgyODU7XG4gIH1cbiAgXG4gIC5mZWF0dXJlcy1ib3hlZCBoMiB7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdG1hcmdpbi1ib3R0b206NDBweDtcblx0cGFkZGluZy10b3A6NDBweDtcblx0Y29sb3I6aW5oZXJpdDtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcblx0LmZlYXR1cmVzLWJveGVkIGgyIHtcblx0ICBtYXJnaW4tYm90dG9tOjI1cHg7XG5cdCAgcGFkZGluZy10b3A6MjVweDtcblx0ICBmb250LXNpemU6MjRweDtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LmZlYXR1cmVzLWJveGVkIGgyIHtcblx0ICBtYXJnaW4tYm90dG9tOjI1cHg7XG5cdCAgcGFkZGluZy10b3A6MjVweDtcblx0ICBmb250LXNpemU6MjRweDtcblx0fVxuICB9XG4gIFxuICAuZmVhdHVyZXMtYm94ZWQgLmludHJvIHtcblx0Zm9udC1zaXplOjE2cHg7XG5cdG1heC13aWR0aDo1MDBweDtcblx0bWFyZ2luOjAgYXV0bztcbiAgfVxuICBcbiAgLmZlYXR1cmVzLWJveGVkIC5pbnRybyBwIHtcblx0bWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICAuZmVhdHVyZXMtYm94ZWQgLmZlYXR1cmVzIHtcblx0cGFkZGluZzowcHg7XG4gIH1cbiAgXG4gIC5mZWF0dXJlcy1ib3hlZCAuaXRlbSB7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIFxuICAuZmVhdHVyZXMtYm94ZWQgLml0ZW0gLmJveCB7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRwYWRkaW5nOjIwcHg7XG5cdHBhZGRpbmctYm90dG9tOjBweDtcbiAgfVxuICBcbiAgLmZlYXR1cmVzLWJveGVkIC5pdGVtIC5pY29uIHtcblx0Zm9udC1zaXplOjYwcHg7XG5cdGNvbG9yOiMxNDg1ZWU7XG5cdG1hcmdpbi10b3A6MjBweDtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xuICB9XG4gIFxuICAuZmVhdHVyZXMtYm94ZWQgLml0ZW0gLm5hbWUge1xuXHRmb250LXNpemU6MThweDtcblx0bWFyZ2luLWJvdHRvbTo4cHg7XG5cdG1hcmdpbi10b3A6MDtcblx0Y29sb3I6aW5oZXJpdDtcbiAgfVxuICBcbiAgLmZlYXR1cmVzLWJveGVkIC5pdGVtIC5kZXNjcmlwdGlvbiB7XG5cdGZvbnQtc2l6ZToxNXB4O1xuXHRtYXJnaW4tdG9wOjE1cHg7XG5cdG1hcmdpbi1ib3R0b206MjBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/component/page/index/index.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/page/index/index.component.ts ***!
  \*********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/component/page/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/component/page/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/component/page/order-history/order-history.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/page/order-history/order-history.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHistoryPageBase\">\n\t<app-order-history-widget></app-order-history-widget>\n</div>"

/***/ }),

/***/ "./src/app/component/page/order-history/order-history.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/component/page/order-history/order-history.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHistoryPageBase {\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3BhZ2Uvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29yZGVySGlzdG9yeVBhZ2VCYXNlIHtcblx0bWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/page/order-history/order-history.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/page/order-history/order-history.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/component/page/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.scss */ "./src/app/component/page/order-history/order-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/component/page/profile/profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/page/profile/profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container profile profile-view\" id=\"profile\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 alert-col relative\">\n\t\t\t<div class=\"alert alert-info absolue center\"\n\t\t\t\trole=\"alert\"><button type=\"button\" class=\"close\"\n\t\t\t\t\tdata-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button><span>Profile save\n\t\t\t\t\twith success</span></div>\n\t\t</div>\n\t</div>\n\t<form>\n\t\t<div class=\"form-row profile-row\">\n\t\t\t<div class=\"col-md-4 relative\">\n\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t<img class=\"avatar-bg center\" *ngIf=\"!user || !user.photo\"/>\n\t\t\t\t\t<img class=\"avatar-bg center\" *ngIf=\"user && user.photo\" [src]=\"user.photo\"/>\n\t\t\t\t</div>\n\t\t\t\t<input type=\"file\" class=\"form-control\" name=\"avatar-file\" hidden=\"true\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\" *ngIf=\"user\">\n\t\t\t\t<h1>Profile </h1>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">First Name</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" disabled=\"\" [value]=\"user.firstName\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Last Name</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" disabled=\"\" [value]=\"user.lastName\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Username</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" disabled=\"\" [value]=\"user.username\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Email</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" disabled=\"\" [value]=\"user.email\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Country</span></div>\n\t\t\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\tid=\"countrySelection\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let country of countries\"\n\t\t\t\t\t\t\t\t[selected]=\"country.code === user.country\"\n\t\t\t\t\t\t\t\t[value]=\"country.code\">{{country.name}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<h4\n\t\t\t\t\tdata-toggle=\"collapse\" \n\t\t\t\t\tdata-target=\"#collapseChangePassword\"\n\t\t\t\t\taria-expanded=\"false\" \n\t\t\t\t\taria-controls=\"collapseChangePassword\">Change Your Password</h4>\n\t\t\t\t<div class=\"collapse\" id=\"collapseChangePassword\">\n\t\t\t\t\t<form\n\t\t\t\t\t\t[formGroup]=\"changePasswordForm\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\">Password</span></div>\n\t\t\t\t\t\t\t\t<input class=\"form-control\"\n\t\t\t\t\t\t\t\tformControlName=\"current\"\n\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\tplaceholder=\"Your current password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\">New</span></div>\n\t\t\t\t\t\t\t\t<input class=\"form-control\"\n\t\t\t\t\t\t\t\tformControlName=\"new\"\n\t\t\t\t\t\t\t\ttype=\"password\" placeholder=\"New Password\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Repeat</span></div>\n\t\t\t\t\t\t\t\t<input class=\"form-control\"\n\t\t\t\t\t\t\t\tformControlName=\"new2\"\n\t\t\t\t\t\t\t\ttype=\"password\" placeholder=\"Repeat your New Password\">\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-group\" *ngIf=\"\n\t\t\t\t\t\t\tnew2Control\n\t\t\t\t\t\t\t&& new2Control.errors\n\t\t\t\t\t\t\t&& new2Control.errors['notEqual']\">\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t<label> New password must be be equal </label>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 content-right\"><button class=\"btn btn-primary form-btn\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"changePassword()\">CHANGE</button></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/component/page/profile/profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/component/page/profile/profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile > form > div > div.col-md-8 > div:nth-child(9) > div:nth-child(2) {\n  margin-top: 1em; }\n\n#profile > form > div > div.col-md-8 > div:nth-child(9) > div > .input-group {\n  margin-top: .5em; }\n\n.input-group-prepend > span {\n  background-color: transparent;\n  font-weight: bolder;\n  border: 0px;\n  width: 7em; }\n\n#profile > form > div > div > div.form-row {\n  margin-top: 2em; }\n\n#profile > form > div > div.col-md-8 > div > div > div > div.input-group-append {\n  display: none; }\n\ndiv.container.profile {\n  padding: 10px 20px; }\n\n.center {\n  text-align: center; }\n\n.no-marging {\n  margin: 0 !important; }\n\n.relative {\n  position: relative; }\n\n.absolue {\n  position: absolute; }\n\ndiv.profile-row {\n  margin-top: 55px; }\n\n.absolue.center {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, 0%); }\n\ndiv.alert {\n  width: 40%; }\n\n.alert-col > .alert {\n  padding: 10px;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  opacity: 0; }\n\n.alert-col > .alert.display {\n  opacity: 1; }\n\nhr {\n  height: 2px; }\n\n.content-right > * {\n  float: right; }\n\n.form-btn {\n  min-width: 100px;\n  margin: 0 5px;\n  max-width: 200px; }\n\nimg.avart-img {\n  max-width: 200px; }\n\ndiv.avatar-bg {\n  background: url(https://www.gravatar.com/avatar/1234566?size=200&d=mm);\n  background-position: 50% 50%;\n  height: 200px;\n  width: 200px;\n  background-size: cover;\n  margin-left: calc(50% - 100px); }\n\ndiv.container.profile {\n  padding: 10px 20px; }\n\n.center {\n  text-align: center; }\n\n.relative {\n  position: relative; }\n\n.absolue {\n  position: absolute; }\n\ndiv.profile-row {\n  margin-top: 55px; }\n\n.absolue.center {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, 0%); }\n\ndiv.alert {\n  width: 40%; }\n\n.alert-col > .alert {\n  padding: 10px;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  opacity: 0; }\n\nhr {\n  height: 2px; }\n\n.content-right > * {\n  float: right; }\n\n.form-btn {\n  min-width: 100px;\n  margin: 0 5px;\n  max-width: 200px; }\n\n.avatar-bg {\n  background: url(https://www.gravatar.com/avatar/1234566?size=200&d=mm);\n  background-position: 50% 50%;\n  height: 200px;\n  width: 200px;\n  background-size: cover;\n  margin-left: calc(50% - 100px); }\n\n#profile {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1g7RUFDQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsYUFBYSxFQUFBOztBQU9kO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsU0FBUztFQUNULFFBQVE7RUFDUiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxVQUFVLEVBQUE7O0FBS1g7RUFDQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVLEVBQUE7O0FBR1g7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHNFQUFzRTtFQUN0RSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7O0FBSy9CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsU0FBUztFQUNULFFBQVE7RUFDUiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHNFQUFzRTtFQUN0RSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7O0FBRy9CO0VBQ0Msa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGFnZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZT5mb3JtPmRpdj5kaXYuY29sLW1kLTg+ZGl2Om50aC1jaGlsZCg5KT5kaXY6bnRoLWNoaWxkKDIpIHtcblx0bWFyZ2luLXRvcDogMWVtO1xufVxuXG4jcHJvZmlsZT5mb3JtPmRpdj5kaXYuY29sLW1kLTg+ZGl2Om50aC1jaGlsZCg5KT5kaXY+LmlucHV0LWdyb3VwIHtcblx0bWFyZ2luLXRvcDogLjVlbTtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQ+c3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRib3JkZXI6IDBweDtcblx0d2lkdGg6IDdlbTtcbn1cblxuI3Byb2ZpbGU+Zm9ybT5kaXY+ZGl2PmRpdi5mb3JtLXJvdyB7XG5cdG1hcmdpbi10b3A6IDJlbTtcbn1cblxuI3Byb2ZpbGU+Zm9ybT5kaXY+ZGl2LmNvbC1tZC04PmRpdj5kaXY+ZGl2PmRpdi5pbnB1dC1ncm91cC1hcHBlbmQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5kaXYuYXZhdGFyPmltZyB7XG5cdC8vYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5kaXYuY29udGFpbmVyLnByb2ZpbGUge1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1tYXJnaW5nIHtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZWxhdGl2ZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdWUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmRpdi5wcm9maWxlLXJvdyB7XG5cdG1hcmdpbi10b3A6IDU1cHg7XG59XG5cbi5hYnNvbHVlLmNlbnRlciB7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbn1cblxuZGl2LmFsZXJ0IHtcblx0d2lkdGg6IDQwJTtcbn1cblxuLmFsZXJ0LWNvbCB7fVxuXG4uYWxlcnQtY29sPi5hbGVydCB7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi5hbGVydC1jb2w+LmFsZXJ0LmRpc3BsYXkge1xuXHRvcGFjaXR5OiAxO1xufVxuXG5ociB7XG5cdGhlaWdodDogMnB4O1xufVxuXG4uY29udGVudC1yaWdodD4qIHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9ybS1idG4ge1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuXHRtYXJnaW46IDAgNXB4O1xuXHRtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG5pbWcuYXZhcnQtaW1nIHtcblx0bWF4LXdpZHRoOiAyMDBweDtcbn1cblxuZGl2LmF2YXRhci1iZyB7XG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzEyMzQ1NjY/c2l6ZT0yMDAmZD1tbSk7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG5cdGhlaWdodDogMjAwcHg7XG5cdHdpZHRoOiAyMDBweDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0bWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xufVxuXG5kaXYuYXZhdGFyIHt9XG5cbmRpdi5jb250YWluZXIucHJvZmlsZSB7XG5cdHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmNlbnRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlbGF0aXZlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LnByb2ZpbGUtcm93IHtcblx0bWFyZ2luLXRvcDogNTVweDtcbn1cblxuLmFic29sdWUuY2VudGVyIHtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG5kaXYuYWxlcnQge1xuXHR3aWR0aDogNDAlO1xufVxuXG4uYWxlcnQtY29sPi5hbGVydCB7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG5cdG9wYWNpdHk6IDA7XG59XG5cbmhyIHtcblx0aGVpZ2h0OiAycHg7XG59XG5cbi5jb250ZW50LXJpZ2h0Pioge1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbi5mb3JtLWJ0biB7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdG1hcmdpbjogMCA1cHg7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5hdmF0YXItYmcge1xuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8xMjM0NTY2P3NpemU9MjAwJmQ9bW0pO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcbn1cblxuI3Byb2ZpbGUge1xuXHRtYXJnaW4tYm90dG9tOiAyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/component/page/profile/profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/page/profile/profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_provider_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/user/user.service */ "./src/app/provider/user/user.service.ts");
/* harmony import */ var src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/loading/loading.service */ "./src/app/provider/loading/loading.service.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/provider/message/text.service */ "./src/app/provider/message/text.service.ts");
/* harmony import */ var src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/provider/message/message.service */ "./src/app/provider/message/message.service.ts");
/* harmony import */ var src_client_enums_Country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_client/enums/Country */ "../node/src/_client/enums/Country.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/provider/auth/auth.service */ "./src/app/provider/auth/auth.service.ts");










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_userService, _loadingService, _textService, _messageService, _FormBuilder, _AuthService) {
        this._userService = _userService;
        this._loadingService = _loadingService;
        this._textService = _textService;
        this._messageService = _messageService;
        this._FormBuilder = _FormBuilder;
        this._AuthService = _AuthService;
        this.buildChangePasswordForm();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.buildChangePasswordForm = function () {
        var _this = this;
        this.changePasswordForm = this._FormBuilder.group({
            current: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20)]],
            new: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20)]],
            new2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20),
                    function (control) {
                        if (_this.changePasswordForm && _this.changePasswordForm.controls) {
                            return control.value === _this.changePasswordForm.controls['new'].value ? null : { notEqual: true };
                        }
                    }]]
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "new2Control", {
        get: function () {
            return this.changePasswordForm.controls['new2'];
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.loadProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //let user = await this._userService.getUser();
                this._loadingService.show();
                setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var userResult, _a, title, message;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this._userService.getUser()];
                            case 1:
                                userResult = _b.sent();
                                this._loadingService.hide();
                                if (userResult.result === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS) {
                                    this.user = userResult.data;
                                    this._loadingService.hide();
                                }
                                else {
                                    _a = this._textService.getErrorMessage(userResult.result), title = _a.title, message = _a.message;
                                    this._messageService.showMessageBox(title, message);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, _a, title, message, _b, title, message, _c, title, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.changePasswordForm.valid) return [3 /*break*/, 2];
                        this._loadingService.show();
                        return [4 /*yield*/, this._AuthService.changePassword(this.changePasswordForm.controls['current'].value, this.changePasswordForm.controls['new'].value)];
                    case 1:
                        response = _d.sent();
                        this._loadingService.hide();
                        if (response._payload.changed) {
                            _a = this._textService.getSucessMessage(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["SUCCESS_UI"].CHANGED_PASSWORD), title = _a.title, message = _a.message;
                            this._messageService.showMessageBox(title, message);
                        }
                        else {
                            _b = this._textService.getErrorMessage(response._meta._statusCode), title = _b.title, message = _b.message;
                            this._messageService.showMessageBox(title, message);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _c = this._textService.getErrorMessage_ui(src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["UI_RESULT_CODE"].INVALID_DATA), title = _c.title, message = _c.message;
                        this._messageService.showMessageBox(title, message);
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getPass2control = function () {
        return this.changePasswordForm.controls['new2'];
    };
    ProfileComponent.prototype.getCountry = function (countryCode) {
        var found = src_client_enums_Country__WEBPACK_IMPORTED_MODULE_7__["USED_COUNTRIES"].find(function (country) {
            return (country.code === countryCode);
        });
        return found ? found.name : countryCode;
    };
    Object.defineProperty(ProfileComponent.prototype, "countries", {
        get: function () {
            return src_client_enums_Country__WEBPACK_IMPORTED_MODULE_7__["USED_COUNTRIES"];
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/component/page/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/component/page/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_provider_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_provider_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            src_app_provider_message_text_service__WEBPACK_IMPORTED_MODULE_5__["TextService"],
            src_app_provider_message_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/component/page/trade/trade.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/page/trade/trade.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"MAIN_TRADE_ROW\" style=\"max-width:100%;\">\n\t<div class=\"col\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col col-12 col-sm-6 col-lg-3\" id=\"BUY_SELL_COLUMN\">\n\t\t\t\t<app-buy-sell></app-buy-sell>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-5\" id=\"CHARC_COLUMN\">\n\t\t\t\t<app-chart></app-chart>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-sm-12 col-md-12 col-lg-4\">\n\t\t\t\t<app-orderbook></app-orderbook>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<app-op-oo-ohistory></app-op-oo-ohistory>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/page/trade/trade.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/page/trade/trade.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#OP_OO_OHTABS_CONTENT {\n  max-height: 60vh;\n  overflow-y: scroll; }\n\n#MAIN_TRADE_ROW {\n  margin: 0px;\n  padding-top: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL3RyYWRlL3RyYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWU7RUFDZixrQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxXQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGFnZS90cmFkZS90cmFkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNPUF9PT19PSFRBQlNfQ09OVEVOVCB7XG5cdG1heC1oZWlnaHQ6NjB2aDtcblx0b3ZlcmZsb3cteTpzY3JvbGw7XG59XG4gIFxuI01BSU5fVFJBREVfUk9XIHtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZy10b3A6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/page/trade/trade.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/page/trade/trade.component.ts ***!
  \*********************************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TradeComponent = /** @class */ (function () {
    function TradeComponent() {
    }
    TradeComponent.prototype.ngOnInit = function () {
    };
    TradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/component/page/trade/trade.component.html"),
            styles: [__webpack_require__(/*! ./trade.component.scss */ "./src/app/component/page/trade/trade.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/component/page/withdraw/withdraw.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/page/withdraw/withdraw.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"row\" id=\"WITHDRAW_ROW\">\n\t\t<div class=\"col col-12 col-sm-6\" id=\"WITHDRAW_COLUMN\">\n\t\t\t<div>\n\t\t\t\t<h1>Withdraw</h1>\n\t\t\t</div>\n\t\t\t<form id=\"WITHDRAW_FORM\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Token</span></div>\n\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t<option value=\"12\" selected>BTC</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" id=\"form_group_bitcoin_address\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Destination Address</span></div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Ammount</span></div><input\n\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\">\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\" id=\"NTFEE_INGROUP\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Network Fee</span></div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"form-check-input\" id=\"high\" name=\"network_fee\" /><label\n\t\t\t\t\t\t\t\t\tfor=\"high\" class=\"form-check-label\">High Priority</label></div>\n\t\t\t\t\t\t\t<div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" id=\"medium\"\n\t\t\t\t\t\t\t\t\tname=\"network_fee\" /><label for=\"medium\" class=\"form-check-label\">Medium\n\t\t\t\t\t\t\t\t\tPriority</label></div>\n\t\t\t\t\t\t\t<div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" id=\"low\"\n\t\t\t\t\t\t\t\t\tname=\"network_fee\" /><label for=\"low\" class=\"form-check-label\">Low Priority</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Destination</span></div><input\n\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\">\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Ammount to Send</span></div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\">\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Priority</span></div><input\n\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\">\n\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<h2>IMPORTANT NOTES</h2>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>For security reasons, processes withdrawals with manual review once a day.</li>\n\t\t\t\t\t\t<li>Submit your withdrawal by 13:00 UTC (about 5 hours) to be included in the day's batch.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\"><button class=\"btn btn-dark btn-block btn-lg\" type=\"button\">SUBMIT</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"col col-12 col-sm-6\">\n\t\t\t<div>\n\t\t\t\t<h2>Withdraw History</h2>\n\t\t\t\t<app-withdraw-history></app-withdraw-history>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/page/withdraw/withdraw.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/component/page/withdraw/withdraw.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#WITHDRAW_FORM > .form-group > .input-group > .input-group-append {\n  display: none; }\n\n#WITHDRAW_FORM > .form-group {\n  margin-bottom: .5em;\n  margin-top: 1em; }\n\n#WITHDRAW_FORM > .form-group > .input-group {\n  margin-top: .5em; }\n\n#form_group_bitcoin_address > label {\n  font-weight: bold; }\n\n#WITHDRAW_COLUMN {\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 2em; }\n\n#WITHDRAW_FORM > .form-group > .input-group > .input-group-prepend > span {\n  width: 12em;\n  background: none;\n  border: none;\n  font-weight: bolder; }\n\n#NTFEE_INGROUP > div > div:nth-child(2) {\n  padding-left: 1em; }\n\n#WITHDRAW_ROW {\n  width: 100%;\n  margin: 0px; }\n\n#WITHDRAW_ROW > .col > div:first-child {\n  height: 3em; }\n\n#WITHDRAW_HISTORY_TABLE {\n  margin-top: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL3dpdGhkcmF3L3dpdGhkcmF3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR1o7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGFnZS93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNXSVRIRFJBV19GT1JNPi5mb3JtLWdyb3VwPi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuI1dJVEhEUkFXX0ZPUk0+LmZvcm0tZ3JvdXAge1xuXHRtYXJnaW4tYm90dG9tOiAuNWVtO1xuXHRtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNXSVRIRFJBV19GT1JNPi5mb3JtLWdyb3VwPi5pbnB1dC1ncm91cCB7XG5cdG1hcmdpbi10b3A6IC41ZW07XG59XG5cbiNmb3JtX2dyb3VwX2JpdGNvaW5fYWRkcmVzcz5sYWJlbCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jV0lUSERSQVdfQ09MVU1OIHtcblx0cGFkZGluZy1sZWZ0OiAxZW07XG5cdHBhZGRpbmctcmlnaHQ6IDFlbTtcblx0cGFkZGluZy1ib3R0b206IDJlbTtcbn1cblxuI1dJVEhEUkFXX0ZPUk0+LmZvcm0tZ3JvdXA+LmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kPnNwYW4ge1xuXHR3aWR0aDogMTJlbTtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jTlRGRUVfSU5HUk9VUD5kaXY+ZGl2Om50aC1jaGlsZCgyKSB7XG5cdHBhZGRpbmctbGVmdDogMWVtO1xufVxuXG4jV0lUSERSQVdfUk9XIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMHB4O1xufVxuXG4jV0lUSERSQVdfUk9XPi5jb2w+ZGl2OmZpcnN0LWNoaWxkIHtcblx0aGVpZ2h0OiAzZW07XG59XG5cbiNXSVRIRFJBV19ISVNUT1JZX1RBQkxFIHtcblx0bWFyZ2luLXRvcDogMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/page/withdraw/withdraw.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/page/withdraw/withdraw.component.ts ***!
  \***************************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent() {
    }
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/component/page/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.scss */ "./src/app/component/page/withdraw/withdraw.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/ui/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-dark\">\n\t<footer>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col col-12 col-md-3\" id=\"logo_container_a\">\n\t\t\t\t\t<div><i class=\"fa fa-bitcoin\" id=\"footer_icon_1\"></i></div>\n\t\t\t\t\t<div><a href=\"MAILTO:support@thiscoin.com\" id=\"email_support_to\">support@thiscoin.com</a></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-3 item\">\n\t\t\t\t\t<h3>This Coin</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">About Us</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Caeers</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Law Enforcement Guidance</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Customer Tax Responsabilities</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Compliance Disclosure</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Privacy Policy &amp; Statements</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Terms of Service</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-md-3 item\">\n\t\t\t\t\t<h3>Help</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Support</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">News</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Feedback</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Contact</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col item\">\n\t\t\t\t\t<h3>Product</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Fee</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">API</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Security</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Bug Bounty</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col col-12 item social\"><a href=\"#\"><i class=\"icon ion-social-facebook\"></i></a><a\n\t\t\t\t\t\thref=\"#\"><i class=\"icon ion-social-twitter\"></i></a><a href=\"#\"><i\n\t\t\t\t\t\t\tclass=\"icon ion-social-snapchat\"></i></a><a href=\"#\"><i\n\t\t\t\t\t\t\tclass=\"icon ion-social-instagram\"></i></a></div>\n\t\t\t</div>\n\t\t\t<p class=\"copyright\">ThisCoin © 2019</p>\n\t\t</div>\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/ui/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-dark ul {\n  padding: 0;\n  list-style: none;\n  line-height: 1.6;\n  font-size: 14px;\n  margin-bottom: 0; }\n\n@media (max-width: 767px) {\n  .footer-dark .item:not(.social) {\n    text-align: center;\n    padding-bottom: 20px; } }\n\n.footer-dark ul a {\n  color: inherit;\n  text-decoration: none;\n  opacity: 0.6; }\n\n.footer-dark ul a:hover {\n  opacity: 0.8; }\n\n.footer-dark .item.text {\n  margin-bottom: 36px; }\n\n@media (max-width: 767px) {\n  .footer-dark .item.text {\n    margin-bottom: 0; } }\n\n.footer-dark .item.text p {\n  opacity: 0.6;\n  margin-bottom: 0; }\n\n.footer-dark .item.social {\n  text-align: center; }\n\n@media (max-width: 991px) {\n  .footer-dark .item.social {\n    text-align: center;\n    margin-top: 20px; } }\n\n.footer-dark .item.social > a {\n  font-size: 20px;\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);\n  margin: 0 8px;\n  color: #fff;\n  opacity: 0.75; }\n\n.footer-dark .item.social > a:hover {\n  opacity: 0.9; }\n\n.footer-dark {\n  padding: 50px 0;\n  color: #f0f9ff;\n  background-color: #00003c;\n  border-top: 2px solid white; }\n\n.footer-dark h3 {\n  margin-top: 0;\n  margin-bottom: 12px;\n  font-weight: bold;\n  font-size: 16px; }\n\n.footer-dark .copyright {\n  text-align: center;\n  padding-top: 24px;\n  opacity: 0.3;\n  font-size: 13px;\n  margin-bottom: 0; }\n\n#footer_icon_1 {\n  font-size: 6em; }\n\n#email_support_to {\n  color: white;\n  text-decoration: none; }\n\n#logo_container_a {\n  text-align: center;\n  padding-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBLEVBQ3JCOztBQUdIO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdIO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBLEVBQ2pCOztBQUdIO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5QyxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQW1DO0VBQ25DLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFlBQVk7RUFDWixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItZGFyayB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXItZGFyayAuaXRlbTpub3QoLnNvY2lhbCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4uZm9vdGVyLWRhcmsgdWwgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmZvb3Rlci1kYXJrIHVsIGE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cbi5mb290ZXItZGFyayAuaXRlbS50ZXh0IHAge1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuXG4uZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsID4gYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4uZm9vdGVyLWRhcmsgLml0ZW0uc29jaWFsID4gYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmZvb3Rlci1kYXJrIHtcbiAgcGFkZGluZzogNTBweCAwO1xuICBjb2xvcjogI2YwZjlmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCA2MCwgMSk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmZvb3Rlci1kYXJrIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvb3Rlci1kYXJrIC5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI2Zvb3Rlcl9pY29uXzEge1xuICBmb250LXNpemU6IDZlbTtcbn1cblxuI2VtYWlsX3N1cHBvcnRfdG8ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2xvZ29fY29udGFpbmVyX2Ege1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/component/ui/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/ui/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/component/ui/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/loading-modal/loading-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/ui/loading-modal/loading-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"loading-modal\" #loadingModal>\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<img src=\"../../../../assets/img/05912f99-8462-44de-946b-f6238021c2ad.gif\"/>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/loading-modal/loading-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/component/ui/loading-modal/loading-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  align-items: center;\n  background: transparent;\n  border: 0px; }\n\n.modal-content > img {\n  border-radius: 50%;\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS9sb2FkaW5nLW1vZGFsL2xvYWRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFFWjtFQUNDLGtCQUFrQjtFQUNsQixpQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS9sb2FkaW5nLW1vZGFsL2xvYWRpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDBweDtcbn1cbi5tb2RhbC1jb250ZW50ID4gaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOndoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/component/ui/loading-modal/loading-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/ui/loading-modal/loading-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModalComponent", function() { return LoadingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingModalComponent = /** @class */ (function () {
    function LoadingModalComponent() {
    }
    LoadingModalComponent.prototype.ngOnInit = function () {
        $('#loading-modal');
    };
    LoadingModalComponent.showLoading = function () {
        $('#loading-modal').modal("show");
    };
    LoadingModalComponent.hideLoading = function () {
        $('#loading-modal').modal('hide');
    };
    LoadingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-modal',
            template: __webpack_require__(/*! ./loading-modal.component.html */ "./src/app/component/ui/loading-modal/loading-modal.component.html"),
            styles: [__webpack_require__(/*! ./loading-modal.component.scss */ "./src/app/component/ui/loading-modal/loading-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingModalComponent);
    return LoadingModalComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/message-modal/message-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/ui/message-modal/message-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" #messageBox id=\"messageBox\">\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">{{title}}</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{body}}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/message-modal/message-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/component/ui/message-modal/message-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/ui/message-modal/message-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/ui/message-modal/message-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: MessageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModalComponent", function() { return MessageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageModalComponent = /** @class */ (function () {
    function MessageModalComponent() {
    }
    MessageModalComponent_1 = MessageModalComponent;
    Object.defineProperty(MessageModalComponent.prototype, "title", {
        get: function () {
            return MessageModalComponent_1.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageModalComponent.prototype, "body", {
        get: function () {
            return MessageModalComponent_1._body;
        },
        enumerable: true,
        configurable: true
    });
    MessageModalComponent.prototype.ngOnInit = function () {
    };
    MessageModalComponent.show = function (title, body) {
        console.log("Showing modal...");
        this.title = title;
        this._body = body;
        $('#messageBox').modal('show');
    };
    MessageModalComponent.hide = function () {
        this.title = "";
        this._body = "";
        $('#messageBox').modal('hide');
    };
    MessageModalComponent.prototype.hide = function () {
        MessageModalComponent_1.hide();
    };
    var MessageModalComponent_1;
    MessageModalComponent = MessageModalComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-modal',
            template: __webpack_require__(/*! ./message-modal.component.html */ "./src/app/component/ui/message-modal/message-modal.component.html"),
            styles: [__webpack_require__(/*! ./message-modal.component.scss */ "./src/app/component/ui/message-modal/message-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageModalComponent);
    return MessageModalComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/navbar/navbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/ui/navbar/navbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav class=\"navbar navbar-dark navbar-expand-md fixed-top navigation-clean\">\n\t\t<div class=\"container\">\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"_RouteService.main\">ThisCoin</a>\n\t\t\t<button class=\"navbar-toggler\"\n\t\t\tdata-toggle=\"collapse\"\n\t\t\tdata-target=\"#navcol-1\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li class=\"nav-item\"\n\t\t\t\t\t*ngIf=\"isLoggedIn\"\n\t\t\t\t\trole=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.trade\">Trade</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\" *ngIf=\"isLoggedIn\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle nav-link dropdown-toggle\" \n\t\t\t\t\t\tdata-toggle=\"dropdown\"\n\t\t\t\t\t\thref=\"#\"\n\t\t\t\t\t\taria-expanded=\"false\">\n\t\t\t\t\t\t\tAssets\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"presentation\" [routerLink]=\"_RouteService.deposits\">Deposits</a>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"dropdown-item\" role=\"presentation\" [routerLink]=\"_RouteService.withdraws\">Withdraws</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\"\n\t\t\t\t\t\t\t\trole=\"presentation\" [routerLink]=\"_RouteService.orderHistory\">Order History</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\"\n\t\t\t\t\t*ngIf=\"isLoggedIn\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.profile\">Profile</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\"\n\t\t\t\t\t*ngIf=\"isLoggedIn\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<a class=\"dropdown-toggle nav-link dropdown-toggle\" \n\t\t\t\t\t\t\tdata-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-expanded=\"true\"\n\t\t\t\t\t\t\thref=\"#\">More</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" \n\t\t\t\t\t\trole=\"menu\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"nav navbar-nav ml-auto\">\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\" *ngIf=\"!isLoggedIn\" [routerLink]=\"_RouteService.signIn\">Login</a>\n\t\t\t\t\t\t<a class=\"nav-link\" *ngIf=\"isLoggedIn\" style=\"cursor: pointer;\" (click)=\"signOut()\">Log-Out</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\" *ngIf=\"!isLoggedIn\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.signUp\">Register</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/navbar/navbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/ui/navbar/navbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-clean {\n  background: #1e1e1e;\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  color: white;\n  border-radius: 0;\n  box-shadow: none;\n  border: none;\n  margin-bottom: 0; }\n\n@media (min-width: 768px) {\n  .navigation-clean {\n    padding-top: 1rem;\n    padding-bottom: 1rem; } }\n\n.navigation-clean .navbar-brand {\n  font-weight: bold;\n  color: inherit; }\n\n.navigation-clean .navbar-brand:hover {\n  color: white; }\n\n.navigation-clean .navbar-toggler {\n  border-color: white; }\n\n.navigation-clean .navbar-toggler:hover, .navigation-clean .navbar-toggler:focus {\n  background: none; }\n\n.navigation-clean .navbar-toggler {\n  color: #888; }\n\n.navigation-clean .navbar-collapse, .navigation-clean .form-inline {\n  border-top-color: #ddd; }\n\n.navigation-clean.navbar-light .navbar-nav .nav-link.active, .navigation-clean.navbar-light .navbar-nav .nav-link.active:focus, .navigation-clean.navbar-light .navbar-nav .nav-link.active:hover {\n  color: #8f8f8f;\n  box-shadow: none;\n  background: none;\n  pointer-events: none; }\n\n.navigation-clean.navbar .navbar-nav .nav-link {\n  padding-left: 18px;\n  padding-right: 18px; }\n\n.navigation-clean.navbar-light .navbar-nav .nav-link {\n  color: white; }\n\n.navigation-clean.navbar-light .navbar-nav .nav-link:focus, .navigation-clean.navbar-light .navbar-nav .nav-link:hover {\n  color: white !important;\n  background-color: transparent; }\n\n.navigation-clean .navbar-nav > li > .dropdown-menu {\n  margin-top: -5px;\n  box-shadow: none;\n  background: rgba(10, 10, 10, 0.9);\n  border-radius: 2px; }\n\n.navigation-clean .navbar-nav > li > .dropdown-menu:hover {\n  margin-top: -5px;\n  box-shadow: none;\n  background: #0a0a0a;\n  color: white;\n  border-radius: 2px; }\n\n.navigation-clean .dropdown-menu .dropdown-item:focus, .navigation-clean .dropdown-menu .dropdown-item {\n  line-height: 2;\n  color: white; }\n\n.navigation-clean .dropdown-menu .dropdown-item:focus, .navigation-clean .dropdown-menu .dropdown-item:hover {\n  background: rgba(10, 10, 10, 0.8);\n  color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQTJCO0VBQzNCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWUsRUFBQTs7QUFHZDtFQUNEO0lBQ0UsaUJBQWdCO0lBQ2hCLG9CQUFtQixFQUFBLEVBQ3BCOztBQUdBO0VBQ0QsaUJBQWdCO0VBQ2hCLGNBQWEsRUFBQTs7QUFHWjtFQUNELFlBQVksRUFBQTs7QUFHWDtFQUNELG1CQUFrQixFQUFBOztBQUdqQjtFQUNELGdCQUFlLEVBQUE7O0FBR2Q7RUFDRCxXQUFVLEVBQUE7O0FBR1Q7RUFDRCxzQkFBcUIsRUFBQTs7QUFHcEI7RUFDRCxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLG9CQUFtQixFQUFBOztBQUdsQjtFQUNELGtCQUFpQjtFQUNqQixtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxZQUFXLEVBQUE7O0FBR1Y7RUFDRCx1QkFBc0I7RUFDdEIsNkJBQTRCLEVBQUE7O0FBRzNCO0VBQ0QsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGlDQUE2QjtFQUM3QixrQkFBaUIsRUFBQTs7QUFHaEI7RUFDRCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsbUJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBaUIsRUFBQTs7QUFHaEI7RUFDRCxjQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdYO0VBQ0QsaUNBQTZCO0VBQzdCLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tY2xlYW4ge1xuXHRiYWNrZ3JvdW5kOnJnYmEoMzAsMzAsMzAsMSk7XG5cdHBhZGRpbmctdG9wOi43NXJlbTtcblx0cGFkZGluZy1ib3R0b206Ljc1cmVtO1xuXHRjb2xvcjp3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czowO1xuXHRib3gtc2hhZG93Om5vbmU7XG5cdGJvcmRlcjpub25lO1xuXHRtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG5cdC5uYXZpZ2F0aW9uLWNsZWFuIHtcblx0ICBwYWRkaW5nLXRvcDoxcmVtO1xuXHQgIHBhZGRpbmctYm90dG9tOjFyZW07XG5cdH1cbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci1icmFuZCB7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdGNvbG9yOmluaGVyaXQ7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuXHRjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItdG9nZ2xlciB7XG5cdGJvcmRlci1jb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci10b2dnbGVyOmhvdmVyLCAubmF2aWdhdGlvbi1jbGVhbiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kOm5vbmU7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItdG9nZ2xlciB7XG5cdGNvbG9yOiM4ODg7XG4gIH1cbiAgXG4gIC5uYXZpZ2F0aW9uLWNsZWFuIC5uYXZiYXItY29sbGFwc2UsIC5uYXZpZ2F0aW9uLWNsZWFuIC5mb3JtLWlubGluZSB7XG5cdGJvcmRlci10b3AtY29sb3I6I2RkZDtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsIC5uYXZpZ2F0aW9uLWNsZWFuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlOmZvY3VzLCAubmF2aWdhdGlvbi1jbGVhbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XG5cdGNvbG9yOiM4ZjhmOGY7XG5cdGJveC1zaGFkb3c6bm9uZTtcblx0YmFja2dyb3VuZDpub25lO1xuXHRwb2ludGVyLWV2ZW50czpub25lO1xuICB9XG4gIFxuICAubmF2aWdhdGlvbi1jbGVhbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcblx0cGFkZGluZy1sZWZ0OjE4cHg7XG5cdHBhZGRpbmctcmlnaHQ6MThweDtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG5cdGNvbG9yOndoaXRlO1xuICB9XG4gIFxuICAubmF2aWdhdGlvbi1jbGVhbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2aWdhdGlvbi1jbGVhbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcblx0Y29sb3I6d2hpdGUgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcblx0bWFyZ2luLXRvcDotNXB4Oy8vYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3gtc2hhZG93Om5vbmU7XG5cdGJhY2tncm91bmQ6cmdiYSgxMCwxMCwxMCwuOTApO1xuXHRib3JkZXItcmFkaXVzOjJweDtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4gLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51OmhvdmVyIHtcblx0bWFyZ2luLXRvcDotNXB4Oy8vYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3gtc2hhZG93Om5vbmU7XG5cdGJhY2tncm91bmQ6cmdiYSgxMCwxMCwxMCwxKTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOjJweDtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24tY2xlYW4gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06Zm9jdXMsIC5uYXZpZ2F0aW9uLWNsZWFuIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcblx0bGluZS1oZWlnaHQ6Mjtcblx0Y29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAubmF2aWdhdGlvbi1jbGVhbiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cywgLm5hdmlnYXRpb24tY2xlYW4gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuXHRiYWNrZ3JvdW5kOnJnYmEoMTAsMTAsMTAsLjgwKTtcblx0Y29sb3I6aW5oZXJpdDtcbiAgfVxuICBcbiAgXG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/component/ui/navbar/navbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/ui/navbar/navbar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_provider_route_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/route/route.service */ "./src/app/provider/route/route.service.ts");
/* harmony import */ var src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/auth/auth.service */ "./src/app/provider/auth/auth.service.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_RouteService, _AuthService, _router) {
        this._RouteService = _RouteService;
        this._AuthService = _AuthService;
        this._router = _router;
        this.listenAuth();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.initialize()
            .catch(function (err) {
            console.log("Error initializing...", err);
        });
    };
    NavbarComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("initialize -- 1");
                        return [4 /*yield*/, new Promise(function (accept) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var finish, _loop_1, out_i_1, i;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            finish = 3000;
                                            _loop_1 = function (i) {
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, new Promise(function () {
                                                                setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                    var data_1, e_1;
                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                        switch (_a.label) {
                                                                            case 0:
                                                                                _a.trys.push([0, 2, , 3]);
                                                                                return [4 /*yield*/, this._AuthService.isLoggedIn()];
                                                                            case 1:
                                                                                data_1 = _a.sent();
                                                                                i += 3000;
                                                                                return [3 /*break*/, 3];
                                                                            case 2:
                                                                                e_1 = _a.sent();
                                                                                return [3 /*break*/, 3];
                                                                            case 3: return [2 /*return*/];
                                                                        }
                                                                    });
                                                                }); }, 100);
                                                            })];
                                                        case 1:
                                                            _a.sent();
                                                            out_i_1 = i;
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            i = 0;
                                            _a.label = 1;
                                        case 1:
                                            if (!(i < finish)) return [3 /*break*/, 4];
                                            return [5 /*yield**/, _loop_1(i)];
                                        case 2:
                                            _a.sent();
                                            i = out_i_1;
                                            _a.label = 3;
                                        case 3:
                                            i++;
                                            return [3 /*break*/, 1];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._AuthService.isLoggedIn()];
                    case 2:
                        data = _a.sent();
                        this.isLoggedIn = !!data;
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.listenAuth = function () {
        var _this = this;
        this._AuthService.event.subscribe(function (payload) {
            if (payload.event === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["AUTH_STATE_CHANGE"].LOGGED_IN) {
                _this.isLoggedIn = true;
                _this._router.navigate(['profile']);
            }
            else if (payload.event === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["AUTH_STATE_CHANGE"].LOGGED_OUT) {
                _this.isLoggedIn = false;
                _this._router.navigate(['sign_in']);
            }
            else if (payload.event === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["AUTH_STATE_CHANGE"].CHANGED) {
                _this.isLoggedIn = !!payload.data;
            }
        });
    };
    NavbarComponent.prototype.signOut = function () {
        this._AuthService.signOut()
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/ui/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_provider_route_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"],
            src_app_provider_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/buy-sell/buy-sell.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/ui/widget/buy-sell/buy-sell.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-1\">Buy</a>\n\t\t</li>\n\t\t<li class=\"nav-item\" style=\"display:none;\">\n\t\t\t<a class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-2\">Sell</a>\n\t\t</li>\n\t</ul>\n\t<div class=\"tab-content\">\n\t\t<app-coin-price></app-coin-price>\n\t\t<div class=\"tab-pane active\" role=\"tabpanel\" id=\"tab-1\">\n\t\t\t<div id=\"ORDTYPE\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">Order Type</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\" selected>Limit Order</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"13\">Market Order</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"table-responsive\" id=\"ORD_QTY_LIMIT\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><label>Quantity</label></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">USD</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" />\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><label>Limit Price</label></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">USD</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" />\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div id=\"QTYDIV\"></div>\n\t\t\t<div></div>\n\t\t\t<div id=\"MAKERONLYDIV\">\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"formCheck-2\" /><label class=\"form-check-label\"\n\t\t\t\t\t\tfor=\"formCheck-2\">MAKER ONLY</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"BUY_DIV\">\n\t\t\t\t<button class=\"btn btn-dark btn-block btn-lg\" type=\"button\">\n\t\t\t\t\tBUY\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tab-pane\" role=\"tabpanel\" id=\"tab-2\">\n\t\t\t<p>Content for tab 2.</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/ui/widget/buy-sell/buy-sell.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/ui/widget/buy-sell/buy-sell.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab1 > div {\n  display: table; }\n\n#tab1 > div > p {\n  display: table-cell; }\n\n#tab1 > div > p {\n  display: table-cell; }\n\n#tab1 > div > p {\n  display: table-cell; }\n\n#tab1 > div > paragraph {\n  display: table-cell; }\n\n#ORDTYPE > p {\n  display: inline-block;\n  padding-right: .5em;\n  font-weight: bolder; }\n\n#tab-1 > div > button, select {\n  display: inline-block; }\n\n#ORDTYPE {\n  width: 100%;\n  text-align: center;\n  padding-top: .5em; }\n\n#BUY_SELL_COLUMN {\n  padding-right: 0em; }\n\n#MAKERONLYDIV {\n  padding-left: .5em;\n  font-weight: bolder;\n  text-transform: uppercase; }\n\n#BUY_DIV {\n  text-align: center;\n  margin-top: 1em; }\n\n#BUY_DIV > button {\n  margin-bottom: 2em; }\n\n#BUY_DIV > button {\n  width: 90%; }\n\n#ORDTYPE > div > table > thead {\n  display: none; }\n\n#ORD_QTY_LIMIT > table > thead {\n  display: none; }\n\n#ORDTYPE > div > table > tbody > tr > td {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  vertical-align: middle;\n  text-align: left; }\n\n#ORD_QTY_LIMIT > table > tbody > tr > td {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  vertical-align: middle;\n  text-align: left; }\n\n#ORDTYPE > div > table > tbody > tr > td:first-child {\n  width: 40%; }\n\n#ORD_QTY_LIMIT > table > tbody > tr > td:first-child {\n  width: 40%; }\n\n#ORDTYPE > div > table > tbody > tr > td > .input-group {\n  padding-right: .1em; }\n\n#ORD_QTY_LIMIT > table > tbody > tr > td > .input-group {\n  padding-right: .1em; }\n\n#ORDTYPE > div > table > tbody > tr > td > .input-group > .input-group-append > select {\n  width: auto;\n  height: 100%; }\n\n#ORDTYPE > div > table > tbody > tr > td > .input-group > .input-group-append {\n  width: 50%;\n  display: inline-block; }\n\n#ORDTYPE > div > table > tbody > tr > td > .input-group > .input-group-prepend {\n  width: 48%;\n  display: inline-block; }\n\n#ORD_QTY_LIMIT > table > tbody > tr > td > .input-group > .input-group-prepend {\n  width: 48%;\n  display: inline-block; }\n\n#ORDTYPE > div > table > tbody > tr > td > label {\n  padding-right: .2em;\n  padding-left: .2em; }\n\n#ORD_QTY_LIMIT > table > tbody > tr > td > label {\n  padding-right: .2em;\n  padding-left: .2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvYnV5LXNlbGwvYnV5LXNlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFhLEVBQUE7O0FBR1o7RUFDRCxtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxtQkFBa0IsRUFBQTs7QUFHakI7RUFDRCxxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUFBOztBQUdqQjtFQUNELHFCQUFvQixFQUFBOztBQUduQjtFQUNELFdBQVU7RUFDVixrQkFBaUI7RUFDakIsaUJBQWdCLEVBQUE7O0FBR2Y7RUFDRCxrQkFBaUIsRUFBQTs7QUFHaEI7RUFDRCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHlCQUF3QixFQUFBOztBQUd2QjtFQUNELGtCQUFpQjtFQUNqQixlQUFjLEVBQUE7O0FBR2I7RUFDRCxrQkFBaUIsRUFBQTs7QUFHaEI7RUFDRCxVQUFTLEVBQUE7O0FBR1I7RUFDRCxhQUFZLEVBQUE7O0FBR1g7RUFDRCxhQUFZLEVBQUE7O0FBR1g7RUFDRCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixnQkFBZSxFQUFBOztBQUdkO0VBQ0QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsZ0JBQWUsRUFBQTs7QUFHZDtFQUNELFVBQVMsRUFBQTs7QUFHUjtFQUNELFVBQVMsRUFBQTs7QUFHUjtFQUNELG1CQUFrQixFQUFBOztBQUdqQjtFQUNELG1CQUFrQixFQUFBOztBQUdqQjtFQUNELFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR1Y7RUFDRCxVQUFTO0VBQ1QscUJBQW9CLEVBQUE7O0FBR25CO0VBQ0QsVUFBUztFQUNULHFCQUFvQixFQUFBOztBQUduQjtFQUNELFVBQVM7RUFDVCxxQkFBb0IsRUFBQTs7QUFHbkI7RUFDRCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQUE7O0FBR2hCO0VBQ0QsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3VpL3dpZGdldC9idXktc2VsbC9idXktc2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWIxID4gZGl2IHtcblx0ZGlzcGxheTp0YWJsZTtcbiAgfVxuICBcbiAgI3RhYjEgPiBkaXYgPiBwIHtcblx0ZGlzcGxheTp0YWJsZS1jZWxsO1xuICB9XG4gIFxuICAjdGFiMSA+IGRpdiA+IHAge1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIH1cbiAgXG4gICN0YWIxID4gZGl2ID4gcCB7XG5cdGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgfVxuICBcbiAgI3RhYjEgPiBkaXYgPiBwYXJhZ3JhcGgge1xuXHRkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gcCB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nLXJpZ2h0Oi41ZW07XG5cdGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgfVxuICBcbiAgI3RhYi0xID4gZGl2ID4gYnV0dG9uLCBzZWxlY3Qge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgI09SRFRZUEUge1xuXHR3aWR0aDoxMDAlO1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0cGFkZGluZy10b3A6LjVlbTtcbiAgfVxuICBcbiAgI0JVWV9TRUxMX0NPTFVNTiB7XG5cdHBhZGRpbmctcmlnaHQ6MGVtO1xuICB9XG4gIFxuICAjTUFLRVJPTkxZRElWIHtcblx0cGFkZGluZy1sZWZ0Oi41ZW07XG5cdGZvbnQtd2VpZ2h0OmJvbGRlcjtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICB9XG4gIFxuICAjQlVZX0RJViB7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRtYXJnaW4tdG9wOjFlbTtcbiAgfVxuICBcbiAgI0JVWV9ESVYgPiBidXR0b24ge1xuXHRtYXJnaW4tYm90dG9tOjJlbTtcbiAgfVxuICBcbiAgI0JVWV9ESVYgPiBidXR0b24ge1xuXHR3aWR0aDo5MCU7XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gZGl2ID4gdGFibGUgPiB0aGVhZCB7XG5cdGRpc3BsYXk6bm9uZTtcbiAgfVxuICBcbiAgI09SRF9RVFlfTElNSVQgPiB0YWJsZSA+IHRoZWFkIHtcblx0ZGlzcGxheTpub25lO1xuICB9XG4gIFxuICAjT1JEVFlQRSA+IGRpdiA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcblx0cGFkZGluZy1sZWZ0OjBweDtcblx0cGFkZGluZy1yaWdodDowcHg7XG5cdHBhZGRpbmctdG9wOjBweDtcblx0cGFkZGluZy1ib3R0b206MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cdHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICBcbiAgI09SRF9RVFlfTElNSVQgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG5cdHBhZGRpbmctbGVmdDowcHg7XG5cdHBhZGRpbmctcmlnaHQ6MHB4O1xuXHRwYWRkaW5nLXRvcDowcHg7XG5cdHBhZGRpbmctYm90dG9tOjBweDtcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHR0ZXh0LWFsaWduOmxlZnQ7XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuXHR3aWR0aDo0MCU7XG4gIH1cbiAgXG4gICNPUkRfUVRZX0xJTUlUID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuXHR3aWR0aDo0MCU7XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQgPiAuaW5wdXQtZ3JvdXAge1xuXHRwYWRkaW5nLXJpZ2h0Oi4xZW07XG4gIH1cbiAgXG4gICNPUkRfUVRZX0xJTUlUID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQgPiAuaW5wdXQtZ3JvdXAge1xuXHRwYWRkaW5nLXJpZ2h0Oi4xZW07XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQgPiAuaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gc2VsZWN0IHtcblx0d2lkdGg6YXV0bztcblx0aGVpZ2h0OjEwMCU7XG4gIH1cbiAgXG4gICNPUkRUWVBFID4gZGl2ID4gdGFibGUgPiB0Ym9keSA+IHRyID4gdGQgPiAuaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kIHtcblx0d2lkdGg6NTAlO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgI09SRFRZUEUgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCA+IC5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcblx0d2lkdGg6NDglO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgI09SRF9RVFlfTElNSVQgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCA+IC5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcblx0d2lkdGg6NDglO1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgI09SRFRZUEUgPiBkaXYgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCA+IGxhYmVsIHtcblx0cGFkZGluZy1yaWdodDouMmVtO1xuXHRwYWRkaW5nLWxlZnQ6LjJlbTtcbiAgfVxuICBcbiAgI09SRF9RVFlfTElNSVQgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCA+IGxhYmVsIHtcblx0cGFkZGluZy1yaWdodDouMmVtO1xuXHRwYWRkaW5nLWxlZnQ6LjJlbTtcbiAgfVxuICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/component/ui/widget/buy-sell/buy-sell.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/ui/widget/buy-sell/buy-sell.component.ts ***!
  \********************************************************************/
/*! exports provided: BuySellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellComponent", function() { return BuySellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuySellComponent = /** @class */ (function () {
    function BuySellComponent() {
    }
    BuySellComponent.prototype.ngOnInit = function () {
    };
    BuySellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buy-sell',
            template: __webpack_require__(/*! ./buy-sell.component.html */ "./src/app/component/ui/widget/buy-sell/buy-sell.component.html"),
            styles: [__webpack_require__(/*! ./buy-sell.component.scss */ "./src/app/component/ui/widget/buy-sell/buy-sell.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuySellComponent);
    return BuySellComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/chart/chart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/ui/widget/chart/chart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<img class=\"img-fluid\" src=\"assets/img/Captura de pantalla de 2019-07-26 18-17-25.png\" />\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/chart/chart.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/ui/widget/chart/chart.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/ui/widget/chart/chart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/ui/widget/chart/chart.component.ts ***!
  \**************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/component/ui/widget/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/component/ui/widget/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/deposit-history/deposit-history.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/component/ui/widget/deposit-history/deposit-history.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Ammount</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>2019-01-01 05:00:32</td>\n\t\t\t\t<td>0.0002563</td>\n\t\t\t</tr>\n\t\t\t<tr></tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/deposit-history/deposit-history.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/component/ui/widget/deposit-history/deposit-history.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvZGVwb3NpdC1oaXN0b3J5L2RlcG9zaXQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/ui/widget/deposit-history/deposit-history.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ui/widget/deposit-history/deposit-history.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DepositHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositHistoryComponent", function() { return DepositHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepositHistoryComponent = /** @class */ (function () {
    function DepositHistoryComponent() {
    }
    DepositHistoryComponent.prototype.ngOnInit = function () {
    };
    DepositHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deposit-history',
            template: __webpack_require__(/*! ./deposit-history.component.html */ "./src/app/component/ui/widget/deposit-history/deposit-history.component.html"),
            styles: [__webpack_require__(/*! ./deposit-history.component.scss */ "./src/app/component/ui/widget/deposit-history/deposit-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepositHistoryComponent);
    return DepositHistoryComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"OP_OO_OHTABS_COLUMN\" style=\"padding-right:0PX;\">\n\t<div>\n\t\t<ul class=\"nav nav-tabs\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-open_positions\">Open Positions</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-open_orders\">Open Orders</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-order_history\">Order History</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"tab-content\" id=\"OP_OO_OHTABS_CONTENT\">\n\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" id=\"tab-open_positions\">\n\t\t\t\t<app-open-positions></app-open-positions>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" id=\"tab-open_orders\">\n\t\t\t\t<app-open-orders></app-open-orders>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane active\" role=\"tabpanel\" id=\"tab-order_history\">\n\t\t\t\t<app-order-history-widget></app-order-history-widget>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3Atb28tb2hpc3Rvcnkvb3Atb28tb2hpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.ts ***!
  \********************************************************************************/
/*! exports provided: OPOOOHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPOOOHistoryComponent", function() { return OPOOOHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OPOOOHistoryComponent = /** @class */ (function () {
    function OPOOOHistoryComponent() {
    }
    OPOOOHistoryComponent.prototype.ngOnInit = function () {
    };
    OPOOOHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-op-oo-ohistory',
            template: __webpack_require__(/*! ./op-oo-ohistory.component.html */ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.html"),
            styles: [__webpack_require__(/*! ./op-oo-ohistory.component.scss */ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OPOOOHistoryComponent);
    return OPOOOHistoryComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/open-orders/open-orders.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-orders/open-orders.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" id=\"open_orders_widget\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Order ID</th>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Pair</th>\n\t\t\t\t<th>Leverage</th>\n\t\t\t\t<th>Margin</th>\n\t\t\t\t<th>Size</th>\n\t\t\t\t<th>Side</th>\n\t\t\t\t<th>Entry Price</th>\n\t\t\t\t<th>Exit Price</th>\n\t\t\t\t<th>Liquidation Price</th>\n\t\t\t\t<th>Stop Price</th>\n\t\t\t\t<th>Profit</th>\n\t\t\t\t<th>Close</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>1x2d5e6w7a</td>\n\t\t\t\t<td>2019-01-01 05:00</td>\n\t\t\t\t<td>BTC/USD</td>\n\t\t\t\t<td>1x</td>\n\t\t\t\t<td>1.1</td>\n\t\t\t\t<td>8000</td>\n\t\t\t\t<td>short</td>\n\t\t\t\t<td>10000</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">Addon</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"10000\" />\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn btn-info\" type=\"button\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-save\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>20000</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">Addon</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"10000\" />\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn btn-info\" type=\"button\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-save\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>xxx</td>\n\t\t\t\t<td class=\"cell_cancel\">\n\t\t\t\t\t<button class=\"btn btn-secondary btn-block btn-sm\" type=\"button\">\n\t\t\t\t\t\tCLOSE\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/open-orders/open-orders.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-orders/open-orders.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#open_orders_widget > table > thead > tr > th {\n  padding: 0px;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  padding-left: .3em;\n  font-size: .8em; }\n\n#open_orders_widget > table > tbody > tr > td.cell_cancel {\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center; }\n\n#open_orders_widget > table > tbody > tr > td {\n  padding-left: .2em;\n  padding-right: 0px;\n  vertical-align: middle;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  border-right: .05em solid; }\n\n#open_orders_widget > table > tbody > tr > td > .input-group > .input-group-prepend {\n  display: none; }\n\n#open_orders_widget > table > tbody > tr > td > .input-group > input {\n  width: 3em; }\n\n.input-group {\n  min-width: 7em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3Blbi1vcmRlcnMvb3Blbi1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUNKLEVBQUE7O0FBRUE7RUFDQyxhQUFhLEVBQUE7O0FBR2Q7RUFDQyxVQUFVLEVBQUE7O0FBRVg7RUFDQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdWkvd2lkZ2V0L29wZW4tb3JkZXJzL29wZW4tb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29wZW5fb3JkZXJzX3dpZGdldD50YWJsZT50aGVhZD50cj50aCB7XG5cdHBhZGRpbmc6IDBweDtcblx0cGFkZGluZy10b3A6IC41ZW07XG5cdHBhZGRpbmctYm90dG9tOiAuNWVtO1xuXHRwYWRkaW5nLWxlZnQ6IC4zZW07XG5cdGZvbnQtc2l6ZTogLjhlbTtcbn1cblxuI29wZW5fb3JkZXJzX3dpZGdldD50YWJsZT50Ym9keT50cj50ZC5jZWxsX2NhbmNlbCB7XG5cdHBhZGRpbmctbGVmdDogMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI29wZW5fb3JkZXJzX3dpZGdldD50YWJsZT50Ym9keT50cj50ZCB7XG5cdHBhZGRpbmctbGVmdDogLjJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nLXRvcDogLjJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjJlbTtcbiAgICBib3JkZXItcmlnaHQ6IC4wNWVtIHNvbGlkXG59XG5cbiNvcGVuX29yZGVyc193aWRnZXQ+dGFibGU+dGJvZHk+dHI+dGQ+LmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuI29wZW5fb3JkZXJzX3dpZGdldD50YWJsZT50Ym9keT50cj50ZD4uaW5wdXQtZ3JvdXA+aW5wdXQge1xuXHR3aWR0aDogM2VtO1xufVxuLmlucHV0LWdyb3VwIHtcblx0bWluLXdpZHRoOiA3ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/component/ui/widget/open-orders/open-orders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-orders/open-orders.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpenOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenOrdersComponent", function() { return OpenOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpenOrdersComponent = /** @class */ (function () {
    function OpenOrdersComponent() {
    }
    OpenOrdersComponent.prototype.ngOnInit = function () {
    };
    OpenOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-orders',
            template: __webpack_require__(/*! ./open-orders.component.html */ "./src/app/component/ui/widget/open-orders/open-orders.component.html"),
            styles: [__webpack_require__(/*! ./open-orders.component.scss */ "./src/app/component/ui/widget/open-orders/open-orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpenOrdersComponent);
    return OpenOrdersComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/open-positions/open-positions.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-positions/open-positions.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" id=\"open_positions_widget\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Order ID</th>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Pair</th>\n\t\t\t\t<th>Leverage</th>\n\t\t\t\t<th>Margin</th>\n\t\t\t\t<th>Size</th>\n\t\t\t\t<th>Side</th>\n\t\t\t\t<th>Entry Price</th>\n\t\t\t\t<th>Exit Price</th>\n\t\t\t\t<th>Liquidation Price</th>\n\t\t\t\t<th>Stop Price</th>\n\t\t\t\t<th>Profit</th>\n\t\t\t\t<th>Cancel</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>1x2d5e6w7a</td>\n\t\t\t\t<td>2019-01-01 05:00</td>\n\t\t\t\t<td>BTC/USD</td>\n\t\t\t\t<td>1x</td>\n\t\t\t\t<td>1.1</td>\n\t\t\t\t<td>8000</td>\n\t\t\t\t<td>short</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">Addon</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"10000\" />\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn btn-info\" type=\"button\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-save\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\" style=\"display:none;\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\">Addon</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" value=\"10000\" />\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"btn btn-info\" type=\"button\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-save\"></span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td>20000</td>\n\t\t\t\t<td>9000</td>\n\t\t\t\t<td>-</td>\n\t\t\t\t<td class=\"cell_cancel\">\n\t\t\t\t\t<button class=\"btn btn-danger btn-block btn-sm\" type=\"button\">\n\t\t\t\t\t\tCANCEL\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/open-positions/open-positions.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-positions/open-positions.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#open_positions_widget > table > thead > tr > th {\n  padding: 0px;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  padding-left: .3em;\n  font-size: .8em; }\n\n#open_positions_widget > table > tbody > tr > td.cell_cancel {\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center; }\n\n#open_positions_widget > table > tbody > tr > td {\n  padding-left: .2em;\n  padding-right: 0px;\n  vertical-align: middle;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  border-right: .05em solid grey; }\n\n#open_positions_widget > table > tbody > tr > td > .input-group > input {\n  width: 3em; }\n\n#open_positions_widget > table > tbody > tr > td > .input-group > .input-group-prepend {\n  display: none; }\n\n.input-group {\n  min-width: 7em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3Blbi1wb3NpdGlvbnMvb3Blbi1wb3NpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxhQUFhLEVBQUE7O0FBSWQ7RUFDQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdWkvd2lkZ2V0L29wZW4tcG9zaXRpb25zL29wZW4tcG9zaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29wZW5fcG9zaXRpb25zX3dpZGdldD50YWJsZT50aGVhZD50cj50aCB7XG5cdHBhZGRpbmc6IDBweDtcblx0cGFkZGluZy10b3A6IC41ZW07XG5cdHBhZGRpbmctYm90dG9tOiAuNWVtO1xuXHRwYWRkaW5nLWxlZnQ6IC4zZW07XG5cdGZvbnQtc2l6ZTogLjhlbTtcbn1cblxuI29wZW5fcG9zaXRpb25zX3dpZGdldD50YWJsZT50Ym9keT50cj50ZC5jZWxsX2NhbmNlbCB7XG5cdHBhZGRpbmctbGVmdDogMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI29wZW5fcG9zaXRpb25zX3dpZGdldD50YWJsZT50Ym9keT50cj50ZCB7XG5cdHBhZGRpbmctbGVmdDogLjJlbTtcblx0cGFkZGluZy1yaWdodDogMHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRwYWRkaW5nLXRvcDogLjJlbTtcblx0cGFkZGluZy1ib3R0b206IC4yZW07XG5cdGJvcmRlci1yaWdodDogLjA1ZW0gc29saWQgZ3JleTtcbn1cblxuI29wZW5fcG9zaXRpb25zX3dpZGdldD50YWJsZT50Ym9keT50cj50ZD4uaW5wdXQtZ3JvdXA+aW5wdXQge1xuXHR3aWR0aDogM2VtO1xufVxuXG4jb3Blbl9wb3NpdGlvbnNfd2lkZ2V0PnRhYmxlPnRib2R5PnRyPnRkPi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmlucHV0LWdyb3VwIHtcblx0bWluLXdpZHRoOiA3ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/component/ui/widget/open-positions/open-positions.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/ui/widget/open-positions/open-positions.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpenPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPositionsComponent", function() { return OpenPositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpenPositionsComponent = /** @class */ (function () {
    function OpenPositionsComponent() {
    }
    OpenPositionsComponent.prototype.ngOnInit = function () {
    };
    OpenPositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-positions',
            template: __webpack_require__(/*! ./open-positions.component.html */ "./src/app/component/ui/widget/open-positions/open-positions.component.html"),
            styles: [__webpack_require__(/*! ./open-positions.component.scss */ "./src/app/component/ui/widget/open-positions/open-positions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpenPositionsComponent);
    return OpenPositionsComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/order-history/order-history.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/ui/widget/order-history/order-history.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div id=\"HISTORY_SEARCH_DIV\">\n\t\t<p>Total Entries:&nbsp;<span>20</span></p>\n\t\t<div class=\"input-group\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<span class=\"input-group-text\">RegEx</span>\n\t\t\t</div>\n\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"RegEx Entry Filter\" />\n\t\t\t<div class=\"input-group-append\">\n\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\tSearch!\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"btn-group\" role=\"group\">\n\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\tThis Month</button><button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\tThis Year</button><button class=\"btn btn-primary\" type=\"button\">Today</button>\n\t\t</div>\n\t</div>\n\t<div class=\"table-responsive\" id=\"order_history_widget_table\">\n\t\t<table class=\"table\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Order ID</th>\n\t\t\t\t\t<th>Date</th>\n\t\t\t\t\t<th>Pair</th>\n\t\t\t\t\t<th>Leverage</th>\n\t\t\t\t\t<th>Margin</th>\n\t\t\t\t\t<th>Size</th>\n\t\t\t\t\t<th>Side</th>\n\t\t\t\t\t<th>Entry Price</th>\n\t\t\t\t\t<th>Exit Price</th>\n\t\t\t\t\t<th>Profit</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>1x2d5e6w7a</td>\n\t\t\t\t\t<td>2019-01-01 05:00</td>\n\t\t\t\t\t<td>BTC/USD</td>\n\t\t\t\t\t<td>1x</td>\n\t\t\t\t\t<td>1.1</td>\n\t\t\t\t\t<td>8000</td>\n\t\t\t\t\t<td>short</td>\n\t\t\t\t\t<td>10000</td>\n\t\t\t\t\t<td>10500</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/order-history/order-history.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/ui/widget/order-history/order-history.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order_history_widget_table > table > thead > tr {\n  overflow-y: scroll; }\n\n#order_history_widget_table > table > thead > tr > th {\n  padding: 0px;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  padding-left: .3em;\n  font-size: .8em; }\n\n#order_history_widget_table > table > tbody > tr > td.cell_cancel {\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center; }\n\n#order_history_widget_table > table > tbody > tr > td {\n  padding-left: .2em;\n  padding-right: 0px;\n  vertical-align: middle;\n  border-right: .1em solid grey; }\n\n#HISTORY_SEARCH_DIV > .btn-group {\n  margin-top: 1em; }\n\n#HISTORY_SEARCH_DIV > p {\n  margin-bottom: .5em;\n  text-align: left; }\n\n#HISTORY_SEARCH_DIV > p > span {\n  font-weight: bolder; }\n\n#HISTORY_SEARCH_DIV > .btn-group > button {\n  margin-left: 1em; }\n\n#HISTORY_SEARCH_DIV {\n  text-align: center;\n  margin-bottom: 2em;\n  margin-top: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDZCQUE2QixFQUFBOztBQUc5QjtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0Msa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29yZGVyX2hpc3Rvcnlfd2lkZ2V0X3RhYmxlPnRhYmxlPnRoZWFkPnRyIHtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4jb3JkZXJfaGlzdG9yeV93aWRnZXRfdGFibGU+dGFibGU+dGhlYWQ+dHI+dGgge1xuXHRwYWRkaW5nOiAwcHg7XG5cdHBhZGRpbmctdG9wOiAuNWVtO1xuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcblx0cGFkZGluZy1sZWZ0OiAuM2VtO1xuXHRmb250LXNpemU6IC44ZW07XG59XG5cbiNvcmRlcl9oaXN0b3J5X3dpZGdldF90YWJsZT50YWJsZT50Ym9keT50cj50ZC5jZWxsX2NhbmNlbCB7XG5cdHBhZGRpbmctbGVmdDogMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI29yZGVyX2hpc3Rvcnlfd2lkZ2V0X3RhYmxlPnRhYmxlPnRib2R5PnRyPnRkIHtcblx0cGFkZGluZy1sZWZ0OiAuMmVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdGJvcmRlci1yaWdodDogLjFlbSBzb2xpZCBncmV5O1xufVxuXG4jSElTVE9SWV9TRUFSQ0hfRElWPi5idG4tZ3JvdXAge1xuXHRtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNISVNUT1JZX1NFQVJDSF9ESVY+cCB7XG5cdG1hcmdpbi1ib3R0b206IC41ZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNISVNUT1JZX1NFQVJDSF9ESVY+cD5zcGFuIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI0hJU1RPUllfU0VBUkNIX0RJVj4uYnRuLWdyb3VwPmJ1dHRvbiB7XG5cdG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbiNISVNUT1JZX1NFQVJDSF9ESVYge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcblx0bWFyZ2luLXRvcDogLjVlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/ui/widget/order-history/order-history.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/ui/widget/order-history/order-history.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent() {
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-history-widget',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/component/ui/widget/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.scss */ "./src/app/component/ui/widget/order-history/order-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/orderbook/orderbook.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/ui/widget/orderbook/orderbook.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col col-6\" id=\"ORDERBOOK_WIDGET\">\n\t\t<div>\n\t\t\t<h5>Orderbook</h5>\n\t\t</div>\n\t\t<div>\n\t\t\t<h5>Shorts</h5>\n\t\t</div>\n\t\t<div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped table-sm\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Prize</th>\n\t\t\t\t\t\t<th>Size</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10700</td>\n\t\t\t\t\t\t<td class=\"red_cell\">1,966,189</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10690</td>\n\t\t\t\t\t\t<td class=\"green_cell\">804,486</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10680</td>\n\t\t\t\t\t\t<td class=\"green_cell_2\">650,243</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10670</td>\n\t\t\t\t\t\t<td class=\"green_cell\">1,338,415</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10670</td>\n\t\t\t\t\t\t<td class=\"red_cell\">1,338,415</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div>\n\t\t\t<h5>Longs</h5>\n\t\t</div>\n\t\t<div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped table-sm\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Prize</th>\n\t\t\t\t\t\t<th>Size</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10700</td>\n\t\t\t\t\t\t<td class=\"red_cell\">1,966,189</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10690</td>\n\t\t\t\t\t\t<td class=\"green_cell\">804,486</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10680</td>\n\t\t\t\t\t\t<td class=\"green_cell_2\">650,243</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10670</td>\n\t\t\t\t\t\t<td class=\"green_cell\">1,338,415</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>10670</td>\n\t\t\t\t\t\t<td class=\"red_cell\">1,338,415</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t<div class=\"col col-6 col-lg-6\" id=\"RECENT_TRADES_WIDGET\">\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<h5>Recent Trades</h5>\n\t\t\t</div>\n\t\t\t<div class=\"RTW_TABLEC\">\n\t\t\t\t<div class=\"table-responsive table-1 recent_trades_table\" style=\"min-height:1200px;\">\n\t\t\t\t\t<table class=\"table table-striped table-sm\">\n\t\t\t\t\t\t<thead style=\"display:none;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>10615.0</td>\n\t\t\t\t\t\t\t\t<td>14</td>\n\t\t\t\t\t\t\t\t<td>6:41:52</td>\n\t\t\t\t\t\t\t\t<td>S</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/orderbook/orderbook.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/ui/widget/orderbook/orderbook.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ORDERBOOK_WIDGET {\n  padding-right: 0em; }\n\n#ORDERBOOK_WIDGET > div:first-child {\n  background-color: gainsboro;\n  padding-left: .2em;\n  padding-bottom: .1em;\n  padding-top: .1em; }\n\n#ORDERBOOK_WIDGET > div > table > tbody > tr > td {\n  padding-left: 0em;\n  text-align: right;\n  border: 0px; }\n\n#ORDERBOOK_WIDGET > div > .table > thead > tr > th {\n  text-align: right; }\n\n.green_cell {\n  background-color: #b5dec0; }\n\n.red_cell {\n  background-color: #edb9ab; }\n\n.green_cell_2 {\n  background-color: #bbdabf; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvb3JkZXJib29rL29yZGVyYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLDJCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdaO0VBQ0MsaUJBQWlCLEVBQUE7O0FBR2xCO0VBQ0MseUJBQW9DLEVBQUE7O0FBR3JDO0VBQ0MseUJBQW9DLEVBQUE7O0FBR3JDO0VBQ0MseUJBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdWkvd2lkZ2V0L29yZGVyYm9vay9vcmRlcmJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjT1JERVJCT09LX1dJREdFVCB7XG5cdHBhZGRpbmctcmlnaHQ6IDBlbTtcbn1cblxuI09SREVSQk9PS19XSURHRVQ+ZGl2OmZpcnN0LWNoaWxkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xuXHRwYWRkaW5nLWxlZnQ6IC4yZW07XG5cdHBhZGRpbmctYm90dG9tOiAuMWVtO1xuXHRwYWRkaW5nLXRvcDogLjFlbTtcbn1cblxuI09SREVSQk9PS19XSURHRVQ+ZGl2PnRhYmxlPnRib2R5PnRyPnRkIHtcblx0cGFkZGluZy1sZWZ0OiAwZW07XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRib3JkZXI6IDBweDtcbn1cblxuI09SREVSQk9PS19XSURHRVQ+ZGl2Pi50YWJsZT50aGVhZD50cj50aCB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ3JlZW5fY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxODEsIDIyMiwgMTkyKTtcbn1cblxuLnJlZF9jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMTg1LCAxNzEpO1xufVxuXG4uZ3JlZW5fY2VsbF8yIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMjE4LCAxOTEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/component/ui/widget/orderbook/orderbook.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/ui/widget/orderbook/orderbook.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbookComponent", function() { return OrderbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderbookComponent = /** @class */ (function () {
    function OrderbookComponent() {
    }
    OrderbookComponent.prototype.ngOnInit = function () {
    };
    OrderbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderbook',
            template: __webpack_require__(/*! ./orderbook.component.html */ "./src/app/component/ui/widget/orderbook/orderbook.component.html"),
            styles: [__webpack_require__(/*! ./orderbook.component.scss */ "./src/app/component/ui/widget/orderbook/orderbook.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderbookComponent);
    return OrderbookComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/price/price.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/ui/widget/price/price.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"input-group\">\n\t\t<div class=\"input-group-prepend\">\n\t\t\t<span class=\"input-group-text\">PRICE XBT</span>\n\t\t</div>\n\t\t<input\n\t\t*ngIf=\"price\"\n\t\t[value]=\"formatDollars(price.price)\"\n\t\tclass=\"form-control\"\n\t\ttype=\"text\"\n\t\tdisabled />\n\n\t\t<input\n\t\t*ngIf=\"!price\"\n\t\tvalue=\"Loading...\"\n\t\tclass=\"form-control\" type=\"text\" disabled />\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/price/price.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/ui/widget/price/price.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/ui/widget/price/price.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/ui/widget/price/price.component.ts ***!
  \**************************************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_provider_price_price_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/provider/price/price.service */ "./src/app/provider/price/price.service.ts");
/* harmony import */ var src_client_enums_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_client/enums/symbols */ "../node/src/_client/enums/symbols.ts");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_4__);





var PriceComponent = /** @class */ (function () {
    function PriceComponent(_PriceService) {
        this._PriceService = _PriceService;
    }
    PriceComponent.prototype.ngOnInit = function () {
        this.startListening();
    };
    PriceComponent.prototype.startListening = function () {
        var _this = this;
        this._emitter = this._PriceService.listenPrice(src_client_enums_symbols__WEBPACK_IMPORTED_MODULE_3__["SYMBOL"].XBT);
        this._emitter.on(src_client_enums_symbols__WEBPACK_IMPORTED_MODULE_3__["SYMBOL"].XBT, function (newPrice) {
            _this.price = newPrice;
        });
    };
    PriceComponent.prototype.formatDollars = function (ammount) {
        return numeral__WEBPACK_IMPORTED_MODULE_4__(ammount).format("10,000.00") + " USD";
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coin-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/component/ui/widget/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/component/ui/widget/price/price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_provider_price_price_service__WEBPACK_IMPORTED_MODULE_2__["PriceService"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/ui/widget/withdraw-history/withdraw-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" id=\"WITHDRAW_HISTORY_TABLE\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Date</th>\n\t\t\t\t<th>Ammount</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>2019-01-01 05:00:32</td>\n\t\t\t\t<td>0.0002563</td>\n\t\t\t</tr>\n\t\t\t<tr></tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/component/ui/widget/withdraw-history/withdraw-history.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91aS93aWRnZXQvd2l0aGRyYXctaGlzdG9yeS93aXRoZHJhdy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/ui/widget/withdraw-history/withdraw-history.component.ts ***!
  \************************************************************************************/
/*! exports provided: WithdrawHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawHistoryComponent", function() { return WithdrawHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WithdrawHistoryComponent = /** @class */ (function () {
    function WithdrawHistoryComponent() {
    }
    WithdrawHistoryComponent.prototype.ngOnInit = function () {
    };
    WithdrawHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw-history',
            template: __webpack_require__(/*! ./withdraw-history.component.html */ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.html"),
            styles: [__webpack_require__(/*! ./withdraw-history.component.scss */ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WithdrawHistoryComponent);
    return WithdrawHistoryComponent;
}());



/***/ }),

/***/ "./src/app/provider/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/provider/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_controller_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/controller/auth */ "../node/src/_client/controller/auth.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/database.service */ "./src/app/provider/database/database.service.ts");
/* harmony import */ var src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_client/enums/tables */ "../node/src/_client/enums/tables.ts");







var AuthService = /** @class */ (function () {
    function AuthService(_DatabaseService) {
        this._DatabaseService = _DatabaseService;
        this.jsonRecord = null;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthService.prototype.signIn = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, AUTHRecord, res, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, src_client_controller_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signIn({
                                email: email, password: password
                            })];
                    case 1:
                        result = _a.sent();
                        if (!(result._meta._statusCode === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE"].SUCCESS)) return [3 /*break*/, 4];
                        console.log("result._payload: ", result._payload);
                        AUTHRecord = {
                            jwt: result._payload.authToken,
                            id: Math.floor(Math.random() * 10e8)
                        };
                        return [4 /*yield*/, this._DatabaseService.purgeTable(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__["TABLE_NAME"].AUTH)];
                    case 2:
                        _a.sent();
                        this.jsonRecord = null;
                        return [4 /*yield*/, this._DatabaseService.createRecord(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__["TABLE_NAME"].AUTH, AUTHRecord)];
                    case 3:
                        res = _a.sent();
                        this.jsonRecord = res.data;
                        this.event.emit({
                            event: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["AUTH_STATE_CHANGE"].LOGGED_IN,
                            data: this.jsonRecord
                        });
                        return [2 /*return*/, {
                                result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE"].SUCCESS,
                                jwt: result._payload.authToken,
                                id: result._payload.id
                            }];
                    case 4: return [2 /*return*/, {
                            result: result._meta._statusCode,
                            jwt: null,
                            id: null
                        }];
                    case 5:
                        e_1 = _a.sent();
                        return [2 /*return*/, {
                                result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE"].INTERNAL_ERROR,
                                e: e_1
                            }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._DatabaseService.purgeTable(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__["TABLE_NAME"].AUTH)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._DatabaseService.purgeTable(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__["TABLE_NAME"].USER)];
                    case 2:
                        _a.sent();
                        this.event.emit({
                            event: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["AUTH_STATE_CHANGE"].LOGGED_OUT,
                            data: null
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signUp = function (payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, src_client_controller_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signUp(payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, {
                                result: result._meta._statusCode,
                                id: (result._meta._statusCode === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE"].SUCCESS) ? result._payload.id : null
                            }];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, {
                                result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["RESULT_CODE"].INTERNAL_ERROR,
                                e: e_2
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, item, select, record;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._DatabaseService.getSelect(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_5__["TABLE_NAME"].AUTH)];
                    case 1:
                        _a = _b.sent(), item = _a.item, select = _a.select;
                        return [4 /*yield*/, select.where(item.jwt.isNotNull()).exec()];
                    case 2:
                        record = _b.sent();
                        if (record) {
                            return [2 /*return*/, record[0]];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.jsonRecord === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _a;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = this;
                                            return [4 /*yield*/, this.getToken()];
                                        case 1:
                                            _a.jsonRecord = _b.sent();
                                            if (this.jsonRecord) {
                                                this.event.emit({
                                                    event: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["AUTH_STATE_CHANGE"].CHANGED,
                                                    data: this.jsonRecord
                                                });
                                            }
                                            return [2 /*return*/, !!this.jsonRecord];
                                    }
                                });
                            }); })()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this.jsonRecord;
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (password, newPassword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        return [4 /*yield*/, src_client_controller_auth__WEBPACK_IMPORTED_MODULE_2__["default"].changePassword({
                                password: password,
                                newPassword: newPassword
                            }, token.jwt)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/provider/database/database.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/provider/database/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/manager/DatabaseManager */ "../node/src/_client/manager/DatabaseManager.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");




var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.createRecord = function (table, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schema, row, record, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.getSchema().table(table);
                        row = schema.createRow(data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.insert().into(schema).values([row]).exec()];
                    case 2:
                        record = _a.sent();
                        return [2 /*return*/, {
                                inserted: true, data: record, code: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["UI_RESULT_CODE"].SUCCESS
                            }];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, {
                                inserted: false, data: e_1, code: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["UI_RESULT_CODE"].ERROR_INSERTING_DATA
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.updateRecord = function (table, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schema, row, record, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.getSchema().table(table);
                        row = schema.createRow(data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.insertOrReplace().into(schema).values([row]).exec()];
                    case 2:
                        record = _a.sent();
                        return [2 /*return*/, {
                                inserted: true, data: record, code: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["UI_RESULT_CODE"].SUCCESS
                            }];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, {
                                inserted: false, data: e_2, code: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_3__["UI_RESULT_CODE"].ERROR_INSERTING_DATA
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.purgeTable = function (table) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schema;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.getSchema().table(table);
                        return [4 /*yield*/, src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.delete().from(schema).exec()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatabaseService.prototype.getSelect = function (table) {
        var item = src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.getSchema().table(table);
        var select = src_client_manager_DatabaseManager__WEBPACK_IMPORTED_MODULE_2__["default"].db.select().from(item);
        return {
            item: item, select: select
        };
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/provider/init/init.service.ts":
/*!***********************************************!*\
  !*** ./src/app/provider/init/init.service.ts ***!
  \***********************************************/
/*! exports provided: InitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitService", function() { return InitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/_init */ "../node/src/_client/_init.ts");
/* harmony import */ var src_client_manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_client/manager/ConnectionManager */ "../node/src/_client/manager/ConnectionManager.ts");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/database.service */ "./src/app/provider/database/database.service.ts");





var InitService = /** @class */ (function () {
    function InitService(_DatabaseService) {
        this._DatabaseService = _DatabaseService;
    }
    InitService.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //Initialize base API
                    return [4 /*yield*/, src_client_init__WEBPACK_IMPORTED_MODULE_2__["default"].init()];
                    case 1:
                        //Initialize base API
                        _a.sent();
                        return [4 /*yield*/, this._DatabaseService.init()];
                    case 2:
                        _a.sent();
                        if (!src_client_manager_ConnectionManager__WEBPACK_IMPORTED_MODULE_3__["default"].socketClient.connected) {
                            throw "SOCKET CONNECTION NOT MADE...";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], InitService);
    return InitService;
}());



/***/ }),

/***/ "./src/app/provider/loading/loading.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/loading/loading.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/ui/loading-modal/loading-modal.component */ "./src/app/component/ui/loading-modal/loading-modal.component.ts");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
    }
    LoadingService.prototype.show = function () {
        src_app_component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_2__["LoadingModalComponent"].showLoading();
    };
    LoadingService.prototype.hide = function () {
        src_app_component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_2__["LoadingModalComponent"].hideLoading();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("loadingModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_component_ui_loading_modal_loading_modal_component__WEBPACK_IMPORTED_MODULE_2__["LoadingModalComponent"])
    ], LoadingService.prototype, "loadingModalComponent", void 0);
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/provider/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_component_ui_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/ui/message-modal/message-modal.component */ "./src/app/component/ui/message-modal/message-modal.component.ts");



var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService.prototype.showMessageBox = function (title, message) {
        src_app_component_ui_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_2__["MessageModalComponent"].show(title, message);
    };
    MessageService.prototype.hideMessageBox = function () {
        src_app_component_ui_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_2__["MessageModalComponent"].hide();
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/provider/message/text.service.ts":
/*!**************************************************!*\
  !*** ./src/app/provider/message/text.service.ts ***!
  \**************************************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var src_client_enums_allowedImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_client/enums/allowedImages */ "../node/src/_client/enums/allowedImages.ts");




var TextService = /** @class */ (function () {
    function TextService() {
    }
    TextService.prototype.getErrorMessage_ui = function (which) {
        switch (which) {
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["UI_RESULT_CODE"].INVALID_DATA:
                return {
                    title: "Invalid Data",
                    message: "The data you have introduced is invalid. Please verify it and try again."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["UI_RESULT_CODE"].PROFILE_IMAGE_TOO_BIG:
                return {
                    title: "Image Too Big",
                    message: "The image file size is too big. Must not be bigger than " + Math.floor(src_client_enums_allowedImages__WEBPACK_IMPORTED_MODULE_3__["MAX_PROFILE_IMAGE_SIZE"] / 1024) + "mb."
                };
        }
    };
    TextService.prototype.getSucessMessage = function (which) {
        switch (which) {
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["SUCCESS_UI"].CREATED_ACCOUNT:
                return {
                    title: "User Created",
                    message: "Your user has been created. You'll be redirected to your profile page."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["SUCCESS_UI"].LOGGED_IN:
                return {
                    title: "Logged In",
                    message: "Successfully Logged In!"
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["SUCCESS_UI"].CHANGED_PASSWORD:
                return {
                    title: "Changed Password",
                    message: "Successfully Changed your Password!"
                };
        }
    };
    TextService.prototype.getErrorMessage = function (code) {
        switch (code) {
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].NOT_YET_IMPLEMENTED:
                return {
                    title: "Not yet implemented",
                    message: "This functionality has not yet been implemented."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_TOKEN:
                return {
                    title: "Invalid Authentication",
                    message: "Your authentication information has expired. Please sign-in again."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_PAYLOAD:
                return {
                    title: "Request Error",
                    message: "There was an error with your request (" + src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_PAYLOAD + "). Please try again later."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].EMAIL_ALREADY_REGISTERED:
                return {
                    title: "Email already exists",
                    message: "This email has already been registered in our platform. Please try again with a different email"
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].USERNAME_ALREADY_REGISTERED:
                return {
                    title: "Username already exists",
                    message: "This username has already been registered in our platform. Please try again with a different email"
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].EMAIL_DOES_NOT_EXIST:
                return {
                    title: "This email does not exist.",
                    message: "This email does not exist or is not registered in our platform. Please verify it and try again later."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_PASSWORD:
                return {
                    title: "Wrong Password",
                    message: "This password does not match the one registered with this account. Please try again later."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_FIELD_AMMOUNT:
                return {
                    title: "Request Error",
                    message: "There was an error with your request (" + src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INVALID_FIELD_AMMOUNT + "). Please try again later."
                };
            case src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INTERNAL_ERROR:
                return {
                    title: "Server Error",
                    message: "There has been an internal error (" + src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INTERNAL_ERROR + "). Please try again later."
                };
            default:
                return {
                    title: "Unknown Error",
                    message: "There has been an error (" + src_client_enums_codes__WEBPACK_IMPORTED_MODULE_2__["RESULT_CODE"].INTERNAL_ERROR + "). Please try again later."
                };
        }
    };
    TextService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextService);
    return TextService;
}());



/***/ }),

/***/ "./src/app/provider/price/price.service.ts":
/*!*************************************************!*\
  !*** ./src/app/provider/price/price.service.ts ***!
  \*************************************************/
/*! exports provided: PriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceService", function() { return PriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_controller_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/controller/price */ "../node/src/_client/controller/price.ts");



var PriceService = /** @class */ (function () {
    function PriceService() {
    }
    PriceService.prototype.listenPrice = function (symbol) {
        return src_client_controller_price__WEBPACK_IMPORTED_MODULE_2__["default"].listenToPrice(symbol);
    };
    PriceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriceService);
    return PriceService;
}());



/***/ }),

/***/ "./src/app/provider/route/route.service.ts":
/*!*************************************************!*\
  !*** ./src/app/provider/route/route.service.ts ***!
  \*************************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteService = /** @class */ (function () {
    function RouteService() {
    }
    Object.defineProperty(RouteService.prototype, "main", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "trade", {
        get: function () {
            return "trade";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "deposits", {
        get: function () {
            return "deposit";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "withdraws", {
        get: function () {
            return "withdraw";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "orderHistory", {
        get: function () {
            return "order_history";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "profile", {
        get: function () {
            return "profile";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "signIn", {
        get: function () {
            return "sign_in";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteService.prototype, "signUp", {
        get: function () {
            return "sign_up";
        },
        enumerable: true,
        configurable: true
    });
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/provider/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/provider/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_client_controller_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_client/controller/user */ "../node/src/_client/controller/user.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/provider/auth/auth.service.ts");
/* harmony import */ var src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_client/enums/codes */ "../node/src/_client/enums/codes.ts");
/* harmony import */ var _database_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database/database.service */ "./src/app/provider/database/database.service.ts");
/* harmony import */ var src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_client/enums/tables */ "../node/src/_client/enums/tables.ts");







var UserService = /** @class */ (function () {
    function UserService(_authService, _databaseService) {
        this._authService = _authService;
        this._databaseService = _databaseService;
    }
    /**
     * @description Gets the current user record.
     * If exists, attempts to update it if required.
     */
    UserService.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tokenResult, jwt, response, _a, item, select, responseB, userData, _b, item_1, select_1, fieldsToReturn, record, _c, inserted, code, data, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log("--- 1");
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 12, , 13]);
                        console.log("--- 2");
                        return [4 /*yield*/, this._authService.getToken()];
                    case 2:
                        tokenResult = _d.sent();
                        if (!tokenResult) {
                            return [2 /*return*/, {
                                    result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].INVALID_TOKEN
                                }];
                        }
                        jwt = tokenResult.jwt;
                        return [4 /*yield*/, src_client_controller_user__WEBPACK_IMPORTED_MODULE_2__["default"].fetchAccount({
                                fields: [
                                    src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["FIELD_NAMES_USER_RECORD"].updatedAt,
                                    src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["FIELD_NAMES_USER_RECORD"].id
                                ]
                            }, jwt)];
                    case 3:
                        response = _d.sent();
                        if (!(response._meta._statusCode === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS)) return [3 /*break*/, 11];
                        console.log("--- 3");
                        _a = this._databaseService.getSelect(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["TABLE_NAME"].USER), item = _a.item, select = _a.select;
                        console.log("--- 3-0");
                        return [4 /*yield*/, select.limit(1).exec()];
                    case 4:
                        responseB = _d.sent();
                        userData = responseB[0];
                        console.log("--- 3-1");
                        console.log(userData);
                        console.log(response._payload);
                        if (!userData) return [3 /*break*/, 7];
                        console.log("4 --");
                        if (!(userData.updatedAt &&
                            (userData.updatedAt.getTime() == new Date(response._payload.updatedAt).getTime()))) return [3 /*break*/, 6];
                        _b = this._databaseService.getSelect(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["TABLE_NAME"].USER), item_1 = _b.item, select_1 = _b.select;
                        return [4 /*yield*/, select_1.where(item_1[src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["TABLE_FIELD_USER"].id].eq(response._payload.id)).limit(1).exec()];
                    case 5:
                        userData = (_d.sent())[0];
                        console.log("--- 5");
                        return [2 /*return*/, {
                                result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS,
                                data: userData
                            }];
                    case 6:
                        console.log("--- 6");
                        _d.label = 7;
                    case 7:
                        console.log("--- 7");
                        fieldsToReturn = Object.values(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["FIELD_NAMES_USER_RECORD"]);
                        return [4 /*yield*/, src_client_controller_user__WEBPACK_IMPORTED_MODULE_2__["default"].fetchAccount({
                                fields: fieldsToReturn
                            }, jwt)];
                    case 8:
                        response = _d.sent();
                        console.log("--- 8");
                        if (!(response._meta._statusCode === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS)) return [3 /*break*/, 10];
                        record = {
                            id: response._payload.id,
                            createdAt: new Date(response._payload.createdAt),
                            updatedAt: new Date(response._payload.updatedAt),
                            firstName: response._payload.firstName,
                            lastName: response._payload.lastName,
                            username: response._payload.username,
                            email: response._payload.email,
                            country: response._payload.country,
                            photo: response._payload.photo /**		IMAGE FILE ON BASE64	*/
                        };
                        console.log("--- 9");
                        console.log(record);
                        return [4 /*yield*/, this._databaseService.updateRecord(src_client_enums_tables__WEBPACK_IMPORTED_MODULE_6__["TABLE_NAME"].USER, record)];
                    case 9:
                        _c = _d.sent(), inserted = _c.inserted, code = _c.code, data = _c.data;
                        if (inserted && code === src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["UI_RESULT_CODE"].SUCCESS) {
                            console.log("--- 10");
                            return [2 /*return*/, {
                                    result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].SUCCESS,
                                    data: data[0]
                                }];
                        }
                        else {
                            console.log("--- 11");
                            return [2 /*return*/, {
                                    result: src_client_enums_codes__WEBPACK_IMPORTED_MODULE_4__["RESULT_CODE"].INTERNAL_ERROR,
                                    data: {
                                        inserted: inserted, code: code, data: data
                                    }
                                }];
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        console.log("--- 12");
                        return [2 /*return*/, {
                                result: response._meta._statusCode
                            }];
                    case 11: return [2 /*return*/, {
                            result: response._meta._statusCode,
                            data: response
                        }];
                    case 12:
                        e_1 = _d.sent();
                        console.log("--- 14");
                        throw e_1;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    EXPRESS_HOST: "http://127.0.0.1",
    EXPRESS_PORT: 3000,
    SOCKET_HOST: "http://0.0.0.0",
    SOCKET_PORT: 3000,
    SOCKET_TIMEOUT_MILLIS: 8000
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azolot/Documents/Work/Gigs/Reddit/PENDING - ExternalStandard1/CODE/angularapp1/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map