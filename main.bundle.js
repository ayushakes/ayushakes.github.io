webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staff_staff_component__ = __webpack_require__("../../../../../src/app/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faculty_faculty_component__ = __webpack_require__("../../../../../src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], children: [] },
    { path: "people", component: __WEBPACK_IMPORTED_MODULE_3__people_people_component__["a" /* PeopleComponent */], children: [{ path: "student", component: __WEBPACK_IMPORTED_MODULE_10__student_student_component__["a" /* StudentComponent */] },
            { path: "faculty", component: __WEBPACK_IMPORTED_MODULE_9__faculty_faculty_component__["a" /* FacultyComponent */] },
            { path: "staff", component: __WEBPACK_IMPORTED_MODULE_8__staff_staff_component__["a" /* StaffComponent */] }
        ] },
    { path: "programs", component: __WEBPACK_IMPORTED_MODULE_4__programs_programs_component__["a" /* ProgramsComponent */], children: [] },
    { path: "work", component: __WEBPACK_IMPORTED_MODULE_5__work_work_component__["a" /* WorkComponent */], children: [] },
    { path: "play", component: __WEBPACK_IMPORTED_MODULE_6__play_play_component__["a" /* PlayComponent */], children: [] },
    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */], children: [] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brandi{\r\nfont-size:1em;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top \" >\n    <a class=\"navbar-brand\" routerLink=\"home\">Department of design<img src=\"../assets/images/iit-brand.png\" class=\"img-fluid\" height=\"20px\" width=\"30px\"> </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n      <ul class=\"navbar-nav justify-content-end\">\n          <li class=\"nav-item\" >\n          <a class=\"nav-link \" routerLink=\"home\" >Home</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"people\">people </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"programs\">programs</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"work\">work</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link \" routerLink=\"play\">play</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" routerLink=\"contact\">contact</a>\n          </li>\n        \n      </ul>\n    </div>\n  </nav>\n\n\n<div>\n<router-outlet ></router-outlet></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__programs_programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_student_component__ = __webpack_require__("../../../../../src/app/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_staff_component__ = __webpack_require__("../../../../../src/app/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__faculty_faculty_component__ = __webpack_require__("../../../../../src/app/faculty/faculty.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__programs_programs_component__["a" /* ProgramsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__work_work_component__["a" /* WorkComponent */],
            __WEBPACK_IMPORTED_MODULE_7__play_play_component__["a" /* PlayComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_12__faculty_faculty_component__["a" /* FacultyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n    width: 100%;\r\n    height: 400px;\r\n    \r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/iitContact.PNG\" class=\"img-fluid\" >\r\n<div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=iit guwahati&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.webdesign-muenchen-pb.de\"></a></div><style>.mapouter{overflow:hidden;height:500px;width:600px;}.gmap_canvas {background:none!important;height:500px;width:600px;}</style></div>\r\n\r\n  \r\n<footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\r\n    <p style=\"color:white;\">Footer Text</p>\r\n  </footer>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/faculty.jpg\" class=\"img-fluid\" height=\"600px\" width=\"1080px\" >\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/faculty/faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacultyComponent = (function () {
    function FacultyComponent() {
    }
    FacultyComponent.prototype.ngOnInit = function () {
    };
    return FacultyComponent;
}());
FacultyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-faculty',
        template: __webpack_require__("../../../../../src/app/faculty/faculty.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faculty/faculty.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FacultyComponent);

//# sourceMappingURL=faculty.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n    font-size:1em;\r\n    color:green;\r\n}\r\nh3{\r\n\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3 style=\"margin-top:-90px;\"  >where would you design your dreams?</h3>\n<img src=\"../assets/images/iitHome2.jpg\" class=\"img-fluid \"  >\n<div class=\"row\">\n\n<div class=\"col-md-10\">\n  <p >The Department of Design(DoD), one of the thirteen departments at IIT Guwahati, was set up with a vision to enkindle some of the brightest technical minds of the country a passion for innovation in technology driven by a firm understanding, appreciation and celebration of design.\n    \n      The department offers an M.Des. degree, a B.Des. degree (the only undergraduate level degree of its kind in an Indian Institute of Technology) and a PhD degree in Design. The focus of the program is on the study, invention, and creative use of technologies to create effective, usable, enjoyable experiences with technology through interdisciplinary research in engineering, design, behavioral and social sciences, and to understand the impact of technology on individuals, groups, and organizations. The department envisions to produce successful graduates who will be capable of leading the changing scenarios of today and tomorrow through thought, innovation and values.\n    \n      The institute is situated in North Guwahati, Assam, on the north bank of the river Brahmaputra amidst breathtaking natural beauty and serenity. The full fledged campus sprawls over 285 hectares of gently undulating terrain with several hillocks covered with lush green vegetation, a few lakes and a panoramic view of the mighty river on one side and a ring of blue hills on the other. The Institute is conveniently accessible from all the transport hubs in the Guwahati city\n\n</p>\n</div> \n</div>\n\n<footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\n  <p style=\"color:white;\">Footer Text</p>\n</footer>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".peopleWrapper{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -ms-grid-columns: 30% 70%;\r\n        grid-template-columns: 30% 70%;\r\n    grid-auto-rows: minmax(600px,auto);\r\n    grid-auto-columns:minmax(100px,auto);\r\n    padding:0px 0px 0px 0px;\r\n}\r\n.peopleWrapper>div{\r\n    background:#eee;\r\n}\r\n\r\n.side{\r\n    font-size:13px;  position:relative; margin-left:-1em; \r\n\r\n}\r\n.imgHead{\r\n    max-width:100%;  height:30vw;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width:600px) {\r\n    .side{  color:blue;\r\n\r\n        font-size:1.5vw;\r\n    }\r\n\r\n    .imgHead{\r\n        border:solid greenyellow; max-width:100%; height:auto;\r\n    }\r\n} \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <img class=\"imgHead\" src=\"../assets/images/iitPeopleH.PNG\"  >\n\n\n<div class=\"container-fluid peopleWrapper\">\n <div> <form>\n    <select name=\"SELECT BATCH\" #selection> <span class=\"caret\"></span>\n      <option value=\"2016\">2016</option>\n      <option value=\"2017\">2017</option>\n    </select>\n</form>\n<ul  class=\"side\" > \n\n    <li ><a style=\"color:black;\" routerLink=\"student\" ><strong>students</strong></a></li>\n    <li ><a style=\"color:black;\"  routerLink=\"faculty\"><strong>faculty</strong></a></li>\n    <li ><a style=\"color:black;\"  routerLink=\"staff\"><strong>staff</strong></a></li>\n  </ul>  </div>\n  <div >\n  <router-outlet></router-outlet> </div>\n</div>\n  <footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\n    <p style=\"color:white;\">Footer Text</p>\n  </footer> \n    \n  \n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/people/people.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeopleComponent);

//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<img  class=\"headerimg\" src=\"../assets/images/iitPlay.PNG\" class=\"img-fluid\" >\r\n\r\n\r\n\r\n<div class=\"list-inline\" style=\"color:black;\" style=\"position:relative; top:-35px;\r\nleft:30px; background-color:#b9e91f; width:550px ; height:30px;\r\n\"> \r\n</div>\r\n <!-- <li class=\"list-inline-item\"><a style=\"color:black;\">All Events</a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\">Workshops</a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\">Exhibitions</a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\">Celebrations</a></li>\r\n  </ul> background-color:#b9e91f\r\n-->\r\n  <div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>Bootstrap Tutorial</h1>      \r\n    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>\r\n  </div>\r\n  <p>This is some text.</p>      \r\n  <p>This is another text.</p>      \r\n</div>\r\n  <footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\r\n    <p style=\"color:white;\">Footer Text</p>\r\n  </footer>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayComponent = (function () {
    function PlayComponent() {
    }
    PlayComponent.prototype.ngOnInit = function () {
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../src/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlayComponent);

//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/iitProgrammes.PNG\" class=\"img-fluid\" >\r\n<ul class=\"list-inline\" style=\"color:black;\" style=\"position:relative; top:-35px;\r\nleft:90px; background-color:#0080fe; width:600px;\r\n\">\r\n    <li><a style=\"color:black;\" ><strong>PHd</strong></a></li>\r\n    <li><a style=\"color:black;\"><strong>M.des</strong></a></li>\r\n    <li><a style=\"color:black;\"><strong>B.des</strong></a></li>\r\n  </ul>\r\n  <footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\r\n    <p style=\"color:white;\">Footer Text</p>\r\n  </footer>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramsComponent = (function () {
    function ProgramsComponent() {
    }
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    return ProgramsComponent;
}());
ProgramsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-programs',
        template: __webpack_require__("../../../../../src/app/programs/programs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/programs/programs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgramsComponent);

//# sourceMappingURL=programs.component.js.map

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/staff.jpg\" class=\"img-fluid\" height=\"600px\" width=\"1080px\" >"

/***/ }),

/***/ "../../../../../src/app/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffComponent = (function () {
    function StaffComponent() {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-staff',
        template: __webpack_require__("../../../../../src/app/staff/staff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/staff/staff.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StaffComponent);

//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/iitPeople.PNG\" class=\"img-fluid\" height=\"600px\" width=\"1080px\">"

/***/ }),

/***/ "../../../../../src/app/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentComponent = (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student',
        template: __webpack_require__("../../../../../src/app/student/student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentComponent);

//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "../../../../../src/app/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/iitWork.PNG\" class=\"img-fluid\" >\r\n<ul class=\"list-inline\" style=\"color:black;\" style=\"position:relative; top:-35px;\r\nleft:90px; background-color:#11D2F0; width:600px;\r\n\">\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\" ><strong>Labs</strong></a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\"><strong>Projects</strong></a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\"><strong>Publication</strong></a></li>\r\n    <li class=\"list-inline-item\"><a style=\"color:black;\"><strong>Placements</strong></a></li>\r\n  </ul>\r\n  <footer class=\"container-fluid text-center\" style=\"background-color:black; height:150px; \">\r\n    <p style=\"color:white;\">Footer Text</p>\r\n  </footer>\r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    return WorkComponent;
}());
WorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-work',
        template: __webpack_require__("../../../../../src/app/work/work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/work/work.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WorkComponent);

//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map