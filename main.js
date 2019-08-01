(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
    }];
/**
 * 04145653541
 * 24.543.782
 * BOD
 */
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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularapp1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/page/index/index.component */ "./src/app/component/page/index/index.component.ts");
/* harmony import */ var _component_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/ui/navbar/navbar.component */ "./src/app/component/ui/navbar/navbar.component.ts");
/* harmony import */ var _component_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/ui/footer/footer.component */ "./src/app/component/ui/footer/footer.component.ts");
/* harmony import */ var _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/page/trade/trade.component */ "./src/app/component/page/trade/trade.component.ts");
/* harmony import */ var _component_ui_widget_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/ui/widget/buy-sell/buy-sell.component */ "./src/app/component/ui/widget/buy-sell/buy-sell.component.ts");
/* harmony import */ var _component_ui_widget_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/ui/widget/orderbook/orderbook.component */ "./src/app/component/ui/widget/orderbook/orderbook.component.ts");
/* harmony import */ var _component_ui_widget_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/ui/widget/chart/chart.component */ "./src/app/component/ui/widget/chart/chart.component.ts");
/* harmony import */ var _component_ui_widget_op_oo_ohistory_op_oo_ohistory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/ui/widget/op-oo-ohistory/op-oo-ohistory.component */ "./src/app/component/ui/widget/op-oo-ohistory/op-oo-ohistory.component.ts");
/* harmony import */ var _component_ui_widget_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/ui/widget/open-orders/open-orders.component */ "./src/app/component/ui/widget/open-orders/open-orders.component.ts");
/* harmony import */ var _component_ui_widget_open_positions_open_positions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/ui/widget/open-positions/open-positions.component */ "./src/app/component/ui/widget/open-positions/open-positions.component.ts");
/* harmony import */ var _component_ui_widget_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/ui/widget/order-history/order-history.component */ "./src/app/component/ui/widget/order-history/order-history.component.ts");
/* harmony import */ var _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/page/order-history/order-history.component */ "./src/app/component/page/order-history/order-history.component.ts");
/* harmony import */ var _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/page/profile/profile.component */ "./src/app/component/page/profile/profile.component.ts");
/* harmony import */ var _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/page/deposit/deposit.component */ "./src/app/component/page/deposit/deposit.component.ts");
/* harmony import */ var _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/page/withdraw/withdraw.component */ "./src/app/component/page/withdraw/withdraw.component.ts");
/* harmony import */ var _component_ui_widget_withdraw_history_withdraw_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/ui/widget/withdraw-history/withdraw-history.component */ "./src/app/component/ui/widget/withdraw-history/withdraw-history.component.ts");
/* harmony import */ var _component_ui_widget_deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/ui/widget/deposit-history/deposit-history.component */ "./src/app/component/ui/widget/deposit-history/deposit-history.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_page_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _component_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _component_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _component_page_trade_trade_component__WEBPACK_IMPORTED_MODULE_8__["TradeComponent"],
                _component_ui_widget_buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_9__["BuySellComponent"],
                _component_ui_widget_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_10__["OrderbookComponent"],
                _component_ui_widget_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
                _component_ui_widget_op_oo_ohistory_op_oo_ohistory_component__WEBPACK_IMPORTED_MODULE_12__["OPOOOHistoryComponent"],
                _component_ui_widget_open_orders_open_orders_component__WEBPACK_IMPORTED_MODULE_13__["OpenOrdersComponent"],
                _component_ui_widget_open_positions_open_positions_component__WEBPACK_IMPORTED_MODULE_14__["OpenPositionsComponent"],
                _component_ui_widget_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_15__["OrderHistoryComponent"],
                _component_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _component_page_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_18__["DepositComponent"],
                _component_page_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_19__["WithdrawComponent"],
                _component_page_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__["OrderHistoryComponent"],
                _component_ui_widget_withdraw_history_withdraw_history_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawHistoryComponent"],
                _component_ui_widget_deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_21__["DepositHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class=\"container profile profile-view\" id=\"profile\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 alert-col relative\">\n\t\t\t<div class=\"alert alert-info absolue center\" role=\"alert\"><button type=\"button\" class=\"close\"\n\t\t\t\t\tdata-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button><span>Profile save\n\t\t\t\t\twith success</span></div>\n\t\t</div>\n\t</div>\n\t<form>\n\t\t<div class=\"form-row profile-row\">\n\t\t\t<div class=\"col-md-4 relative\">\n\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t<div class=\"avatar-bg center\"></div>\n\t\t\t\t</div><input type=\"file\" class=\"form-control\" name=\"avatar-file\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<h1>Profile </h1>\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">First Name</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" disabled=\"\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Last Name</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" disabled=\"\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Username</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" disabled=\"\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Email</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" disabled=\"\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Country</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" disabled=\"\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<h4>Change Your Password</h4>\n\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Old</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Old Password\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">New</span></div><input\n\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"New Password\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<div class=\"input-group-prepend\"><span class=\"input-group-text\">Repeat New</span></div>\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"Repeat your New Password\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\"><button class=\"btn btn-primary\" type=\"button\">Go!</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col col-12\">\n\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 content-right\"><button class=\"btn btn-primary form-btn\"\n\t\t\t\t\t\t\t\t\ttype=\"submit\">SUBMIT</button></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/component/page/profile/profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/component/page/profile/profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile > form > div > div.col-md-8 > div:nth-child(9) > div:nth-child(2) {\n  margin-top: 1em; }\n\n#profile > form > div > div.col-md-8 > div:nth-child(9) > div > .input-group {\n  margin-top: .5em; }\n\n#profile > form > div > div.col-md-8 > div > div > div > div.input-group-prepend > span {\n  background-color: transparent;\n  font-weight: bolder;\n  border: 0px;\n  width: 7em; }\n\n#profile > form > div > div > div.form-row {\n  margin-top: 2em; }\n\n#profile > form > div > div.col-md-8 > div > div > div > div.input-group-append {\n  display: none; }\n\ndiv.avatar > img {\n  border-radius: 50%; }\n\ndiv.container.profile {\n  padding: 10px 20px; }\n\n.center {\n  text-align: center; }\n\n.no-marging {\n  margin: 0 !important; }\n\n.relative {\n  position: relative; }\n\n.absolue {\n  position: absolute; }\n\ndiv.profile-row {\n  margin-top: 55px; }\n\n.absolue.center {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, 0%); }\n\ndiv.alert {\n  width: 40%; }\n\n.alert-col > .alert {\n  padding: 10px;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  opacity: 0; }\n\n.alert-col > .alert.display {\n  opacity: 1; }\n\nhr {\n  height: 2px; }\n\n.content-right > * {\n  float: right; }\n\n.form-btn {\n  min-width: 100px;\n  margin: 0 5px;\n  max-width: 200px; }\n\nimg.avart-img {\n  max-width: 200px; }\n\ndiv.avatar-bg {\n  background: url(https://www.gravatar.com/avatar/1234566?size=200&d=mm);\n  background-position: 50% 50%;\n  height: 200px;\n  width: 200px;\n  background-size: cover;\n  border-radius: 50%;\n  margin-left: calc(50% - 100px); }\n\ndiv.container.profile {\n  padding: 10px 20px; }\n\n.center {\n  text-align: center; }\n\n.relative {\n  position: relative; }\n\n.absolue {\n  position: absolute; }\n\ndiv.profile-row {\n  margin-top: 55px; }\n\n.absolue.center {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, 0%); }\n\ndiv.alert {\n  width: 40%; }\n\n.alert-col > .alert {\n  padding: 10px;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  opacity: 0; }\n\nhr {\n  height: 2px; }\n\n.content-right > * {\n  float: right; }\n\n.form-btn {\n  min-width: 100px;\n  margin: 0 5px;\n  max-width: 200px; }\n\ndiv.avatar-bg {\n  background: url(https://www.gravatar.com/avatar/1234566?size=200&d=mm);\n  background-position: 50% 50%;\n  height: 200px;\n  width: 200px;\n  background-size: cover;\n  border-radius: 50%;\n  margin-left: calc(50% - 100px); }\n\n#profile {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1g7RUFDQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsU0FBUztFQUNULFFBQVE7RUFDUiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxVQUFVLEVBQUE7O0FBS1g7RUFDQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVLEVBQUE7O0FBR1g7RUFDQyxVQUFVLEVBQUE7O0FBR1g7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHNFQUFzRTtFQUN0RSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUsvQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFNBQVM7RUFDVCxRQUFRO0VBQ1IsOEJBQThCLEVBQUE7O0FBRy9CO0VBQ0MsVUFBVSxFQUFBOztBQUdYO0VBQ0MsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsVUFBVSxFQUFBOztBQUdYO0VBQ0MsV0FBVyxFQUFBOztBQUdaO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxzRUFBc0U7RUFDdEUsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlPmZvcm0+ZGl2PmRpdi5jb2wtbWQtOD5kaXY6bnRoLWNoaWxkKDkpPmRpdjpudGgtY2hpbGQoMikge1xuXHRtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNwcm9maWxlPmZvcm0+ZGl2PmRpdi5jb2wtbWQtOD5kaXY6bnRoLWNoaWxkKDkpPmRpdj4uaW5wdXQtZ3JvdXAge1xuXHRtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG4jcHJvZmlsZT5mb3JtPmRpdj5kaXYuY29sLW1kLTg+ZGl2PmRpdj5kaXY+ZGl2LmlucHV0LWdyb3VwLXByZXBlbmQ+c3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xuXHRib3JkZXI6IDBweDtcblx0d2lkdGg6IDdlbTtcbn1cblxuI3Byb2ZpbGU+Zm9ybT5kaXY+ZGl2PmRpdi5mb3JtLXJvdyB7XG5cdG1hcmdpbi10b3A6IDJlbTtcbn1cblxuI3Byb2ZpbGU+Zm9ybT5kaXY+ZGl2LmNvbC1tZC04PmRpdj5kaXY+ZGl2PmRpdi5pbnB1dC1ncm91cC1hcHBlbmQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5kaXYuYXZhdGFyPmltZyB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuZGl2LmNvbnRhaW5lci5wcm9maWxlIHtcblx0cGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm8tbWFyZ2luZyB7XG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXRpdmUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHVlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYucHJvZmlsZS1yb3cge1xuXHRtYXJnaW4tdG9wOiA1NXB4O1xufVxuXG4uYWJzb2x1ZS5jZW50ZXIge1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59XG5cbmRpdi5hbGVydCB7XG5cdHdpZHRoOiA0MCU7XG59XG5cbi5hbGVydC1jb2wge31cblxuLmFsZXJ0LWNvbD4uYWxlcnQge1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuXHRvcGFjaXR5OiAwO1xufVxuXG4uYWxlcnQtY29sPi5hbGVydC5kaXNwbGF5IHtcblx0b3BhY2l0eTogMTtcbn1cblxuaHIge1xuXHRoZWlnaHQ6IDJweDtcbn1cblxuLmNvbnRlbnQtcmlnaHQ+KiB7XG5cdGZsb2F0OiByaWdodDtcbn1cblxuLmZvcm0tYnRuIHtcblx0bWluLXdpZHRoOiAxMDBweDtcblx0bWFyZ2luOiAwIDVweDtcblx0bWF4LXdpZHRoOiAyMDBweDtcbn1cblxuaW1nLmF2YXJ0LWltZyB7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG5cbmRpdi5hdmF0YXItYmcge1xuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8xMjM0NTY2P3NpemU9MjAwJmQ9bW0pO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0bWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xufVxuXG5kaXYuYXZhdGFyIHt9XG5cbmRpdi5jb250YWluZXIucHJvZmlsZSB7XG5cdHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmNlbnRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlbGF0aXZlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZGl2LnByb2ZpbGUtcm93IHtcblx0bWFyZ2luLXRvcDogNTVweDtcbn1cblxuLmFic29sdWUuY2VudGVyIHtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG5kaXYuYWxlcnQge1xuXHR3aWR0aDogNDAlO1xufVxuXG4uYWxlcnQtY29sPi5hbGVydCB7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG5cdG9wYWNpdHk6IDA7XG59XG5cbmhyIHtcblx0aGVpZ2h0OiAycHg7XG59XG5cbi5jb250ZW50LXJpZ2h0Pioge1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbi5mb3JtLWJ0biB7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdG1hcmdpbjogMCA1cHg7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG5cbmRpdi5hdmF0YXItYmcge1xuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8xMjM0NTY2P3NpemU9MjAwJmQ9bW0pO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0bWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xufVxuXG4jcHJvZmlsZSB7XG5cdG1hcmdpbi1ib3R0b206IDJlbTtcbn0iXX0= */"

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


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/component/page/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/component/page/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "#OP_OO_OHTABS_CONTENT {\n  max-height: 60vh;\n  overflow-y: scroll; }\n\n#MAIN_TRADE_ROW {\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9QRU5ESU5HIC0gRXh0ZXJuYWxTdGFuZGFyZDEvQ09ERS9hbmd1bGFyYXBwMS9zcmMvYXBwL2NvbXBvbmVudC9wYWdlL3RyYWRlL3RyYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWU7RUFDZixrQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcGFnZS90cmFkZS90cmFkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNPUF9PT19PSFRBQlNfQ09OVEVOVCB7XG5cdG1heC1oZWlnaHQ6NjB2aDtcblx0b3ZlcmZsb3cteTpzY3JvbGw7XG59XG4gIFxuI01BSU5fVFJBREVfUk9XIHtcblx0bWFyZ2luOjBweDtcbn0iXX0= */"

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

/***/ "./src/app/component/ui/navbar/navbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/ui/navbar/navbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<nav class=\"navbar navbar-dark navbar-expand-md fixed-top navigation-clean\">\n\t\t<div class=\"container\">\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"_RouteService.main\">ThisCoin</a>\n\t\t\t<button class=\"navbar-toggler\"\n\t\t\tdata-toggle=\"collapse\"\n\t\t\tdata-target=\"#navcol-1\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.trade\">Trade</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle nav-link dropdown-toggle\" \n\t\t\t\t\t\tdata-toggle=\"dropdown\"\n\t\t\t\t\t\thref=\"#\"\n\t\t\t\t\t\taria-expanded=\"false\">\n\t\t\t\t\t\t\tAssets\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"presentation\" [routerLink]=\"_RouteService.deposits\">Deposits</a>\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass=\"dropdown-item\" role=\"presentation\" [routerLink]=\"_RouteService.withdraws\">Withdraws</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\"\n\t\t\t\t\t\t\t\trole=\"presentation\" [routerLink]=\"_RouteService.orderHistory\">Order History</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.profile\">Profile</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle nav-link dropdown-toggle\" \n\t\t\t\t\t\t\tdata-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-expanded=\"true\"\n\t\t\t\t\t\t\thref=\"#\">More</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" \n\t\t\t\t\t\trole=\"menu\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" role=\"presentation\"\n\t\t\t\t\t\t\t\t[routerLink]=\"_RouteService.logOut\">LogOut</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"nav navbar-nav ml-auto\">\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"_RouteService.profile\">Login / LogOut</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" role=\"presentation\">\n\t\t\t\t\t\t<a class=\"nav-link\">Register</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>"

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



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_RouteService) {
        this._RouteService = _RouteService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/ui/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_provider_route_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
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

module.exports = "<div>\n\t<ul class=\"nav nav-tabs\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-1\">Buy</a>\n\t\t</li>\n\t\t<li class=\"nav-item\" style=\"display:none;\">\n\t\t\t<a class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" href=\"#tab-2\">Sell</a>\n\t\t</li>\n\t</ul>\n\t<div class=\"tab-content\">\n\t\t<div class=\"tab-pane active\" role=\"tabpanel\" id=\"tab-1\">\n\t\t\t<div id=\"ORDTYPE\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">Order Type</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\" selected>Limit Order</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"13\">Market Order</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"table-responsive\" id=\"ORD_QTY_LIMIT\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Column 1</th>\n\t\t\t\t\t\t\t<th>Column 2</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><label>Quantity</label></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">USD</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" />\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><label>Limit Price</label></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\">USD</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" />\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div id=\"QTYDIV\"></div>\n\t\t\t<div></div>\n\t\t\t<div id=\"MAKERONLYDIV\">\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"formCheck-2\" /><label class=\"form-check-label\"\n\t\t\t\t\t\tfor=\"formCheck-2\">MAKER ONLY</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"BUY_DIV\">\n\t\t\t\t<button class=\"btn btn-dark btn-block btn-lg\" type=\"button\">\n\t\t\t\t\tBUY\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"tab-pane\" role=\"tabpanel\" id=\"tab-2\">\n\t\t\t<p>Content for tab 2.</p>\n\t\t</div>\n\t</div>\n</div>\n"

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
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteService);
    return RouteService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map