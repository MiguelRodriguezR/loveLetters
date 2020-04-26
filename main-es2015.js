(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");



class AppComponent {
    constructor() {
        this.title = 'love-letters';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/letter/letter.component */ "./src/app/components/letter/letter.component.ts");
/* harmony import */ var _components_animated_text_animated_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/animated-text/animated-text.component */ "./src/app/components/animated-text/animated-text.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_animated_text_animated_text_component__WEBPACK_IMPORTED_MODULE_5__["AnimatedTextComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_4__["LetterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_animated_text_animated_text_component__WEBPACK_IMPORTED_MODULE_5__["AnimatedTextComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_letter_letter_component__WEBPACK_IMPORTED_MODULE_4__["LetterComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/animated-text/animated-text.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/animated-text/animated-text.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnimatedTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedTextComponent", function() { return AnimatedTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["textContainer"];
class AnimatedTextComponent {
    constructor() {
        this.startAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.endAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.animation = this.animation ? this.animation : 'fade-in-up';
        this.timeDelay = this.timeDelay ? this.timeDelay : 20;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.setEnviroment();
    }
    setEnviroment() {
        this.separateText();
        this.eventStarter ? this.eventStarter.subscribe(() => { this.triggerAnimation(); }) : this.triggerAnimation();
    }
    triggerAnimation() {
        this.startAnimation.emit('started');
        this.actualChild = 0;
        this.interval = setInterval(() => { this.nextSpan(); }, this.timeDelay);
    }
    nextSpan() {
        let children = this.textContainer.nativeElement.children;
        children[this.actualChild].classList.remove('initial-' + this.animation);
        children[this.actualChild].classList.add(this.animation);
        this.actualChild += 1;
        if (this.actualChild == children.length) {
            clearInterval(this.interval);
            this.endAnimation.emit('ended');
        }
    }
    separateText() {
        let textArray = this.text.split('');
        textArray.forEach(el => {
            this.textContainer.nativeElement.insertAdjacentHTML('beforeend', el != ' ' ? '<span class=" text initial-' + this.animation + '">' + el + '</span>' : '<span> </span>');
        });
    }
}
AnimatedTextComponent.ɵfac = function AnimatedTextComponent_Factory(t) { return new (t || AnimatedTextComponent)(); };
AnimatedTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimatedTextComponent, selectors: [["app-animated-text"]], viewQuery: function AnimatedTextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textContainer = _t.first);
    } }, inputs: { text: "text", animation: "animation", initialClass: "initialClass", timeDelay: "timeDelay", eventStarter: "eventStarter" }, outputs: { startAnimation: "startAnimation", endAnimation: "endAnimation" }, decls: 2, vars: 0, consts: [["textContainer", ""]], template: function AnimatedTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", null, 0);
    } }, styles: [".text {\n  transition: all 0.5s;\n  display: inline-block;\n}\n\n.initial-fade-in {\n  opacity: 0;\n}\n\n.initial-fade-in-up {\n  opacity: 0;\n  transform: translateY(10px);\n}\n\n.fade-in {\n  opacity: 1;\n}\n\n.fade-in-up {\n  opacity: 1;\n  transform: translateY(0px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmltYXRlZC10ZXh0L0M6XFxwZXJzb25hbFxcbG92ZSBsZXR0ZXJzXFxmcm9udFxcbG92ZUxldHRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFuaW1hdGVkLXRleHRcXGFuaW1hdGVkLXRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0ZWQtdGV4dC9hbmltYXRlZC10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRE1BO0VBQ0UsVUFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FDSEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0ZWQtdGV4dC9hbmltYXRlZC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGV4dHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8vSU5JVElBTFxyXG5cclxuLmluaXRpYWwtZmFkZS1pbntcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaW5pdGlhbC1mYWRlLWluLXVwe1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG59XHJcblxyXG4vL0FOSU1BVElPTlNcclxuXHJcbi5mYWRlLWlue1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mYWRlLWluLXVwe1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbn1cclxuIiwiLnRleHQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5pdGlhbC1mYWRlLWluIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmluaXRpYWwtZmFkZS1pbi11cCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbn1cblxuLmZhZGUtaW4ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmFkZS1pbi11cCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-animated-text',
                templateUrl: './animated-text.component.html',
                styleUrls: ['./animated-text.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], eventStarter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], endAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['textContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/components/letter/letter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/letter/letter.component.ts ***!
  \*******************************************************/
/*! exports provided: LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const */ "./src/app/const.ts");
/* harmony import */ var _services_letter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/letter.service */ "./src/app/services/letter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _animated_text_animated_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animated-text/animated-text.component */ "./src/app/components/animated-text/animated-text.component.ts");






function LetterComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-animated-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventStarter", _r4.endAnimation)("text", "PostData: " + ctx_r5._letterService.letter.postdata);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function LetterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-animated-text", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-animated-text", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-animated-text", 7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-animated-text", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LetterComponent_div_0_div_13_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.actualFont, ctx_r0.actualBorder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r0._letterService.letter.greetings + " " + ctx_r0._letterService.letter.flattery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventStarter", _r1.endAnimation)("text", ctx_r0._letterService.letter.subject + " " + ctx_r0._letterService.letter.formatedBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventStarter", _r2.endAnimation)("text", ctx_r0._letterService.letter.farewell);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventStarter", _r3.endAnimation)("text", "Att: Miguel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.postdataOk);
} }
class LetterComponent {
    constructor(letterService) {
        this.letterService = letterService;
        this.init();
    }
    ngOnInit() {
    }
    init() {
        this.postdataOk = this.letterService.getRandom(0, 1) < 0.3;
        this.setRandomFont();
        this.setRandomBorder();
    }
    setRandomBorder() {
        this.actualBorder = _const__WEBPACK_IMPORTED_MODULE_1__["BORDERS"][Math.floor(this.letterService.getRandom(0, _const__WEBPACK_IMPORTED_MODULE_1__["BORDERS"].length))];
    }
    setRandomFont() {
        this.actualFont = _const__WEBPACK_IMPORTED_MODULE_1__["FONTS"][Math.floor(this.letterService.getRandom(0, _const__WEBPACK_IMPORTED_MODULE_1__["FONTS"].length))];
    }
    get _letterService() {
        return this.letterService;
    }
}
LetterComponent.ɵfac = function LetterComponent_Factory(t) { return new (t || LetterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_letter_service__WEBPACK_IMPORTED_MODULE_2__["LetterService"])); };
LetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetterComponent, selectors: [["app-letter"]], decls: 1, vars: 1, consts: [["class", "card-container", 4, "ngIf"], [1, "card-container"], [1, "card", "white", 3, "ngClass"], [1, "top-letter", "continue"], [3, "text"], ["t1", ""], [1, "body", "continue"], [3, "eventStarter", "text"], ["t2", ""], [1, "end", "continue"], ["t3", ""], [1, "big", 3, "eventStarter", "text"], ["t4", ""], ["class", "postData", 4, "ngIf"], [1, "postData"]], template: function LetterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LetterComponent_div_0_Template, 14, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._letterService.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _animated_text_animated_text_component__WEBPACK_IMPORTED_MODULE_4__["AnimatedTextComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 80vw;\n  height: 80vh;\n  font-size: 0.8em;\n  font-weight: lighter;\n  overflow: scroll;\n}\n\n.white[_ngcontent-%COMP%] {\n  background: repeating-linear-gradient(to right, #e6e6e6 0px, #e6e6e6 1px, transparent 0px, transparent 20px), repeating-linear-gradient(to bottom, #e6e6e6 0px, #e6e6e6 1px, transparent 0px, transparent 20px), white;\n}\n\n.continue[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.big[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 1.3em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXR0ZXIvQzpcXHBlcnNvbmFsXFxsb3ZlIGxldHRlcnNcXGZyb250XFxsb3ZlTGV0dGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGV0dGVyXFxsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGV0dGVyL2xldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBO0VBQ0Usc05BQUE7QUNBRjs7QURpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNkRjs7QURpQkE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xldHRlci9sZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogODB2aDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG59XHJcblxyXG4ud2hpdGV7XHJcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgIGhzbCgwLCAwJSwgOTAlKSAwcHgsXHJcbiAgICAgIGhzbCgwLCAwJSwgOTAlKSAxcHgsXHJcbiAgICAgIHRyYW5zcGFyZW50IDBweCxcclxuICAgICAgdHJhbnNwYXJlbnQgMjBweFxyXG4gICksXHJcbiAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICBoc2woMCwgMCUsIDkwJSkgMHB4LFxyXG4gICAgICBoc2woMCwgMCUsIDkwJSkgMXB4LFxyXG4gICAgICB0cmFuc3BhcmVudCAwcHgsXHJcbiAgICAgIHRyYW5zcGFyZW50IDIwcHhcclxuICApLFxyXG4gIGhzbCgwLCAwJSwgMTAwJSk7XHJcbn1cclxuXHJcbi5jb250aW51ZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJpZ3tcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiA4MHZoO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLndoaXRlIHtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U2ZTZlNiAwcHgsICNlNmU2ZTYgMXB4LCB0cmFuc3BhcmVudCAwcHgsIHRyYW5zcGFyZW50IDIwcHgpLCByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U2ZTZlNiAwcHgsICNlNmU2ZTYgMXB4LCB0cmFuc3BhcmVudCAwcHgsIHRyYW5zcGFyZW50IDIwcHgpLCB3aGl0ZTtcbn1cblxuLmNvbnRpbnVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5iaWcge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-letter',
                templateUrl: './letter.component.html',
                styleUrls: ['./letter.component.scss']
            }]
    }], function () { return [{ type: _services_letter_service__WEBPACK_IMPORTED_MODULE_2__["LetterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _letter_letter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../letter/letter.component */ "./src/app/components/letter/letter.component.ts");
/* harmony import */ var _services_letter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/letter.service */ "./src/app/services/letter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generando Carta...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.createLetter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crear otra carta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(letterService) {
        this.letterService = letterService;
    }
    ngOnInit() {
        this.letterService.setNewLetter();
    }
    get _letterService() {
        return this.letterService;
    }
    createLetter() {
        this.letter.init();
        this.letterService.setNewLetter();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_letter_service__WEBPACK_IMPORTED_MODULE_2__["LetterService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_letter_letter_component__WEBPACK_IMPORTED_MODULE_1__["LetterComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.letter = _t.first);
    } }, decls: 4, vars: 2, consts: [[1, "big-container"], ["class", "cargando", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "cargando"], [3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._letterService.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._letterService.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _letter_letter_component__WEBPACK_IMPORTED_MODULE_1__["LetterComponent"]], styles: [".big-container[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 95vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  font-size: 1.1em;\n  margin-top: 10px;\n  background-color: white;\n  border: 5px solid darkslategrey;\n  color: darkslategray;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxwZXJzb25hbFxcbG92ZSBsZXR0ZXJzXFxmcm9udFxcbG92ZUxldHRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZy1jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgZGFya3NsYXRlZ3JleTtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiIsIi5iaWctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBzb2xpZCBkYXJrc2xhdGVncmV5O1xuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_letter_service__WEBPACK_IMPORTED_MODULE_2__["LetterService"] }]; }, { letter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_letter_letter_component__WEBPACK_IMPORTED_MODULE_1__["LetterComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/const.ts":
/*!**************************!*\
  !*** ./src/app/const.ts ***!
  \**************************/
/*! exports provided: API, PERCENTAGE_CONNECTOR, FONTS, BORDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERCENTAGE_CONNECTOR", function() { return PERCENTAGE_CONNECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDERS", function() { return BORDERS; });
const API = 'https://us-central1-love-letters-69ad4.cloudfunctions.net/';
const PERCENTAGE_CONNECTOR = 0.2;
const FONTS = ['roboto', 'Amatic', 'Caveat', 'Satisfy', 'Manrope', 'Shadows', 'Indie', 'Pacifico', 'Josefin', 'Libre', 'Dosis', 'Inconsolata', 'Raleway', 'Baloo', 'Comic', 'Oswald'];
const BORDERS = ['gold', 'paw', 'hearts', 'blu'];


/***/ }),

/***/ "./src/app/entities/Letter.ts":
/*!************************************!*\
  !*** ./src/app/entities/Letter.ts ***!
  \************************************/
/*! exports provided: Letter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Letter", function() { return Letter; });
class Letter {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/services/letter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/letter.service.ts ***!
  \********************************************/
/*! exports provided: LetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterService", function() { return LetterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _entities_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Letter */ "./src/app/entities/Letter.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class LetterService {
    constructor(http) {
        this.http = http;
        this.isLoading = true;
        this.error = null;
        this.letter = new _entities_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]();
    }
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    setFormatedBody() {
        let body = "";
        this.letter.bodies.forEach((b, i) => {
            const randomConnector = this.getRandom(0, 1);
            const posConnector = Math.floor(this.getRandom(0, this.letter.connectors.length));
            body += b;
            body += i == this.letter.bodies.length - 1 ?
                '.' : randomConnector <= _const__WEBPACK_IMPORTED_MODULE_2__["PERCENTAGE_CONNECTOR"] ?
                ' ' + this.letter.connectors.splice(posConnector, 1)[0] + ' ' : ', ';
        });
        this.letter.formatedBody = body;
    }
    setNewLetter() {
        this.isLoading = true;
        this.getLetter().subscribe(nl => {
            console.log(nl);
            Object.assign(this.letter, nl);
            this.setFormatedBody();
        }, error => this.error = error, () => {
            this.isLoading = false;
        });
    }
    getLetter() {
        return this.http.get(`${_const__WEBPACK_IMPORTED_MODULE_2__["API"]}getletter`);
    }
}
LetterService.ɵfac = function LetterService_Factory(t) { return new (t || LetterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LetterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LetterService, factory: LetterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\personal\love letters\front\loveLetters\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map