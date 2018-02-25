webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-body style=\" margin: auto; \">\n    <div class=\"row\">\n      <div class=\"example-container\" *ngFor=\"let hb of settings\">\n        <div class=\"container-btn\" style=\"padding-right: 7px !important;\">\n          <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\">{{ hb.NameButton }}</button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/Components/buttons/buttons.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n:host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n:host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n:host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n:host-context(.nb-theme-default) .shadow {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#b57fff), to(#8a7fff));\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n:host-context(.nb-theme-default) .primary-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #9f7fff;\n          box-shadow: 0 0 0 0 #9f7fff; }\n:host-context(.nb-theme-default) .primary-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #896ddb;\n          box-shadow: 0 0 0 0 #896ddb; }\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#ffcc00), to(#ffa100));\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n:host-context(.nb-theme-default) .warning-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #ffb600;\n          box-shadow: 0 0 0 0 #ffb600; }\n:host-context(.nb-theme-default) .warning-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #db9d00;\n          box-shadow: 0 0 0 0 #db9d00; }\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#40dcb2), to(#40dc7e));\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n:host-context(.nb-theme-default) .success-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #40dc98;\n          box-shadow: 0 0 0 0 #40dc98; }\n:host-context(.nb-theme-default) .success-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #37bd83;\n          box-shadow: 0 0 0 0 #37bd83; }\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#4cc4ff), to(#4ca6ff));\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n:host-context(.nb-theme-default) .info-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #4cb5ff;\n          box-shadow: 0 0 0 0 #4cb5ff; }\n:host-context(.nb-theme-default) .info-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #419cdb;\n          box-shadow: 0 0 0 0 #419cdb; }\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#ff4ca6), to(#ff4c6a));\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n:host-context(.nb-theme-default) .danger-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #ff4c88;\n          box-shadow: 0 0 0 0 #ff4c88; }\n:host-context(.nb-theme-default) .danger-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #db4175;\n          box-shadow: 0 0 0 0 #db4175; }\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n:host-context(.nb-theme-default) .secondary-container .glow {\n  -webkit-box-shadow: 0 0 0 0 #dadde6;\n          box-shadow: 0 0 0 0 #dadde6; }\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  -webkit-box-shadow: 0 0 0 0 #bbbec6;\n          box-shadow: 0 0 0 0 #bbbec6; }\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n:host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n:host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n:host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n:host-context(.nb-theme-cosmic) .shadow {\n  -webkit-box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5);\n          box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #9259ff;\n          box-shadow: 0 2px 8px 0 #9259ff; }\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #7e4ddb;\n          box-shadow: 0 3px 0 0 #7e4ddb; }\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#ffcc00), to(#ffa100));\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #ffb600;\n          box-shadow: 0 2px 8px 0 #ffb600; }\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #db9d00;\n          box-shadow: 0 3px 0 0 #db9d00; }\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00d9bf), to(#00d977));\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #00d99b;\n          box-shadow: 0 2px 8px 0 #00d99b; }\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #00bb85;\n          box-shadow: 0 3px 0 0 #00bb85; }\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00b3ff), to(#0088ff));\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #009dff;\n          box-shadow: 0 2px 8px 0 #009dff; }\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #0087db;\n          box-shadow: 0 3px 0 0 #0087db; }\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: -webkit-gradient(linear, left top, right top, from(#ff38ac), to(#ff386a));\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #ff388b;\n          box-shadow: 0 2px 8px 0 #ff388b; }\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #db3078;\n          box-shadow: 0 3px 0 0 #db3078; }\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  -webkit-box-shadow: 0 2px 8px 0 #9259ff;\n          box-shadow: 0 2px 8px 0 #9259ff; }\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  -webkit-box-shadow: 0 3px 0 0 #7e4ddb;\n          box-shadow: 0 3px 0 0 #7e4ddb; }\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/Components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(themeService, router, cacheSrv) {
        var _this = this;
        this.themeService = themeService;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'Grimorio',
                NameButton: 'Grimório',
                Name: 'Grimório: O Livro de Magias',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-warning',
                container: 'warning-container',
                Destino: 'Reinos',
                NameButton: 'Reinos',
                Name: 'Os Reinos de Argeon',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }, {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'Fichas de Usuario',
                NameButton: 'Jogadores',
                Name: 'Fichas dos Jogadores',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.success + ", 10deg)",
                },
            }, {
                class: 'btn-hero-info',
                container: 'info-container',
                Destino: 'Clans',
                NameButton: 'Clãs',
                Name: 'Clãs de Argeon',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.info + ", -5deg)",
                },
            }, {
                class: 'btn-hero-danger',
                container: 'danger-container',
                Destino: 'Potions',
                NameButton: 'Poções',
                Name: 'Poções Magicas',
                Execute: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.danger + ", -10deg)",
                },
            }, {
                class: 'btn-hero-secondary',
                container: 'secondary-container',
                Destino: 'MenuPrincipal',
                NameButton: 'Menu',
                Name: 'Menu Principal',
                Execute: true,
                cosmic: {
                    border: colors.primary,
                    bevel: '#665ebd',
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: 'rgba (146, 141, 255, 1)',
                },
            }];
    };
    ButtonsComponent.prototype.Gerar = function (Botao) {
        this.cacheSrv.TituloObj.Grid = Botao.Name;
        this.cacheSrv.DatabaseObj.Destino = Botao.Destino;
        this.cacheSrv.callComponentMethod();
        //this.router.navigateByUrl('/noticias')
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("./src/app/Components/buttons/buttons.component.html"),
            styles: [__webpack_require__("./src/app/Components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/Components/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"angrytext\">\n  <nb-card-header>\n    {{titulo}}\n  </nb-card-header>\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" noDataMessage=\"noDataMessage\" [source]=\"menuItems\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/Components/grid/grid.component.scss":
/***/ (function(module, exports) {

module.exports = ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n"

/***/ }),

/***/ "./src/app/Components/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = /** @class */ (function () {
    function GridComponent(db, cacheSrv) {
        var _this = this;
        this.db = db;
        this.cacheSrv = cacheSrv;
        this.colunas = { Reinos: null, Jogadores: null, Magia: null, Clan: null, Potions: null, Menu: null };
        this.settings = {
            actions: { add: false, edit: false, delete: false }, columns: {
                nome: {
                    title: 'Nome:'
                },
            },
        };
        this.execute = false;
        this.titulo = 'Escolha uma Grid';
        this.settings = { actions: { add: false, edit: false, delete: false },
            noDataMessage: 'Clique em um botão acima para carregar a tabela', columns: {} };
        this.cacheSrv.componentMethodCalled$.subscribe(function () {
            _this.titulo = _this.cacheSrv.TituloObj.Grid;
            _this.execute = _this.cacheSrv.DatabaseObj.Executar;
            _this.destino = _this.cacheSrv.DatabaseObj.Destino;
            _this.getmenu();
            _this.getcolunas();
            setTimeout(function () {
                _this.getmenu();
                _this.getcolunas();
            }, 50);
        });
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.getmenu = function () {
        var _this = this;
        this.db.list(this.destino).valueChanges()
            .subscribe(function (s) {
            _this.menuItems = s;
            // this.execute = false;
        });
    };
    GridComponent.prototype.getcolunas = function () {
        if (this.destino == 'Reinos') {
            this.ColunaExibida = this.colunas.Reinos;
        }
        ;
        if (this.destino == 'Grimorio') {
            this.ColunaExibida = this.colunas.Magia;
        }
        ;
        if (this.destino == 'Fichas de Usuario') {
            this.ColunaExibida = this.colunas.Jogadores;
        }
        ;
        if (this.destino == 'Clans') {
            this.ColunaExibida = this.colunas.Clan;
        }
        ;
        if (this.destino == 'Potions') {
            this.ColunaExibida = this.colunas.Clan;
        }
        ;
        if (this.destino == 'MenuPrincipal') {
            this.ColunaExibida = this.colunas.Menu;
        }
        ;
        this.colunas.Reinos = {
            nome: {
                title: 'Nome:'
            },
            habitantes: {
                title: 'Habitantes'
            },
            lider: {
                title: 'Lider'
            },
            populacao: {
                title: 'População'
            },
        };
        this.colunas.Magia = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Clan = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Jogadores = {
            NomePlayer: {
                title: 'Nome do Jogador:'
            },
            NomeChar: {
                title: 'Nome do Personagem'
            },
            Alcunha: {
                title: 'Alcunha do Personagem'
            },
            Reinos: {
                title: 'Reinos'
            },
            Clan: {
                title: 'Clã'
            },
            IdadePlayer: {
                title: 'Idade do jogador'
            },
            IdadeChar: {
                title: 'Idade do personagem'
            },
        };
        this.colunas.Potions = {
            nome: {
                title: 'Nome:'
            },
            observacao: {
                title: 'Observacao'
            }
        };
        this.colunas.Menu = {
            nome: {
                title: 'Nome:'
            }
        };
        this.settings = { actions: { add: false, edit: false, delete: false },
            columns: this.ColunaExibida };
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("./src/app/Components/grid/grid.component.html"),
            styles: [__webpack_require__("./src/app/Components/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\n  <div style=\" width: 20%;\">\n    <nb-menu [items]=\"menu\"></nb-menu>\n  </div>\n  <nb-actions size=\"medium\" class=\"header-container\" style=\" justify-content: flex-end;\" *ngIf=\"Logado\">\n    <nb-action>\n\n    </nb-action>\n    <nb-action>\n      <nb-user [name]=\"UsernameDisplay\" [picture]=\"AvatarDisplay\"></nb-user>\n    </nb-action>\n    <nb-action>\n      <button class=\"btn btn-primary logout\" (click)=\"GoToLogin()\" >\n        <i class=\"fa fa-2x fa-chevron-down {{Rotate}} \"></i>Sair</button>\n    </nb-action>\n  </nb-actions>\n\n  <nb-actions size=\"medium\" class=\"header-container\" style=\" justify-content: flex-end;\" *ngIf=\"!Logado\">\n    <nb-action>\n      <button class=\"btn btn-primary logout\" (click)=\"GoToLogin()\">\n        <i class=\"fa fa-2x fa-chevron-up {{Rotate}} \"></i>Login</button>\n    </nb-action>\n  </nb-actions>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .header-container .navigation {\n    padding-right: nb-theme(padding);\n    font-size: 2.5rem;\n    text-decoration: none; }\n  .header-container .navigation i {\n      display: block; }\n  .header-container .logo {\n    padding: 0 nb-theme(padding);\n    font-size: 1.75rem;\n    font-weight: nb-theme(font-weight-bolder);\n    border-left: 1px solid nb-theme(separator);\n    white-space: nowrap; }\n  .header-container .logo span {\n      font-weight: nb-theme(font-weight-normal); }\n  .header-container .logo:hover {\n    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; }\n  .logout {\n  background-color: transparent !important; }\n  .logout:hover {\n  background-color: #a659ff !important; }\n  .navigation {\n  border-right-style: solid;\n  border-color: #ffffffa3;\n  border-width: 1px; }\n  .fa-chevron-down:hover {\n  -webkit-animation-name: RotateToLogin;\n  -webkit-animation-duration: .3s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 10;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: RotateToLogin;\n  animation-duration: .3s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: 10;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n  .RotateToLogin {\n  -webkit-animation-name: RotateToLogin;\n  -webkit-animation-duration: .3s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 10;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: RotateToLogin;\n  animation-duration: .3s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: 10;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n  @-webkit-keyframes RotateToLogin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n  @keyframes RotateToLogin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_LoginSrv_login_srv_service__ = __webpack_require__("./src/app/Service/LoginSrv/login-srv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, afAuth, LoginSrv, cacheSrv, sidebarSrv, menuSrv) {
        this.router = router;
        this.afAuth = afAuth;
        this.LoginSrv = LoginSrv;
        this.cacheSrv = cacheSrv;
        this.sidebarSrv = sidebarSrv;
        this.menuSrv = menuSrv;
        this.Logado = false;
        this.menu = [
            {
                title: 'Argeon - WebApp',
                icon: 'fa fa-lg fa-home',
                target: "home",
                home: true
            }
        ];
        this.userUID = sessionStorage.getItem('SetTokenuser');
        this.AvatarDisplay = sessionStorage.getItem('SetImageuser');
        this.UsernameDisplay = 'Bem Vindo(a)' + ' ' + sessionStorage.getItem('SetNameuser');
        this.Rotate = null;
        if (this.userUID == null) {
            this.Logado = false;
        }
        else {
            this.Logado = true;
        }
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.GoToLogin = function () {
        var _this = this;
        this.Rotate = 'RotateToLogin';
        setTimeout(function () {
            _this.router.navigateByUrl('/login');
            _this.Show = false;
        }, 3000);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarSrv.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        //this.router.navigateByUrl('/home')
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/Components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_0__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */],
            __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */],
            __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["j" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_5__nebular_theme__["f" /* NbMenuService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div >\n<nb-menu [items]=\"menu\"></nb-menu>\n</div>\n<!-- <ul>\n  <div class=\"example-container\" *ngFor=\"let hb of settings\">\n    <div class=\"container-btn\">\n      <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\" style=\"padding:10px; width:100%\">\n        <i class=\"{{hb.icon}}\"></i>{{ hb.NameButton }}</button>\n    </div>\n  </div>\n  style=\" justify-content: center; display: flex; \"\n</ul> -->\n"

/***/ }),

/***/ "./src/app/Components/menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu-item::before {\n  -webkit-box-shadow: 0 21px 19px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 21px 19px 0 rgba(0, 0, 0, 0.75);\n  border-style: solid; }\n\n::ng-deep .menu-item {\n  margin-bottom: 1px !important;\n  border-style: solid !important;\n  border-bottom: 0px solid transparent !important;\n  border-top: 0px solid transparent !important;\n  -webkit-box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.75) !important;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.75) !important; }\n"

/***/ }),

/***/ "./src/app/Components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    //
    function MenuComponent(router, themeService, cacheSrv, menuSrv) {
        var _this = this;
        this.router = router;
        this.themeService = themeService;
        this.cacheSrv = cacheSrv;
        this.menuSrv = menuSrv;
        this.themeName = 'cosmic';
        this.menu = [
            {
                title: 'Noticias',
                icon: 'fa fa-lg fa-newspaper-o',
                target: "noticias"
            },
            {
                title: 'Fichas',
                icon: 'fa fa-lg fa-id-card-o',
                target: "fichas"
            },
            {
                title: 'Clans',
                icon: 'fa fa-lg fa-first-order',
                target: "Clans"
            },
            {
                title: 'Magias',
                icon: 'fa fa-lg fa-superpowers',
                target: "Magias"
            },
            {
                title: 'Panteão',
                icon: 'fa fa-lg fa-star',
            }
        ];
        this.menuSrv.onItemClick().subscribe(function (omega) {
            _this.router.navigateByUrl(omega.item.target);
        });
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'home',
                NameButton: 'Home',
                icon: 'fa fa-lg fa-home',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
            {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'noticias',
                NameButton: 'Noticias',
                icon: 'fa fa-lg fa-newspaper-o',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
            {
                class: 'btn-hero-warning',
                container: 'warning-container',
                Destino: 'fichas',
                NameButton: 'Fichas',
                icon: 'fa fa-lg fa-id-card-o',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            },
        ];
    };
    MenuComponent.prototype.Gerar = function (Botao) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl(Botao.Destino);
        }, 30);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/Components/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/Components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["m" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["f" /* NbMenuService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/Pages/clans/clans.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n  <br>\n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\">\n    <nb-sidebar-header>\n    </nb-sidebar-header>\n    <app-menu></app-menu>\n  </nb-sidebar>\n\n  <nb-layout-column>\n    <div class=\"angrytext\">\n      <nb-card class=\"\">\n        <nb-card-header style=\"text-align: center\">\n          <h1>Ainda em construção</h1>\n        </nb-card-header>\n        <nb-card-body>\n          <div style=\" text-align: start; \"></div>\n        </nb-card-body>\n        <nb-card-footer></nb-card-footer>\n      </nb-card>\n    </div>\n  </nb-layout-column>"

/***/ }),

/***/ "./src/app/Pages/clans/clans.component.scss":
/***/ (function(module, exports) {

module.exports = ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n"

/***/ }),

/***/ "./src/app/Pages/clans/clans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClansComponent = /** @class */ (function () {
    function ClansComponent() {
    }
    ClansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clans',
            template: __webpack_require__("./src/app/Pages/clans/clans.component.html"),
            styles: [__webpack_require__("./src/app/Pages/clans/clans.component.scss")]
        })
    ], ClansComponent);
    return ClansComponent;
}());



/***/ }),

/***/ "./src/app/Pages/criar-fichas/criar-fichas.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n\n  <nb-layout-column>\n    <nb-card class=\"Card99\">\n      <nb-card-header style=\"text-align:center\"><h3>Criar Ficha</h3></nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label>*Seu nome</label>\n              <input type=\"text\" [(ngModel)]=\"FichasData.NomePlayer\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>*Nome do seu Personagem</label>\n              <input [(ngModel)]=\"FichasData.NomeChar\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-4\">\n              <label>Alcunha</label>\n              <input type=\"text\" [(ngModel)]=\"FichasData.Alcunha\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>*Sua idade</label>\n              <input [(ngModel)]=\"FichasData.IdadePlayer\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Idade do seu personagem</label>\n              <input [(ngModel)]=\"FichasData.IdadeChar\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-group dropdownArrow newSelect\">\n                <label for=\"DropDownApps\">Reinos</label>\n                <select [(ngModel)]=\"FichasData.Reino\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n                  <option [value]=\"item.nome\" *ngFor=\"let item of  Dropdowns.Reinos\">{{item.nome}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-group dropdownArrow newSelect\">\n                <label for=\"DropDownApps\">Clãs</label>\n                <select [(ngModel)]=\"FichasData.Clan\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n                  <option [value]=\"item.nome\" *ngFor=\"let item of  Dropdowns.Clans\">{{item.nome}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n      <nb-card-footer>\n      </nb-card-footer>\n    </nb-card>\n    <div class=\"wrapper_Magico\">\n      <div class='row' style=\"text-align:center\">\n        <div class=\"col-md-6\">\n          <h1>Magias do Grimorio</h1>\n        </div>\n        <div class=\"col-md-6\">\n          <h1>Suas Magias</h1>\n        </div>\n      </div>\n      <div class='row '>\n        <div class='container col-md-6 coluna teste' [dragula]='\"bag-task1\"' [dragulaModel]='MagiaGrimorio' [dragulaOptions]=\"options\">\n          <nb-card class=\"Card99\" *ngFor=\"let text of MagiaGrimorio\">\n            <nb-card-header [innerHtml]='text'></nb-card-header>\n          </nb-card>\n        </div>\n        <div class='container col-md-6 coluna2 teste' [dragula]='\"bag-task1\"' [dragulaModel]='MagiaPlayer' [dragulaOptions]=\"options2\">\n          <nb-card class=\"Card99\" *ngFor=\"let text of MagiaPlayer\">\n            <nb-card-header [innerHtml]='text'></nb-card-header>\n          </nb-card>\n        </div>\n      </div>\n    </div>\n  </nb-layout-column>\n  <nb-layout-footer fixed>\n    <div class=\"row\">\n      <div class=\"example-container\" *ngFor=\"let hb of settings\">\n        <div class=\"container-btn\" style=\"padding-right: 7px !important;\">\n          <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"salvar(hb)\">{{ hb.NameButton }}</button>\n        </div>\n      </div>\n    </div>\n  </nb-layout-footer>\n</nb-layout>"

/***/ }),

/***/ "./src/app/Pages/criar-fichas/criar-fichas.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper_Magico {\n  font-size: 1rem;\n  line-height: 1.25;\n  background: #3d3780;\n  color: #d1d1ff;\n  border-radius: .5rem;\n  border-color: #3d3780;\n  -webkit-box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n          box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n  font-weight: 400; }\n\n.coluna {\n  -webkit-box-shadow: 6px 0px 25px 0px #000000 !important;\n          box-shadow: 6px 0px 25px 0px #000000 !important; }\n\n.coluna2 {\n  -webkit-box-shadow: -6px 0px 25px 0px #000000 !important;\n          box-shadow: -6px 0px 25px 0px #000000 !important; }\n\n.teste {\n  overflow-y: scroll;\n  height: 40vh; }\n"

/***/ }),

/***/ "./src/app/Pages/criar-fichas/criar-fichas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarFichasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CriarFichasComponent = /** @class */ (function () {
    function CriarFichasComponent(themeService, dragulaService, router, cacheSrv, db) {
        var _this = this;
        this.themeService = themeService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.options = {
            removeOnSpill: false,
            copy: false
        };
        this.options2 = {
            removeOnSpill: true,
            copy: false
        };
        this.MagiaGrimorio = [];
        this.MagiaPlayer = [];
        this.Dropdowns = {
            Grimorio: null,
            Reinos: null,
            Clans: null,
        };
        this.themeName = 'cosmic';
        this.FichasData = { NomePlayer: null, NomeChar: null, Alcunha: null, IdadePlayer: null, IdadeChar: null, Clan: null, Reino: null };
        this.userId = sessionStorage.getItem('SetTokenuser');
        this.ImagePlayer = sessionStorage.getItem('SetImageuser');
        this.Envio = db.object('Fichas de Usuario/' + this.userId);
        this.getDados();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.Buttons(theme.variables);
        });
    }
    CriarFichasComponent.prototype.ngOnInit = function () {
    };
    CriarFichasComponent.prototype.getDados = function () {
        var _this = this;
        this.db.list('Grimorio').valueChanges()
            .subscribe(function (s) {
            _this.Dropdowns.Grimorio = s;
            for (var i = 0; i < _this.Dropdowns.Grimorio.length; i++) {
                var magias = _this.Dropdowns.Grimorio[i].nome;
                _this.MagiaGrimorio.push(magias);
            }
        });
        this.db.list('Reinos').valueChanges()
            .subscribe(function (reinos) {
            _this.Dropdowns.Reinos = reinos;
        });
        this.db.list('Clans').valueChanges()
            .subscribe(function (clans) {
            _this.Dropdowns.Clans = clans;
        });
    };
    CriarFichasComponent.prototype.Buttons = function (colors) {
        this.settings = [
            {
                class: 'btn-hero-danger',
                NameButton: 'Cancelar',
                Salvar: false,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-success',
                NameButton: 'Salvar',
                Salvar: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }
        ];
    };
    CriarFichasComponent.prototype.showToast = function (position, iconType, body, time, cor) {
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            position: 'top-end',
            html: body,
            showConfirmButton: false,
            background: cor,
            // #678D65
            type: iconType,
            toast: true,
            timer: time,
        });
    };
    CriarFichasComponent.prototype.ValidarRegistro = function () {
        //var retorno: boolean = false;
        this.toasterText = '';
        if (this.FichasData.NomePlayer == null || this.FichasData.NomePlayer == '') {
            this.toasterText = this.toasterText + "<div style=\"\n                          padding:10px;\n                          color:#fff;\n                          \n                          font-family: 'Ubuntu', serif;\n                          text-align: left;\n                          \">\n                          <span style=\"font-weight: bold;\">Erro!</span>Voc\u00EA n\u00E3o informou seu nome</div>";
        }
        if (this.FichasData.NomeChar == null || this.FichasData.NomeChar == '') {
            this.toasterText = this.toasterText + "<div style=\"\n                         padding:10px;\n                         color:#fff;\n                         \n                         font-family: 'Ubuntu', serif;\n                         text-align: left;\n                         >\n                         <span style=\"font-weight: bold;\">Erro!</span>Voc\u00EA n\u00E3o informou o nome do seu personagem</div>";
        }
        if (this.FichasData.IdadePlayer == null || this.FichasData.IdadePlayer == '') {
            this.toasterText = this.toasterText + "<div style=\"\n                         padding:10px;\n                         color:#fff;\n                         \n                         font-family: 'Ubuntu', serif;\n                         text-align: left;\n                         >\n                         <span style=\"font-weight: bold;\">Erro!</span>Voc\u00EA n\u00E3o informou sua idade</div>";
        }
        return (this.toasterText == '');
    };
    CriarFichasComponent.prototype.salvar = function (item) {
        var _this = this;
        if (this.FichasData.Reino == null) {
            this.FichasData.Reino = 'Vento Verde';
        }
        if (this.FichasData.Clan == null) {
            this.FichasData.Clan = 'Lobo Solitario';
        }
        if (item.Salvar == false) {
            this.router.navigateByUrl('/fichas');
        }
        else {
            if (!this.ValidarRegistro()) {
                this.showToast('top', 'error', this.toasterText, 2000, '#B83740');
            }
            else {
                this.Envio.set({
                    NomePlayer: this.FichasData.NomePlayer,
                    NomeChar: this.FichasData.NomeChar,
                    Alcunha: this.FichasData.Alcunha,
                    IdadePlayer: this.FichasData.IdadePlayer,
                    IdadeChar: this.FichasData.IdadeChar,
                    Clan: this.FichasData.Clan,
                    Reinos: this.FichasData.Reino,
                    Img_Player: this.ImagePlayer,
                    Img_Char: 'Asa',
                    userId: this.userId,
                    Magias: this.MagiaPlayer,
                    MagiasPendentes: this.MagiaGrimorio
                });
                var successMsg = '<h5>Ficha criada com sucesso</h5>';
                this.showToast('top-end', 'success', successMsg, 2000, '#678D65');
                setTimeout(function () {
                    _this.router.navigateByUrl('/fichas');
                }, 2100);
            }
        }
    };
    CriarFichasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-criar-fichas',
            template: __webpack_require__("./src/app/Pages/criar-fichas/criar-fichas.component.html"),
            styles: [__webpack_require__("./src/app/Pages/criar-fichas/criar-fichas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_theme__["m" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CriarFichasComponent);
    return CriarFichasComponent;
}());



/***/ }),

/***/ "./src/app/Pages/editar-fichas/editar-fichas.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <div  style=\"text-align:center\">\n    <h3>Edite sua Ficha</h3>\n  </div>\n  </nb-layout-header>\n\n  <nb-layout-column>\n    <nb-card class=\"Card99\">\n      <nb-card-header></nb-card-header>\n      <nb-card-body>\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label>*Seu nome</label>\n              <input type=\"text\" [(ngModel)]=\"FichasData.NomePlayer\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>*Nome do seu Personagem</label>\n              <input [(ngModel)]=\"FichasData.NomeChar\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-4\">\n              <label>Alcunha</label>\n              <input type=\"text\" [(ngModel)]=\"FichasData.Alcunha\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>*Sua idade</label>\n              <input [(ngModel)]=\"FichasData.IdadePlayer\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Idade do seu personagem</label>\n              <input [(ngModel)]=\"FichasData.IdadeChar\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-group dropdownArrow newSelect\">\n                <label for=\"DropDownApps\">Reinos</label>\n                <select [(ngModel)]=\"FichasData.Reino\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n                  <option [value]=\"item.nome\" *ngFor=\"let item of Dropdowns.Reinos\">{{item.nome}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <div class=\"form-group dropdownArrow newSelect\">\n                <label for=\"DropDownApps\">Clãs</label>\n                <select [(ngModel)]=\"FichasData.Clan\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n                  <option [value]=\"item.nome\" *ngFor=\"let item of Dropdowns.Clans\">{{item.nome}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n      <nb-card-footer>\n      </nb-card-footer>\n    </nb-card>\n    <div class=\"wrapper_Magico\">\n      <div class='row' style=\"text-align:center\">\n        <div class=\"col-md-6\">\n          <h1>Magias do Grimorio</h1>\n        </div>\n        <div class=\"col-md-6\">\n          <h1>Suas Magias</h1>\n        </div>\n      </div>\n      <div class='row '>\n        <div class='container col-md-6 coluna teste' [dragula]='\"bag-task1\"' [dragulaModel]='MagiaGrimorio' [dragulaOptions]=\"options\">\n          <nb-card class=\"Card99\" *ngFor=\"let text of MagiaGrimorio\">\n            <nb-card-header [innerHtml]='text'></nb-card-header>\n          </nb-card>\n        </div>\n        <div class='container col-md-6 coluna2 teste' [dragula]='\"bag-task1\"' [dragulaModel]='MagiaPlayer' [dragulaOptions]=\"options2\">\n          <nb-card class=\"Card99\" *ngFor=\"let text of MagiaPlayer\">\n            <nb-card-header [innerHtml]='text'></nb-card-header>\n          </nb-card>\n        </div>\n      </div>\n    </div>\n  </nb-layout-column>\n  <nb-layout-footer fixed>\n    <div class=\"row\">\n      <div class=\"example-container\" *ngFor=\"let hb of settings\">\n        <div class=\"container-btn\" style=\"padding-right: 7px !important;\">\n          <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"salvar(hb)\">{{ hb.NameButton }}</button>\n        </div>\n      </div>\n    </div>\n  </nb-layout-footer>\n</nb-layout>"

/***/ }),

/***/ "./src/app/Pages/editar-fichas/editar-fichas.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper_Magico {\n  font-size: 1rem;\n  line-height: 1.25;\n  background: #3d3780;\n  color: #d1d1ff;\n  border-radius: .5rem;\n  border-color: #3d3780;\n  -webkit-box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n          box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n  font-weight: 400; }\n\n.coluna {\n  -webkit-box-shadow: 6px 0px 25px 0px #000000 !important;\n          box-shadow: 6px 0px 25px 0px #000000 !important; }\n\n.coluna2 {\n  -webkit-box-shadow: -6px 0px 25px 0px #000000 !important;\n          box-shadow: -6px 0px 25px 0px #000000 !important; }\n\n.teste {\n  overflow-y: scroll;\n  height: 40vh; }\n\n::ng-deep .nb-theme-cosmic nb-layout .layout nb-layout-header nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"

/***/ }),

/***/ "./src/app/Pages/editar-fichas/editar-fichas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarFichasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditarFichasComponent = /** @class */ (function () {
    function EditarFichasComponent(themeService, dragulaService, router, cacheSrv, db) {
        var _this = this;
        this.themeService = themeService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.FichasData = { NomePlayer: null, NomeChar: null, Alcunha: null, IdadePlayer: null, IdadeChar: null, Clan: null, Reino: null };
        this.Dropdowns = {
            Grimorio: null,
            Reinos: null,
            Clans: null,
        };
        this.options = {
            removeOnSpill: false,
            copy: false
        };
        this.options2 = {
            removeOnSpill: true,
            copy: false
        };
        this.MagiaGrimorio = [];
        this.MagiaPlayer = [];
        this.themeName = 'cosmic';
        this.userId = sessionStorage.getItem('SetTokenuser');
        this.Envio = db.object('Fichas de Usuario/' + this.userId);
        this.getDados();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.Buttons(theme.variables);
        });
    }
    EditarFichasComponent.prototype.ngOnInit = function () {
    };
    EditarFichasComponent.prototype.getDados = function () {
        var _this = this;
        this.Envio.valueChanges().subscribe(function (userData) {
            _this.FichasData.Alcunha = userData.Alcunha;
            _this.FichasData.Clan = userData.Clan;
            _this.FichasData.IdadeChar = userData.IdadeChar;
            _this.FichasData.IdadePlayer = userData.IdadePlayer;
            _this.FichasData.NomeChar = userData.NomeChar;
            _this.FichasData.NomePlayer = userData.NomePlayer;
            _this.FichasData.Reino = userData.Reinos;
            _this.MagiaPlayer = userData.Magias;
            _this.MagiaGrimorio = userData.MagiasPendentes;
        });
        this.db.list('Reinos').valueChanges()
            .subscribe(function (s) {
            _this.Dropdowns.Reinos = s;
        });
        this.db.list('Clans').valueChanges()
            .subscribe(function (s) {
            _this.Dropdowns.Clans = s;
        });
    };
    EditarFichasComponent.prototype.Buttons = function (colors) {
        this.settings = [
            {
                class: 'btn-hero-danger',
                NameButton: 'Cancelar',
                Salvar: false,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-success',
                NameButton: 'Salvar',
                Salvar: true,
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }
        ];
    };
    EditarFichasComponent.prototype.showToast = function (position, iconType, body, time, cor) {
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            position: 'top-end',
            html: '<h3 style="color:#fff;">' + body + '</h3>',
            showConfirmButton: false,
            background: cor,
            // #678D65
            type: iconType,
            toast: true,
            timer: time,
        });
    };
    EditarFichasComponent.prototype.ValidarRegistro = function () {
        this.toasterText = '';
        if (this.FichasData.NomePlayer == null || this.FichasData.NomePlayer == '') {
            this.toasterText = this.toasterText + '<br><h5>Você não informou seu nome</h5>';
        }
        if (this.FichasData.NomeChar == null || this.FichasData.NomeChar == '') {
            this.toasterText = this.toasterText + '<br><h5>Você não informou o nome do seu personagem</h5>';
        }
        if (this.FichasData.IdadePlayer == null || this.FichasData.IdadePlayer == '') {
            this.toasterText = this.toasterText + '<br><h5>Você não informou sua idade</h5>';
        }
        return (this.toasterText == '');
    };
    EditarFichasComponent.prototype.salvar = function (item) {
        var _this = this;
        if (this.FichasData.Reino == null) {
            this.FichasData.Reino = 'Vento Verde';
        }
        if (this.FichasData.Clan == null) {
            this.FichasData.Clan = 'Lobo Solitario';
        }
        if (item.Salvar == false) {
            this.router.navigateByUrl('/fichas');
        }
        else {
            if (!this.ValidarRegistro()) {
                this.showToast('top', 'error', this.toasterText, 2000, '#B83740');
            }
            else {
                this.Envio.update({
                    NomePlayer: this.FichasData.NomePlayer,
                    NomeChar: this.FichasData.NomeChar,
                    Alcunha: this.FichasData.Alcunha,
                    IdadePlayer: this.FichasData.IdadePlayer,
                    IdadeChar: this.FichasData.IdadeChar,
                    Clan: this.FichasData.Clan,
                    Reinos: this.FichasData.Reino,
                    userId: this.userId,
                    Magias: this.MagiaPlayer,
                    MagiasPendentes: this.MagiaGrimorio
                });
                var successMsg = '<h5>Ficha editada com sucesso</h5>';
                this.showToast('top-end', 'success', successMsg, 2000, '#678D65');
                setTimeout(function () {
                    _this.router.navigateByUrl('/fichas');
                }, 2100);
            }
        }
    };
    EditarFichasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editar-fichas',
            template: __webpack_require__("./src/app/Pages/editar-fichas/editar-fichas.component.html"),
            styles: [__webpack_require__("./src/app/Pages/editar-fichas/editar-fichas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["m" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditarFichasComponent);
    return EditarFichasComponent;
}());



/***/ }),

/***/ "./src/app/Pages/ficha/ficha.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n    <nb-layout-header fixed>\n        <app-header style=\"width:100%\"></app-header>\n    </nb-layout-header>\n    <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n        </nb-sidebar-header>\n        <app-menu></app-menu>\n    </nb-sidebar>\n    <nb-layout-column>\n        <nb-card class=\"angrytext\">\n            <nb-card-header style=\"text-align:center\">\n               <h2> Fichas de Usuarios</h2>\n            </nb-card-header>\n            <nb-card-body>\n                <ng2-smart-table [settings]=\"settings\" [source]=\"dadosFicha\">\n                </ng2-smart-table>\n            </nb-card-body>\n            <nb-card-footer>\n                    <div class=\"row\">\n                        <div class=\"example-container\" *ngFor=\"let hb of Omega\">\n                          <div class=\"container-btn\" style=\"padding-right: 7px !important;\" *ngIf=\"hb.mostrar\">\n                            <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"criarFichas(hb)\">{{ hb.NameButton }}</button>\n                          </div>\n                        </div>\n                      </div>\n            </nb-card-footer>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>\n\n\n\n"

/***/ }),

/***/ "./src/app/Pages/ficha/ficha.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper_Magico {\n  font-size: 1rem;\n  line-height: 1.25;\n  background: #3d3780;\n  color: #d1d1ff;\n  border-radius: .5rem;\n  border-color: #3d3780;\n  -webkit-box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n          box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n  font-weight: 400; }\n\n.colunas {\n  -webkit-box-shadow: 6px 0px 25px 0px #000000 !important;\n          box-shadow: 6px 0px 25px 0px #000000 !important; }\n\n.colunas2 {\n  -webkit-box-shadow: -6px 0px 25px 0px #000000 !important;\n          box-shadow: -6px 0px 25px 0px #000000 !important; }\n\n.teste {\n  overflow-y: scroll;\n  height: 40vh; }\n\n.row {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n"

/***/ }),

/***/ "./src/app/Pages/ficha/ficha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FichaComponent = /** @class */ (function () {
    function FichaComponent(themeService, dragulaService, router, cacheSrv, db) {
        var _this = this;
        this.themeService = themeService;
        this.dragulaService = dragulaService;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.themeName = 'cosmic';
        this.settings = {
            actions: { add: false, edit: false, delete: false }, columns: {
                nome: {
                    title: 'Nome:'
                },
            }
        };
        this.userId = sessionStorage.getItem('SetTokenuser');
        this.getDados();
        this.coluna();
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: this.gridJogadores };
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.Buttons(theme.variables);
        });
    }
    FichaComponent.prototype.ngOnInit = function () {
    };
    FichaComponent.prototype.getDados = function () {
        var _this = this;
        this.db.list('Fichas de Usuario').valueChanges()
            .subscribe(function (s) {
            _this.dadosFicha = s;
        });
    };
    FichaComponent.prototype.coluna = function () {
        this.db.list('ClassesBase').valueChanges()
            .subscribe(function (classes) {
            //console.log('Classes', classes)
        });
        this.gridJogadores = {
            NomePlayer: {
                title: 'Nome do Jogador:'
            },
            IdadePlayer: {
                title: 'Idade do jogador'
            },
        };
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: this.gridJogadores };
    };
    FichaComponent.prototype.Buttons = function (colors) {
        this.Omega = [
            {
                class: 'btn-hero-primary',
                NameButton: 'Criar Ficha',
                mostrar: true,
                goTo: 'criar_ficha',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            },
            {
                class: 'btn-hero-warning',
                NameButton: 'Editar Ficha',
                mostrar: true,
                goTo: 'editar_ficha',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }
        ];
    };
    FichaComponent.prototype.showToast = function () {
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            position: 'top',
            html: '<h3 style="color:#fff;">Você precisa estar logado para criar uma ficha</h3>',
            showConfirmButton: false,
            background: '#BD362F',
            //toast: true,
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMS4yNjkgNTExLjI2OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjI2OSA1MTEuMjY5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGNsYXNzPSIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMjIzNjg5IDAgMCAwLjIyMzY4OSAxOTguNDUyIDE5OC40NTIpIj48cGF0aCBzdHlsZT0iZmlsbDojMDAwMDAwIiBkPSJNMTQwLjM2Nyw0NjUuMDY3QzExNi45LDQzOC40LDkzLjQzNCw0MTAuNjY3LDc4LjUsMzc3LjZjLTE0LjkzMy0zNS4yLTE5LjItNzUuNzMzLTExLjczMy0xMTQuMTMzICBzMjQuNTMzLTc0LjY2Nyw0OS4wNjctMTA1LjZjLTIuMTMzLDI2LjY2Nyw3LjQ2Nyw1NC40LDI1LjYsNzQuNjY3Yy0xMC42NjctNTEuMiw2LjQtMTA2LjY2Nyw0MC41MzMtMTQ3LjJTMjYzLjAzNCwxOC4xMzMsMzEyLjEsMCAgYy0yNC41MzMsMjUuNi0yNy43MzMsNjYuMTMzLTE4LjEzMywxMDAuMjY3YzkuNiwzNC4xMzMsMjkuODY3LDY0LDQ4LDk0LjkzM2MxOC4xMzMsMzAuOTMzLDM1LjIsNjIuOTMzLDM2LjI2Nyw5OC4xMzMgIGM5LjYtMTguMTMzLDIwLjI2Ny0zNi4yNjcsMjYuNjY3LTU2LjUzM2M2LjQtMjAuMjY3LDkuNi00MS42LDQuMjY3LTYxLjg2N2MxOS4yLDIzLjQ2NywyOS44NjcsNDYuOTMzLDM1LjIsNzYuOCAgYzUuMzMzLDI5Ljg2Nyw0LjI2Nyw2MC44LDEuMDY3LDkwLjY2N2MtNC4yNjcsMzMuMDY3LTEyLjgsNjcuMi0zMC45MzMsOTQuOTMzYy0yMS4zMzMsMzMuMDY3LTU1LjQ2Nyw1Ni41MzMtOTIuOCw2OS4zMzMgIEMyNTUuNTY3LDUxOC40LDE5MC41LDUwOC44LDE0MC4zNjcsNDY1LjA2N3oiIGRhdGEtb3JpZ2luYWw9IiNGMzcwNUEiIGNsYXNzPSIiIGRhdGEtb2xkX2NvbG9yPSIjMDEwMTAxIj48L3BhdGg+PHBhdGggc3R5bGU9ImZpbGw6I0ZERkJGQiIgZD0iTTIyMS40MzQsNTA0LjUzM0MzMDguOSw1MzguNjY3LDM5NS4zLDQzNS4yLDM0Ny4zLDM1NS4yYzAtMS4wNjctMS4wNjctMS4wNjctMS4wNjctMi4xMzMgIGM0LjI2Nyw0My43MzMtNi40LDc1LjczMy0yNi42NjcsOTMuODY3YzEwLjY2Ny0yNS42LDMuMi01NS40NjctOS42LTgxLjA2N2MtMTIuOC0yNC41MzMtMzAuOTMzLTQ2LjkzMy00NC44LTcwLjQgIGMtMTMuODY3LTI0LjUzMy0yNC41MzMtNTIuMjY3LTE4LjEzMy04MGMtMjUuNiwxOS4yLTQzLjczMyw0OC01MS4yLDc4LjkzM2MtNy40NjcsMzAuOTMzLTMuMiw2NS4wNjcsMTAuNjY3LDkzLjg2NyAgYy0xNi0xMS43MzMtMjcuNzMzLTMwLjkzMy0yOC44LTUxLjJjLTE3LjA2NywyMC4yNjctMjcuNzMzLDQ2LjkzMy0yNi42NjcsNzMuNkMxNTEuMDM0LDQ1Mi4yNjcsMTg0LjEsNDg5LjYsMjIxLjQzNCw1MDQuNTMzeiIgZGF0YS1vcmlnaW5hbD0iI0ZGRDE1QyIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iI0Y4RjVGNSI+PC9wYXRoPjwvZz4gPC9zdmc+",
            type: 'error',
            width: 1000,
            timer: 200000
        });
    };
    FichaComponent.prototype.criarFichas = function (item) {
        var _this = this;
        var x;
        this.db.object('Fichas de Usuario/' + this.userId).valueChanges()
            .subscribe(function (s) {
            x = s;
        });
        setTimeout(function () {
            if (_this.cacheSrv.checkData(x)) {
                console.log('okay, estou aqui', x);
            }
            else {
                console.log('Naahhh, ainda não');
            }
        }, 500);
        // this.cacheSrv.checkData(x)
        if (this.userId == null) {
            this.showToast();
        }
        else {
            setTimeout(function () {
                _this.router.navigateByUrl(item.goTo);
            }, 100);
        }
    };
    FichaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ficha',
            template: __webpack_require__("./src/app/Pages/ficha/ficha.component.html"),
            styles: [__webpack_require__("./src/app/Pages/ficha/ficha.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_theme__["m" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FichaComponent);
    return FichaComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n  <br>\n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\">\n    <nb-sidebar-header>\n    </nb-sidebar-header>\n    <app-menu></app-menu>\n  </nb-sidebar>\n\n  <nb-layout-column>\n    <div class=\"angrytext\">\n        <nb-card class=\"\">\n            <nb-card-header style=\"text-align: center\">\n              <h1>BEM VINDOS À ARGEON</h1>\n            </nb-card-header>\n            <nb-card-body>\n              <div style=\" text-align: start; \">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus nulla, vulputate a condimentum et, aliquet sit amet lectus. Maecenas gravida ullamcorper quam eu pretium. Quisque urna ex, dapibus sed imperdiet eu, accumsan non urna. Nullam felis nibh, tincidunt sit amet nibh vitae, rutrum fringilla lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ultrices justo sed nibh viverra, nec vestibulum lorem sagittis. Morbi dictum laoreet metus. Mauris pellentesque egestas pharetra. Integer mi enim, pulvinar et tincidunt ut, maximus porta enim. Vivamus posuere elementum augue, at ultrices magna hendrerit et. Duis facilisis, felis ac interdum pulvinar, tortor elit maximus quam, et elementum lectus ipsum vel ante. Proin sit amet orci faucibus, tempor ante ut, eleifend augue.</p>\n              </div>\n            </nb-card-body>\n            <nb-card-footer></nb-card-footer>\n          </nb-card>\n      <app-buttons></app-buttons>\n    </div>\n    <app-grid></app-grid>\n    <div class=\"angrytext\">\n      <div class=\"WrapItUp Mostrar\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"elevation\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n        <div>\n          <nb-card class=\"Card99\">\n            <nb-card-header>Como nos encontrar</nb-card-header>\n            <nb-card-body>\n              <div style=\" text-align: start;\">\n                <p>Estamos nos encontrando todo o 1º e 3º domingo aqui, na Quinta da Boa Vista, no Estado do Rio de janeiro</p>\n              </div>\n            </nb-card-body>\n            <nb-card-footer></nb-card-footer>\n          </nb-card>\n          <br>\n          <nb-card class=\"Card99\">\n            <nb-card-header>Admnistradores(Arautos)</nb-card-header>\n            <nb-card-body>\n              <div style=\" text-align: start; \">\n                <ul class=\"mb-5\">\n                  <li>\n                    <h5>Carlos Oliveira</h5>\n                    <p>Arauto chefe de Argeon</p>\n                  </li>\n                  <li>\n                    <h5>Yasmin</h5>\n                    <p>Arauto chefe de Argeon</p>\n                  </li>\n                </ul>\n              </div>\n            </nb-card-body>\n            <nb-card-footer></nb-card-footer>\n          </nb-card>\n        </div>\n      </div>\n    </div>\n  </nb-layout-column>\n</nb-layout>"

/***/ }),

/***/ "./src/app/Pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "nb-sidebar.settings-sidebar {\n  -webkit-transition: width .3s ease;\n  transition: width .3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n  nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n  nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  nb-sidebar.menu-sidebar {\n  margin-top: nb-theme(sidebar-header-gap);\n  background: transparent; }\n  nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(nb-theme(sidebar-height) - nb-theme(header-height) - nb-theme(sidebar-header-gap)) !important;\n    border-top-right-radius: nb-theme(radius); }\n  nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: .5rem;\n    text-align: center; }\n  nb-sidebar.menu-sidebar .main-btn {\n    padding: .75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n  nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n  nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: .25rem; }\n  nb-sidebar.menu-sidebar .main-btn i,\n    nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: .375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n  nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n  agm-map {\n  height: 80vh;\n  width: 80vh; }\n  .WrapItUp {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n  .Card99 {\n  margin-left: 10px; }\n  .Card99 nb-card-header {\n    text-align: center; }\n  .angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n  @-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n  @keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n"

/***/ }),

/***/ "./src/app/Pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(db, router, themeService) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.themeService = themeService;
        this.themeName = 'cosmic';
        this.layout = {};
        this.lat = -22.90717096;
        this.lng = -43.22418451;
        this.elevation = 15;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
            //this.layoutState$ = this.stateService.onLayoutState()
            // .subscribe((layout: string) => this.layout = layout);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                Destino: 'home',
                NameButton: 'Home',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
            {
                class: 'btn-hero-success',
                container: 'success-container',
                Destino: 'home',
                NameButton: 'Noticias',
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            },
        ];
    };
    HomeComponent.prototype.Gerar = function (Botao) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl('/noticias');
        }, 30);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        //this.layoutState.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/Pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/Pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["m" /* NbThemeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n  <nb-layout-column>\n    <nb-card class=\"centro\">\n      <nb-card-header>\n        <h1>Login</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <button class=\"btn btn-primary Google\" (click)=\"login()\">\n          <i class=\"socicon-google\"></i> Login With Google\n        </button>\n        <i class=\"fa fa-chevron-up\"></i>\n        <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n        <button class=\"btn btn-default\" (click)=\"toast()\">asasasasasaasas</button>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>"

/***/ }),

/***/ "./src/app/Pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".centro {\n  width: 50%;\n  margin: auto;\n  text-align: center; }\n\n.Google {\n  background-color: #e0482f !important; }\n\n.red {\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/Pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_LoginSrv_login_srv_service__ = __webpack_require__("./src/app/Service/LoginSrv/login-srv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(LoginSrv, router, cacheSrv, afAuth) {
        //this.UsernameDisplay = 'teste123'
        this.LoginSrv = LoginSrv;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.LoginSrv.Login();
    };
    LoginComponent.prototype.logout = function () {
        this.LoginSrv.Logout();
    };
    LoginComponent.prototype.toast = function () {
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            position: 'center',
            type: 'error',
            title: 'asassaaa',
            toast: true,
            width: '100rem',
            showConfirmButton: true,
            customClass: 'red'
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/Pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/Pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Pages/magias/magias.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n    <nb-layout-header fixed>\n      <app-header style=\"width:100%\"></app-header>\n    </nb-layout-header>\n    <br>\n    <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\">\n      <nb-sidebar-header>\n      </nb-sidebar-header>\n      <app-menu></app-menu>\n    </nb-sidebar>\n  \n    <nb-layout-column>\n      <div class=\"angrytext\">\n        <nb-card class=\"\">\n          <nb-card-header style=\"text-align: center\">\n            <h1>Ainda em construção</h1>\n          </nb-card-header>\n          <nb-card-body>\n            <div style=\" text-align: start; \"></div>\n          </nb-card-body>\n          <nb-card-footer></nb-card-footer>\n        </nb-card>\n      </div>\n    </nb-layout-column>"

/***/ }),

/***/ "./src/app/Pages/magias/magias.component.scss":
/***/ (function(module, exports) {

module.exports = ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n"

/***/ }),

/***/ "./src/app/Pages/magias/magias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MagiasComponent = /** @class */ (function () {
    function MagiasComponent() {
    }
    MagiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-magias',
            template: __webpack_require__("./src/app/Pages/magias/magias.component.html"),
            styles: [__webpack_require__("./src/app/Pages/magias/magias.component.scss")]
        })
    ], MagiasComponent);
    return MagiasComponent;
}());



/***/ }),

/***/ "./src/app/Pages/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n    <nb-layout-header fixed>\r\n            <app-header style=\"width:100%\"></app-header>\r\n    </nb-layout-header>\r\n    <br>\r\n    <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\r\n        <nb-sidebar-header>\r\n        </nb-sidebar-header>\r\n        <app-menu></app-menu>\r\n    </nb-sidebar>\r\n    <nb-layout-column class=\"WrapItUp Mostrar\">\r\n           <nb-card class=\"Card99\" (click)=\"onClick(item)\" *ngFor=\"let item of DataBase1\">\r\n                <nb-card-header>{{item.nome}}</nb-card-header>\r\n                <nb-card-body>\r\n                    <div style=\" text-align: center; \">\r\n                        <img width=\"50%\" height=\"50%\" src=\"{{item.url_imagem}}\">\r\n                    </div>\r\n                </nb-card-body>\r\n                <nb-card-footer></nb-card-footer>\r\n            </nb-card>      \r\n    </nb-layout-column> \r\n</nb-layout>\r\n"

/***/ }),

/***/ "./src/app/Pages/noticias/noticias.component.scss":
/***/ (function(module, exports) {

module.exports = ".Mostrar {\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n\n.Card99 {\n  margin: 10px;\n  width: 20%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.Card99 nb-card-header {\n    text-align: center; }\n\n.WrapItUp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.okay {\n  text-align: center !important; }\n\n::ng-deep .swal2-popup .swal2-title {\n  color: white !important; }\n\n::ng-deep .swal2-popup #swal2-content {\n  color: white !important; }\n"

/***/ }),

/***/ "./src/app/Pages/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(router, cacheSrv, db) {
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.display = false;
        this.getNoticias1();
        //this.Omega = 'blue'
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent.prototype.ativar = function () {
        if (this.classe != null) {
            this.classe = null;
        }
        else {
            this.classe = 'Mostrar';
        }
    };
    NoticiasComponent.prototype.showDialog = function () {
        this.display = true;
    };
    NoticiasComponent.prototype.getNoticias1 = function () {
        var _this = this;
        this.db.list('MenuNotas').valueChanges()
            .subscribe(function (s) {
            _this.DataBase1 = s;
        });
    };
    NoticiasComponent.prototype.onClick = function (dado) {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: dado.nome,
            text: dado.observacao,
            imageUrl: dado.url_imagem,
            imageWidth: 200,
            imageHeight: 200,
            background: '#3d3780'
        });
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__("./src/app/Pages/noticias/noticias.component.html"),
            styles: [__webpack_require__("./src/app/Pages/noticias/noticias.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());

;


/***/ }),

/***/ "./src/app/Service/CacheSrv/cache-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CacheServiceService = /** @class */ (function () {
    function CacheServiceService() {
        this.UsuarioToken = null;
        this.TituloObj = { Grid: null };
        this.DatabaseObj = { Destino: null };
        // Observable string sources
        this.componentMethodCallSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    // Service message commands
    CacheServiceService.prototype.callComponentMethod = function () {
        this.componentMethodCallSource.next();
    };
    CacheServiceService.prototype.checkData = function (data) {
        if (data == undefined) {
            console.log('Fuck Yes!', data);
            return true;
        }
        else {
            console.log('Meeehhh', data);
            return false;
        }
    };
    CacheServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CacheServiceService);
    return CacheServiceService;
}());



/***/ }),

/***/ "./src/app/Service/LoginSrv/login-srv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSrvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginSrvService = /** @class */ (function () {
    function LoginSrvService(afAuth, router, cacheSrv, zone) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.zone = zone;
        this.Logado = false;
        this.usuario = { NameDisplay: null, ImageDisplay: null, Token: null };
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != null) {
                _this.user = afAuth.authState;
                _this.Logado = true;
            }
        });
    }
    LoginSrvService.prototype.Login = function () {
        var _this = this;
        this.ativar(true);
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (res) {
            _this.usuario.NameDisplay = res.user.displayName,
                _this.usuario.ImageDisplay = res.user.photoURL,
                _this.usuario.Token = res.user.uid;
            _this.genero = res.additionalUserInfo.profile.gender;
            sessionStorage.setItem('SetNameuser', _this.usuario.NameDisplay);
            sessionStorage.setItem('SetImageuser', _this.usuario.ImageDisplay);
            sessionStorage.setItem('SetTokenuser', _this.usuario.Token);
            _this.ativar(false);
        }).catch((function (err) { return _this.error; }));
    };
    LoginSrvService.prototype.Logout = function () {
        this.afAuth.auth.signOut();
        this.Logado = false;
        sessionStorage.removeItem('SetNameuser');
        sessionStorage.removeItem('SetImageuser');
        sessionStorage.removeItem('SetTokenuser');
        this.router.navigateByUrl('/home');
    };
    LoginSrvService.prototype.ativar = function (show) {
        if (show) {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                position: 'center',
                title: 'Entrando...',
                showConfirmButton: false,
                showCancelButton: false,
                allowEscapeKey: false,
                allowOutsideClick: false
            });
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.showLoading();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.hideLoading();
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a.close();
            this.redirect();
        }
    };
    LoginSrvService.prototype.redirect = function () {
        var _this = this;
        var text;
        if (this.genero == 'male') {
            text = 'Bem vindo ' + this.usuario.NameDisplay;
        }
        else {
            text = 'Bem vinda ' + this.usuario.NameDisplay;
        }
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            position: 'center',
            type: 'success',
            html: '<h1 style="color:#3f34b0">' + text + '</h1>',
            showConfirmButton: true,
            onClose: function () {
                _this.zone.run(function () {
                    _this.router.navigateByUrl('/home');
                });
            }
        });
    };
    LoginSrvService.prototype.error = function () {
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            position: 'center',
            type: 'error',
            title: 'Ops...',
            text: 'Algo deu errado durante o Login. Por favor, tente novamente',
            showConfirmButton: true
        });
    };
    LoginSrvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_0__CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], LoginSrvService);
    return LoginSrvService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_dragula_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Pages_home_home_component__ = __webpack_require__("./src/app/Pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Pages_noticias_noticias_component__ = __webpack_require__("./src/app/Pages/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Pages_login_login_component__ = __webpack_require__("./src/app/Pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Pages_ficha_ficha_component__ = __webpack_require__("./src/app/Pages/ficha/ficha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Pages_editar_fichas_editar_fichas_component__ = __webpack_require__("./src/app/Pages/editar-fichas/editar-fichas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Pages_criar_fichas_criar_fichas_component__ = __webpack_require__("./src/app/Pages/criar-fichas/criar-fichas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Pages_magias_magias_component__ = __webpack_require__("./src/app/Pages/magias/magias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Pages_clans_clans_component__ = __webpack_require__("./src/app/Pages/clans/clans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Components_grid_grid_component__ = __webpack_require__("./src/app/Components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Components_header_header_component__ = __webpack_require__("./src/app/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Components_buttons_buttons_component__ = __webpack_require__("./src/app/Components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Components_menu_menu_component__ = __webpack_require__("./src/app/Components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Service_CacheSrv_cache_service_service__ = __webpack_require__("./src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Service_LoginSrv_login_srv_service__ = __webpack_require__("./src/app/Service/LoginSrv/login-srv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Nebular



//PrimeNG
//AngularFire






//Modals
//Paginas








//Componentes




//Serviços




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                //Paginas
                __WEBPACK_IMPORTED_MODULE_13__Pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Pages_noticias_noticias_component__["a" /* NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Pages_ficha_ficha_component__["a" /* FichaComponent */],
                __WEBPACK_IMPORTED_MODULE_19__Pages_magias_magias_component__["a" /* MagiasComponent */],
                __WEBPACK_IMPORTED_MODULE_20__Pages_clans_clans_component__["a" /* ClansComponent */],
                //Componentes
                __WEBPACK_IMPORTED_MODULE_21__Components_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Components_buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__Components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Pages_criar_fichas_criar_fichas_component__["a" /* CriarFichasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Pages_editar_fichas_editar_fichas_component__["a" /* EditarFichasComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["a" /* NbActionsModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["d" /* NbLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbRouteTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbSearchModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["i" /* NbSidebarModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbThemeModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["n" /* NbUserModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_27__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbThemeModule */].forRoot({ name: 'cosmic' }),
                __WEBPACK_IMPORTED_MODULE_28__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD-PhVKAW9B9GJ1Zqb2ReV9ARAftvhziE4'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbSidebarService */],
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["i" /* NbSidebarModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbMenuModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_25__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */],
                __WEBPACK_IMPORTED_MODULE_26__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pages_home_home_component__ = __webpack_require__("./src/app/Pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pages_noticias_noticias_component__ = __webpack_require__("./src/app/Pages/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pages_login_login_component__ = __webpack_require__("./src/app/Pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pages_ficha_ficha_component__ = __webpack_require__("./src/app/Pages/ficha/ficha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pages_editar_fichas_editar_fichas_component__ = __webpack_require__("./src/app/Pages/editar-fichas/editar-fichas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pages_criar_fichas_criar_fichas_component__ = __webpack_require__("./src/app/Pages/criar-fichas/criar-fichas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_magias_magias_component__ = __webpack_require__("./src/app/Pages/magias/magias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Pages_clans_clans_component__ = __webpack_require__("./src/app/Pages/clans/clans.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Pages








var AppRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__Pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__Pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'noticias', component: __WEBPACK_IMPORTED_MODULE_3__Pages_noticias_noticias_component__["a" /* NoticiasComponent */] },
    { path: 'fichas', component: __WEBPACK_IMPORTED_MODULE_5__Pages_ficha_ficha_component__["a" /* FichaComponent */] },
    { path: 'criar_ficha', component: __WEBPACK_IMPORTED_MODULE_7__Pages_criar_fichas_criar_fichas_component__["a" /* CriarFichasComponent */] },
    { path: 'editar_ficha', component: __WEBPACK_IMPORTED_MODULE_6__Pages_editar_fichas_editar_fichas_component__["a" /* EditarFichasComponent */] },
    { path: 'Magias', component: __WEBPACK_IMPORTED_MODULE_8__Pages_magias_magias_component__["a" /* MagiasComponent */] },
    { path: 'Clans', component: __WEBPACK_IMPORTED_MODULE_9__Pages_clans_clans_component__["a" /* ClansComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(AppRoutes, { enableTracing: false })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD-PhVKAW9B9GJ1Zqb2ReV9ARAftvhziE4",
        authDomain: "argeondatabase.firebaseapp.com",
        databaseURL: "https://argeondatabase.firebaseio.com",
        projectId: "argeondatabase",
        storageBucket: "argeondatabase.appspot.com",
        messagingSenderId: "420999560331"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map