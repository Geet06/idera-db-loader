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
/* harmony import */ var _idera_server_idera_server_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idera-server/idera-server.component */ "./src/app/idera-server/idera-server.component.ts");




var routes = [
    { path: '', component: _idera_server_idera_server_component__WEBPACK_IMPORTED_MODULE_3__["IderaServerComponent"] }
];
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>Idera server</h1>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
        this.title = 'webapp';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _idera_server_idera_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idera-server/idera-server.component */ "./src/app/idera-server/idera-server.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _idera_server_idera_server_component__WEBPACK_IMPORTED_MODULE_6__["IderaServerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/idera-server/idera-server.component.html":
/*!**********************************************************!*\
  !*** ./src/app/idera-server/idera-server.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table align=\"center\">\r\n<tr>\r\n  <td>Sql Server :</td>\r\n  <td><input [(ngModel)]=\"serverName\" type=\"text\" /></td>\r\n</tr>\r\n\r\n<tr>\r\n  <td>Sql Login :</td>\r\n  <td><input [(ngModel)]=\"serverLogin\" type=\"text\"/></td>\r\n</tr>\r\n<tr>\r\n  <td>Sql Password :</td>\r\n  <td><input [(ngModel)]=\"serverPassword\" type=\"password\"/></td>\r\n</tr>\r\n<tr>\r\n  <td><button (click)=\"connect()\">Connect</button></td>\r\n  <!-- <td><button (click)=\"CSVfiles()\">CSV Files</button></td> -->\r\n</tr>\r\n\r\n</table><br>\r\nConsole:<br>\r\n<textarea [(ngModel)]='consoleError'></textarea>\r\n<br>\r\n<br>\r\nServer Details Table:\r\n<table align=\"center\" style=\"border:2px solid black\">\r\n  <tr>\r\n    <td>Server Name</td>\r\n    <td>Activity</td>\r\n    <td>Start/Stop</td>\r\n  </tr>\r\n  <tr *ngFor=\"let data of serverdetails\">\r\n    <td>{{data.name}}</td>\r\n    <td [ngStyle]=\"{'background-color':data.activity?'green':'red'}\"></td>\r\n    <td>\r\n      <button *ngIf=\"data.activity\" (click)=\"changeStatus(data.id)\">Stop</button>\r\n      <button *ngIf=\"!data.activity\" (click)=\"changeStatus(data.id)\">Start</button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<button (click)=\"startAll()\">Start All</button>\r\n<button (click)=\"stopAll()\">Stop All</button>\r\n"

/***/ }),

/***/ "./src/app/idera-server/idera-server.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/idera-server/idera-server.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lkZXJhLXNlcnZlci9pZGVyYS1zZXJ2ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/idera-server/idera-server.component.ts":
/*!********************************************************!*\
  !*** ./src/app/idera-server/idera-server.component.ts ***!
  \********************************************************/
/*! exports provided: IderaServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IderaServerComponent", function() { return IderaServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _idera_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idera-server.service */ "./src/app/idera-server/idera-server.service.ts");



var IderaServerComponent = /** @class */ (function () {
    function IderaServerComponent(ideraService) {
        this.ideraService = ideraService;
        this.savedServerdetails = [{ 'id': 4, 'name': "Jasgeet", 'login': 'jasgeet@1', 'password': '1234' },
            { 'id': 5, 'name': "Geet", 'login': 'jasgeet@2', 'password': '1234' },
            { 'id': 6, 'name': "Jaffie", 'login': 'jasgeet@3', 'password': '1234' }
        ];
        this.serverdetails = [{ 'activity': true, 'id': 1, 'name': "Abcd" },
            { 'activity': true, 'id': 2, 'name': "def" },
            { 'activity': false, 'id': 3, 'name': "ghi" }];
    }
    IderaServerComponent.prototype.ngOnInit = function () {
        this.ideraService.getServerData().subscribe(function (res) {
            console.log(res);
        });
    };
    IderaServerComponent.prototype.changeStatus = function (id) {
        for (var i = 0; i < this.serverdetails.length; i++) {
            if (this.serverdetails[i].id == id) {
                if (this.serverdetails[i].activity)
                    this.serverdetails[i].activity = false;
                else
                    this.serverdetails[i].activity = true;
            }
        }
    };
    IderaServerComponent.prototype.startAll = function () {
        for (var i = 0; i < this.serverdetails.length; i++) {
            this.serverdetails[i].activity = true;
        }
    };
    IderaServerComponent.prototype.stopAll = function () {
        for (var i = 0; i < this.serverdetails.length; i++) {
            this.serverdetails[i].activity = false;
        }
    };
    IderaServerComponent.prototype.checkforDuplicateid = function (id) {
        for (var i = 0; i < this.serverdetails.length; i++) {
            if (this.serverdetails[i].id == id)
                return 1;
        }
        return 0;
    };
    IderaServerComponent.prototype.connect = function () {
        var obj = {
            "id": 131,
            "loginId": this.serverLogin,
            "serverName": this.serverName,
            "password": this.serverPassword,
            "activity": true
        };
        this.ideraService.insertServerData(obj).subscribe(function (res) {
            console.log(res);
        });
        var loginCheck = 0;
        for (var i = 0; i < this.savedServerdetails.length; i++) {
            if (this.serverLogin == this.savedServerdetails[i].login) {
                loginCheck = 1;
                if (this.serverPassword == this.savedServerdetails[i].password) {
                    var check = this.checkforDuplicateid(this.savedServerdetails[i].id);
                    console.log(check);
                    if (check == 0) {
                        this.serverdetails.push({
                            'id': this.savedServerdetails[i].id,
                            'activity': false,
                            'name': this.savedServerdetails[i].name
                        });
                        this.consoleError = '';
                    }
                    else {
                        this.consoleError = "Connection already added to the table";
                    }
                }
                else {
                    this.consoleError = 'Password didnt matched';
                }
            }
        }
        if (loginCheck == 0) {
            this.consoleError = 'No login found';
        }
    };
    IderaServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-idera-server',
            template: __webpack_require__(/*! ./idera-server.component.html */ "./src/app/idera-server/idera-server.component.html"),
            styles: [__webpack_require__(/*! ./idera-server.component.scss */ "./src/app/idera-server/idera-server.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_idera_server_service__WEBPACK_IMPORTED_MODULE_2__["IderaServerService"]])
    ], IderaServerComponent);
    return IderaServerComponent;
}());



/***/ }),

/***/ "./src/app/idera-server/idera-server.service.ts":
/*!******************************************************!*\
  !*** ./src/app/idera-server/idera-server.service.ts ***!
  \******************************************************/
/*! exports provided: IderaServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IderaServerService", function() { return IderaServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var IderaServerService = /** @class */ (function () {
    function IderaServerService(http) {
        this.http = http;
    }
    IderaServerService.prototype.getServerData = function () {
        var data = this.http.get("/api/server/list");
        return data;
    };
    IderaServerService.prototype.insertServerData = function (obj) {
        var data = this.http.post("/api/server/add", obj);
        return data;
    };
    IderaServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IderaServerService);
    return IderaServerService;
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

module.exports = __webpack_require__(/*! D:\idera-h2\src\main\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map