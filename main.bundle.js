webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <!--     <nb-card-header></nb-card-header> -->\n  <nb-card-body style=\" margin: auto; \">\n    <div class=\"row\">\n      <div class=\"example-container\" *ngFor=\"let hb of settings\">\n        <div class=\"container-btn\" style=\"padding-right: 7px !important;\">\n          <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\">{{ hb.NameButton }}</button>\n        </div>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n  :host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-default) .shadow {\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n\n:host-context(.nb-theme-default) .primary-container .glow {\n  box-shadow: 0 0 0 0 #9f7fff; }\n\n:host-context(.nb-theme-default) .primary-container .bevel {\n  box-shadow: 0 0 0 0 #896ddb; }\n\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-default) .warning-container .glow {\n  box-shadow: 0 0 0 0 #ffb600; }\n\n:host-context(.nb-theme-default) .warning-container .bevel {\n  box-shadow: 0 0 0 0 #db9d00; }\n\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n\n:host-context(.nb-theme-default) .success-container .glow {\n  box-shadow: 0 0 0 0 #40dc98; }\n\n:host-context(.nb-theme-default) .success-container .bevel {\n  box-shadow: 0 0 0 0 #37bd83; }\n\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n\n:host-context(.nb-theme-default) .info-container .glow {\n  box-shadow: 0 0 0 0 #4cb5ff; }\n\n:host-context(.nb-theme-default) .info-container .bevel {\n  box-shadow: 0 0 0 0 #419cdb; }\n\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n\n:host-context(.nb-theme-default) .danger-container .glow {\n  box-shadow: 0 0 0 0 #ff4c88; }\n\n:host-context(.nb-theme-default) .danger-container .bevel {\n  box-shadow: 0 0 0 0 #db4175; }\n\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .glow {\n  box-shadow: 0 0 0 0 #dadde6; }\n\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  box-shadow: 0 0 0 0 #bbbec6; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n  :host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-cosmic) .shadow {\n  box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  box-shadow: 0 2px 8px 0 #ffb600; }\n\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  box-shadow: 0 3px 0 0 #db9d00; }\n\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  box-shadow: 0 2px 8px 0 #00d99b; }\n\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  box-shadow: 0 3px 0 0 #00bb85; }\n\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  box-shadow: 0 2px 8px 0 #009dff; }\n\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  box-shadow: 0 3px 0 0 #0087db; }\n\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  box-shadow: 0 2px 8px 0 #ff388b; }\n\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  box-shadow: 0 3px 0 0 #db3078; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/Components/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"angrytext\">\n  <nb-card-header>\n    {{titulo}}\n  </nb-card-header>\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"menuItems\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
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
    //settings = {actions: {add: false,edit: false,delete: false }, columns: {}};
    // settings = {actions: {add: false,edit: false,delete: false }, columns: {}};
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
            }
        };
        this.execute = false;
        this.titulo = 'Escolha uma Grid';
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: {} };
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
            console.log(_this.settings);
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
            console.log(this.destino);
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
        this.settings = { actions: { add: false, edit: false, delete: false }, columns: this.ColunaExibida };
    };
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grid',
            template: __webpack_require__("../../../../../src/app/Components/grid/grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <div class=\"logo-containter\">\n    <div class=\"logo\" (click)=\"goToHome()\">Argeon - WebApp</div>\n  </div>\n  <nb-search type=\"rotate-layout\" tag=\"rotate-layout\"></nb-search>\n  <div *ngIf=\"Logado\">\n\n    Bem vindo Senhor\n  </div>\n  <div *ngIf=\"!Logado\">\n    Por favor, execute o Login\n    <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n  </div>\n\n\n\n  <nb-actions size=\"medium\" class=\"header-container\" style=\" justify-content: flex-end;\" *ngIf=\"Logado\">\n\n    <nb-action>\n      <nb-user [name]=\"UsernameDisplay\" [picture]=\"AvatarDisplay\"></nb-user>\n    </nb-action>\n    <nb-action icon=\"nb-grid-b\" class=\"toggle-layout\"></nb-action>\n    <nb-action class=\"control-item\" icon=\"nb-email\"></nb-action>\n  </nb-actions>\n\n  <nb-actions size=\"medium\" class=\"header-container\" style=\" justify-content: flex-end;\" *ngIf=\"!Logado\">\n    <nb-action class=\"control-item\" icon=\"fa fa-chevron-up\"></nb-action>\n    <nb-action>\n        <button class=\"btn btn-primary\" (click)=\"GoToLogin()\" *ngIf=\"!Show\"><i class=\"fa fa-2x fa-chevron-up {{Rotate}}\"></i>Login</button>\n  </nb-action>\n  </nb-actions>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .header-container .navigation {\n    padding-right: nb-theme(padding);\n    font-size: 2.5rem;\n    text-decoration: none; }\n    .header-container .navigation i {\n      display: block; }\n  .header-container .logo {\n    padding: 0 nb-theme(padding);\n    font-size: 1.75rem;\n    font-weight: nb-theme(font-weight-bolder);\n    border-left: 1px solid nb-theme(separator);\n    white-space: nowrap; }\n    .header-container .logo span {\n      font-weight: nb-theme(font-weight-normal); }\n\n.RotateToLogin {\n  -webkit-animation-name: RotateToLogin;\n  -webkit-animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 10;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: RotateToLogin;\n  animation-duration: 0.3s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-iteration-count: 10;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes RotateToLogin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes RotateToLogin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Service_LoginSrv_login_srv_service__ = __webpack_require__("../../../../../src/app/Service/LoginSrv/login-srv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function HeaderComponent(router, afAuth, LoginSrv) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.LoginSrv = LoginSrv;
        this.Logado = false;
        //this.UsernameDisplay = 'Iago Favilla'
        this.AvatarDisplay = sessionStorage.getItem('SetImageuser');
        this.UsernameDisplay = sessionStorage.getItem('SetNameuser');
        this.Login = 'OMEGA';
        this.Rotate = null;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != null) {
                _this.user = afAuth.authState;
                _this.Logado = true;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.GoToLogin = function () {
        var _this = this;
        this.Rotate = 'RotateToLogin';
        setTimeout(function () {
            _this.router.navigateByUrl('/login');
            _this.Show = false;
        }, 3000);
    };
    HeaderComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('/home');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/Components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <div class=\"example-container\" *ngFor=\"let hb of settings\">\n    <div class=\"container-btn\">\n      <button class=\"btn {{ hb.class }} btn-demo\" (click)=\"Gerar(hb)\" style=\"padding:10px; width:100%\">\n        <i class=\"nb-home\"></i>{{ hb.NameButton }}</button>\n    </div>\n  </div>\n</ul>\n<nb-menu (click)=\"Ativar()\" [items]=\"menu\"></nb-menu>"

/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-item::before {\n  box-shadow: 0 21px 19px 0 rgba(0, 0, 0, 0.75);\n  border-style: solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
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
    function MenuComponent(router, themeService, cacheSrv) {
        var _this = this;
        this.router = router;
        this.themeService = themeService;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.menu = [
            {
                title: 'Home',
                icon: 'nb-home',
            },
            {
                title: 'Noticias',
                icon: 'nb-gear',
            }
        ];
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
            //this.layoutState$ = this.stateService.onLayoutState()
            // .subscribe((layout: string) => this.layout = layout);
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
    MenuComponent.prototype.Gerar = function (Botao) {
        var _this = this;
        setTimeout(function () {
            _this.router.navigateByUrl(Botao.Destino);
        }, 30);
    };
    MenuComponent.prototype.Ativar = function () {
        //this.router.navigateByUrl('home')
        this.teste = sessionStorage.getItem('Omega');
        console.log('VINDO DO SESSION!!!', this.teste);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/Components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_3__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n  <br>\n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n    <nb-sidebar-header>\n    </nb-sidebar-header>\n    <app-menu></app-menu>\n  </nb-sidebar>\n\n  <nb-layout-column>\n    <div class=\"angrytext\">\n      <app-buttons></app-buttons>\n    </div>\n    <app-grid></app-grid>\n\n\n  </nb-layout-column>\n</nb-layout>"

/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n\nnb-sidebar.menu-sidebar {\n  margin-top: nb-theme(sidebar-header-gap);\n  background: transparent; }\n  nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(nb-theme(sidebar-height) - nb-theme(header-height) - nb-theme(sidebar-header-gap)) !important;\n    border-top-right-radius: nb-theme(radius); }\n  nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    nb-sidebar.menu-sidebar .main-btn i,\n    nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n.angrytext {\n  font-size: 70px;\n  font-weight: bold;\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 3s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
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
    function HomeComponent(db, router, themeService, cacheSrv) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.themeService = themeService;
        this.cacheSrv = cacheSrv;
        this.themeName = 'cosmic';
        this.layout = {};
        // this.cacheSrv.TituloObj.Grid = 'Reinos'
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/Pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["l" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_4__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-header fixed>\n    <app-header style=\"width:100%\"></app-header>\n  </nb-layout-header>\n  <nb-layout-column>\n    <nb-card class=\"centro\">\n      <nb-card-header>\n        <h1>Login</h1>\n      </nb-card-header>\n      <nb-card-body>\n        <button class=\"btn btn-primary\" (click)=\"login()\">\n          <i class=\"socicon-google\"></i> Login With Google\n        </button>\n        <i class=\"fa fa-chevron-up\"></i>\n        <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n        <button class=\"btn btn-default\">{{Username_NameDisplay }}</button>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>"

/***/ }),

/***/ "../../../../../src/app/Pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centro {\n  width: 50%;\n  margin: auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_LoginSrv_login_srv_service__ = __webpack_require__("../../../../../src/app/Service/LoginSrv/login-srv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/Pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n    <nb-layout-header fixed>\r\n            <app-header style=\"width:100%\"></app-header>\r\n    </nb-layout-header>\r\n    <br>\r\n    <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\r\n        <nb-sidebar-header>\r\n        </nb-sidebar-header>\r\n        <app-menu></app-menu>\r\n    </nb-sidebar>\r\n    <nb-layout-column class=\"WrapItUp Mostrar\"> \r\n        <nb-card class=\"Card99\" (click)=\"onClick(item)\" *ngFor=\"let item of DataBase1\">\r\n            <nb-card-header>{{item.nome}}</nb-card-header>\r\n            <nb-card-body>\r\n                <div style=\" text-align: center; \">\r\n                    <img width=\"50%\" height=\"50%\" src=\"{{item.url_imagem}}\">\r\n                </div>\r\n            </nb-card-body>\r\n            <nb-card-footer></nb-card-footer>\r\n        </nb-card>\r\n    </nb-layout-column>\r\n</nb-layout>"

/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Mostrar {\n  -webkit-animation-name: bounce-in;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: ease;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n  -webkit-animation-fill-mode: none;\n  animation-name: bounce-in;\n  animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: 1;\n  animation-direction: normal;\n  animation-fill-mode: none; }\n\n@-webkit-keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n    transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9); } }\n\n@keyframes bounce-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  51% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  70% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n\n.Card99 {\n  margin: 10px;\n  width: 20%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .Card99 nb-card-header {\n    text-align: center; }\n\n.WrapItUp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
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
    function NoticiasComponent(router, cacheSrv, db, modal) {
        this.router = router;
        this.cacheSrv = cacheSrv;
        this.db = db;
        this.modal = modal;
        this.getNoticias1();
        this.Omega = 'blue';
        // this.Set_envio = db.list('https://argeon-337.firebaseio.com/Fichas de Usuario');
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
    NoticiasComponent.prototype.getNoticias1 = function () {
        var _this = this;
        this.db.list('Grimorio').valueChanges()
            .subscribe(function (s) {
            _this.DataBase1 = s;
        });
    };
    NoticiasComponent.prototype.onClick = function (dado) {
        console.log(dado);
        this.modal.alert()
            .title(dado.nome)
            .body("\n      <div>\n      {{dado.nome}}\n     <img width=\"100vh\" height=\"200vh\" src=\"" + dado.url_imagem + "\">\n      </div>\n    ")
            .open();
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-noticias',
            template: __webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ngx_modialog_plugins_bootstrap__["b" /* Modal */]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/Service/CacheSrv/cache-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
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
        this.UsuarioObj = { username: null };
        this.DatabaseObj = { Destino: null, Executar: null };
        this.TituloObj = { Grid: null, notification: null };
        // Observable string sources
        this.componentMethodCallSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    // Service message commands
    CacheServiceService.prototype.callComponentMethod = function () {
        this.componentMethodCallSource.next();
    };
    CacheServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CacheServiceService);
    return CacheServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/LoginSrv/login-srv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSrvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginSrvService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
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
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
        console.log(this.afAuth);
        this.Logado = true;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.usuario.NameDisplay = user.displayName,
                    _this.usuario.ImageDisplay = user.photoURL,
                    _this.usuario.Token = user.uid;
            console.log(user);
        });
        setTimeout(function () {
            sessionStorage.setItem('SetNameuser', _this.usuario.NameDisplay);
            sessionStorage.setItem('SetImageuser', _this.usuario.ImageDisplay);
            sessionStorage.setItem('SetImageuser', _this.usuario.Token);
            _this.router.navigateByUrl('/home');
            console.log(sessionStorage.setItem('SetImageuser', _this.usuario.ImageDisplay));
        }, 6000);
    };
    LoginSrvService.prototype.Logout = function () {
        this.afAuth.auth.signOut();
        this.Logado = false;
        sessionStorage.removeItem('SetNameuser');
        sessionStorage.removeItem('SetImageuser');
    };
    LoginSrvService.prototype.SetNameuser = function (Usuario) {
        console.log('Sendo ativado com sucesso', Usuario);
        this.Username = Usuario;
    };
    LoginSrvService.prototype.SetImageuser = function (imagem) {
        this.Avatar = imagem;
    };
    LoginSrvService.prototype.GetUsername = function () {
        console.log('Função GetUsername ', this.Username);
        return this.Username;
    };
    LoginSrvService.prototype.GetImageuser = function () {
        return this.Avatar;
    };
    LoginSrvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], LoginSrvService);
    return LoginSrvService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Pages_home_home_component__ = __webpack_require__("../../../../../src/app/Pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Pages_noticias_noticias_component__ = __webpack_require__("../../../../../src/app/Pages/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Pages_login_login_component__ = __webpack_require__("../../../../../src/app/Pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_grid_grid_component__ = __webpack_require__("../../../../../src/app/Components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_header_header_component__ = __webpack_require__("../../../../../src/app/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/Components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Components_menu_menu_component__ = __webpack_require__("../../../../../src/app/Components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Service_CacheSrv_cache_service_service__ = __webpack_require__("../../../../../src/app/Service/CacheSrv/cache-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Service_LoginSrv_login_srv_service__ = __webpack_require__("../../../../../src/app/Service/LoginSrv/login-srv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Nebular


//AngularFire






//Modals


Object(__WEBPACK_IMPORTED_MODULE_12_ngx_modialog_plugins_bootstrap__["c" /* bootstrap4Mode */])();
//Paginas



//Componentes




//Serviços


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                //Paginas
                __WEBPACK_IMPORTED_MODULE_13__Pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Pages_noticias_noticias_component__["a" /* NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__Pages_login_login_component__["a" /* LoginComponent */],
                //Componentes
                __WEBPACK_IMPORTED_MODULE_16__Components_grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Components_buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__Components_menu_menu_component__["a" /* MenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["a" /* NbActionsModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["b" /* NbCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["d" /* NbLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["f" /* NbRouteTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["g" /* NbSearchModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["j" /* NbTabsetModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["k" /* NbThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["m" /* NbUserModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["c" /* NbCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_modialog__["e" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_modialog_plugins_bootstrap__["a" /* BootstrapModalModule */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["k" /* NbThemeModule */].forRoot({ name: 'cosmic' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    {
                        path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__Pages_login_login_component__["a" /* LoginComponent */], data: {
                            breadcrumbs: true,
                            text: 'Login'
                        }
                    },
                    {
                        path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__Pages_home_home_component__["a" /* HomeComponent */], data: {
                            breadcrumbs: true,
                            text: 'Home'
                        }
                    },
                    {
                        path: 'noticias', component: __WEBPACK_IMPORTED_MODULE_14__Pages_noticias_noticias_component__["a" /* NoticiasComponent */], data: {
                            breadcrumbs: true,
                            text: 'Noticias'
                        }
                    }
                ]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__nebular_theme__["i" /* NbSidebarService */],
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["h" /* NbSidebarModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_3__nebular_theme__["e" /* NbMenuModule */].forRoot().providers,
                __WEBPACK_IMPORTED_MODULE_20__Service_CacheSrv_cache_service_service__["a" /* CacheServiceService */],
                __WEBPACK_IMPORTED_MODULE_21__Service_LoginSrv_login_srv_service__["a" /* LoginSrvService */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
        apiKey: "AIzaSyDu9y3kh_aAahRtg-VEpTo7Dwf7GePl9wY",
        authDomain: "argeon-337.firebaseapp.com",
        databaseURL: "https://argeon-337.firebaseio.com",
        projectId: "argeon-337",
        storageBucket: "argeon-337.appspot.com",
        messagingSenderId: "330505559945"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map