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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>クラン施設 投票所</h1>\n</div>\n<div>\n  <!-- 残オイル：{{config.oil | number}} -->\n</div>\n<app-main></app-main>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClanBase';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _signed_number_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signed-number.pipe */ "./src/app/signed-number.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Database } from 'sqlite3';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _signed_number_pipe__WEBPACK_IMPORTED_MODULE_5__["SignedNumberPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//'rxjs/add/operator/map';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get('assets/config.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return console.log(x); })
        //catchError(x => console.log(x))
        );
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  padding: 20px;\r\n}\r\nli {\r\n  position: relative;\r\n  /* display: inline-block; */\r\n  /* white-space:normal; */\r\n  background-color: #EEE;\r\n  /* margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px; */\r\n}\r\n.building-level {\r\n  display: inline-block;\r\n}\r\n.name {\r\n  width: 300px;\r\n}\r\ntable {\r\n  border-width: 1px;\r\n  border-color: #000000;\r\n  border-style: solid;\r\n}\r\ntd {\r\n  border-width: 1px;\r\n  border-color: #000000;\r\n  border-style: solid;\r\n  position: relative;\r\n\r\n}\r\n.level {\r\n  justify-items: center;\r\n  width: 100px;\r\n}\r\ninput[type=\"checkbox\"]{\r\n  /* display: none; */\r\n  position: absolute;\r\n  top: 0;\r\n  opacity: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n}\r\ninput[type=\"checkbox\"] + label {\r\n  display: block;\r\n  width: 48px;\r\n  height: 48px;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADJ0lEQVRoge2ZTahUZRzGR6QQ+6Lpy/DjQl2iMEG5iyCIpu5t3vk/v/97xk4cCFJyIYHiQos+Ft1wUWC1KFrYIqhokdZGCipqc1uFEGS0K6MvDSEEkSsiyOW2uCPEmfcwNxmvd+C88Owe/u/zOzPzn+GZRmOIJ8a42t3XStoE7HL3w+5+GNglaZO7r40xrh7mnUM5ZnZjnudjZmaSXgY+cffj7j7b03HgUzObdnfleT42NTV101UNXRTFysnJyVuyLBt396fc/Q1gRtJf7j4LzP9X7j4r6YS7f9vzbsuybDzGeGtRFCuXLHir1VolaY2kzcBu4CDwI3AKuFAOntAF4JSkn9z9XXffY2Zb8jy/s9VqrbqSwa/vdrvrzexRd38B+Lj31jgNzC0ieFlz7n4a+BU4FGN8qdPpTHa73fVZlt0wrNwrgJuBuyQ9Abwq6SvgD+DsZYSu0lngT0lfA68BhZndHUJozs/Pr/jfqScmJq5pt9u3xxjvlbRT0tvAUeBv4PwQg5d1vnfH98A7wDMxxo1Zlt1RFMW1A4NfWoPtdvtBSfskvQ/8DPwDXLyCwcu62LvzF+BD4DngITNb1263r0uG7+3orcArko4AvwFnljB0Uu5+Bvhd0ufuvh/IzWxdH4CkZ939B+AEcO5qB0/oHHASOAa82AcAfObul7NNlvoVmQNmUgDfsLCjR0HfpQAOuPsXoyDgzT6AEMK4pM2joBDC+MCVOrLHzG6T9EBZwP1lb++nc59X0j1lLwvf5invWMJ7X4V3zUAAFs7Rstz9o7JX0s4K7+uJudMpL7A34T1Y4X1yIICkHRUr7FjCu79i1R1JhPqgYu5bCe9MhbcPtgaoAWqAGqAGqAFqgBqgBqgBaoAaoAaoAYYIsJ1FtmFmNp3yuvuhstfd36uYeyABUNUS7h4IAEwttg0DtlW0Z88nHsy+irlPJ+YmW0JJnYEAIYTmYtuwS/+VlRVj3FD2xhg3VDRtfV1PVUsYQmgOBBi5E0JomtmWUVQIodkAHnH3L0dRkh5rdDqdxys+8ctekrY3zGxrxc5d9pK0owZYDgAPk66yR0H8C7fSyek9En7cAAAAAElFTkSuQmCC\");\r\n}\r\ninput[type=\"checkbox\"]:checked + label {\r\n  display: block;\r\n  width: 48px;\r\n  height: 48px;\r\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADcUlEQVRoge2ZTWhUVxiGR0SRaC0dW7WMGrBBFBUUF4IgTk2cO+d7vzPRKQOCSrMIBcWFP/izMOJCweqixYVhcHLPd+4k1c5GKqjoJl2VQEFLdxpp/WkRRBCJiCAhXZhCvfdcJpUxceAeeHYv57zPDPMtvkmlGnh0WbdwL2fI0GoIdrPlS2z5EgS7ydBq7uWMLuuWRr7ZkKP61dziQLFVWaVI6BgEP7LwMAuPjDMMi5oyqocDpuJAsbWj1vHxlJYu1UrT2237vEK10MbCO9jwGQgGSeghC49AMPZf2PIICT1iwz+z5TOw2FmoFtp0WX9aqpWmT1rxrMnOIkMLydAaWOyB4DwsfoPgMQSvwsUdvILgMQn9zsK97PNeZdXaYrX4edZkZ72/4rXsnE6/c7Hy1WYWPgzBD2x5GIKnEIxOoHiYURZ+CsE9CC7qQB/NS7690+9cXOgrfNSo3tMwgE/gYykJfQXBSRK6DoP7EDx/h9JxPIfgAQndgMEpBCgpUV94FS89NjY27X+3XldeNyMX5OZro5eTpW4y9D0shiD4G4KXDSz+NhYvx9/4FRbnIPhGi15ZuFBYUKqVZtYtrsu6hS1ncn5uAwntJyEfgjsQPIHg9XsrHuX1+Jt3YSEQHITBRtWvFuWC3Gxnebac0VW9FYLjZOgyBH9A8GwSSzth4WcQ/ElCV9jyCQQoqn61KCJAhg6w8C0IHkHwYqqLO3gBwV8Q3IbFkYgABD+x8LtMk8n+RkYhGHQJ3MSbGf3hY/FLVMDiNFu+2gzA4mxEwKt6bWRoTTPgVb22uiO1aY/y1WcU0PowCLAqnGXLGVeWLC0LZzGApc5shVoj2QArnFlDC+sKQABYDIVhy0E4S5a6nVnhbyP3GvS4sjDY5+hwPia7va4AGeqKGWG3HdkTMaPusqOUibn3O0d20Jl1yCYCiUAikAgkAolAIpAIJAKJQCKQCCQCiUADBXZhgtswZVSPK8vCF8NZFr4Qc+9ph4B7S2iwp64ALDomug2Dj53O7ZnhQ5EPRmi/814fXzs6OLeEZChfV8CreOmJbsP+/a8sjA70knBWB3pJzKYtsuuJ2xJ6FS9dV6Dpjlfx0qqi1jYjXsVLp9CHL1n4WjNChrak8n35bc5ffBNAhnallFFbY+bzBw8Z6koEpl7AV5tgMNSUCPAPWnu+edK/GFEAAAAASUVORK5CYII=\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  オイル：{{config.oil | number}}\n\n  <table>\n    <tbody>\n      <tr *ngFor=\"let building of config.building\">\n        <td>{{building.name}}</td>\n        <td>{{building.effect}}</td>\n        <td class=\"level\" *ngFor=\"let level of building.levels; let i = index\">\n          <div>\n            <input type=\"checkbox\"\n              [checked]=\"i < building.level\"\n              [disabled]=\"i < building.minLevel\"\n              (change)=\"changeLevel(building.id, i + 1, $event)\">\n            <label></label>\n          </div>\n          <div>\n            <span>{{level.value | signedNumber }}{{building.unit}}</span>\n            <span>{{level.oil | number}}</span>\n          </div>\n        </td>\n\n\n      </tr>\n    </tbody>\n  </table>\n  <!-- <ul>\n    <li *ngFor=\"let building of config.building\">\n      <span class=\"name\">{{building.name}}</span>\n      <span class=\"effect\">{{building.effect}}</span>\n      <span *ngFor=\"let level of building.levels\" class=\"building-level\">\n        <div>\n          <input type=\"checkbox\">\n        </div>\n        <div>{{level.value}}</div>\n        <div>{{level.oil}}</div>\n      </span>\n    </li>\n  </ul> -->\n</div>\n<label>投票者\n    <input type=\"text\">\n  </label>\n<button (click)=\"vote()\">\n  投票\n</button>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(configService) {
        this.configService = configService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getConfig();
    };
    MainComponent.prototype.getConfig = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (config) {
            config.building.forEach(function (b) { return b.minLevel = b.level; });
            _this.config = config;
        });
    };
    MainComponent.prototype.changeLevel = function (id, level, e) {
        var l = e.target.checked ? level : level - 1;
        this.config.building.find(function (b) { return b.id == id; }).level = l;
    };
    MainComponent.prototype.vote = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/signed-number.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/signed-number.pipe.ts ***!
  \***************************************/
/*! exports provided: SignedNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedNumberPipe", function() { return SignedNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignedNumberPipe = /** @class */ (function () {
    function SignedNumberPipe() {
    }
    SignedNumberPipe.prototype.transform = function (value) {
        return value >= 0 ? '+' + value : '' + value;
    };
    SignedNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'signedNumber'
        })
    ], SignedNumberPipe);
    return SignedNumberPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\Repos\ClanBase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map