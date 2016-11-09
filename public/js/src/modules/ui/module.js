import {LjsMenuComponent} from './components/ljs-menu'
import {LjsMenuOptionComponent} from './components/ljs-menu-option'

let module = angular.module('ui', ['ngSanitize']);

module.component('ljsMenu', LjsMenuComponent);
module.component('ljsMenuOption', LjsMenuOptionComponent);

export {module as uiModule};