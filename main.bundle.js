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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\r\n<link rel=\"stylesheet\" href=\"../assets/css/style.css\">\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"home\"><img height='40px' width=\"40px\" src=\"../assets/images/iit-brand.png\" ></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"work\">work</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          people\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink='students'>students</a>\r\n          <a class=\"dropdown-item\" routerLink='faculty'>faculty</a>\r\n       \r\n          <a class=\"dropdown-item\" href=\"#\">staff</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"contact\">contact</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<div style=\"position:relative; margin-top:68px;\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\" >\r\n  <div id=\"button\"></div>\r\n<div id=\"container\">\r\n<div id=\"cont\">\r\n<div class=\"footer_center\">\r\n\t   <h3 style=\"color:darkgray;\">Department of Design IIT Guwahati</h3>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'site-one';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(function (data) {
            console.log('UserId: ' + data.userId);
            console.log('Id: ' + data.id);
            console.log('Title: ' + data.title);
        });
        this.http.post('http://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stormpathConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_stormpath__ = __webpack_require__("./node_modules/angular-stormpath/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faculty_faculty_component__ = __webpack_require__("./src/app/faculty/faculty.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }, { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] }, { path: 'faculty', component: __WEBPACK_IMPORTED_MODULE_11__faculty_faculty_component__["a" /* FacultyComponent */] }, { path: 'students', component: __WEBPACK_IMPORTED_MODULE_10__students_students_component__["a" /* StudentsComponent */] }, { path: 'people', component: __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */] }, { path: 'work', component: __WEBPACK_IMPORTED_MODULE_8__work_work_component__["a" /* WorkComponent */] }, { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] }];
function stormpathConfig() {
    var spConfig = new __WEBPACK_IMPORTED_MODULE_3_angular_stormpath__["a" /* StormpathConfiguration */]();
    spConfig.endpointPrefix = 'https://{DNS-LABEL}.apps.stormpath.io';
    return spConfig;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */], __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_8__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_10__students_students_component__["a" /* StudentsComponent */], __WEBPACK_IMPORTED_MODULE_11__faculty_faculty_component__["a" /* FacultyComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/***/ (function(module, exports) {

module.exports = ":host-context(.theme-light) h2 {\r\n    background-color: rgb(33, 33, 201);\r\n  }"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacultyComponent = /** @class */ (function () {
    function FacultyComponent() {
    }
    FacultyComponent.prototype.ngOnInit = function () {
    };
    FacultyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__("./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__("./src/app/faculty/faculty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacultyComponent);
    return FacultyComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".BigHeading{\r\n\r\n    font-size:2.75Vmax;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\n<div class=\"jumbotron jumbotron-fluid \">\n  <div class=\"container\">\n   <div class=\"row\"> <div class=\"col\"> <h1 class=\"display-4 BigHeading\">Department of Design</h1> \n    <p class=\"lead\">Where you design your dreams</p> <p>\n      <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n        Link with href\n      </a>\n      <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n        Button with data-target\n      </button>\n    </p>\n    <div class=\"collapse\" id=\"collapseExample\">\n      <div class=\"card card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n      </div>\n    </div></div> <div class=\"col\"> <figure class=\"effect-lily\">\n      <img src=\"../assets/images/2.jpg\" alt=\"image not Loaded\"/>\n      <figcaption>\n        <div>\n          <h2 style=\"font-size:3vw ; text-shadow: 0px 0 lightcyan, 0 1px lightcyan, 3px 0 lightcyan, 0 -1px lightcyan;\">WE <span style=\"font-size:3vw\">Rock!!!</span></h2>\n          <p style=\"color:lightcyan; text-shadow: 0px 0 black, 0 1px black, 3px 0 black, 0 -1px black; font-size:2vw;\">IIT-G : Where we design our dreams</p>\n        </div>\n        \n      </figcaption>\t\t\t\n    </figure>\n  </div></div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>people works</h3>"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/people/people.component.html"),
            styles: [__webpack_require__("./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\n<div class=\"grid\">\n  <figure class=\"effect-lily\">\n    <img src=\"../assets/images/students2018.png\" alt=\"image not loaded\"/>\n    <figcaption>\n      <div>\n        <h2>batch <span>2018</span></h2>\n        \n      </div>\n     \n    </figcaption>\t\t\t\n  </figure>\n  <figure class=\"effect-lily\">\n    <img src=\"../assets/images/students2019.png\" alt=\"image not loaded\"/>\n    <figcaption>\n      <div>\n        <h2>batch<span>2019</span></h2>\n        \n      </div>\n    \n    </figcaption>\t\t\t\n  </figure>\n</div>"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-students',
            template: __webpack_require__("./src/app/students/students.component.html"),
            styles: [__webpack_require__("./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700%7CPT+Serif:400,700' rel='stylesheet' type='text/css'>\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/clear.css' />\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/common.css' />\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/font-awesome.min.css' />\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/carouFredSel.css' />\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/sm-clean.css' />\n        <link rel=\"stylesheet\" type=\"text/css\"  href='../assets/css/sstyle.css' />\n\n<div class=\"doc-loader\"></div>\n<div class=\"content-1170 header-holder center-relative\">\n    <div class=\"header-logo left\">\n        <a href=\"index.html\">\n            <img src=\"../assets/images/iit-brand.png\" alt=\"imagenotfound\">\n        </a>\n    </div>\n\n    <div class=\"header-menu\">\n        <div class=\"toggle-holder relative\">\n            <div id=\"toggle\">\n                <div class=\"one\"></div>\n                <div class=\"two\"></div>\n                <div class=\"three\"></div>\n            </div>\n        </div>\n\n        <nav id=\"header-main-menu\" class=\"big-menu\">\n            <ul class=\"main-menu sm sm-clean\">\n                <li><a href=\"index.html\" class=\"current\">Home</a></li>\n                <li><a href=\"about.html\">About</a></li>\n                <li><a href=\"about2.html\">About 2</a></li>\n                <li><a href=\"about3.html\">About 3</a></li>\n                <li><a href=\"contact.html\">Contact</a>\n                    <ul class=\"sub-menu\">\n                        <li><a href=\"contact2.html\">Contact + Map</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"clear\"></div>\n    </div>\n    <div class=\"clear\"></div>\n</div>\n\n<div class=\"block content-1170 center-relative\">\n    <div class=\"blog-holder block center-relative\">\n\n        <article id=\"post-1\" class=\"relative blog-item-holder\">\n            <div class=\"post-thumb thumb-html one_thumb relative\">\n                <script>\n                    var slider1_speed = \"500\";\n                    var slider1_auto = \"true\";\n                    var slider1_pagination = \"true\";\n                    var slider1_hover = \"true\";\n                </script>\n                <div class=\"image-slider-wrapper\">\n                    <div class=\"caroufredsel_wrapper\">\n                        <ul id=\"slider1\" class=\"image-slider slides center-text\">\n                            <li><img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\"></li>\n                            <li><img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\"></li>\n                            <li><img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\"></li>\n                        </ul>\n                    </div>\n                    <div class=\"slider1_pagination carousel_pagination left\"></div>\n                    <div class=\"clear\"></div>\n                </div>\n            </div>\n            <div class=\"post-title-holder one_title absolute\">\n                <h2 class=\"entry-title excerpt\">\n                    <a href=\"single.html\">\n                        We are design &amp; digital studio based in New York.<br>\n                        This is our showcase of crafted awesomeness.</a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Design</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n        </article>\n\n\n        <article id=\"post-2\" class=\"relative blog-item-holder\">\n            <div class=\"only-post-title-holder\">\n                <h2 class=\"entry-title excerpt\">\n                    <a href=\"single.html\">\n                        Gathered by gravity bits of moving fluff Flatland venture hearts of the stars Hypatia birth cosmic ocean! Flatland are creatures of the cosmos Orion's sword two ghostly white figures\n                    </a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Handmade</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            \n        </article>\n\n\n        <article id=\"post-3\" class=\"relative blog-item-holder\">\n            <div class=\"post-thumb thumb-image two_third_thumb left\">\n                <img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\">\n            </div>\n            <div class=\"post-title-holder one_third_title right\">\n                <h2 class=\"entry-title\">\n                    <a href=\"single.html\">What was most significant about the office chairs</a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Interior</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            \n        </article>\n\n\n        <article id=\"post-4\" class=\"relative blog-item-holder\">\n            <div class=\"post-thumb thumb-image two_third_thumb right\">\n                <img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\">\n            </div>\n            <div class=\"post-title-holder one_third_title left\">\n                <h2 class=\"entry-title\">\n                    <a href=\"single.html\">\n                        The sky is the limit only for those who aren’t afraid to fly\n                    </a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Packaging</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            \n        </article>\n\n\n        <article id=\"post-5\" class=\"relative blog-item-holder\">\n            <div class=\"post-thumb thumb-image one_third_thumb left\">\n                <img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\">\n            </div>\n            <div class=\"post-title-holder two_third_title right\">\n                <h2 class=\"entry-title\">\n                    <a href=\"single.html\">\n                        To go places and do things that have never been done before, that’s what living is all about\n                    </a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Handmade</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            \n        </article>\n\n\n        <article id=\"post-6\" class=\"relative blog-item-holder\">\n            <div class=\"only-post-title-holder\">\n                <h2 class=\"entry-title excerpt\">\n                    <a href=\"single.html\">\n                        It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.\n                    </a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Handmade</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n           \n        </article>\n\n\n        <article id=\"post-7\" class=\"relative blog-item-holder\">\n            <div class=\"post-thumb thumb-image two_third_thumb right\">\n                <img src=\"../assets/images/1.jpg\" alt=\"imagenotfound\">\n            </div>\n            <div class=\"post-title-holder one_third_title left\">\n                <h2 class=\"entry-title\" style=\"margin-top: 305px;\">\n                    <a href=\"single.html\">I believe every human has a finite number of heartbeats</a>\n                </h2>\n                <div class=\"cat-links\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">Lifestyle</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"clear\"></div>\n            \n        </article>\n\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"block center-relative center-text\">\n        <a class=\"more-posts\">Load more articles</a>\n    </div>\n    <div class=\"clear\"></div>\n</div>\n<script type=\"text/javascript\" src=\"js/jquery.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.smartmenus.min.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/queryloader2.min.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.carouFredSel-6.0.0-packed.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.mousewheel.min.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.touchSwipe.min.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.easing.1.3.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/jquery.nicescroll.min.js\"></script>\n        <script type=\"text/javascript\" src=\"../assets/js/main.js\"></script>\n"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
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
    production: false
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