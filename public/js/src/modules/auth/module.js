import {LjsSignupComponent} from './components/ljs-signup'
let module = angular.module('auth', ['ui']);

module.component('ljsSignup', LjsSignupComponent);

export {module as authModule}