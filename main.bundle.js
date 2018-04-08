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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faculty_faculty_component__ = __webpack_require__("./src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__research_research_component__ = __webpack_require__("./src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_posts_new_post_new_post_component__ = __webpack_require__("./src/app/home/posts/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_posts_new_post_can_deactivate_guard_service__ = __webpack_require__("./src/app/home/posts/new-post/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faculty_teacher_list_edit_teacher_list_edit_component__ = __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'research', component: __WEBPACK_IMPORTED_MODULE_8__research_research_component__["a" /* ResearchComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home/newPost', component: __WEBPACK_IMPORTED_MODULE_9__home_posts_new_post_new_post_component__["a" /* NewPostComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__home_posts_new_post_can_deactivate_guard_service__["a" /* CanDeactivateGuard */]] },
    { path: 'faculty', component: __WEBPACK_IMPORTED_MODULE_7__faculty_faculty_component__["a" /* FacultyComponent */] }, { path: 'teacher-edit', component: __WEBPACK_IMPORTED_MODULE_11__faculty_teacher_list_edit_teacher_list_edit_component__["a" /* TeacherListEditComponent */] },
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_4__work_work_component__["a" /* WorkComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\r\n<link rel=\"stylesheet\" href=\"../assets/css/style.css\">\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"home\"><img height='40px' width=\"40px\" src=\"../assets/images/iit-brand.png\" ></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"home\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"research\">research</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          people\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink='students'>students</a>\r\n          <a class=\"dropdown-item\" routerLink='faculty'>faculty</a>\r\n       \r\n          <a class=\"dropdown-item\" href=\"#\">staff</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"contact\">contact</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<div style=\"position:relative; margin-top:68px;\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\" >\r\n  <div id=\"button\"></div>\r\n<div id=\"container\">\r\n<div id=\"cont\">\r\n<div class=\"footer_center\">\r\n\t   <h3 style=\"color:darkgray;\">Department of Design IIT Guwahati</h3>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faculty_faculty_component__ = __webpack_require__("./src/app/faculty/faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__research_research_component__ = __webpack_require__("./src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_posts_posts_component__ = __webpack_require__("./src/app/home/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_posts_post_post_component__ = __webpack_require__("./src/app/home/posts/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__back_directive__ = __webpack_require__("./src/app/back.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_posts_new_post_new_post_component__ = __webpack_require__("./src/app/home/posts/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_posts_new_post_can_deactivate_guard_service__ = __webpack_require__("./src/app/home/posts/new-post/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__faculty_teacher_teacher_component__ = __webpack_require__("./src/app/faculty/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__faculty_teacher_list_teacher_list_component__ = __webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__faculty_teacher_list_edit_teacher_list_edit_component__ = __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__faculty_shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */], __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_7__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_9__students_students_component__["a" /* StudentsComponent */], __WEBPACK_IMPORTED_MODULE_10__faculty_faculty_component__["a" /* FacultyComponent */], __WEBPACK_IMPORTED_MODULE_11__research_research_component__["a" /* ResearchComponent */], __WEBPACK_IMPORTED_MODULE_12__home_posts_posts_component__["a" /* PostsComponent */], __WEBPACK_IMPORTED_MODULE_13__home_posts_post_post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_14__back_directive__["a" /* BackDirective */], __WEBPACK_IMPORTED_MODULE_15__home_posts_new_post_new_post_component__["a" /* NewPostComponent */], __WEBPACK_IMPORTED_MODULE_21__faculty_teacher_teacher_component__["a" /* TeacherComponent */], __WEBPACK_IMPORTED_MODULE_22__faculty_teacher_list_teacher_list_component__["a" /* TeacherListComponent */], __WEBPACK_IMPORTED_MODULE_23__faculty_teacher_list_edit_teacher_list_edit_component__["a" /* TeacherListEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__shared_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_18__home_posts_new_post_can_deactivate_guard_service__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_25__faculty_shared_teacher_service__["a" /* TeacherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackDirective; });
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

var BackDirective = /** @class */ (function () {
    function BackDirective(elref, renderer) {
        this.elref = elref;
        this.renderer = renderer;
    }
    BackDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elref.nativeElement, 'background-image', 'url(./assets/images/research-icon.png)');
    };
    BackDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appBack]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], BackDirective);
    return BackDirective;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n     \n    \n     \n     <link rel=\"stylesheet\" href=\"../assets/css/style_contact.css\">\n\n\n      <div id=\"form-main\">\n        <div id=\"form-div\">\n          <form class=\"form\" id=\"form1\">\n            \n            <p class=\"name\">\n              <input name=\"name\" type=\"text\" class=\"validate[required,custom[onlyLetter],length[0,100]] feedback-input\" placeholder=\"Name\" id=\"name\" />\n            </p>\n            \n            <p class=\"email\">\n              <input name=\"email\" type=\"text\" class=\"validate[required,custom[email]] feedback-input\" id=\"email\" placeholder=\"Email\" />\n            </p>\n            \n            <p class=\"text\">\n              <textarea name=\"text\" class=\"validate[required,length[6,300]] feedback-input\" id=\"comment\" placeholder=\"Comment\"></textarea>\n            </p>\n            \n            \n            <div class=\"submit\">\n              <input type=\"submit\" value=\"SEND\" id=\"button-blue\"/>\n              <div class=\"ease\"></div>\n            </div>\n          </form>\n        </div>\n      </div>\n    \n\n      "

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<button (click)=\"onClickEdit()\">go to edit section</button>\r\n\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\"  *ngFor=\"let teacher of teacherList\" >{{teacher.name}}-{{teacher.department}}</li>\r\n  </ul>\r\n"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function FacultyComponent(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
    }
    FacultyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.teacherService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.teacherList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.teacherList.push(y);
            });
        });
    };
    FacultyComponent.prototype.onClickEdit = function () {
        this.router.navigate(['/teacher-edit']);
    };
    FacultyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faculty',
            template: __webpack_require__("./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__("./src/app/faculty/faculty.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FacultyComponent);
    return FacultyComponent;
}());



/***/ }),

/***/ "./src/app/faculty/shared/teacher.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Teacher; });
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());



/***/ }),

/***/ "./src/app/faculty/shared/teacher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacher_model__ = __webpack_require__("./src/app/faculty/shared/teacher.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherService = /** @class */ (function () {
    function TeacherService(firebase) {
        this.firebase = firebase;
        this.selectedTeacher = new __WEBPACK_IMPORTED_MODULE_1__teacher_model__["a" /* Teacher */]();
    }
    TeacherService.prototype.getData = function () {
        this.teacherList = this.firebase.list('teacher');
        return this.teacherList;
    };
    TeacherService.prototype.insertTeacher = function (teacher) {
        this.teacherList.push({
            name: teacher.name,
            position: teacher.position,
            department: teacher.department,
            image: teacher.image
        });
    };
    TeacherService.prototype.updateTeacher = function (teacher) {
        this.teacherList.update(teacher.$key, { name: teacher.name,
            position: teacher.position,
            department: teacher.department,
            image: teacher.image
        });
    };
    TeacherService.prototype.deleteTeacher = function (key) { this.teacherList.remove(key); };
    TeacherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div  style=\"text-align:center\">\n<h2 class=\"jumbotron\">teacher list edit section</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-teacher></app-teacher>\n  </div>\n  <div class=\"col-md-5\">\n    <app-teacher-list></app-teacher-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/faculty/teacher-list-edit/teacher-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherListEditComponent = /** @class */ (function () {
    function TeacherListEditComponent(teacherService) {
        this.teacherService = teacherService;
    }
    TeacherListEditComponent.prototype.ngOnInit = function () {
    };
    TeacherListEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher-list-edit',
            template: __webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher-list-edit/teacher-list-edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */]])
    ], TeacherListEditComponent);
    return TeacherListEditComponent;
}());



/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.css":
/***/ (function(module, exports) {

module.exports = "button,ul.list-group.hover li:hover{\r\n    cursor:pointer;\r\n    border:2px solid grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>click on the list item to edit/delete</h3>\n<ul class=\"list-group hover\">\n  <li class=\"list-group-item\"  *ngFor=\"let teacher of teacherList\" (click)=\"onItemClick(teacher)\">{{teacher.name}}-{{teacher.department}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/faculty/teacher-list/teacher-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherListComponent = /** @class */ (function () {
    function TeacherListComponent(teacherService) {
        this.teacherService = teacherService;
    }
    TeacherListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.teacherService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.teacherList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.teacherList.push(y);
            });
        });
    };
    TeacherListComponent.prototype.onItemClick = function (teacher) {
        this.teacherService.selectedTeacher = Object.assign({}, teacher);
        // code is fine but better option is used for performance: this.teacherService.selectedTeacher=teacher;
    };
    TeacherListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher-list',
            template: __webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher-list/teacher-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */]])
    ], TeacherListComponent);
    return TeacherListComponent;
}());



/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p *ngIf=\"inserted\" style=\"color:greenyellow;\">item inserted</p>\n<p *ngIf=\"updated\" style=\"color:greenyellow;\">item updated</p>\n<p *ngIf=\"deleted\" style=\"color:red;\">item deleted</p>\n<form (ngSubmit)=\"onSubmit(teacherForm)\" #teacherForm=\"ngForm\">\n<input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"teacherService.selectedTeacher.$key\">\n  <div class=\"form-group\">\n  <label>name</label>\n  <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.name\" placeholder=\"full name\">\n</div>\n\n<div class=\"form-group\">\n  <label>position</label>\n  <input type=\"text\" class=\"form-control\" name=\"position\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.position\" placeholder=\"position\">\n</div>\n\n<div class=\"form-group\">\n  <label>department</label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-building\"></i></span>\n      \n    </div>\n    <input type=\"text\" class=\"form-control\" name=\"department\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.department\" placeholder=\"department\">\n  </div>\n  \n</div>\n\n<div class=\"form-group\">\n  <label>image</label>\n  <input type=\"text\" class=\"form-control\" name=\"image\" #name=\"ngModel\" required [(ngModel)]=\"teacherService.selectedTeacher.image\" placeholder=\"imagePath\">\n</div>\n\n<div class=\"form-group\">\n<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!teacherForm.valid\"> <i class=\"fa fa-save\"></i>submit</button>\n<button type=\"button\" class=\"btn btn-default\" (click)=\"onDelete(teacherForm)\" *ngIf=\"teacherService.selectedTeacher.$key!=null\"><i class=\"fa fa-trash\"></i>delete</button>\n<button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\"><i class=\"fa fa-redo\" ></i>reset</button>\n\n</div>\n</form>"

/***/ }),

/***/ "./src/app/faculty/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__ = __webpack_require__("./src/app/faculty/shared/teacher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(teacherService) {
        this.teacherService = teacherService;
        this.inserted = false;
        this.updated = false;
        this.deleted = false;
    }
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.teacherService.insertTeacher(form.value);
            this.resetForm();
            this.inserted = true;
        }
        else {
            this.teacherService.updateTeacher(form.value);
            this.updated = true;
        }
    };
    TeacherComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.teacherService.selectedTeacher = {
            $key: null,
            name: '',
            position: '',
            department: '',
            image: ''
        };
    };
    TeacherComponent.prototype.onDelete = function (form) {
        if (confirm("are you sure you want to delete this record") == true) {
            this.teacherService.deleteTeacher(form.value.$key);
            this.resetForm(form);
        }
    };
    TeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher',
            template: __webpack_require__("./src/app/faculty/teacher/teacher.component.html"),
            styles: [__webpack_require__("./src/app/faculty/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teacher_service__["a" /* TeacherService */]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".BigHeading{\r\n\r\n    font-size:2.75Vmax;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../assets/css/set1.css\" />\n<div class=\"jumbotron jumbotron-fluid \">\n  <div class=\"container\">\n   <div class=\"row\"> <div class=\"col\"> <h1 class=\"display-4 BigHeading\">Department of Design</h1> \n    <p class=\"lead\">Where you design your dreams</p> <p>\n      \n    </p> \n    \n   <app-posts></app-posts>\n\n\n\n    </div> <div class=\"col\"> <figure class=\"effect-lily\">\n      <img src=\"../assets/images/2.jpg\" alt=\"image not Loaded\"/>\n      <figcaption>\n        <div>\n          <h2 style=\"font-size:3vw ; text-shadow: 0px 0 lightcyan, 0 1px lightcyan, 3px 0 lightcyan, 0 -1px lightcyan;\">WE <span style=\"font-size:3vw\">Rock!!!</span></h2>\n          <p style=\"color:lightcyan; text-shadow: 0px 0 black, 0 1px black, 3px 0 black, 0 -1px black; font-size:2vw;\">IIT-G : Where we design our dreams</p>\n        </div>\n        \n      </figcaption>\t\t\t\n    </figure>\n  </div></div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/new-post/can-deactivate-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border:2px solid red;\r\n}"

/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <form  (ngSubmit)=\"onAddPost(f)\" #f=\"ngForm\">\n \n<label>Image Url</label><p *ngIf=\"!imageUrl.valid&&imageUrl.touched\">field can't be empty</p>\n  \n<input #imageUrl=\"ngModel\" required class=\"form-control\" ngModel name=\"imageUrl\" id=\"imageUrl\" type=\"text\" placeholder=\"type image url here\"   >\n  <label>title</label><p *ngIf=\"!title.valid&&title.touched\">field can't be empty</p>\n  <input #title=\"ngModel\" required class=\"form-control\" ngModel name=\"title\" id=\"title\" type=\"text\" placeholder=\"type title here\"  >\n  <label>text</label><p *ngIf=\"!text.valid&&text.touched\">field can't be empty</p>\n  <input #text=\"ngModel\" required class=\"form-control\" ngModel name=\"text\" id=\"text\" type=\"text\" placeholder=\"type body here\"  >\n  <label>footerText</label><p *ngIf=\"!footerText.valid&&footerText.touched\">field can't be empty</p>\n  <input #footerText=\"ngModel\" required class=\"form-control\" ngModel name=\"footerText\" id=\"footerText\" type=\"text\" placeholder=\"type footer text here\"  >\n  <button   class=\"btn btn-success\" (click)=\"onConfirm()\" [disabled]=\"confirmed\">{{confirmButtonText}}</button>\n<button  type=\"submit\"  class=\"btn btn-primary\">add the post</button>\n<button   class=\"btn btn-danger\" routerLink=\"/home\">go back to home page</button>\n<p *ngIf=\"postAdded\" style=\"color:limegreen;\">post added!</p>\n\n</form>\n"

/***/ }),

/***/ "./src/app/home/posts/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
        this.confirmed = false;
        this.confirmButtonText = "confirm data";
        this.postAdded = false;
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.canDeactivate = function () {
        if (this.PostForm.touched || this.PostForm.dirty) {
            return confirm('you are in the mid of entering post data.do you wish to leave?');
        }
        else {
            return true;
        }
    };
    NewPostComponent.prototype.onConfirm = function () {
        if (this.PostForm.valid) {
            this.confirmed = true;
            this.confirmButtonText = "data confirmed";
        }
        else {
            return alert('Post is incomplete or invalid.');
        }
    };
    NewPostComponent.prototype.onAddPost = function () {
        if (this.confirmed) {
            console.log("form has been submitted");
            console.log(this.PostForm);
            this.post = new __WEBPACK_IMPORTED_MODULE_2__post_model__["a" /* Post */](this.PostForm.value.imageUrl, this.PostForm.value.title, this.PostForm.value.text, this.PostForm.value.footerText);
            this.postService.addPost(this.post).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            console.log("the data entered in the newly created post by you is as follows ");
            console.log(this.post);
            console.log('post has been added succcessfully');
            this.postAdded = true;
            this.PostForm.reset();
        }
        else {
            return alert(' please confirm the data first');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], NewPostComponent.prototype, "PostForm", void 0);
    NewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-post',
            template: __webpack_require__("./src/app/home/posts/new-post/new-post.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/new-post/new-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(imageUrl, title, text, footerText) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.text = text;
        this.footerText = footerText;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/home/posts/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/posts/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card sm-4\">\n  <img class=\"card-img-top\" src=\"{{post.imageUrl}}\" style=\"height:100px; width:100px;  \" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title\">{{post.title}}</h2>\n    <p class=\"card-text\">{{post.text}}</p>\n    <a href=\"#\" class=\"btn btn-primary\">Read More &rarr;</a>\n  </div>\n  <div class=\"card-footer text-muted\">\n   {{post.footerText}}\n    <a href=\"#\">Start Bootstrap</a>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/home/posts/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__post_model__["a" /* Post */])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/home/posts/post/post.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/home/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border:2px solid red;\r\n}"

/***/ }),

/***/ "./src/app/home/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-danger\" routerLink=\"/home/newPost\">new post</button>\n\n\n<!-- html5 validations  (which are by default disabled by angular can be enabled by using ngNativeValidate on the form-control we want to have on) -->\n\n<ul>\n    \n  <app-post *ngFor=\"let post of posts\" [post]=post></app-post>\n\n</ul>"

/***/ }),

/***/ "./src/app/home/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_post_service__ = __webpack_require__("./src/app/shared/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(router, postService) {
        this.router = router;
        this.postService = postService;
        this.posts = this.postService.posts;
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], PostsComponent.prototype, "PostForm", void 0);
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/home/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/home/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_post_service__["a" /* PostService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = ""

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("./src/app/people/people.component.html"),
            styles: [__webpack_require__("./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/research/research.component.css":
/***/ (function(module, exports) {

module.exports = ".card-body{\r\n    background-color:lightgray;\r\n}"

/***/ }),

/***/ "./src/app/research/research.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n   \n  <h1  style=\"position:relative; z-index:1; margin-bottom:-10px; color:darksalmon; font-size:3em;  \">we love our work  </h1>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"../assets/images/typography.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../assets/images/diwali.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"../assets/images/exhibition1.jpg\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"row justify-content-center\">\n            <p class=\"lead\">The research program in Design at DoD –IITG aims at training researchers in Design not only to consolidate what is known in design but also to build a design knowledge base through original inquiry, experimentation and investigation.\n                DoD is open to new and emerging areas in Design that fall in the triadic cusp of Science, Engineering and the Arts.Research and sponsored projects are the integral part of the department where faculties conduct research experimentation and projects in several areas such as product design, industrial design, transportation design, sustainability, ergonomics, usability engineering, interaction design, graphic design, film and video and many more.\n                \n                Possibilities to pursue research in collaboration with other Engineering and Social Sciences departments in IITG also exist. Interested scholars are invited to get in touch through email with the Faculty at DoD-IITG to explore possibilities.</p>\n            <div class=\"container text-left\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-sm-4\">\n                  <div class=\"card \">\n                    <img  style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"> <a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                          Ongoing Research Projects\n                        </a></h3>\n                        <div class=\"collapse\" id=\"collapseExample\">\n                            <div class=\"card card-body\">\n                              \n\n\t\nTitle: Design Intervention in Street Food Vending in Assam with special emphasis to packaging, display, cart design and space design for improvement of livelihood and hygiene\nPrinciple Investigator: Pratul Kalita, Assistant Professor <br>\nSponsoring Agency: Design Innovation Centre (DIC), MHRD<br>\nTitle: Toolkit for primary school teachers to deliver Education for Sustainability with an activity based teaching approach<br>\nPrinciple Investigator: Sharmistha Banerjee, Assitant Professor<br>\nSponsoring Agency: IIT Guwahati Start-up Research Grant.<br>\n\nTitle: Design, Production and Branding of Bamboo craft in Meghalay <br>\nPrinciple Investigator: Avinash Shinde, Assitant Professor<br>\nCo-Investigator: Ravi MOkashi Punekar, Professor<br>\nSponsoring Agency: Directorate of commerce and Industries Shillong, Government of Meghalaya<br>\n\nTitle: Design Intervention to ameliorate exposure to vibration during use of hand-held vibrating tools in unorganized sector (Stone-polishing work) <br>\nPrinciple Investigator: Sougata Karmakar, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n\nTitle: Ecosystem-based livelihood promotion in Mizoram <br>\nPrinciple Investigator: Avinash Shinde, Assitant Professor<br>\nSponsoring Agency: UNITED NATIONS INDUSTRIAL DEVELOPMENT ORGANIZATION<br>\n\nTitle: Learning Network on Sustainability of Product Services and Systems for Distributed Economies (LeNSin) for DE <br>\nPrinciple Investigator: Ravi Mokashi Punekar, Professor<br>\nCo-Investigator: Pankaj Upadhyay & Sharmistha Banerjee, Assistant Professor\nSponsoring Agency: Education, Audiovisual and Culture Executive Agency (EACEA)<br>\n<br>\nTitle: Improved packaging for long distance transportation of high value horticultural crops<br>\nPrinciple Investigator: Nanki Nath, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n<br>\nTitle: Design Intervention in Street Food Vending in Assam with special emphasis to packaging, display, cart design and space design for improvement of livelihood and hygiene <br>\nPrinciple Investigator: Pratul Kalita, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n\nTitle: A Documentary film & Documentation of craft practices on the banks of Brahmaputra in Assam<br>\nPrinciple Investigator: Charu Monga, Assitant Professor<br>\nSponsoring Agency: IIT Guwahati startup grant<br>\n\nTitle: Design and Development of the Self Assistance Learning Robot for students as DIY kits for North East India<br>\nPrinciple Investigator: Charu Monga, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n\nTitle: Design intervention using Animation techniques in the field of Technology and Entertainment<br>\nPrinciple Investigator: Charu Monga, Assitant Professor<br>\nSponsoring Agency: Microsoft Research<br>\n<br>\nTitle: Kanimuni: Game design for school education<br>\nPrinciple Investigator: Prasad Bokil, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n\nTitle: Design and Development of Interactive Application for Progressive Assessment of Patients with Cleft Lip and Palate (CLP). <br>\nPrinciple Investigator: Abhishek Srivastava, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n<br>\nTitle: Design and evaluation of effective visual interactive voice response system <br>\nPrinciple Investigator: Abhishek Srivastava, Assitant Professor<br>\nSponsoring Agency: IIT Guwahati startup grant<br>\n\nTitle: Electric Vehicle for Urban Use<br>\nPrinciple Investigator: Abhishek Singh, Assitant Professor<br>\nSponsoring Agency: DIC, MHRD<br>\n\nTitle: Generation of invention reports on future of mobile communication<br>\nPrinciple Investigator: Keyur Sorathia, Assitant Professor<br>\nSponsoring Agency: Nokia Global Patent Division<br>\n\nTitle: Creating digital learning environment for design education in India <br>\nPrinciple Investigator: Ravi Mokashi Punekar, Professor<br>\nCo-Investigator: Keyur Sorathia and Avinash Shinde, Assistant Professor<br>\nSponsoring Agency: Ministry of Human Resource and Development (MHRD), Government of India<br>\n                            </div>\n                          </div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"card\">\n                    <img style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"><a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\">\n                          Completed Research Projects\n                        </a></h3><div class=\"collapse\" id=\"collapseExample2\">\n                            <div class=\"card card-body\">\n                                Title: Standardization of Virtual Keyboards in Indic Languages\n                                Principle Investigator: Pradeep Yammiyawar, Professor<br>\n                                Sponsoring Agency: Ministry of Communications & Information Technology<br>\n                                \n                                Title: Design of Gear for Avalanche Survival\n                                Principle Investigator: Ravi Mokashi Punekar, Professor<br>\n                                Sponsoring Agency: ARTRAC, Indian Army<br>\n                                \n                                Title: Visual and Tactile Information Processing in Product Selection Process\n                                Principle Investigator: Sougata Karmakar, Assistant Professor<br>\n                                Sponsoring Agency: Dept. of Biotechnology, Govt. of India<br>\n                                \n                                Title: Research investigations on wearable computing interventions in healthcare and entertainment\n                                Principle Investigator: Keyur Sorathia, Assistant Professor<br>\n                                Sponsoring Agency: Nokia Research Center India<br>\n                                \n                                Title: Accessibility and Mobile User Interfaces\n                                Principle Investigator: Keyur Sorathia, Assistant Professor<br>\n                                Co-Investigator: Prasad Bokil, Assistant Professor <br>\n                                Sponsoring Agency: Samsung Research Institute Bangalore (SRIB)<br>\n                                \n                                Title: Revised DPR of Common Sliver Plant \n                                Principle Investigator: Amarendra Kumar Das, Professor<br> \n                                Sponsoring Agency: KVIC<br>\n                                \n                                Title: Revised DPR of Khadi Haat \n                                Principle Investigator: Amarendra Kumar Das, Professor<br> \n                                Sponsoring Agency: KVIC<br>\n                                \n                                Title: Flag and Badge Design \n                                Principle Investigator: D Udaya Kumar, Assistant Professor <br>\n                                Sponsoring Agency: Assam Rajiv Gandhi University of Cooperative Management<br>\n                                \n                                Title: Presentations & Infographics \n                                Principle Investigator: D Udaya Kumar, Assistant Professor <br>\n                                Sponsoring Agency: Northeast Consumer Awards<br>\n                                \n                                Title: Logo Design for IIIT Sricity \n                                Principle Investigator: D Udaya Kumar, Assistant Professor <br>\n                                Sponsoring Agency: IIIT Sricity<br>\n                                \n                                Title: Designing Bamboo Products \n                                Principle Investigator: Avinash Shinde, Assistant Professor <br>\n                                Sponsoring Agency: UNIDO\n                                <br>\n                                Title: Development of an online design ideation tool \n                                Principle Investigator: Pratul Kalita, Assistant Professor <br>\n                                Sponsoring Agency: All India Council for Technical Education<br>\n                                \n                                Title: Short term training program on Automotive Ergonomics and Design \n                                Principle Investigator: Sougata Karmakar, Assistant Professor <br>\n                                Sponsoring Agency: TATA Elxsi Ltd<br>\n                                \n                                Title:Impact Evaluation Study on Irrigation and Roads & Bridges Projects supported under RIDF in Assam \n                                Principle Investigator: Amarendra Kumar Das, Professor <br>\n                                Sponsoring Agency: National Bank for Agriculture and Rural Development(NABARD)<br>\n                                \n                                Title:Redesigning the Bed‐Planter agro‐machine according to the principles of the Human Centered Design (HCD) approach in the Cereal Systems Initiative for South Asia – Mechanization and Irrigation (CSISA‐MI) in Bangladesh \n                                Principle Investigator: Sharmistha Banerjee, Assistant Professor <br>\n                                Sponsoring Agency: International Development Enterprise Bangladesh<br>\n                                \n                                Title:Design of Fruit and Vegetable Cart for Guwahati Municipal Corporation\n                                Principle Investigator: D Udaya Kumar, Assistant Professor <br>\n                                Co-Investigators: Supradip Das & Pankaj Upadhyay, Assistant Professors Sponsoring Agency: Guwahati Municipal Corporation\n                                <br>\n                                Title:Research on Dhobi and Dhobighats - Phase I \n                                Principle Investigator: Keyur Sorathia, Assistant Professor <br>\n                                Sponsoring Agency: P&G, Brussels<br>\n                                \n                                Title:Impact Evaluation Study on Irrigation andRoads & Bridges Projects supported under RIDF in Assam\n                                Principle Investigator: Amarendra Kumar Das, Professor <br>\n                                Co-Investigators: Pratul Kalita, Assistant Professor <br>\n                                Sponsoring Agency: National Bank for Agriculture and Rural Development(NABARD)<br>\n                                \n                                Title:Research in Smartphone Accessibility Domain\n                                Principle Investigator: Keyur Sorathia, Assistant Professor <br>\n                                Sponsoring Agency: Samsung Research Institute Bangalore (SRIB)<br>\n                                \n                                Title:Workshop on Development of bamboo products in Assam\n                                Principle Investigator: Ravi Mokashi Punekar, Professor <br>\n                                Co-Investigators: Avinash Shinde, Assistant Professor <br>\n                                Sponsoring Agency: State Institute of Rural Development, Guwahati<br>\n                                \n                                Title: Design of a logo for rural networking buses, Assam State Transportation Corporation (ASTC) \n                                Principle Investigator: D.Udaya Kumar, Assistant Pr<br>ofessor<br>\n                                Sponsoring Agency: Government of Assam<br>\n                                \n                                Title: Logo design for IIT Hyderabad, Hyderabad\n                                Principle Investigator: D.Udaya Kumar, Assistant Professor<br>\n                                Sponsoring Agency: Indian Institute of Technology Hyderabad<br>\n                                \n                                Title: Design of Logo for Assam Rajiv Gandhi University of Cooperative Management\n                                Principle Investigator: D.Udaya Kumar, Assistant Professor<br>\n                                Sponsoring Agency: Assam Rajiv Gandhi University of Cooperative Management<br>\n                                \n                                Title: Logo Design for Integrated Guwahati Flood Management Project\n                                Principle Investigator: D.Udaya Kumar, Assistant Professor<br>\n                                Sponsoring Agency: District Disaster Management Authority<br>\n                                \n                                Title: Logo Design for District Disaster Management Authority\n                                Principle Investigator: D.Udaya Kumar, Assistant Professor<br>\n                                Sponsoring Agency: District Disaster Management Authority<br>\n                                \n                                Title: Design and Evaluation of Play Ground for Primary School Children in Virtual Environment\n                                Principle Investigator: Sougata Karmakar, Assistant Professor <br>\n                                Sponsoring Agency: Indian Institute of Technology Guwahati<br>\n                                \n                                Title: Design and development of an information system to educate pregnant women and family members about prenatal and postnatal care in Assam, India\n                                Principle Investigator: Keyur Sorathia, Assistant Professor<br>\n                                Sponsoring Agency: Indian Institute of Technology Guwahati<br>\n                                \n                                Title: Study of social acceptance of gesture based interfaces for low literate, low socio-economic rural users\n                                Principle Investigator: Keyur Sorathia, Assistant Professor<br>\n                                Sponsoring Agency: IBM Research India<br>\n                                \n                                Title: Creative Design, Prototyping & Experiential Simulation Lab In  Human Computer Interaction<br>\n                                Principle Investigator: Pradeep Yammiyavar<br>\n                                Sponsoring Agency: Ministry of Human Resource and Development (MHRD), GOI<br>\n                                \n                                Title: Lecture notes preparatory to a text book: Digital Human Modeling and Simulation in Product and workstation Design\n                                Principle Investigator: Sougata Karmakar, Assistant Professor <br>\n                                Sponsoring Agency: QIP CD Cell, Indian Institute of Technology Guwahati<br>\n                                \n                                Title: Introduction to ergonomics special reference to industrial design’, course ID 107103004- 40 video lecture series\n                                Principle Investigator: Debkumar Chakrabarti, Professor <br>\n                                Sponsoring Agency: Ministry of Human Resource and Development (MHRD), Government of India<br>\n                                \n                                Title: Fundamental of Design (Web Course<br>)\n                                Principle Investigator: Utpal Barua, Associate Professor <br>\n                                Sponsoring Agency: NPTEL<br>\n                                \n                                Title: Logo Design Book <br>\n                                Principle Investigator: D.Udaya Kumar, Assistant Professor<br>\n                                Sponsoring Agency: Assam Rajiv Gandhi University of Cooperative Management<br>\n                                \n                                Title: Wireframe design of False Alarm application design<br>\n                                Principle Investigator: Keyur Sorathia, Assistant Professor<br>\n                                Sponsoring Agency: PMAM Pvt. Ltd.<br>\n                            </div>\n                          </div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"card\">\n                    <img style=\"height:300px; width:250px;\" src=\"../assets/images/research-icon.png\" alt=\"\" class=\"card-img-top\">\n                    <div class=\"card-block\">\n                      <h3 class=\"card-title text-center\"><a class=\"btn btn-outline-secondary\" data-toggle=\"collapse\" href=\"#collapseExample3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample3\">\n                        Publications \n                      </a></h3><div class=\"collapse\" id=\"collapseExample3\">\n                          <div class=\"card card-body\">hello</div>\n                      <p class=\"card-text\"></p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n       </div>\n      </div>\n      <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n          <h1 class=\"display-4\">Always looking forward to make world better designed</h1>\n          <p class=\"lead\">we worship our commitments </p>\n        </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/research/research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
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

var ResearchComponent = /** @class */ (function () {
    function ResearchComponent() {
    }
    ResearchComponent.prototype.ngOnInit = function () {
    };
    ResearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-research',
            template: __webpack_require__("./src/app/research/research.component.html"),
            styles: [__webpack_require__("./src/app/research/research.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_posts_post_model__ = __webpack_require__("./src/app/home/posts/post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.posts = [new __WEBPACK_IMPORTED_MODULE_0__home_posts_post_model__["a" /* Post */]('https://5.imimg.com/data5/HQ/WW/MY-20499589/sitting-ganesh-ji-statue-500x500.jpg', 'Jay Shri Ganesh ', 'Shri ganeshaye namah', 'Posted by Ayush sharma ')];
    }
    PostService.prototype.getPosts = function () {
        return this.http.get('https://site-one-bc07f.firebaseio.com/.json');
    };
    PostService.prototype.ngOnInit = function () {
        var _this = this;
        this.getPosts().subscribe(function (response) { var data = response.json(); _this.posts = data; }, function (error) { return console.log(error); });
    };
    PostService.prototype.addPost = function (post) {
        this.posts.push(post);
        return this.http.put('https://site-one-bc07f.firebaseio.com/.json', this.posts);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = ""

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDY_V6wOWaJ3efjLKrcG2fHTW6OpFQq9uU",
        authDomain: "site-one-bc07f.firebaseapp.com",
        databaseURL: "https://site-one-bc07f.firebaseio.com",
        projectId: "site-one-bc07f",
        storageBucket: "site-one-bc07f.appspot.com",
        messagingSenderId: "778108263344"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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