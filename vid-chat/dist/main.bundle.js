webpackJsonp(["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-login></app-login>-->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_service_1 = __webpack_require__("./src/app/service/config.service.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var signup_component_1 = __webpack_require__("./src/app/signup/signup.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var sidebar_component_1 = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var video_component_1 = __webpack_require__("./src/app/video/video.component.ts");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'video', component: video_component_1.VideoComponent, outlet: 'side' },
            { path: 'account', component: login_component_1.LoginComponent, outlet: 'side' },
            { path: 'search', component: search_component_1.SearchComponent, outlet: 'side' },
            { path: 'profile', component: profile_component_1.ProfileComponent, outlet: 'side' }
        ] },
    // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                profile_component_1.ProfileComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                video_component_1.VideoComponent,
                home_component_1.HomeComponent,
                search_component_1.SearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [
                user_service_1.UserService,
                config_service_1.ConfigService,
                login_service_1.LoginService,
                rtc_service_1.RtcService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".f_search{\n    background-color: #D8D8D8;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav class=\"sticky-top w-100 p-0\">\n        <div class=\"row w-100 h-100p\">\n            <div class=\"col-md-2 dark nav-row brand_link\">\n                <a routerLink=\"/profile\" class=\"col-md-2\">\n                    <font color=\"white\">Vid-Chat</font>\n                </a>\n            </div>\n            <div class=\"col-md-10 dark nav-row p-0 logout\">\n                <div class=\"col-md-2 dark nav-row\" style=\"float:right\">\n                    <a routerLink=\"/login\" class=\"col-md-2\">\n                        <font color=\"white\">logout</font>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.lookupUsername.bind(this);
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        //this.search.nativeElement.addEventListener('modelChange', this.lookupUsername.bind(this));
    };
    HeaderComponent.prototype.lookupUsername = function (value) {
        if (value.indexOf(';') >= 0)
            console.log(this.email);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild('input_search'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "search", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#remote{\n    /*background-color: #8080AF;\n    width: 98%;*/\n    height: 96%;\n    position: absolute;\n}\n#self{\n    z-index: 1;\n    width: 20%;\n    height: 18%;\n    /*background-color: #70A570;*/\n    position: absolute;\n    top: 40px;\n    left:40px;\n}\n#r_vid{\n    /*width: 100%;\n    height: 100%;*/\n    z-index: 2;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n#s_vid{\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    /*position: relative;\n    top: 20px;\n    left:20px;*/\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row h-100\">\n  <div class=\"col-md-2\">\n    <app-sidebar (emmiter)='makeCall($event);'></app-sidebar>\n  </div>\n  <main class=\"col-md-10\" style=\"height:100%\">\n      <div #viewChannels [ngClass]=\"{'hide': !onCall}\">\n        <div id=\"remote\">\n            <video #remote id=\"r_vid\" src=\"\" autoplay=\"true\"></video>\n            <div class=\"controls\" style=\"background-color:whitesmoke\">\n              <span class=\"\">\n                <button class=\"ctrl-btn\" (click)=\"hangup();\">\n                    <svg class=\"svg-icon\" viewBox=\"0 0 1154 1177\" aria-labelledby=\"fnsi-bootstrap-off-title\" id=\"si-bootstrap-off\" width=\"100%\" height=\"100%\"><title id=\"fnsi-bootstrap-off-title\">Hang Up</title><path d=\"M527 0h100q21 0 35.5 14.5T677 50v400q0 21-14.5 35.5T627 500H527q-21 0-35.5-14.5T477 450V50q0-21 14.5-35.5T527 0zm250 225V59q167 62 272 209.5T1154 600q0 117-45.5 224t-123 184.5-184.5 123-224 45.5-224-45.5-184.5-123T45.5 824 0 600q0-184 105-331.5T377 59v166q-103 55-165 155t-62 220q0 116 57 214.5T362.5 970t214.5 57 214.5-57T947 814.5t57-214.5q0-120-62-220T777 225z\"></path></svg>\n                </button>\n              </span>\n              <span class=\"\">\n                <button (click)=\"mute();\" class=\"ctrl-btn\">\n                  <svg class=\"svg-icon\" id=\"aud01\">\n                      <title id=\"fnsi-bootstrap-off-title\">Mute</title>\n                    <path d=\"M32 18h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C31.33 22.61 32 20.38 32 18zm-8.03.33c0-.11.03-.22.03-.33V6c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM2.55 2L0 4.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H4c0 6.83 5.44 12.47 12 13.44V38h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L33.45 38 36 35.46 2.55 2z\"></path>\n                  </svg>\n                </button>\n              </span>\n              <span class=\"\">\n                <button (click)=\"go_fullscreen();\" class=\"ctrl-btn\">\n                    <svg viewBox=\"0 0 1200 1200\" aria-labelledby=\"djsi-bootstrap-fullscreen-title\" id=\"si-bootstrap-fullscreen\" width=\"100%\" height=\"100%\" class=\"svg-icon\">\n                      <title id=\"djsi-bootstrap-fullscreen-title\">Fullscreen</title>\n                      <path d=\"M50 0h300q21 0 25 10.5T365 35l-94 94 199 199q7 8 7 18t-7 18L364 470q-8 7-18 7t-18-7L129 271l-94 94q-14 14-24.5 10T0 350V50q0-21 14.5-35.5T50 0zm800 0h300q21 0 35.5 14.5T1200 50v300q0 21-10.5 25t-24.5-10l-94-94-199 199q-8 7-18 7t-18-7L730 364q-7-8-7-18t7-18l199-199-94-94q-14-14-10-24.5T850 0zM364 730l106 106q7 8 7 18t-7 18l-199 199 94 94q14 14 10 24.5t-25 10.5H50q-21 0-35.5-14.5T0 1150V850q0-21 10.5-25T35 835l94 94 199-199q8-7 18-7t18 7zm707 199l94-94q14-14 24.5-10t10.5 25v300q0 21-14.5 35.5T1150 1200H850q-21 0-25-10.5t10-24.5l94-94-199-199q-7-8-7-18t7-18l106-106q8-7 18-7t18 7z\"></path></svg>\n                </button>\n              </span>\n          </div>\n        </div>\n        <div id=\"self\">\n            <video #local id=\"s_vid\" autoplay=\"true\" src=\"\"></video>\n        </div>\n        <div [ngClass]=\"{'hide': incoming}\" class=\"shield text-center\">\n            <button #pickup style=\"background:  none;border:  none;\">\n              <svg width=\"54.077px\" height=\"54.077px\" viewBox=\"0 0 540.077 540.077\">\n                  <path d=\"M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076     c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194     C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876     c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z\" style=\"fill: rgb(0, 0, 0);\"></path>\n              </svg>\n            </button>\n        </div>\n      </div>\n      <div [ngClass]=\"{'hide': onCall}\">\n        <router-outlet name=\"side\"></router-outlet>\n      </div>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var logging_service_1 = __webpack_require__("./src/app/service/logging.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, loginService, router, rtcService) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.rtcService = rtcService;
        this.friends = new Array();
        this.incoming = true;
        this.onCall = false;
        this.muted = false;
    }
    HomeComponent.prototype.dummy_user = function () {
        var user = new user_1.User();
        user.username = 'divyank01';
        user.email = 'divyank01@gmail.com';
        this.loginService.user = user;
        return user;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.loginService.user;
        if (!user) {
            this.router.navigateByUrl('login');
        }
        this.user = this.loginService.user;
        this.rtcService.setup_peer();
        this.rtcService.get_listeners().on('INCOMING', function (data) {
            _this.setup_click_listeners(data);
        });
        this.rtcService.get_listeners().on('STREAM', function (streams) {
            _this.streams = streams;
            _this.remote.nativeElement.src = URL.createObjectURL(streams.remote);
            _this.local.nativeElement.src = URL.createObjectURL(streams.local_muted);
        });
    };
    HomeComponent.prototype.setup_click_listeners = function (data) {
        var _this = this;
        var aud = new Audio('assets/audio/call.mp3');
        aud.loop = true;
        aud.play();
        this.incoming = false;
        this.onCall = true;
        this.caller = data.from;
        this.pick.nativeElement.innerHTML = this.pick.nativeElement.innerHTML + '<br/>Getting call from ' + data.from;
        this.pick.nativeElement.addEventListener('click', this.rtcService.receive_call.bind(this.rtcService, data));
        this.pick.nativeElement.addEventListener('click', function () {
            _this.incoming = true;
            aud.pause();
        });
    };
    HomeComponent.prototype.hangup = function () {
        this.rtcService.hangup();
        this.streams.remote.getTracks().forEach(function (track) {
            track.stop();
        });
        this.streams.local.getTracks().forEach(function (track) {
            track.stop();
        });
        this.streams.local_muted.getTracks().forEach(function (track) {
            track.stop();
        });
        this.router.navigateByUrl('home/(side:profile)');
        this.onCall = false;
    };
    HomeComponent.prototype.send_no_audio = function () {
        this.streams.local.getAudioTracks;
    };
    HomeComponent.prototype.makeCall = function (username) {
        this.rtcService.setup_peer();
        this.onCall = true;
        this.rtcService.call(username);
    };
    HomeComponent.prototype.mute = function () {
        var _this = this;
        logging_service_1.log('mute is called');
        this.muted = !this.muted;
        var remote = this.streams.remote;
        if (this.muted) {
            remote.getAudioTracks().forEach(function (track) {
                track.enabled = false;
                track.addEventListener('track', _this.do_mute);
            });
        }
        else {
            remote.getAudioTracks().forEach(function (track) {
                track.enabled = true;
                track.removeEventListener('track', _this.do_mute);
            });
        }
    };
    HomeComponent.prototype.do_mute = function (track) {
        logging_service_1.log('on track event listener is called to mute');
        track.enabled = false;
    };
    HomeComponent.prototype.go_fullscreen = function () {
        var elem = this.remote.nativeElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], HomeComponent.prototype, "friends", void 0);
    __decorate([
        core_1.ViewChild('local'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "local", void 0);
    __decorate([
        core_1.ViewChild('remote'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "remote", void 0);
    __decorate([
        core_1.ViewChild('pickup'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "pick", void 0);
    __decorate([
        core_1.ViewChild('viewChannels'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "vc", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Boolean)
    ], HomeComponent.prototype, "incoming", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Boolean)
    ], HomeComponent.prototype, "onCall", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "caller", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            login_service_1.LoginService,
            router_1.Router,
            rtc_service_1.RtcService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"signin\" class=\"text-center\">\n  <div class=\"form-signin\">\n      <img class=\"mb-4\" src=\"/assets/images/smile.png\" alt=\"\" width=\"72\" height=\"72\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n      <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"login.username\" required autofocus>\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"login.password\" required>\n      <div class=\"checkbox mb-3\">\n          <label>\n              <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n      </div>\n      <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)='try_login();'>Sign in</button>\n      <a class=\"new_user\" routerLink=\"/signup\">New user</a>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; Divyank Sharma</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = __webpack_require__("./src/app/models/login.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.login = new login_1.Login();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.try_login = function () {
        var _this = this;
        console.log(JSON.stringify(this.login));
        this.loginService.check_login(this.login)
            .subscribe(function (data) {
            console.log(data);
            if (data.login) {
                _this.loginService.user = data.user;
                console.log('logging in as ' + _this.loginService.user.username);
                _this.router.navigateByUrl('home');
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", login_1.Login)
    ], LoginComponent.prototype, "login", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/models/login.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.pending = [];
        this.sent = [];
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    {{user.username}}\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, loginService, router, rtcService) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.rtcService = rtcService;
        this.friends = new Array();
        this.incoming = true;
    }
    ProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.loginService.user;
    };
    ProfileComponent.prototype.pick_up = function (data) {
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], ProfileComponent.prototype, "friends", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "user", void 0);
    __decorate([
        core_1.ViewChild('local'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "local", void 0);
    __decorate([
        core_1.ViewChild('remote'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "remote", void 0);
    __decorate([
        core_1.ViewChild('pickup'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "pick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Boolean)
    ], ProfileComponent.prototype, "incoming", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", String)
    ], ProfileComponent.prototype, "caller", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            login_service_1.LoginService,
            router_1.Router,
            rtc_service_1.RtcService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <br/><br/><br/>\n  <input type=\"text\" [(ngModel)]=\"query\"/><input type=\"button\" (click)=\"search();\" value=\"search\"/>\n  <ul>\n      <li class=\"nav-item li_friend\" *ngFor=\"let user of results\">\n          <a class=\"nav-link\" (click)=\"send_friend_request(user);\">\n              <span data-feather=\"file-text\"></span>\n              {{user.firstname}} {{user.lastname}}\n          </a>\n      </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, loginService, rtcService) {
        this.userService = userService;
        this.loginService = loginService;
        this.rtcService = rtcService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.send_friend_request = function (user) {
        console.log('sfr ' + JSON.stringify(user));
        var loggedin_user = {
            username: this.loginService.user.username,
            firstname: this.loginService.user.firstname,
            lastname: this.loginService.user.lastname
        };
        this.rtcService.send_fr(loggedin_user, user);
        /*this.userService.send_fr(this.loginService.user.username,user.username).subscribe((data)=>{
          JSON.stringify(data);
        });*/
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.userService.search_user(this.query).subscribe(function (data) {
            _this.results = data;
            console.log(JSON.stringify(_this.results));
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], SearchComponent.prototype, "results", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "query", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, login_service_1.LoginService, rtc_service_1.RtcService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/service/config.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.header = { headers: { 'Content-Type': 'application/json; charset=utf-8' } };
        this.ws_url = "wss://10.84.170.212:9900";
        this.audio_only = {
            video: false,
            audio: true
        };
        this.video_only = {
            video: true,
            audio: false
        };
        this.av = {
            video: true,
            audio: true //change this,
        };
        this.keys = {
            AWS: '54.214.115.221',
            AWS_PORT: '9200',
            LOCAL: 'localhost',
            L_IP: '192.168.0.5',
            L_PORT: '9900'
        };
        this.ws_config = {
            HOST: this.keys.AWS,
            PORT: this.keys.AWS_PORT,
            PROTO: 'wss://'
        };
    }
    ConfigService.log = true;
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;


/***/ }),

/***/ "./src/app/service/logging.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var config_service_1 = __webpack_require__("./src/app/service/config.service.ts");
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());
exports.LoggingService = LoggingService;
function log(msg) {
    if (config_service_1.ConfigService.log) {
        console.log(msg);
    }
}
exports.log = log;


/***/ }),

/***/ "./src/app/service/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var config_service_1 = __webpack_require__("./src/app/service/config.service.ts");
var LoginService = /** @class */ (function () {
    function LoginService(http, config) {
        this.http = http;
        this.config = config;
    }
    LoginService.prototype.check_login = function (login) {
        return this.http.post('/api/CL', JSON.stringify(login), this.config.header);
    };
    Object.defineProperty(LoginService.prototype, "user", {
        get: function () {
            return this.loggedInUser;
        },
        set: function (user) {
            this.loggedInUser = user;
        },
        enumerable: true,
        configurable: true
    });
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, config_service_1.ConfigService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/app/service/rtc.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_service_1 = __webpack_require__("./src/app/service/config.service.ts");
var rtc_event_1 = __webpack_require__("./src/app/service/rtc_event.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var logging_service_1 = __webpack_require__("./src/app/service/logging.service.ts");
/**
 * @author Divyank Sharma
 * @description Provides RTC service requires websocket server listening at server side.
 *              User is required to register first with a UUID some thing like a unique
 *              username is a good option. After setting up peer user can listen for a
 *              STREAM event and need to to keep litening for an INCOMING event for any
 *              incoming calls.
 */
var RtcService = /** @class */ (function () {
    function RtcService(configService) {
        this.configService = configService;
        //---------------------------------------------------messaging is over -------------------------------------------------
        /**
         * ------------------------------------------------handle rtc peer connection ------------------------------------------
         */
        this.ice_config = {
            'iceServers': [
                { 'urls': 'stun:stun.services.mozilla.com' },
                { 'urls': 'stun:stun.l.google.com:19302' }
            ]
        };
        this.streams = {
            local: null,
            remote: null,
            local_muted: null
        };
        this.ICE_queue = [];
        //-------------------------------------------------- RTC part is over -----------------------------------------------------
        /**
         * --------------------------------------------------- Event Emitter ------------------------------------------------------
         */
        this.rtcEvent = new rtc_event_1.RTCEvent();
    }
    RtcService.prototype.register = function (username) {
        this.WSS_URL = this.configService.ws_config.PROTO +
            this.configService.ws_config.HOST + ':' +
            this.configService.ws_config.PORT;
        logging_service_1.log('register is called with params ' + username);
        if (this.username != username && this.ws) {
            this.ws.close();
            this.username = username;
            this.ws = new WebSocket(this.WSS_URL + '?uname=' + username);
        }
        if (!this.ws) {
            this.username = username;
            this.ws = new WebSocket(this.WSS_URL + '?uname=' + username);
        }
        this.ws.onmessage = this.recv_ws_msg.bind(this);
    };
    RtcService.prototype.send = function (msg) {
        var _this = this;
        if (this.ws.readyState === this.ws.OPEN) {
            this.ws.send(msg);
        }
        else {
            this.ws.onopen = function () {
                _this.ws.send(msg);
            };
        }
    };
    RtcService.prototype.recv_ws_msg = function (msg) {
        var data = JSON.parse(msg.data);
        if (data.type === 'OFFER_DESC' || data.type === 'ANSWER_DESC') {
            this.recv_desc(data);
        }
        else if (data.type === 'ICE') {
            this.ICE_queue.push(data);
        }
        else if (data.type === 'STATUS_UPDATE') {
            this.recv_friends_status(data);
        }
        else if (data.type === 'INCOMING_FR') {
            //u got a new fr ;)
            console.log('got a new fr');
            console.log(msg.data);
            this.handle_incoming_fr(data);
        }
        else if (data.type === 'FR_ACCEPT') {
            //handle accepted fr
            console.log('your fr got accepted by ' + data.friend);
            this.handle_accepted_fr(data);
        }
        else {
            logging_service_1.log('error aaya hai on recv_ws_msg');
        }
    };
    RtcService.prototype.setup_peer = function () {
        this.pc = new RTCPeerConnection(this.ice_config);
        this.pc.onicecandidate = this.got_new_ice.bind(this);
        this.pc.onaddstream = this.got_remote_stream.bind(this);
        return this.rtcEvent;
    };
    RtcService.prototype.got_new_ice = function (event) {
        if (event.candidate) {
            //send it to remote;
            var msg = {
                type: 'ICE',
                payload: event.candidate,
                fwdTo: this.callee
            };
            this.send(JSON.stringify(msg));
        }
    };
    RtcService.prototype.add_new_ice = function (data) {
        logging_service_1.log('got ICE');
        this.pc.addIceCandidate(new RTCIceCandidate(data.payload));
    };
    RtcService.prototype.add_stream = function (data) {
        var _this = this;
        if (this.pc.signalingState === 'closed') {
            this.setup_peer();
        }
        navigator.getUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
        var evnt = new rtc_event_1.RTCEvent();
        logging_service_1.log(this.pc.iceConnectionState);
        navigator.getUserMedia(this.configService.av, function (local_stream) {
            _this.pc.addStream(local_stream);
            _this.streams.local = local_stream;
            navigator.getUserMedia(_this.configService.video_only, function (l_stream) {
                _this.streams.local_muted = l_stream;
                evnt.emit('GOT_STREAM', data);
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
        return evnt;
    };
    RtcService.prototype.got_remote_stream = function (event) {
        logging_service_1.log('received remote stream');
        this.streams.remote = event.stream; //remote_stream;
        this.rtcEvent.emit('STREAM', this.streams);
    };
    RtcService.prototype.call = function (callee) {
        logging_service_1.log('call is called with username ' + this.username + ' and callee ' + callee);
        this.callee = callee;
        this.add_stream(callee).on('GOT_STREAM', this.get_offer.bind(this, callee));
    };
    RtcService.prototype.recv_desc = function (msg) {
        var _this = this;
        if (msg.type === 'OFFER_DESC') {
            this.rtcEvent.emit('INCOMING', msg);
        }
        if (msg.type === 'ANSWER_DESC') {
            this.pc.setRemoteDescription(new RTCSessionDescription(msg.payload)).then(function () {
                logging_service_1.log('remote is set now and rtciceconnectionstate is ' + _this.pc.iceConnectionState);
            });
        }
    };
    RtcService.prototype.allow_call = function (msg) {
        this.add_stream(msg).on('GOT_STREAM', this.get_answer.bind(this, msg));
    };
    RtcService.prototype.receive_call = function (data) {
        this.allow_call.call(this, data);
    };
    RtcService.prototype.get_answer = function (msg) {
        var _this = this;
        logging_service_1.log('got answer is called');
        this.pc.setRemoteDescription(new RTCSessionDescription(msg.payload)).then(function () {
            _this.pc.createAnswer().then(function (answer) {
                var new_msg = {
                    type: 'ANSWER_DESC',
                    payload: answer,
                    fwdTo: msg.from
                };
                _this.pc.setLocalDescription(new RTCSessionDescription(answer));
                _this.send(JSON.stringify(new_msg));
            });
        }).then(function () {
            // process ICE candidate now
            _this.ICE_queue.forEach(function (candidate) {
                _this.add_new_ice(candidate);
            });
        });
    };
    RtcService.prototype.get_offer = function (callee) {
        var _this = this;
        this.pc.createOffer({ offerToReceiveAudio: 1, offerToReceiveVideo: 1 }).then(function (offer) {
            var msg = {
                type: 'OFFER_DESC',
                payload: offer,
                fwdTo: callee,
                from: _this.username
            };
            _this.pc.setLocalDescription(new RTCSessionDescription(offer));
            _this.send(JSON.stringify(msg));
        }).then(function () {
            // process ICE candidate now
            _this.ICE_queue.forEach(function (candidate) {
                _this.add_new_ice(candidate);
            });
        });
    };
    RtcService.prototype.hangup = function () {
        this.pc.close();
    };
    RtcService.prototype.get_listeners = function () {
        return this.rtcEvent;
    };
    RtcService.prototype.updateFriends = function (uname, friends, req_sent, req_recv) {
        logging_service_1.log('sending friends');
        this.friends = friends;
        this.req_sent = req_sent;
        this.req_recv = req_recv;
        var msg = {
            username: uname,
            FRIENDS: friends,
            type: 'FRIENDS'
        };
        this.send(JSON.stringify(msg));
    };
    RtcService.prototype.send_fr = function (user, friend) {
        var msg = {
            user: user,
            friend: friend,
            type: 'SFR'
        };
        this.req_sent.push(friend);
        this.send(JSON.stringify(msg));
    };
    RtcService.prototype.accept_fr = function (user, friend) {
        var msg = {
            user: user,
            friend: friend,
            type: 'AFR'
        };
        this.friends.push(friend);
        for (var i = 0; i < this.req_recv.length; i++) {
            if (!this.req_recv[i] || this.req_recv[i].username === friend.username) {
                //var index = this.req_recv.indexOf(i, 0);
                //if (index > -1) {
                this.req_recv.splice(i, 1);
                //}
            }
        }
        this.send(JSON.stringify(msg));
    };
    RtcService.prototype.recv_friends_status = function (data) {
        logging_service_1.log('recving friends' + JSON.stringify(data));
        this.friends.forEach(function (friend) {
            data.friends.forEach(function (d) {
                if (friend.username === d.f_id) {
                    if (d.state === 'ONLINE') {
                        friend.isOnline = true;
                    }
                    if (d.state === 'OFFLINE') {
                        friend.isOnline = false;
                    }
                }
            });
        });
    };
    RtcService.prototype.handle_incoming_fr = function (data) {
        this.req_recv.push(data.friend);
    };
    RtcService.prototype.handle_accepted_fr = function (data) {
        this.friends.push(data.friend);
        for (var i = 0; i < this.req_sent.length; i++) {
            if (!this.req_sent[i] || this.req_sent[i].username === data.friend.username) {
                //var index = this.req_sent.indexOf(i, 0);
                //if (index > -1) {
                this.req_sent.splice(i, 1);
                //}
            }
        }
    };
    RtcService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [config_service_1.ConfigService])
    ], RtcService);
    return RtcService;
}());
exports.RtcService = RtcService;


/***/ }),

/***/ "./src/app/service/rtc_event.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RTCEvent = /** @class */ (function () {
    function RTCEvent() {
        this.events = {};
    }
    RTCEvent.prototype.on = function (evntName, fn) {
        this.events[evntName] = fn;
    };
    RTCEvent.prototype.emit = function (evntName, data) {
        console.log(evntName);
        this.events[evntName].call(null, data);
    };
    return RTCEvent;
}());
exports.RTCEvent = RTCEvent;


/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var config_service_1 = __webpack_require__("./src/app/service/config.service.ts");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var UserService = /** @class */ (function () {
    function UserService(_http, config, login) {
        this._http = _http;
        this.config = config;
        this.login = login;
    }
    UserService.prototype.get_friends = function (username) {
        return this._http.get('/api/GFS/' + username);
    };
    UserService.prototype.wss_get_friends = function (email) {
        return this._http.get('/api/GFS/' + email);
    };
    UserService.prototype.search_user = function (query) {
        return this._http.get('/api/SU/' + query);
    };
    UserService.prototype.send_fr = function (user, friend) {
        return this._http.get('/api/SFR/' + user + '/' + friend);
    };
    UserService.prototype.accept_fr = function (user, friend) {
        return this._http.get('/api/AFR/' + user + '/' + friend);
    };
    UserService.prototype.add_user = function (user) {
        return this._http.post('/api/AU', user);
    };
    UserService.prototype.get_users = function (users) {
        return this._http.get('/api/GU/' + JSON.stringify(users));
    };
    UserService.prototype.updatePeerId = function (user) {
        return this._http.put('', user);
    };
    UserService.prototype.updateUser = function (user) {
        return this._http.put('/UU', user);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, config_service_1.ConfigService, login_service_1.LoginService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-side-menu {\n    overflow: auto;\n    font-family: verdana;\n    font-size: 12px;\n    font-weight: 200;\n    background-color: #2e353d;\n    position: fixed;\n    top: 0px;\n    width: 300px;\n    height: 100%;\n    color: #e1ffff;\n  }\n  .nav-side-menu .brand {\n    background-color: #23282e;\n    line-height: 50px;\n    display: block;\n    text-align: center;\n    font-size: 14px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: none;\n  }\n  .nav-side-menu ul,\n  .nav-side-menu li {\n    list-style: none;\n    padding: 0px;\n    margin: 0px;\n    line-height: 35px;\n    cursor: pointer;\n    /*    \n      .collapsed{\n         .arrow:before{\n                   font-family: FontAwesome;\n                   content: \"\\f053\";\n                   display: inline-block;\n                   padding-left:10px;\n                   padding-right: 10px;\n                   vertical-align: middle;\n                   float:right;\n              }\n       }\n  */\n  }\n  .nav-side-menu ul :not(collapsed) .arrow:before,\n  .nav-side-menu li :not(collapsed) .arrow:before {\n    font-family: FontAwesome;\n    content: \"\\f078\";\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n    float: right;\n  }\n  .nav-side-menu ul .active,\n  .nav-side-menu li .active {\n    border-left: 3px solid #d19b3d;\n    background-color: #4f5b69;\n  }\n  .nav-side-menu ul .sub-menu li.active,\n  .nav-side-menu li .sub-menu li.active {\n    color: #d19b3d;\n  }\n  .nav-side-menu ul .sub-menu li.active a,\n  .nav-side-menu li .sub-menu li.active a {\n    color: #d19b3d;\n  }\n  .nav-side-menu ul .sub-menu li,\n  .nav-side-menu li .sub-menu li {\n    background-color: #181c20;\n    border: none;\n    line-height: 28px;\n    border-bottom: 1px solid #23282e;\n    margin-left: 0px;\n  }\n  .nav-side-menu ul .sub-menu li:hover,\n  .nav-side-menu li .sub-menu li:hover {\n    background-color: #020203;\n  }\n  .nav-side-menu ul .sub-menu li:before,\n  .nav-side-menu li .sub-menu li:before {\n    font-family: FontAwesome;\n    content: \"\\f105\";\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n  }\n  .nav-side-menu li {\n    padding-left: 0px;\n    border-left: 3px solid #2e353d;\n    border-bottom: 1px solid #23282e;\n  }\n  .nav-side-menu li a {\n    text-decoration: none;\n    color: #e1ffff;\n  }\n  .nav-side-menu li a i {\n    padding-left: 10px;\n    width: 20px;\n    padding-right: 20px;\n  }\n  .nav-side-menu li:hover {\n    border-left: 3px solid #d19b3d;\n    background-color: #4f5b69;\n    -webkit-transition: all 1s ease;\n    transition: all 1s ease;\n  }\n  @media (max-width: 767px) {\n    .nav-side-menu {\n      position: relative;\n      width: 100%;\n      margin-bottom: 10px;\n    }\n    .nav-side-menu .toggle-btn {\n      display: block;\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      z-index: 10 !important;\n      padding: 3px;\n      background-color: #ffffff;\n      color: #000;\n      width: 40px;\n      text-align: center;\n    }\n    .brand {\n      text-align: left !important;\n      font-size: 22px;\n      padding-left: 20px;\n      line-height: 50px !important;\n    }\n  }\n  @media (min-width: 767px) {\n    .nav-side-menu .menu-list .menu-content {\n      display: block;\n    }\n  }\n  body {\n    margin: 0px;\n    padding: 0px;\n  }\n  "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar col-md-12\" style=\"overflow:auto;\">\n    <div class=\"side_tabs\"><a [routerLink]=\"['/home', {outlets: {'side': ['search']}}]\">Find Friends</a></div>\n    <div class=\"side_tabs\"><a [routerLink]=\"['/home', {outlets: {'side': ['profile']}}]\">Profile</a></div>\n    <div class=\"toggle-btn side_tabs\">\n        <font class=\"f_toggle\" data-toggle=\"collapse\" data-target=\"#menu-content\">Friends \n          <span class=\"f_count\">{{friends?.length}}</span></font>\n        <ul class=\"collapse p-0 m-0\" id=\"menu-content\">\n                <li class=\"nav-item li_friend\" *ngFor=\"let friend of friends\">\n                    <a class=\"nav-link\" (click)=\"makeCall(friend);\">\n                        <span data-feather=\"file-text\"></span>\n                        <svg height=\"10\" width=\"10\" *ngIf=\"friend?.isOnline\" style=\"left:0\">\n                            <circle cx=\"5\" cy=\"5\" r=\"4\" fill=\"green\" />\n                        </svg>\n                        <svg height=\"10\" width=\"10\" *ngIf=\"!friend?.isOnline\" style=\"left:0\">\n                            <circle cx=\"5\" cy=\"5\" r=\"4\" fill=\"white\" />\n                        </svg>\n                        {{friend?.firstname}} {{friend?.lastname}}\n                    </a>\n                </li>\n            </ul>\n    </div>\n    <div class=\"toggle-btn side_tabs\">\n        <font class=\"f_toggle\" data-toggle=\"collapse\" data-target=\"#fr\">Friend Requests\n          <span class=\"f_count\">{{friend_requests?.length}}</span></font>\n        <ul class=\"collapse p-0 m-0\" id=\"fr\">\n                <li class=\"nav-item li_friend\" *ngFor=\"let friend of friend_requests\">\n                    <a class=\"nav-link\" (click)=\"accept_fr(friend);\">\n                        <span data-feather=\"file-text\"></span>\n                        {{friend.firstname}} {{friend.lastname}}\n                    </a>\n                </li>\n            </ul>\n    </div>\n    <div class=\"toggle-btn side_tabs\">\n        <font class=\"f_toggle\" data-toggle=\"collapse\" data-target=\"#rs\">Requests sent \n          <span class=\"f_count\">{{requests_sent?.length}}</span></font>\n        <ul class=\"collapse p-0 m-0\" id=\"rs\">\n                <li class=\"nav-item li_friend\" *ngFor=\"let friend of requests_sent\">\n                    <a class=\"nav-link\">\n                        <span data-feather=\"file-text\"></span>\n                        {{friend.firstname}} {{friend.lastname}}\n                    </a>\n                </li>\n            </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService, loginService, router, rtcService) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.rtcService = rtcService;
        this.friends = new Array();
        this.friend_requests = new Array();
        this.requests_sent = new Array();
        this.emmiter = new core_1.EventEmitter();
    }
    SidebarComponent.prototype.dummy_user = function () {
        var user = new user_1.User();
        user.username = 'divyank01';
        user.email = 'divyank01@gmail.com';
        this.loginService.user = user;
        return user;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.loginService.user;
        if (!user || user === null) {
            this.router.navigateByUrl('login');
            return;
        }
        if (!user.sent) {
            user.sent = [];
        }
        if (!user.pending) {
            user.pending = [];
        }
        //let email:string=this.loginService.user.email;
        this.userService.get_friends(user.username).subscribe(function (data) {
            _this.friends = data;
            _this.rtcService.register(user.username);
            _this.rtcService.updateFriends(user.username, _this.friends, _this.requests_sent, _this.friend_requests);
        });
        var pendings = [].concat(user.pending).concat(user.sent);
        this.userService.get_users(pendings).subscribe(function (data) {
            var users = data;
            users.forEach(function (_user) {
                if (user.sent.includes(_user.username)) {
                    _this.requests_sent.push(_user);
                }
                if (user.pending.includes(_user.username)) {
                    _this.friend_requests.push(_user);
                }
            });
        });
    };
    SidebarComponent.prototype.makeCall = function (user) {
        if (user.isOnline)
            this.emmiter.emit(user.username);
    };
    SidebarComponent.prototype.accept_fr = function (user) {
        console.log(' called afr ' + JSON.stringify(user));
        var loggedin_user = {
            username: this.loginService.user.username,
            firstname: this.loginService.user.firstname,
            lastname: this.loginService.user.lastname
        };
        this.rtcService.accept_fr(loggedin_user, user);
        //this.userService.accept_fr(this.loginService.user.username,user.username).subscribe((data)=>{
        //  console.log(data);
        //});
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "friends", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "friend_requests", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "requests_sent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "emmiter", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            login_service_1.LoginService,
            router_1.Router,
            rtc_service_1.RtcService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" class=\"text-center\">\n  <div class=\"form-signin\">\n      <img class=\"mb-4\" src=\"/assets/images/smile.png\" alt=\"\" width=\"72\" height=\"72\">\n      <h1 class=\"h3 mb-3 font-weight-normal\">Welcome</h1>\n      <label for=\"_inputEmail\" class=\"sr-only\">username</label>\n      <input type=\"text\" id=\"_inputEmail\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"user.login.username\"  required autofocus>\n      <label for=\"_inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"_inputPassword\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.login.password\" required>\n      <label for=\"email\" class=\"sr-only\">email</label>\n      <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"user.email\" required>\n      <label for=\"firstname\" class=\"sr-only\">firstname</label>\n      <input type=\"text\" id=\"firstname\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"user.firstname\"  required>\n      <label for=\"lastname\" class=\"sr-only\">lastname</label>\n      <input type=\"text\" id=\"lastname\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"user.lastname\" required>\n      <label for=\"sex\" class=\"sr-only\">sex</label>\n      <input type=\"text\" id=\"sex\" class=\"form-control\" placeholder=\"Sex\" [(ngModel)]=\"user.sex\" required>\n      <label for=\"age\" class=\"sr-only\">age</label>\n      <input type=\"text\" id=\"age\" class=\"form-control\" placeholder=\"Age\" [(ngModel)]=\"user.age\" required>\n      <br/>\n      <button class=\"btn btn-lg btn-dark btn-block\" type=\"button\" (click)='add_user();'>Register</button>\n      <a class=\"new_user\" routerLink=\"/login\">Existing user</a>\n      <p class=\"mt-5 mb-3 text-muted\">&copy; Divyank Sharma</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __webpack_require__("./src/app/models/user.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_1 = __webpack_require__("./src/app/models/login.ts");
var user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
        this.user.login = new login_1.Login();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.add_user = function () {
        this.user.username = this.user.login.username;
        this.userService.add_user(this.user).subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], SignupComponent.prototype, "user", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/video/video.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p>\n  video compo loaded;\n</p>"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rtc_service_1 = __webpack_require__("./src/app/service/rtc.service.ts");
var login_service_1 = __webpack_require__("./src/app/service/login.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var VideoComponent = /** @class */ (function () {
    function VideoComponent(loginService, rtcService, router) {
        this.loginService = loginService;
        this.rtcService = rtcService;
        this.router = router;
        this.incoming = true;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.loginService.user;
        this.rtcService.setup_peer().on('INCOMING', function (data) {
            _this.incoming = false;
            _this.caller = data.from;
            _this.pick.nativeElement.innerHTML = _this.pick.nativeElement.innerHTML + '<br/>Getting call from ' + data.from;
            _this.pick.nativeElement.addEventListener('click', _this.rtcService.receive_call.bind(_this.rtcService, data));
        });
        /*this.rtcService.get_streams().on('STREAM',(streams)=>{
          this.remote.nativeElement.src=URL.createObjectURL(streams.remote);
          this.local.nativeElement.src=URL.createObjectURL(streams.local);
        });*/
    };
    VideoComponent.prototype.makeCall = function (user) {
        console.log(JSON.stringify(user));
        this.rtcService.call(user.username);
    };
    __decorate([
        core_1.ViewChild('local'),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "local", void 0);
    __decorate([
        core_1.ViewChild('remote'),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "remote", void 0);
    __decorate([
        core_1.ViewChild('pickup'),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "pick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Boolean)
    ], VideoComponent.prototype, "incoming", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", String)
    ], VideoComponent.prototype, "caller", void 0);
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'app-video',
            template: __webpack_require__("./src/app/video/video.component.html"),
            styles: [__webpack_require__("./src/app/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            rtc_service_1.RtcService,
            router_1.Router])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map