(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\designathon\design-proj\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movies */ "P/Vd");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../message.service */ "OdHV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





class HomeComponent {
    constructor(message) {
        this.message = message;
        this.all_movies = Object.keys(_shared_movies__WEBPACK_IMPORTED_MODULE_1__["movies"]);
        this.featured = ["Batman v Superman: Dawn of Justice", "Avatar", "Guardians of the Galaxy", "The Amazing Spider-Man 2", "Man of Steel", "Interstellar"];
        this.featured_data = [];
        this.featured_data = this.featured.map(val => {
            var details = [_shared_movies__WEBPACK_IMPORTED_MODULE_1__["movies"][val]];
            details[0][9] = val;
            return details[0];
        });
    }
    clicked(val) {
        this.message.sendMessage(this.featured[val]);
    }
    loadmovie0() {
        const ele = document.getElementsByClassName('bvs');
        const ele1 = document.getElementsByClassName('fir');
        Array.from(ele1).forEach((val) => {
            setTimeout(() => {
                val.classList.add('popper');
            }, 400);
        });
        var i = 0;
        Array.from(ele).forEach((val) => {
            i += 1;
            setTimeout(() => {
                val.classList.add('pop');
            }, 400);
        });
    }
    ngOnInit() {
        this.loadmovie0();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 112, vars: 48, consts: [[1, "home"], [1, "fir"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-around stretch", "fxLayoutGap.lt-sm", "8", 1, "holder"], ["fxFlex", "30", 1, "card-movie", "bvs", "bvs1", 2, "border-radius", "4px", 3, "click"], [2, "text-align", "right"], [2, "color", "yellow"], ["fxFlex", "30", 1, "card-movie", "bvs", "avatar", 2, "border-radius", "4px", 3, "click"], ["fxFlex", "30", 1, "card-movie", "bvs", "mos", 2, "border-radius", "4px", 3, "click"], ["fxFlex", "30", 1, "card-movie", "bvs", "gog", 2, "border-radius", "4px", 3, "click"], ["fxFlex", "30", 1, "card-movie", "bvs", "spider", 2, "border-radius", "4px", 3, "click"], ["fxFlex", "30", 1, "card-movie", "bvs", "interstellar", 2, "border-radius", "4px", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_4_listener() { return ctx.clicked(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_22_listener() { return ctx.clicked(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_40_listener() { return ctx.clicked(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_59_listener() { return ctx.clicked(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_77_listener() { return ctx.clicked(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_95_listener() { return ctx.clicked(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[0][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[0][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[0][2], ",", ctx.featured_data[0][3], ",", ctx.featured_data[0][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[0][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[0][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[0][1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[1][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[1][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[1][2], ",", ctx.featured_data[1][3], ",", ctx.featured_data[1][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[1][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[1][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[1][1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[4][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[4][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[4][2], ",", ctx.featured_data[4][3], ",", ctx.featured_data[4][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[4][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[4][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[4][1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[2][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[2][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[2][2], ",", ctx.featured_data[2][3], ",", ctx.featured_data[2][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[2][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[2][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[2][1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[3][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[3][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[3][2], ",", ctx.featured_data[3][3], ",", ctx.featured_data[3][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[3][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[3][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[3][1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[5][9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx.featured_data[5][0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx.featured_data[5][2], ",", ctx.featured_data[5][3], ",", ctx.featured_data[5][4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featured_data[5][6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx.featured_data[5][8], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx.featured_data[5][1], "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".home[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding-top: 20px;\n  padding-bottom: 4%;\n}\n\n.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 900;\n  letter-spacing: 2px;\n  font-weight: bolder;\n  font-family: \"magiera_font\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.holder[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-movie[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  border: 2px solid #f1f1ef;\n  border-radius: 2%;\n  margin-right: 4px;\n  padding: 10px;\n  background-color: #fcfaee;\n  transform: translateY(10px);\n  color: #1b1717;\n  transition: all 0.5s ease-in-out;\n  box-shadow: 10px 10px 14px 1px rgba(255, 220, 220, 0.2);\n}\n\n.card-movie[_ngcontent-%COMP%]:hover {\n  background-color: #fdffef;\n  transform: translateY(0px);\n  transform: scale(1.01);\n  box-shadow: none;\n}\n\n.card-movie[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  border-bottom: solid 4px #f5ca0a;\n  transform: scaleX(0.8);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"Antique-font\", cursive;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Antique-font\", cursive;\n}\n\n.bvs[_ngcontent-%COMP%]::before {\n  background-image: url('batman.jpg');\n  background-size: cover;\n  background-position: center;\n  transition: all 0.5s;\n  position: absolute;\n  content: \"\";\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  text-shadow: 1px 2px 0px black;\n  opacity: 0.9;\n}\n\n.avatar[_ngcontent-%COMP%]::before {\n  background-image: url('avatar.jpg');\n}\n\n.gog[_ngcontent-%COMP%]::before {\n  background-image: url('gog.jpg');\n}\n\n.spider[_ngcontent-%COMP%]::before {\n  background-image: url('spider.jpg');\n}\n\n.interstellar[_ngcontent-%COMP%]::before {\n  background-image: url('interstellar.jpg');\n}\n\n.mos[_ngcontent-%COMP%]::before {\n  background-image: url('superman.jpg');\n  opacity: 0.8;\n}\n\n.bvs[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 1px 2px 0px black;\n  transition: all 0.7s;\n  visibility: hidden;\n}\n\n.bvs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bvs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bvs[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bvs1[_ngcontent-%COMP%] {\n  transform: translate3d(78%, 50%, 0px);\n  transform: scale(0);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  transform: translate3d(-78%, 50%, 0px);\n  transform: scale(0);\n}\n\n.gog[_ngcontent-%COMP%] {\n  transform: translate3d(78%, -50%, 0px);\n  transform: scale(0);\n}\n\n.spider[_ngcontent-%COMP%] {\n  transform: translate3d(-78%, -50%, 0px);\n  transform: scale(0);\n}\n\n.interstellar[_ngcontent-%COMP%] {\n  transform: translate3d(-78%, 50%, 0px);\n  transform: scale(0);\n}\n\n.mos[_ngcontent-%COMP%] {\n  transform: translate3d(-78%, -50%, 0px);\n  transform: scale(0);\n}\n\nh1[_ngcontent-%COMP%] {\n  transition: all 1s ease;\n}\n\n.fir[_ngcontent-%COMP%] {\n  transition: all 1s;\n  transform: translate3d(-78%, 0%, 0px);\n}\n\n.popper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.pop[_ngcontent-%COMP%] {\n  visibility: visible;\n  transform: translate3d(0px, 0px, 0px);\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnRUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVEQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxvQ0FBQTtBQU9GOztBQUxBO0VBQ0Usb0NBQUE7QUFRRjs7QUFOQTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQVNGOztBQVBBO0VBQ0UsbUNBQUE7QUFVRjs7QUFSQTtFQUNFLGdDQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQ0FBQTtBQVlGOztBQVZBO0VBQ0UseUNBQUE7QUFhRjs7QUFYQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtBQWNGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWVGOztBQVpBO0VBQ0Usa0JBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7QUFpQkY7O0FBZkE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0FBa0JGOztBQWhCQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFtQkY7O0FBakJBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0FBcUJGOztBQW5CQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSx1QkFBQTtBQXdCRjs7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0FBeUJGOztBQXZCQTtFQUNFLHFDQUFBO0FBMEJGOztBQXhCQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQTJCRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcclxufVxyXG4uaG9tZSBoMSB7XHJcbiAgZm9udC1zaXplOiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1hZ2llcmFfZm9udFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4uaG9sZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyZC1tb3ZpZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDIzOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNTAsIDIzOCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIGNvbG9yOiByZ2IoMjcsIDIzLCAyMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE0cHggMXB4IHJnYmEoMjU1LCAyMjAsIDIyMCwgMC4yKTtcclxufVxyXG4uY2FyZC1tb3ZpZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjU1LCAyMzkpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uY2FyZC1tb3ZpZSBoMTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICNmNWNhMGE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC44KTtcclxufVxyXG5oMyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW50aXF1ZS1mb250XCIsIGN1cnNpdmU7XHJcbn1cclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFudGlxdWUtZm9udFwiLCBjdXJzaXZlO1xyXG59XHJcbi5idnM6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhdG1hbi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG4uYXZhdGFyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hdmF0YXIuanBnXCIpO1xyXG59XHJcbi5nb2c6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dvZy5qcGdcIik7XHJcbn1cclxuLnNwaWRlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3BpZGVyLmpwZ1wiKTtcclxufVxyXG4uaW50ZXJzdGVsbGFyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnRlcnN0ZWxsYXIuanBnXCIpO1xyXG59XHJcbi5tb3M6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N1cGVybWFuLmpwZ1wiKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmJ2cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDBweCBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idnMgaDEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYnZzIGgzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmJ2cyBoNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5idnMxIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDc4JSwgNTAlLCAwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNzglLCA1MCUsIDBweCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4uZ29nIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDc4JSwgLTUwJSwgMHB4KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5zcGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTc4JSwgLTUwJSwgMHB4KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcbi5pbnRlcnN0ZWxsYXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTc4JSwgNTAlLCAwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuLm1vcyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNzglLCAtNTAlLCAwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuaDEge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59XHJcbi5maXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC03OCUsIDAlLCAwcHgpO1xyXG59XHJcbi5wb3BwZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbn1cclxuLnBvcCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MessageService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "P/Vd":
/*!**********************************!*\
  !*** ./src/app/shared/movies.ts ***!
  \**********************************/
/*! exports provided: movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function() { return movies; });
const movies = { '2012': ['Roland Emmerich',
        '158.0',
        'Oliver Platt',
        'Liam James',
        'Tom McCarthy',
        'ark|catastrophe|geologist|president|writer',
        '5.8',
        '1055.0',
        'Action|Adventure|Sci-Fi'],
    '47 Ronin': ['Carl Rinsch',
        '128.0',
        'Keanu Reeves',
        'Cary-Hiroyuki Tagawa',
        'Jin Akanishi',
        'box office flop|ronin|samurai|shogun|tournament',
        '6.3',
        '324.0',
        'Action|Adventure|Drama|Fantasy'],
    'A Christmas Carol': ['Robert Zemeckis',
        '96.0',
        'Robin Wright',
        'Colin Firth',
        'Gary Oldman',
        'charles dickens|christmas|christmas eve|ghost|scrooge',
        '6.8',
        '249.0',
        'Animation|Drama|Family|Fantasy'],
    'Alice in Wonderland': ['Tim Burton',
        '108.0',
        'Johnny Depp',
        'Alan Rickman',
        'Anne Hathaway',
        'alice in wonderland|mistaking reality for dream|queen|shrinking|shrinking potion',
        '6.5',
        '736.0',
        'Adventure|Family|Fantasy'],
    'Avatar': ['James Cameron',
        '178.0',
        'CCH Pounder',
        'Joel David Moore',
        'Wes Studi',
        'avatar|future|marine|native|paraplegic',
        '7.9',
        '3054.0',
        'Action|Adventure|Fantasy|Sci-Fi'],
    'Avengers: Age of Ultron': ['Joss Whedon',
        '141.0',
        'Chris Hemsworth',
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'artificial intelligence|based on comic book|captain america|marvel cinematic universe|superhero',
        '7.5',
        '1117.0',
        'Action|Adventure|Sci-Fi'],
    'Batman v Superman: Dawn of Justice': ['Zack Snyder',
        '183.0',
        'Henry Cavill',
        'Lauren Cohan',
        'Alan D. Purwin',
        'based on comic book|batman|sequel to a reboot|superhero|superman',
        '6.9',
        '3018.0',
        'Action|Adventure|Sci-Fi'],
    'Battleship': ['Peter Berg',
        '131.0',
        'Liam Neeson',
        'Alexander Skarsgård',
        'Tadanobu Asano',
        'box office flop|hawaii|naval|oahu hawaii|ship',
        '5.9',
        '751.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'Big Hero 6': ['Don Hall',
        '102.0',
        'Damon Wayans Jr.',
        'Daniel Henney',
        'Abraham Benrubi',
        'high tech|martial arts|masked man|robot|superhero',
        '7.9',
        '433.0',
        'Action|Adventure|Animation|Comedy|Drama|Family|Sci-Fi'],
    'Brave': ['Mark Andrews',
        '93.0',
        'Kelly Macdonald',
        'John Ratzenberger',
        'Julie Walters',
        'archery|coming of age|female warrior|princess|rebellious daughter',
        '7.2',
        '428.0',
        'Adventure|Animation|Comedy|Family|Fantasy'],
    'Captain America: Civil War': ['Anthony Russo',
        '147.0',
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'Chris Evans',
        'based on comic book|knife|marvel cinematic universe|returning character killed off|superhero',
        '8.2',
        '1022.0',
        'Action|Adventure|Sci-Fi'],
    'Captain America: The Winter Soldier': ['Anthony Russo',
        '136.0',
        'Scarlett Johansson',
        'Chris Evans',
        'Hayley Atwell',
        'conspiracy|heroism|megalomaniac|super soldier|world domination',
        '7.8',
        '742.0',
        'Action|Adventure|Sci-Fi'],
    'Cars 2': ['John Lasseter',
        '106.0',
        'Joe Mantegna',
        'Thomas Kretschmann',
        'Eddie Izzard',
        'best friend|car race|conspiracy|gadget car|spy',
        '6.3',
        '283.0',
        'Adventure|Animation|Comedy|Family|Sport'],
    'Dawn of the Planet of the Apes': ['Matt Reeves',
        '130.0',
        'Gary Oldman',
        'Judy Greer',
        'Kodi Smit-McPhee',
        'ape|dam|leader|post apocalypse|sequel',
        '7.6',
        '620.0',
        'Action|Adventure|Drama|Sci-Fi'],
    'Edge of Tomorrow': ['Doug Liman',
        '113.0',
        'Tom Cruise',
        'Lara Pulver',
        'Noah Taylor',
        'alien|combat|dying repeatedly|end of the world|time loop',
        '7.9',
        '741.0',
        'Action|Adventure|Sci-Fi'],
    'Evan Almighty': ['Tom Shadyac',
        '96.0',
        'Jimmy Bennett',
        'Morgan Freeman',
        'Steve Carell',
        'ark|change|congressman|depiction of god|flood',
        '5.4',
        '257.0',
        'Comedy|Family|Fantasy'],
    'Furious 7': ['James Wan',
        '140.0',
        'Jason Statham',
        'Paul Walker',
        'Vin Diesel',
        'car falling off a cliff|hospital|revenge|star died before release|terrorist',
        '7.2',
        '657.0',
        'Action|Crime|Thriller'],
    'G.I. Joe: The Rise of Cobra': ['Stephen Sommers',
        '118.0',
        'Joseph Gordon-Levitt',
        'Dennis Quaid',
        'Leo Howard',
        'cobra|gi joe|snake|train|warhead',
        '5.8',
        '534.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'Godzilla Resurgence': ['Hideaki Anno',
        '120.0',
        'Mark Chinnery',
        "Shin'ya Tsukamoto",
        'Atsuko Maeda',
        'blood|godzilla|monster|sequel',
        '8.2',
        '13.0',
        'Action|Adventure|Drama|Horror|Sci-Fi'],
    'Green Lantern': ['Martin Campbell',
        '123.0',
        'Ryan Reynolds',
        'Temuera Morrison',
        'Taika Waititi',
        'autopsy|lantern|planet|ring|test pilot',
        '5.6',
        '550.0',
        'Action|Adventure|Sci-Fi'],
    'Guardians of the Galaxy': ['James Gunn',
        '121.0',
        'Bradley Cooper',
        'Vin Diesel',
        'Djimon Hounsou',
        'bounty hunter|outer space|raccoon|talking animal|tree',
        '8.1',
        '1097.0',
        'Action|Adventure|Sci-Fi'],
    'Harry Potter and the Half-Blood Prince': ['David Yates',
        '153.0',
        'Alan Rickman',
        'Daniel Radcliffe',
        'Rupert Grint',
        'blood|book|love|potion|professor',
        '7.5',
        '973.0',
        'Adventure|Family|Fantasy|Mystery'],
    'How to Train Your Dragon': ['Dean DeBlois',
        '98.0',
        'Gerard Butler',
        'America Ferrera',
        'Craig Ferguson',
        'dragon|island|training|viking|village',
        '8.2',
        '492.0',
        'Adventure|Animation|Family|Fantasy'],
    'Hugo': ['Martin Scorsese',
        '126.0',
        'Chloë Grace Moretz',
        'Christopher Lee',
        'Ray Winstone',
        'automaton|mechanical|railway station|steampunk|train',
        '7.5',
        '678.0',
        'Adventure|Drama|Family|Mystery'],
    'Inception': ['Christopher Nolan',
        '148.0',
        'Leonardo DiCaprio',
        'Tom Hardy',
        'Joseph Gordon-Levitt',
        'ambiguous ending|corporate espionage|dream|subconscious|thief',
        '8.8',
        '2803.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'Independence Day: Resurgence': ['Roland Emmerich',
        '120.0',
        'Vivica A. Fox',
        'Sela Ward',
        'Judd Hirsch',
        'alien|battle|defense|independence day|mothership',
        '5.5',
        '520.0',
        'Action|Adventure|Sci-Fi'],
    'Indiana Jones and the Kingdom of the Crystal Skull': ['Steven Spielberg',
        '122.0',
        'Harrison Ford',
        'Ray Winstone',
        'Jim Broadbent',
        'cult figure|femme fatale|indiana jones|unsubtitled foreign language|year 1957',
        '6.2',
        '2054.0',
        'Action|Adventure|Fantasy'],
    'Inside Out': ['Pete Docter',
        '95.0',
        'Amy Poehler',
        'Mindy Kaling',
        'Phyllis Smith',
        'anger|joy|memory|running away|sadness',
        '8.3',
        '773.0',
        'Adventure|Animation|Comedy|Drama|Family|Fantasy'],
    'Interstellar': ['Christopher Nolan',
        '169.0',
        'Matthew McConaughey',
        'Anne Hathaway',
        'Mackenzie Foy',
        'black hole|father daughter relationship|saving the world|space travel|wormhole',
        '8.6',
        '2725.0',
        'Adventure|Drama|Sci-Fi'],
    'Iron Man 2': ['Jon Favreau',
        '124.0',
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'Jon Favreau',
        'hammer|military|monaco|revenge|tony stark',
        '7.0',
        '723.0',
        'Action|Adventure|Sci-Fi'],
    'Iron Man 3': ['Shane Black',
        '195.0',
        'Robert Downey Jr.',
        'Jon Favreau',
        'Don Cheadle',
        'armor|explosion|human bomb|missile attack|terrorist',
        '7.2',
        '1187.0',
        'Action|Adventure|Sci-Fi'],
    'Iron Man': ['Jon Favreau',
        '126.0',
        'Robert Downey Jr.',
        'Jeff Bridges',
        'Jon Favreau',
        'afghanistan|billionaire|inventor|playboy|u.s. air force',
        '7.9',
        '1055.0',
        'Action|Adventure|Sci-Fi'],
    'Jack the Giant Slayer': ['Bryan Singer',
        '114.0',
        'Eddie Marsan',
        'Ewen Bremner',
        'Ralph Brown',
        'bean|giant|king|no opening credits|princess',
        '6.3',
        '205.0',
        'Adventure|Fantasy'],
    'John Carter': ['Andrew Stanton',
        '132.0',
        'Daryl Sabara',
        'Samantha Morton',
        'Polly Walker',
        'alien|american civil war|male nipple|mars|princess',
        '6.6',
        '738.0',
        'Action|Adventure|Sci-Fi'],
    'Jupiter Ascending': ['Lana Wachowski',
        '127.0',
        'Channing Tatum',
        'Mila Kunis',
        'Eddie Redmayne',
        'box office flop|critically bashed|planet earth|space opera|woman in bra and panties',
        '5.4',
        '720.0',
        'Action|Adventure|Sci-Fi'],
    'Jurassic World': ['Colin Trevorrow',
        '124.0',
        'Bryce Dallas Howard',
        'Judy Greer',
        'Omar Sy',
        'dinosaur|disaster film|experiment gone wrong|jurassic park|velociraptor',
        '7.0',
        '1290.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'King Kong': ['Peter Jackson',
        '201.0',
        'Naomi Watts',
        'Thomas Kretschmann',
        'Evan Parke',
        'animal name in title|ape abducts a woman|gorilla|island|king kong',
        '7.2',
        '2618.0',
        'Action|Adventure|Drama|Romance'],
    'Maleficent': ['Robert Stromberg',
        '97.0',
        'Angelina Jolie Pitt',
        'Sharlto Copley',
        'Sam Riley',
        'curse|dark fantasy|fairy|king|kingdom',
        '7.0',
        '634.0',
        'Action|Adventure|Family|Fantasy|Romance'],
    'Man of Steel': ['Zack Snyder',
        '143.0',
        'Henry Cavill',
        'Christopher Meloni',
        'Harry Lennix',
        'based on comic book|british actor playing american character|final battle|origin of hero|reboot',
        '7.2',
        '2536.0',
        'Action|Adventure|Fantasy|Sci-Fi'],
    'Men in Black 3': ['Barry Sonnenfeld',
        '106.0',
        'Will Smith',
        'Michael Stuhlbarg',
        'Nicole Scherzinger',
        'alien|criminal|m.i.b.|maximum security prison|prison',
        '6.8',
        '341.0',
        'Action|Adventure|Comedy|Family|Fantasy|Sci-Fi'],
    'Monsters University': ['Dan Scanlon',
        '104.0',
        'Steve Buscemi',
        'Tyler Labine',
        'Sean Hayes',
        'cheating|fraternity|monster|singing in a car|university',
        '7.3',
        '265.0',
        'Adventure|Animation|Comedy|Family|Fantasy'],
    'Monsters vs. Aliens': ['Rob Letterman',
        '94.0',
        'Amy Poehler',
        'Rainn Wilson',
        'Stephen Colbert',
        'alien|alien invasion|alien space craft|giant|giantess',
        '6.5',
        '187.0',
        'Action|Adventure|Animation|Comedy|Family|Sci-Fi'],
    'Oz the Great and Powerful': ['Sam Raimi',
        '130.0',
        'Tim Holmes',
        'Mila Kunis',
        'James Franco',
        'circus|magic|magician|oz|witch',
        '6.4',
        '511.0',
        'Adventure|Family|Fantasy'],
    'Pacific Rim': ['Guillermo del Toro',
        '131.0',
        'Charlie Hunnam',
        'Clifton Collins Jr.',
        'Larry Joe Campbell',
        'giant monster|kaiju|pilot|portal|robot',
        '7.0',
        '1106.0',
        'Action|Adventure|Sci-Fi'],
    "Pirates of the Caribbean: At World's End": ['Gore Verbinski',
        '169.0',
        'Johnny Depp',
        'Orlando Bloom',
        'Jack Davenport',
        'goddess|marriage ceremony|marriage proposal|pirate|singapore',
        '7.1',
        '1238.0',
        'Action|Adventure|Fantasy'],
    "Pirates of the Caribbean: Dead Man's Chest": ['Gore Verbinski',
        '151.0',
        'Johnny Depp',
        'Orlando Bloom',
        'Jack Davenport',
        "box office hit|giant squid|heart|liar's dice|monster",
        '7.3',
        '1832.0',
        'Action|Adventure|Fantasy'],
    'Pirates of the Caribbean: On Stranger Tides': ['Rob Marshall',
        '136.0',
        'Johnny Depp',
        'Sam Claflin',
        'Stephen Graham',
        'blackbeard|captain|pirate|revenge|soldier',
        '6.7',
        '484.0',
        'Action|Adventure|Fantasy'],
    'Prince of Persia: The Sands of Time': ['Mike Newell',
        '116.0',
        'Jake Gyllenhaal',
        'Richard Coyle',
        'Reece Ritchie',
        'alamut|dagger|king|persia|princess',
        '6.6',
        '453.0',
        'Action|Adventure|Fantasy|Romance'],
    'Quantum of Solace': ['Marc Forster',
        '106.0',
        'Giancarlo Giannini',
        'Mathieu Amalric',
        'Rory Kinnear',
        'action hero|attempted rape|bond girl|official james bond series|revenge',
        '6.7',
        '1243.0',
        'Action|Adventure'],
    'Robin Hood': ['Ridley Scott',
        '156.0',
        'Mark Addy',
        'William Hurt',
        'Scott Grimes',
        '1190s|archer|england|king of england|robin hood',
        '6.7',
        '546.0',
        'Action|Adventure|Drama|History'],
    'Rush Hour 3': ['Brett Ratner',
        '91.0',
        'Tzi Ma',
        'Dana Ivey',
        'Noémie Lenoir',
        'ambassador|assassination|chinese|french|triad',
        '6.2',
        '221.0',
        'Action|Comedy|Crime|Thriller'],
    'Shrek Forever After': ['Mike Mitchell',
        '93.0',
        'Jon Hamm',
        'Kathy Griffin',
        'Mary Kay Place',
        'alternate world|fairy tale parody|female warrior|ogre|true love',
        '6.4',
        '173.0',
        'Adventure|Animation|Comedy|Family|Fantasy'],
    'Skyfall': ['Sam Mendes',
        '143.0',
        'Albert Finney',
        'Helen McCrory',
        'Rory Kinnear',
        'brawl|childhood home|computer cracker|intelligence agency|terrorist cell',
        '7.8',
        '1498.0',
        'Action|Adventure|Thriller'],
    'Snow White and the Huntsman': ['Rupert Sanders',
        '132.0',
        'Chris Hemsworth',
        'Kristen Stewart',
        'Sam Claflin',
        'evil queen|fairy tale|magic|queen|snow white',
        '6.1',
        '710.0',
        'Action|Adventure|Drama|Fantasy'],
    'Spectre': ['Sam Mendes',
        '148.0',
        'Christoph Waltz',
        'Rory Kinnear',
        'Stephanie Sigman',
        'bomb|espionage|sequel|spy|terrorist',
        '6.8',
        '994.0',
        'Action|Adventure|Thriller'],
    'Spider-Man 2': ['Sam Raimi',
        '135.0',
        'J.K. Simmons',
        'James Franco',
        'Kirsten Dunst',
        'death|doctor|scientist|super villain|tentacle',
        '7.3',
        '1303.0',
        'Action|Adventure|Fantasy|Romance'],
    'Spider-Man 3': ['Sam Raimi',
        '156.0',
        'J.K. Simmons',
        'James Franco',
        'Kirsten Dunst',
        'sandman|spider man|symbiote|venom|villain',
        '6.2',
        '1902.0',
        'Action|Adventure|Romance'],
    'Star Trek Beyond': ['Justin Lin',
        '122.0',
        'Sofia Boutella',
        'Melissa Roxburgh',
        'Lydia Wilson',
        'hatred|sequel|space opera|star trek|third part',
        '7.5',
        '432.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'Star Trek Into Darkness': ['J.J. Abrams',
        '132.0',
        'Benedict Cumberbatch',
        'Bruce Greenwood',
        'Noel Clarke',
        'admiral|captain|manhunt|mission|space',
        '7.8',
        '1171.0',
        'Action|Adventure|Sci-Fi'],
    'Star Wars: Episode VII - The Force Awakens            ': ['Doug Walker',
        '-',
        'Doug Walker',
        'Rob Walker',
        '-',
        '-',
        '7.1',
        '-',
        'Documentary'],
    'Suicide Squad': ['David Ayer',
        '123.0',
        'Will Smith',
        'Robin Atkin Downes',
        'Ike Barinholtz',
        'based on comic book|critically bashed|father daughter relationship|reference to superman|super villain',
        '6.9',
        '971.0',
        'Action|Adventure|Comedy|Sci-Fi'],
    'Superman Returns': ['Bryan Singer',
        '169.0',
        'Kevin Spacey',
        'Marlon Brando',
        'Frank Langella',
        'crystal|epic|lex luthor|lois lane|return to earth',
        '6.1',
        '2367.0',
        'Action|Adventure|Sci-Fi'],
    'TRON: Legacy': ['Joseph Kosinski',
        '125.0',
        'Jeff Bridges',
        'Olivia Wilde',
        'James Frain',
        'arcade|bridge|disappearance|escape|warrior',
        '6.8',
        '665.0',
        'Action|Adventure|Sci-Fi'],
    'Tangled': ['Nathan Greno',
        '100.0',
        'Brad Garrett',
        'Donna Murphy',
        'M.C. Gainey',
        '17th century|based on fairy tale|disney|flower|tower',
        '7.8',
        '387.0',
        'Adventure|Animation|Comedy|Family|Fantasy|Musical|Romance'],
    'Terminator 3: Rise of the Machines': ['Jonathan Mostow',
        '109.0',
        'Nick Stahl',
        'M.C. Gainey',
        'Carolyn Hennesy',
        'drifter|exploding truck|future|machine|skynet',
        '6.4',
        '1676.0',
        'Action|Sci-Fi'],
    'Terminator Salvation': ['McG',
        '118.0',
        'Christian Bale',
        'Bryce Dallas Howard',
        'Common',
        'death row|future|machine|rescue|skynet',
        '6.6',
        '974.0',
        'Action|Adventure|Sci-Fi'],
    'The Amazing Spider-Man 2': ['Marc Webb',
        '142.0',
        'Emma Stone',
        'Andrew Garfield',
        'B.J. Novak',
        'costumed hero|death of girlfriend|masked vigilante|returning character killed off|teenager',
        '6.7',
        '1067.0',
        'Action|Adventure|Fantasy|Sci-Fi'],
    'The Amazing Spider-Man': ['Marc Webb',
        '153.0',
        'Emma Stone',
        'Andrew Garfield',
        'Chris Zylka',
        'lizard|outcast|spider|spider man|teenager',
        '7.0',
        '1225.0',
        'Action|Adventure|Fantasy'],
    'The Avengers': ['Joss Whedon',
        '173.0',
        'Chris Hemsworth',
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'alien invasion|assassin|battle|iron man|soldier',
        '8.1',
        '1722.0',
        'Action|Adventure|Sci-Fi'],
    'The Chronicles of Narnia: Prince Caspian': ['Andrew Adamson',
        '150.0',
        'Peter Dinklage',
        'Pierfrancesco Favino',
        'Damián Alcázar',
        'brother brother relationship|brother sister relationship|good versus evil|king|narnia',
        '6.6',
        '438.0',
        'Action|Adventure|Family|Fantasy'],
    'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe': ['Andrew Adamson',
        '150.0',
        'Jim Broadbent',
        'Kiran Shah',
        'Shane Rangi',
        'hide and seek|lion|magic|professor|snow',
        '6.9',
        '1463.0',
        'Adventure|Family|Fantasy'],
    'The Dark Knight Rises': ['Christopher Nolan',
        '164.0',
        'Tom Hardy',
        'Christian Bale',
        'Joseph Gordon-Levitt',
        'deception|imprisonment|lawlessness|police officer|terrorist plot',
        '8.5',
        '2701.0',
        'Action|Thriller'],
    'The Dark Knight': ['Christopher Nolan',
        '152.0',
        'Christian Bale',
        'Heath Ledger',
        'Morgan Freeman',
        'based on comic book|dc comics|psychopath|star died before release|urban setting',
        '9.0',
        '4667.0',
        'Action|Crime|Drama|Thriller'],
    'The Golden Compass': ['Chris Weitz',
        '113.0',
        'Christopher Lee',
        'Eva Green',
        'Kristin Scott Thomas',
        'children|epic|friend|girl|quest',
        '6.1',
        '666.0',
        'Adventure|Family|Fantasy'],
    'The Good Dinosaur': ['Peter Sohn',
        '93.0',
        'A.J. Buckley',
        'Jack McGraw',
        'Peter Sohn',
        'apatosaurus|asteroid|dinosaur|fear|river',
        '6.8',
        '345.0',
        'Adventure|Animation|Comedy|Family|Fantasy'],
    'The Great Gatsby': ['Baz Luhrmann',
        '143.0',
        'Leonardo DiCaprio',
        'Elizabeth Debicki',
        'Steve Bisley',
        'ingratitude|mansion|party|title appears in writing|tragedy',
        '7.3',
        '753.0',
        'Drama|Romance'],
    'The Hobbit: An Unexpected Journey': ['Peter Jackson',
        '182.0',
        'Aidan Turner',
        'Adam Brown',
        'James Nesbitt',
        'dragon|dwarf|hobbit|orc|wizard',
        '7.9',
        '1367.0',
        'Adventure|Fantasy'],
    'The Hobbit: The Battle of the Five Armies': ['Peter Jackson',
        '164.0',
        'Aidan Turner',
        'Adam Brown',
        'James Nesbitt',
        'army|elf|hobbit|middle earth|orc',
        '7.5',
        '802.0',
        'Adventure|Fantasy'],
    'The Hobbit: The Desolation of Smaug': ['Peter Jackson',
        '186.0',
        'Aidan Turner',
        'Adam Brown',
        'James Nesbitt',
        'dwarf|elf|lake town|mountain|sword and sorcery',
        '7.9',
        '951.0',
        'Adventure|Fantasy'],
    'The Jungle Book': ['Jon Favreau',
        '106.0',
        'Scarlett Johansson',
        'Bill Murray',
        'Garry Shandling',
        'fire|jungle|remake|tiger|wolf',
        '7.8',
        '398.0',
        'Adventure|Drama|Family|Fantasy'],
    'The Legend of Tarzan': ['David Yates',
        '110.0',
        'Christoph Waltz',
        'Alexander Skarsgård',
        'Casper Crump',
        'africa|capture|jungle|male objectification|tarzan',
        '6.6',
        '239.0',
        'Action|Adventure|Drama|Romance'],
    'The Lone Ranger': ['Gore Verbinski',
        '150.0',
        'Johnny Depp',
        'Ruth Wilson',
        'Tom Wilkinson',
        'horse|outlaw|texas|texas ranger|train',
        '6.5',
        '711.0',
        'Action|Adventure|Western'],
    'The Lovers': ['Roland Joffé',
        '109.0',
        'Tamsin Egerton',
        'Alice Englert',
        'Bipasha Basu',
        '1770s|british india|great barrier reef|india|ring',
        '4.5',
        '15.0',
        'Action|Adventure|Romance|Sci-Fi'],
    'The Mummy: Tomb of the Dragon Emperor': ['Rob Cohen',
        '112.0',
        'Jet Li',
        'Brendan Fraser',
        'Russell Wong',
        'army|china|emperor|mummy|shangri la',
        '5.2',
        '501.0',
        'Action|Adventure|Fantasy|Horror|Thriller'],
    'The Polar Express': ['Robert Zemeckis',
        '100.0',
        'Tom Hanks',
        'Eddie Deezen',
        'Peter Scolari',
        'boy|christmas|christmas eve|north pole|train',
        '6.6',
        '444.0',
        'Adventure|Animation|Family|Fantasy'],
    'Titanic': ['James Cameron',
        '194.0',
        'Leonardo DiCaprio',
        'Kate Winslet',
        'Gloria Stuart',
        'artist|love|ship|titanic|wet',
        '7.7',
        '2528.0',
        'Drama|Romance'],
    'Tomorrowland': ['Brad Bird',
        '130.0',
        'Judy Greer',
        'Chris Bauer',
        'Thomas Robinson',
        'boy genius|futuristic city|inventor|teenage girl|time travel',
        '6.5',
        '497.0',
        'Action|Adventure|Family|Mystery|Sci-Fi'],
    'Toy Story 3': ['Lee Unkrich',
        '103.0',
        'Tom Hanks',
        'John Ratzenberger',
        'Don Rickles',
        'college|day care|escape|teddy bear|toy',
        '8.3',
        '733.0',
        'Adventure|Animation|Comedy|Family|Fantasy'],
    'Transformers: Age of Extinction': ['Michael Bay',
        '165.0',
        'Bingbing Li',
        'Sophia Myles',
        'Kelsey Grammer',
        'blockbuster|bumblebee the character|semi truck and trailer|texas|truck',
        '5.7',
        '918.0',
        'Action|Adventure|Sci-Fi'],
    'Transformers: Dark of the Moon': ['Michael Bay',
        '154.0',
        'Glenn Morshower',
        'Lester Speight',
        'Kevin Dunn',
        'autobot|decepticon|job interview|moon|spacecraft',
        '6.3',
        '899.0',
        'Action|Adventure|Sci-Fi'],
    'Transformers: Revenge of the Fallen': ['Michael Bay',
        '150.0',
        'Glenn Morshower',
        'Kevin Dunn',
        'Ramon Rodriguez',
        'autobot|decepticon|machine|sun|symbol',
        '6.0',
        '1439.0',
        'Action|Adventure|Sci-Fi'],
    'Up': ['Pete Docter',
        '96.0',
        'John Ratzenberger',
        'Delroy Lindo',
        'Jess Harnell',
        'balloon|house|promise|retirement|skeleton',
        '8.3',
        '704.0',
        'Adventure|Animation|Comedy|Family'],
    'WALL·E': ['Andrew Stanton',
        '98.0',
        'John Ratzenberger',
        'Fred Willard',
        'Jeff Garlin',
        'earth|obesity|plant|robot|soil',
        '8.4',
        '1043.0',
        'Adventure|Animation|Family|Sci-Fi'],
    'Waterworld': ['Kevin Reynolds',
        '176.0',
        'Jeanne Tripplehorn',
        'Rick Aviles',
        'Zakes Mokae',
        'future|sail|sea|smoker|water',
        '6.1',
        '309.0',
        'Action|Adventure|Sci-Fi|Thriller'],
    'Wild Wild West': ['Barry Sonnenfeld',
        '106.0',
        'Will Smith',
        'Salma Hayek',
        'Bai Ling',
        'buddy movie|general|inventor|steampunk|utah',
        '4.8',
        '648.0',
        'Action|Comedy|Sci-Fi|Western'],
    'World War Z': ['Marc Forster',
        '123.0',
        'Peter Capaldi',
        'Brad Pitt',
        'Mireille Enos',
        'chaos|disease|infection|pandemic|zombie',
        '7.0',
        '995.0',
        'Action|Adventure|Horror|Sci-Fi|Thriller'],
    'Wreck-It Ralph': ['Rich Moore',
        '101.0',
        'Jack McBrayer',
        'Sarah Silverman',
        'Joe Lo Truglio',
        'arcade|candy|glitch|king|medal',
        '7.8',
        '345.0',
        'Adventure|Animation|Comedy|Family|Sci-Fi'],
    'X-Men: Apocalypse': ['Bryan Singer',
        '144.0',
        'Jennifer Lawrence',
        'Michael Fassbender',
        'Tye Sheridan',
        'mutant|superhero|superhero team|x men|year 1983',
        '7.3',
        '622.0',
        'Action|Adventure|Sci-Fi'],
    'X-Men: Days of Future Past': ['Bryan Singer',
        '149.0',
        'Jennifer Lawrence',
        'Peter Dinklage',
        'Hugh Jackman',
        'dystopia|super strength|supernatural power|time paradox|time travel',
        '8.0',
        '752.0',
        'Action|Adventure|Fantasy|Sci-Fi|Thriller'],
    'X-Men: The Last Stand': ['Brett Ratner',
        '104.0',
        'Hugh Jackman',
        'Kelsey Grammer',
        'Daniel Cudmore',
        'battle|mutant|outrage|walking through a wall|x men',
        '6.8',
        '1912.0',
        'Action|Adventure|Fantasy|Sci-Fi|Thriller'] };


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _movie_display_movie_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-display/movie-display.component */ "hqPK");






class AppComponent {
    constructor() {
        this.title = 'design-proj';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-movie-display");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _movie_display_movie_display_component__WEBPACK_IMPORTED_MODULE_4__["MovieDisplayComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "OdHV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _movie_display_movie_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./movie-display/movie-display.component */ "hqPK");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
        _movie_display_movie_display_component__WEBPACK_IMPORTED_MODULE_20__["MovieDisplayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                    _movie_display_movie_display_component__WEBPACK_IMPORTED_MODULE_20__["MovieDisplayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
                ],
                providers: [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/app.animation */ "gQL+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");









const _c0 = function (a1) { return { "navbar-scroll": true, show_nav: a1 }; };
class HeaderComponent {
    constructor() {
        this.menu_bool = false;
        this.showFiller = false;
        this.loadmenu();
    }
    toggle_navbar() {
        this.menu_bool = !this.menu_bool;
        if (this.menu_bool) {
            this.loadmenu0();
        }
        else {
            this.loadmenu01();
        }
    }
    loadmenu0() {
        const ele = document.getElementsByClassName('menu-stagger0');
        var i = 0;
        Array.from(ele).forEach((val) => {
            i += 1;
            setTimeout(() => {
                val.classList.add('menu-stagger-pos0');
            }, 400 * i);
        });
    }
    search() {
        this.menu_bool = false;
        this.loadmenu01();
        location.href = "#";
        location.href = "#search-0";
    }
    loadmenu01() {
        const ele = document.getElementsByClassName('menu-stagger0');
        var i = 0;
        Array.from(ele).forEach((val) => {
            i += 1;
            setTimeout(() => {
                val.classList.remove('menu-stagger-pos0');
            }, 400 * i);
        });
    }
    loadmenu() {
        const ele1 = document.getElementsByClassName('headani');
        var i = 0;
        Array.from(ele1).forEach((val) => {
            i += 1;
            setTimeout(() => {
                val.classList.add('pop');
            }, 130 * i);
        });
        const ele = document.getElementsByClassName('menu-stagger');
        var i = 0;
        Array.from(ele).forEach((val) => {
            i += 1;
            setTimeout(() => {
                val.classList.add('menu-stagger-pos');
            }, 300 * i);
        });
    }
    ngOnInit() {
        this.loadmenu();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 79, vars: 3, consts: [["id", "content-desktop-navbar1", 1, "heading1"], [1, "headani"], ["id", "content-desktop-navbar"], ["routerLinkActive", "active", "mat-icon-button", "", 1, "menu-stagger"], ["mat-icon-button", "", "routerLinkActive", "active", 1, "menu-stagger", 3, "click"], ["id", "content-mobile-navbar"], [1, "heading"], [1, "example-spacer"], ["mat-icon-button", "", 2, "margin-right", "5px", 3, "click"], ["aria-label", "Example icon-button with a menu"], ["id", "navbar-scroll", 3, "ngClass"], ["mat-button", "", "routerLinkActive", "active", 1, "menu-stagger0"], ["mat-button", "", "mat-icon-button", "", "routerLinkActive", "active", 1, "menu-stagger0", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_34_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_69_listener() { return ctx.toggle_navbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_76_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.menu_bool));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"]], styles: [".heading1[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  font-family: cursive, \"Times New Roman\", Times, serif, cursive;\n  color: #e8f800;\n  font-size: 45px;\n  font-weight: 900;\n  text-shadow: 2px -1px 0px #e7d2d2;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n\n.menu-stagger[_ngcontent-%COMP%] {\n  transform: translateY(-300%);\n}\n\n.menu-stagger0[_ngcontent-%COMP%] {\n  transform: translateY(-600%);\n}\n\n.menu-stagger.menu-stagger-pos[_ngcontent-%COMP%] {\n  transform: translateY(0%);\n}\n\n.menu-stagger0.menu-stagger-pos0[_ngcontent-%COMP%] {\n  transform: translateY(0%);\n}\n\n.heading[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-family: \"Antique_font\", \"Times New Roman\", Times, serif, cursive;\n  color: #e8f800;\n  font-size: 30px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #e8f800;\n  text-align: center;\n  width: 100%;\n  justify-content: space-between;\n}\n\n@media screen and (max-width: 799px) {\n  #content-desktop-navbar[_ngcontent-%COMP%] {\n    display: none !important;\n    width: 100%;\n  }\n\n  #content-desktop-navbar1[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  #content-mobile-navbar[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  #content-desktop-navbar[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100%;\n  }\n\n  #navbar-scroll[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  #content-desktop-navbar1[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  #content-mobile-navbar[_ngcontent-%COMP%] {\n    display: none !important;\n    width: 100%;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  text-shadow: 1px 2px 0px #0e0d0d;\n  border-radius: 0px !important;\n  text-align: center;\n  color: #faf0f0;\n  width: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  transition: transform 1s ease-in-out;\n}\n\na[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \"\";\n  border-bottom: solid 4px #f9f871;\n  transform: scaleX(0);\n  transition: transform 250ms ease-in-out;\n}\n\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: large;\n  color: #faf0f0;\n  text-shadow: 2px 3px 2px #0e0d0d;\n}\n\na[_ngcontent-%COMP%]:hover:after {\n  transform: scale(1);\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-shadow: 1px 2px 0px #0e0d0d;\n  color: #faf0f0;\n}\n\n@keyframes button-elevation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: larger;\n  font-weight: bolder;\n  text-shadow: 1px 2px 1px #e7d2d2;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  transform: scaleZ(5px);\n  box-shadow: inset 2px 0px 2px whitesmoke, inset 0px -2px 2px black;\n}\n\nmat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: yellowgreen;\n}\n\nmat-list[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.navbar-scroll[_ngcontent-%COMP%] {\n  background-color: #639cd9;\n  background-image: linear-gradient(to left top, #ffe142, #ffe63b, #ffec33, #fff129, #fff71d, #fff71d, #fff71d, #fff71d, #fff129, #ffec33, #ffe63b, #ffe142);\n  background: transparent;\n  height: auto;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n\n.headani[_ngcontent-%COMP%] {\n  transition: all 0.4s;\n  opacity: 0;\n}\n\n.pop[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.navbar-scroll[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.show_nav[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.BackgroundDialog[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.BackgroundDialogRegis[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n@media screen and (max-width: 900px) {\n  #about[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n.about[_ngcontent-%COMP%] {\n  background-color: #639cd9;\n  font-family: \"precious_font\", \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  background-image: linear-gradient(to left top, #90dc84, #84d787, #78d289, #6ccd8c, #61c88e, #57c390, #4dbf91, #43ba92, #38b493, #2eaf94, #24a994, #1aa394);\n}\n\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #34323a;\n  padding-top: 1%;\n  font-family: \"precious_font\", \"Times New Roman\", Times, serif, cursive;\n  letter-spacing: 2px;\n  text-shadow: 1px 2px 1px black;\n  padding-bottom: 2%;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bolder;\n}\n\n.heading_text[_ngcontent-%COMP%] {\n  font-family: \"BlackWindow_font\", \"Times New Roman\", Times, serif, cursive !important;\n  text-shadow: 1px 2px 1px whitesmoke !important;\n}\n\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"precious\", \"Times New Roman\", Times, serif, cursive;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid whitesmoke;\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGlCQUFBO0VBQ0EsOERBQUE7RUFDQSxjQVBjO0VBUWQsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU1BO0VBQ0UsNEJBQUE7QUFIRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxxRUFBQTtFQUNBLGNBN0JjO0VBOEJkLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGNBcENjO0VBcUNkLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsV0FBQTtFQUVGOztFQUFBO0lBQ0Usd0JBQUE7RUFHRjs7RUFEQTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFQUlGOztFQUZBO0lBQ0Usd0JBQUE7RUFLRjs7RUFIQTtJQUNFLHlCQUFBO0VBTUY7O0VBSkE7SUFDRSx3QkFBQTtJQUNBLFdBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2RVc7RUF3RVgsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQU9GOztBQUxBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUNBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7O0FBUEE7RUFDRSxnQkFBQTtFQUNBLGNBekZXO0VBMEZYLGdDQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtBQVdGOztBQVRBO0VBQ0UsZ0NBQUE7RUFDQSxjQWpHVztBQTZHYjs7QUFWQTtFQUNFO0lBQ0UsbUJBQUE7RUFhRjtFQVhBO0lBQ0UscUJBQUE7RUFhRjtFQVhBO0lBQ0UsbUJBQUE7RUFhRjtBQUNGOztBQVhBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFhRjs7QUFYQTtFQUNFLHNCQUFBO0VBQ0Esa0VBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0FBZ0JGOztBQWRBO0VBQ0UseUJBcElXO0VBcUlYLDBKQUFBO0VBZUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSx1QkFBQTtBQVFGOztBQU5BO0VBQ0UsNEJBQUE7QUFTRjs7QUFQQTtFQUNFO0lBQ0Usd0JBQUE7RUFVRjtBQUNGOztBQVJBO0VBQ0UseUJBbkxXO0VBb0xYLDhGQUFBO0VBRUEsMEpBQUE7QUFTRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU1BO0VBQ0Usb0ZBQUE7RUFDQSw4Q0FBQTtBQUhGOztBQUtBO0VBQ0UsaUVBQUE7QUFGRjs7QUFJQTtFQUNFLG1DQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZGFyay1jb2xvcjogIzYzOWNkOTtcclxuJGxpZ2h0LWRhcmstY29sb3I6ICMwYmZmOTM7XHJcbiRoZWFkaW5nLWNvbG9yOiAjZThmODAwO1xyXG4kc2hhZG93LWNvbG9yOiAjZTdkMmQyO1xyXG4kc2hhZG93LWNvbG9yLWxpbms6ICMwZTBkMGQ7XHJcbiRsaW5rLWNvbG9yOiAjZmFmMGYwO1xyXG4uaGVhZGluZzEge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggLTFweCAwcHggJHNoYWRvdy1jb2xvcjtcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm1lbnUtc3RhZ2dlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDAlKTtcclxufVxyXG4ubWVudS1zdGFnZ2VyMCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MDAlKTtcclxufVxyXG4ubWVudS1zdGFnZ2VyLm1lbnUtc3RhZ2dlci1wb3Mge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbn1cclxuLm1lbnUtc3RhZ2dlcjAubWVudS1zdGFnZ2VyLXBvczAge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFudGlxdWVfZm9udFwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkaGVhZGluZy1jb2xvcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgI2NvbnRlbnQtZGVza3RvcC1uYXZiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNjb250ZW50LWRlc2t0b3AtbmF2YmFyMSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNjb250ZW50LW1vYmlsZS1uYXZiYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICNjb250ZW50LWRlc2t0b3AtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgI25hdmJhci1zY3JvbGwge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjY29udGVudC1kZXNrdG9wLW5hdmJhcjEge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI2NvbnRlbnQtbW9iaWxlLW5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4ICRzaGFkb3ctY29sb3ItbGluaztcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcclxufVxyXG5hOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCAjZjlmODcxO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxufVxyXG5hIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuYSBzcGFuIGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogJGxpbmstY29sb3I7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggMnB4ICRzaGFkb3ctY29sb3ItbGluaztcclxufVxyXG5hOmhvdmVyOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDBweCAkc2hhZG93LWNvbG9yLWxpbms7XHJcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG59XHJcbkBrZXlmcmFtZXMgYnV0dG9uLWVsZXZhdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMXB4ICRzaGFkb3ctY29sb3I7XHJcbn1cclxubWF0LWxpc3QtaXRlbSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVooNXB4KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMHB4IDJweCB3aGl0ZXNtb2tlLCBpbnNldCAwcHggLTJweCAycHggYmxhY2s7XHJcbn1cclxubWF0LWxpc3QtaXRlbSBzcGFuIHtcclxuICBjb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxubWF0LWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ubmF2YmFyLXNjcm9sbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstY29sb3I7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gbGVmdCB0b3AsXHJcbiAgICAjZmZlMTQyLFxyXG4gICAgI2ZmZTYzYixcclxuICAgICNmZmVjMzMsXHJcbiAgICAjZmZmMTI5LFxyXG4gICAgI2ZmZjcxZCxcclxuICAgICNmZmY3MWQsXHJcbiAgICAjZmZmNzFkLFxyXG4gICAgI2ZmZjcxZCxcclxuICAgICNmZmYxMjksXHJcbiAgICAjZmZlYzMzLFxyXG4gICAgI2ZmZTYzYixcclxuICAgICNmZmUxNDJcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGFuaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4ucG9wIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5uYXZiYXItc2Nyb2xsIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zaG93X25hdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkJhY2tncm91bmREaWFsb2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5CYWNrZ3JvdW5kRGlhbG9nUmVnaXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAjYWJvdXQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uYWJvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWNvbG9yO1xyXG4gIGZvbnQtZmFtaWx5OiBcInByZWNpb3VzX2ZvbnRcIiwgXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSxcclxuICAgIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gbGVmdCB0b3AsXHJcbiAgICAjOTBkYzg0LFxyXG4gICAgIzg0ZDc4NyxcclxuICAgICM3OGQyODksXHJcbiAgICAjNmNjZDhjLFxyXG4gICAgIzYxYzg4ZSxcclxuICAgICM1N2MzOTAsXHJcbiAgICAjNGRiZjkxLFxyXG4gICAgIzQzYmE5MixcclxuICAgICMzOGI0OTMsXHJcbiAgICAjMmVhZjk0LFxyXG4gICAgIzI0YTk5NCxcclxuICAgICMxYWEzOTRcclxuICApO1xyXG59XHJcbi5hYm91dCBoMSB7XHJcbiAgY29sb3I6IHJnYig1MiwgNTAsIDU4KTtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgZm9udC1mYW1pbHk6IFwicHJlY2lvdXNfZm9udFwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYsIGN1cnNpdmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxcHggYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaGVhZGluZ190ZXh0IHtcclxuICBmb250LWZhbWlseTogXCJCbGFja1dpbmRvd19mb250XCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZiwgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDFweCB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFib3V0IGgyIHtcclxuICBmb250LWZhbWlseTogXCJwcmVjaW91c1wiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYsIGN1cnNpdmU7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiJdfQ== */"], data: { animation: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["menubar_toggle_animation"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["list_stagger"])()] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["menubar_toggle_animation"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["list_stagger"])()],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gQL+":
/*!*********************************************!*\
  !*** ./src/app/animations/app.animation.ts ***!
  \*********************************************/
/*! exports provided: visibility, list_stagger, menubar_toggle_animation, flyInOut, expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list_stagger", function() { return list_stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menubar_toggle_animation", function() { return menubar_toggle_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

function visibility() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.0)',
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0.5)',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out')),
    ]);
}
function list_stagger() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                ])
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ], { optional: true })
        ])
    ]);
}
function menubar_toggle_animation() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOutMenu', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(0, 0, 0)',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translate3d(0, 0, 0)',
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')),
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in'),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 })),
        ]),
    ]);
}
function expand() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        ]),
    ]);
}


/***/ }),

/***/ "hqPK":
/*!**********************************************************!*\
  !*** ./src/app/movie-display/movie-display.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDisplayComponent", function() { return MovieDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/movies */ "P/Vd");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../message.service */ "OdHV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















const _c0 = ["cform"];
function MovieDisplayComponent_div_25_div_2_mat_list_item_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mov_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mov_r5);
} }
function MovieDisplayComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rating : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Related Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieDisplayComponent_div_25_div_2_mat_list_item_21_Template, 3, 1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data1[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", ctx_r2.data1[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Actors : ", ctx_r2.data1[2], ",", ctx_r2.data1[3], ",", ctx_r2.data1[4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data1[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre : ", ctx_r2.data1[8], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx_r2.data1[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.related_movies);
} }
function MovieDisplayComponent_div_25_div_4_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comm_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comm_r9.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comm_r9.rating + " stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "--" + comm_r9.author + " ", " ");
} }
function MovieDisplayComponent_div_25_div_4_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.commenterror.comment);
} }
function MovieDisplayComponent_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieDisplayComponent_div_25_div_4_mat_list_item_8_Template, 7, 3, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MovieDisplayComponent_div_25_div_4_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-slider", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MovieDisplayComponent_div_25_div_4_mat_error_21_Template, 2, 1, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.commentform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("max", 5)("value", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.commenterror.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.commentform.invalid);
} }
function MovieDisplayComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDisplayComponent_div_25_div_2_Template, 23, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDisplayComponent_div_25_div_4_Template, 24, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data_needed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data_needed);
} }
function MovieDisplayComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MovieDisplayComponent {
    constructor(fb, message) {
        this.fb = fb;
        this.message = message;
        this.iter = 0;
        this.movies_data = _shared_movies__WEBPACK_IMPORTED_MODULE_2__["movies"];
        this.keyword = '';
        this.loading = true;
        this.data_needed = false;
        this.related_movies = [];
        this.all_movies = [];
        this.data = true;
        this.data1 = [];
        this.Comment = {
            author: '',
            rating: 5,
            comment: '',
        };
        this.formerrors = {
            author: {
                required: 'The Author name is required',
                minlength: 'name cannot be less than 2 characters',
                maxlength: 'name cannot be above 25 characters',
            },
            comment: {
                required: 'Comment is required',
                minlength: 'Comment cannot be less than 2 characters',
            },
        };
        this.commenterror = {
            author: '',
            comment: '',
        };
        this.comments = [{ comment: "It is a good movie", rating: "4", author: "esakki" }];
        this.subscribtion = this.message.getMessage().subscribe(mes => {
            if (this.iter === 0) {
                const elee = document.getElementsByClassName('movie-display-top');
                Array.from(elee).forEach(val => {
                    val.classList.add('movie-display-top-show');
                });
                this.iter = 1;
            }
            location.href = "#";
            location.href = "#movie-dis-bottom";
            this.keyword = mes.text;
            setTimeout(() => {
                this.loading = false;
                this.inititateCard();
            }, 3000);
            this.inititateCard();
        });
    }
    afterLoad() {
        const ele = document.getElementsByClassName('movie-load-animation');
        Array.from(ele).forEach(val => {
            val.classList.add('vanish');
        });
        const ele1 = document.getElementsByClassName('top-detail-movie-dis');
        Array.from(ele1).forEach(val => {
            val.classList.add('top-detail-show');
        });
        setTimeout(() => {
            Array.from(ele1).forEach(val => {
                val.classList.add('expand');
            });
        }, 500);
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscribtion.unsubscribe();
    }
    createCommentForm() {
        this.commentform = this.fb.group({
            author: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ],
            ],
            rating: 5,
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
        });
        this.commentform.valueChanges.subscribe((data) => this.onValueChange(data));
    }
    inititateCard() {
        var namefirst = this.data1[9];
        if (this.loading) {
            return;
        }
        if (!this.data_needed) {
        }
        this.afterLoad();
        var data01 = '';
        Object.keys(this.movies_data).forEach(val => {
            if (val.toLowerCase().includes(this.keyword.toLowerCase())) {
                data01 = val;
            }
            this.all_movies.push(val);
        });
        if (data01 === '' || this.movies_data[data01] === undefined) {
            this.data_needed = false;
            return;
        }
        else {
            this.data_needed = true;
        }
        if (this.movies_data[data01][9] == undefined || this.movies_data[data01][9] == '') {
            var name = data01;
            this.data1 = this.movies_data[data01];
            this.data1.push(data01);
        }
        else {
            this.data1 = this.movies_data[data01];
        }
        var genre = this.data1[8].split('|');
        this.all_movies.forEach(val => {
            if (this.movies_data[val] !== undefined) {
                var genres = this.movies_data[val][8].split('|');
                Array.from(genre).forEach((val2) => {
                    if (genres.includes(val2)) {
                        if (!this.related_movies.includes(val)) {
                            this.related_movies.push(val);
                        }
                    }
                });
            }
        });
        this.related_movies = this.related_movies.slice(0, 4);
    }
    ngOnInit() {
        this.createCommentForm();
    }
    onValueChange(data) {
        const form = this.commentform;
        if (!this.commentform) {
            return;
        }
        for (const field in this.commenterror) {
            if (this.commenterror.hasOwnProperty(field)) {
                this.commenterror[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.formerrors[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.commenterror[field] += messages[key];
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        this.comments.push(this.commentform.value);
        this.CommentFormDirective.resetForm();
    }
}
MovieDisplayComponent.ɵfac = function MovieDisplayComponent_Factory(t) { return new (t || MovieDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
MovieDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDisplayComponent, selectors: [["app-movie-display"]], viewQuery: function MovieDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.CommentFormDirective = _t.first);
    } }, decls: 28, vars: 2, consts: [[1, "movie-display-top"], [1, "movie-dis", "movie-load-animation"], [1, "loading-0"], [1, "loading-1"], [1, "loading-2"], [1, "loading-3"], [1, "loading-4"], [1, "loading-5"], [1, "loading-6"], ["class", "container", "fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign.gt-sm", "space-around center", "fxLayoutGap", "10px", "fxLayoutGap.xs", "0", 4, "ngIf"], ["class", "notfound", 4, "ngIf"], ["id", "movie-dis-bottom"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign.gt-sm", "space-around center", "fxLayoutGap", "10px", "fxLayoutGap.xs", "0", 1, "container"], ["fxFlex", "40", 1, "top-detail", "top-detail-movie-dis"], [4, "ngIf"], ["fxFlex", "30", 1, "top-detail", "top-detail-movie-dis"], [1, "card-movie", "bvs", "bvs1", 2, "border-radius", "4px"], [2, "text-align", "right"], [2, "color", "yellow"], [4, "ngFor", "ngForOf"], ["matLine", ""], [1, "card-movie"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["cform", "ngForm"], [1, "half-width"], ["matInput", "", "placeholder", "Name", "formControlName", "author", "required", "", "type", "text"], ["tickInterval", "1", "thumbLabel", "true", "formControlName", "rating", 3, "min", "max", "value"], [1, "full-width"], ["matInput", "", "rows", "10", "placeholder", "Your Comment", "formControlName", "comment", "required", "", "type", "text"], ["mat-button", "", "type", "submit", 1, "background-primary", "text-floral-white", 2, "background-color", "red", "color", "white", 3, "disabled"], [1, "notfound"], [2, "display", "inline-block"], [1, "loading-00"], [2, "color", "rgb(27, 25, 25)"], [1, "loading-11"], [1, "loading-22"]], template: function MovieDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movie Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MovieDisplayComponent_div_25_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MovieDisplayComponent_div_26_Template, 11, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data_needed && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".movie-dis[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  height: 40%;\n  width: 100%;\n  display: inline-block;\n  position: relative;\n}\n\n.notfound[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.loading-00[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 80px;\n  width: auto;\n  transform: rotate(-5deg);\n  margin-left: 10px;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  padding-top: 30px;\n  color: black;\n  background-color: skyblue;\n  border-radius: 20px;\n}\n\n.loading-00[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  text-shadow: 1px 2px 0px slategrey;\n}\n\n.loading-11[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  text-shadow: 1px 2px 0px slategrey;\n}\n\n.loading-22[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  text-shadow: 1px 2px 0px slategrey;\n}\n\n.loading-11[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 80px;\n  color: black;\n  width: auto;\n  transform: rotate(5deg);\n  padding-top: 30px;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  margin-left: 10px;\n  background-color: yellow;\n  border-radius: 20px;\n}\n\n.loading-22[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: black;\n  height: 80px;\n  width: auto;\n  transform: rotate(10deg);\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n  margin-left: 10px;\n  padding-top: 30px;\n  background-color: white;\n  border-radius: 20px;\n}\n\n.top-detail[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transition: all 0.3s ease-in;\n  display: none;\n}\n\n.top-detail-show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.expand[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.movie-display-top[_ngcontent-%COMP%] {\n  min-height: 400px;\n  display: none;\n}\n\n.movie-display-top-show[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.loading-0[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 0;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-0 ease normal infinite;\n  text-align: center;\n}\n\n.loading-0[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-0 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(10deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-10deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-1[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 1;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-1 ease normal infinite;\n  text-align: center;\n}\n\n.loading-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-1 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(20deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-20deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-2[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 2;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-2 ease normal infinite;\n  text-align: center;\n}\n\n.loading-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-2 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(30deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-30deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-3[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 3;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-3 ease normal infinite;\n  text-align: center;\n}\n\n.loading-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-3 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(40deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-40deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-4[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 4;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-4 ease normal infinite;\n  text-align: center;\n}\n\n.loading-4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-4 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(50deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-50deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-5[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 5;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-5 ease normal infinite;\n  text-align: center;\n}\n\n.loading-5[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-5 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(60deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-60deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-6[_ngcontent-%COMP%] {\n  background-color: white;\n  align-content: center;\n  height: 80px;\n  width: 80px;\n  position: relative;\n  display: inline-block;\n  left: 6;\n  color: yellow;\n  text-shadow: 1px 2px 0px black;\n  background-color: #0bd8fc;\n  border-radius: 20px;\n  animation: 3s rotate-6 ease normal infinite;\n  text-align: center;\n}\n\n.loading-6[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 40%;\n  font-size: 60px;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n  font-weight: bolder;\n}\n\n@keyframes rotate-6 {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  18% {\n    transform: rotate(70deg);\n  }\n  36% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(-70deg);\n  }\n  80% {\n    transform: rotate(360deg);\n  }\n}\n\n.movie-display-top[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.vanish[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.movie-display-top[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n}\n\ndiv[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-in-out;\n}\n\n.card-movie[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  border: 2px solid #f1f1ef;\n  border-radius: 2%;\n  min-height: 560px;\n  text-align: center;\n  background: #eef4f6;\n  background: linear-gradient(338deg, #eef4f6 5%, #e5f0f3 5%, #e6e8e8 47%, #eef4f6 91%);\n  margin-right: 4px;\n  padding: 10px;\n  background-color: #fcfaee;\n  transform: translateY(10px);\n  color: #1b1717;\n  transition: all 0.5s ease-in-out;\n  box-shadow: 10px 10px 14px 1px rgba(255, 220, 220, 0.2);\n}\n\n.card-movie[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #252424;\n  font-weight: bolder;\n}\n\n.card-movie[_ngcontent-%COMP%]:hover {\n  transform: translateY(0px);\n  transform: scale(1.01);\n  box-shadow: none;\n}\n\n.card-movie[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  border-bottom: solid 4px #f5ca0a;\n  transform: scaleX(0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGlzcGxheS9tb3ZpZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhEQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0FBVUY7O0FBUkE7RUFDRSxtQkFBQTtBQVdGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBWUY7O0FBVkE7RUFDRSxjQUFBO0FBYUY7O0FBVkU7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBYUo7O0FBWEU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0FBY0o7O0FBWkU7RUFDRTtJQUVFLHVCQUFBO0VBY0o7RUFaRTtJQUNFLHdCQUFBO0VBY0o7RUFaRTtJQUNFLHVCQUFBO0VBY0o7RUFaRTtJQUNFLHlCQUFBO0VBY0o7RUFaRTtJQUNFLHlCQUFBO0VBY0o7QUFDRjs7QUFuREU7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBcURKOztBQW5ERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhEQUFBO0VBQ0EsbUJBQUE7QUFzREo7O0FBcERFO0VBQ0U7SUFFRSx1QkFBQTtFQXNESjtFQXBERTtJQUNFLHdCQUFBO0VBc0RKO0VBcERFO0lBQ0UsdUJBQUE7RUFzREo7RUFwREU7SUFDRSx5QkFBQTtFQXNESjtFQXBERTtJQUNFLHlCQUFBO0VBc0RKO0FBQ0Y7O0FBM0ZFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQTZGSjs7QUEzRkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0FBOEZKOztBQTVGRTtFQUNFO0lBRUUsdUJBQUE7RUE4Rko7RUE1RkU7SUFDRSx3QkFBQTtFQThGSjtFQTVGRTtJQUNFLHVCQUFBO0VBOEZKO0VBNUZFO0lBQ0UseUJBQUE7RUE4Rko7RUE1RkU7SUFDRSx5QkFBQTtFQThGSjtBQUNGOztBQW5JRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFxSUo7O0FBbklFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtBQXNJSjs7QUFwSUU7RUFDRTtJQUVFLHVCQUFBO0VBc0lKO0VBcElFO0lBQ0Usd0JBQUE7RUFzSUo7RUFwSUU7SUFDRSx1QkFBQTtFQXNJSjtFQXBJRTtJQUNFLHlCQUFBO0VBc0lKO0VBcElFO0lBQ0UseUJBQUE7RUFzSUo7QUFDRjs7QUEzS0U7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBNktKOztBQTNLRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhEQUFBO0VBQ0EsbUJBQUE7QUE4S0o7O0FBNUtFO0VBQ0U7SUFFRSx1QkFBQTtFQThLSjtFQTVLRTtJQUNFLHdCQUFBO0VBOEtKO0VBNUtFO0lBQ0UsdUJBQUE7RUE4S0o7RUE1S0U7SUFDRSx5QkFBQTtFQThLSjtFQTVLRTtJQUNFLHlCQUFBO0VBOEtKO0FBQ0Y7O0FBbk5FO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQXFOSjs7QUFuTkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0FBc05KOztBQXBORTtFQUNFO0lBRUUsdUJBQUE7RUFzTko7RUFwTkU7SUFDRSx3QkFBQTtFQXNOSjtFQXBORTtJQUNFLHVCQUFBO0VBc05KO0VBcE5FO0lBQ0UseUJBQUE7RUFzTko7RUFwTkU7SUFDRSx5QkFBQTtFQXNOSjtBQUNGOztBQTNQRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUE2UEo7O0FBM1BFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOERBQUE7RUFDQSxtQkFBQTtBQThQSjs7QUE1UEU7RUFDRTtJQUVFLHVCQUFBO0VBOFBKO0VBNVBFO0lBQ0Usd0JBQUE7RUE4UEo7RUE1UEU7SUFDRSx1QkFBQTtFQThQSjtFQTVQRTtJQUNFLHlCQUFBO0VBOFBKO0VBNVBFO0lBQ0UseUJBQUE7RUE4UEo7QUFDRjs7QUEzUEE7RUFDRSxrQkFBQTtBQTZQRjs7QUEzUEE7RUFDRSxhQUFBO0FBOFBGOztBQTVQQTtFQUNFLFlBQUE7RUFDQSw4REFBQTtBQStQRjs7QUE3UEE7RUFDRSxnQ0FBQTtBQWdRRjs7QUE5UEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQU9BLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1REFBQTtBQTJQRjs7QUF6UEE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUE0UEY7O0FBMVBBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBNlBGOztBQTNQQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQThQRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRpc3BsYXkvbW92aWUtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1kaXMge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5vdGZvdW5kIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLmxvYWRpbmctMDAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmb250LWZhbWlseTogXCJtYWdpZXJhX2ZvbnRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5sb2FkaW5nLTAwIGgxIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibWFnaWVyYV9mb250XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4IHNsYXRlZ3JleTtcclxufVxyXG4ubG9hZGluZy0xMSBoMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1hZ2llcmFfZm9udFwiLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDBweCBzbGF0ZWdyZXk7XHJcbn1cclxuLmxvYWRpbmctMjIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBmb250LWZhbWlseTogXCJtYWdpZXJhX2ZvbnRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwcHggc2xhdGVncmV5O1xyXG59XHJcbi5sb2FkaW5nLTExIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogYXV0bztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibWFnaWVyYV9mb250XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmxvYWRpbmctMjIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibWFnaWVyYV9mb250XCIsIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4udG9wLWRldGFpbCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcC1kZXRhaWwtc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmV4cGFuZCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ubW92aWUtZGlzcGxheS10b3Age1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1vdmllLWRpc3BsYXktdG9wLXNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggNiB7XHJcbiAgLmxvYWRpbmctI3skaX0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxlZnQ6ICsgJGk7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMHB4IHJnYigwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYmQ4ZmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiAzcyByb3RhdGUtI3skaX0gZWFzZSBub3JtYWwgaW5maW5pdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sb2FkaW5nLSN7JGl9IGgxIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MCU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJtYWdpZXJhX2ZvbnRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZS0jeyRpfSB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDE4JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKCN7KCgkaSArIDEpICogMTApfWRlZyk7XHJcbiAgICB9XHJcbiAgICAzNiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0jeygoJGkgKyAxKSAqIDEwKX1kZWcpO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vdmllLWRpc3BsYXktdG9wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZhbmlzaCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubW92aWUtZGlzcGxheS10b3AgaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJtYWdpZXJhX2ZvbnRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuZGl2IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uY2FyZC1tb3ZpZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDIzOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgbWluLWhlaWdodDogNTYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzgsIDI0NCwgMjQ2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAzMzhkZWcsXHJcbiAgICByZ2JhKDIzOCwgMjQ0LCAyNDYsIDEpIDUlLFxyXG4gICAgcmdiYSgyMjksIDI0MCwgMjQzLCAxKSA1JSxcclxuICAgIHJnYmEoMjMwLCAyMzIsIDIzMiwgMSkgNDclLFxyXG4gICAgcmdiYSgyMzgsIDI0NCwgMjQ2LCAxKSA5MSVcclxuICApO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUwLCAyMzgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICBjb2xvcjogcmdiKDI3LCAyMywgMjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNHB4IDFweCByZ2JhKDI1NSwgMjIwLCAyMjAsIDAuMik7XHJcbn1cclxuLmNhcmQtbW92aWUgaDEge1xyXG4gIGNvbG9yOiAjMjUyNDI0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmNhcmQtbW92aWU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uY2FyZC1tb3ZpZSBoMTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICNmNWNhMGE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC44KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-display',
                templateUrl: './movie-display.component.html',
                styleUrls: ['./movie-display.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, { CommentFormDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cform']
        }] }); })();


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../message.service */ "OdHV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SearchComponent {
    constructor(elem, message) {
        this.elem = elem;
        this.message = message;
        this.search = { searchkey: '' };
        this.shown = false;
    }
    ngOnInit() {
        this.loadText();
    }
    submit() {
        this.message.sendMessage(this.search.searchkey);
        this.search.searchkey = '';
    }
    showInput(event) {
        if (this.shown) {
            this.submit();
        }
        const ele = document.getElementById('form0');
        ele.classList.remove('login-start');
        ele.classList.add('login');
        const button = event.target;
        button.classList.add('display-none');
        this.shown = true;
        this.unLoadText();
    }
    unLoadText() {
        const ele = document.getElementById('dis-vanish');
        ele.classList.add('vanish');
        const ele1 = document.getElementById('dis-unvanish');
        ele1.classList.add('unvanish');
        const ele2 = document.getElementsByClassName('text-item-search0');
        var i = 0;
        Array.from(ele2).forEach(val => {
            i++;
            setTimeout(() => {
                val.classList.add('text-item-search-show');
            }, 500 * i);
        });
    }
    loadText() {
        const ele = document.getElementsByClassName('text-item-search');
        var i = 0;
        Array.from(ele).forEach(val => {
            i++;
            setTimeout(() => {
                val.classList.add('text-item-search-show');
            }, 500 * i);
        });
    }
    loadhead() {
        const ele = document.getElementsByClassName('first');
        Array.from(ele).forEach((val) => {
            val.classList.add('pop');
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 30, vars: 1, consts: [[1, "search", 3, "mouseenter"], [1, "fir"], ["id", "dis-vanish", 2, "display", "inline-block"], [1, "text-item-search", 2, "display", "inline-block", "padding-right", "2%"], ["id", "dis-unvanish", 2, "display", "none"], [1, "text-item-search0", 2, "display", "inline-block", "padding-right", "2%"], [1, "input-0"], [3, "click"], ["id", "form0", 1, "login-start"], ["name", "searchkey", "placeholder", "Movie/Tag", "type", "text", 1, "inp", 3, "ngModel", "ngModelChange"], ["searchkey", "ngModel"], ["id", "search-0"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SearchComponent_Template_div_mouseenter_0_listener() { return ctx.loadhead(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Looking for Something?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " pretty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "sure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Something ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "is behind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "You Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "It ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_24_listener($event) { return ctx.showInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Search Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_27_listener($event) { return ctx.search.searchkey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search.searchkey);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".search[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 2%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.text-item-search[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.text-item-search0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.vanish[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.unvanish[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\nh1[_ngcontent-%COMP%] {\n  transition: all 1s ease;\n}\n\n.text-item-search-show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@media screen and (max-width: 799px) {\n  .search[_ngcontent-%COMP%] {\n    padding-bottom: 30%;\n  }\n}\n\n.search[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"magiera_font\", curcive;\n  color: whitesmoke;\n  letter-spacing: 2px;\n  font-weight: bolder;\n}\n\nh1[_ngcontent-%COMP%] {\n  transition: all 2s;\n}\n\n.fir[_ngcontent-%COMP%] {\n  transition: all 1s;\n  transform: translate3d(-78%, 0%, 0px);\n}\n\n.popper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.input-0[_ngcontent-%COMP%] {\n  padding-top: 6%;\n  padding-bottom: 10%;\n}\n\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background-color: white;\n  width: 80%;\n  line-height: 250%;\n  border-radius: 20px;\n}\n\n.login-start[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 10%;\n  line-height: 150%;\n  background-color: #252424;\n  border-radius: 20px;\n  text-transform: uppercase;\n  font-family: \"magiera_font\", \"Courier New\", Courier, monospace;\n}\n\ninput[_ngcontent-%COMP%] {\n  text-align: center;\n  border: 2px solid white;\n  transition: all 1s ease;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  width: 40%;\n  transition: all 1s ease-in-out;\n  box-shadow: 10px 10px 14px 1px rgba(255, 253, 253, 0.1);\n  color: white;\n  text-shadow: 0.5px 1px 0px black;\n  font-family: \"Verdana\";\n  font-size: larger;\n  font-weight: bolder;\n  text-transform: uppercase;\n  background-color: yellow;\n  border: 2px solid yellow;\n  border-radius: 20px;\n  line-height: 200%;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  background-color: #d6d605;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  width: 30%;\n  left: 35%;\n  transform: translateY(80px);\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7QUFHRjs7QUFEQTtFQUNFLHdCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQ0FBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7QUFPRjs7QUFMQTtFQUNFO0lBQ0UsbUJBQUE7RUFRRjtBQUNGOztBQU5BO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0FBVUY7O0FBUkE7RUFDRSxxQ0FBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4REFBQTtBQWNGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBZUY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBaUJGOztBQWZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBa0JGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50ZXh0LWl0ZW0tc2VhcmNoIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi50ZXh0LWl0ZW0tc2VhcmNoMCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4udmFuaXNoIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVudmFuaXNoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5oMSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbn1cclxuLnRleHQtaXRlbS1zZWFyY2gtc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTlweCkge1xyXG4gIC5zZWFyY2gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwJTtcclxuICB9XHJcbn1cclxuLnNlYXJjaCBoMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwibWFnaWVyYV9mb250XCIsIGN1cmNpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmgxIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XHJcbn1cclxuLmZpciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTc4JSwgMCUsIDBweCk7XHJcbn1cclxuLnBvcHBlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxufVxyXG4uaW5wdXQtMCB7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbn1cclxuLmxvZ2luIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBsaW5lLWhlaWdodDogMjUwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5sb2dpbi1zdGFydCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNDI0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJtYWdpZXJhX2ZvbnRcIiwgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuaW5wdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG5idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzMCU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE0cHggMXB4IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4xKTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtc2hhZG93OiAwLjVweCAxcHggMHB4IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlZlcmRhbmFcIjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDUpO1xyXG59XHJcbi5kaXNwbGF5LW5vbmUge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbGVmdDogMzUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map