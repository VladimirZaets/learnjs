import {LjsHeaderComponent} from './components/header.js'
//import {FooterController} from './controllers/footer.js'

let module = angular.module('layout', ['ui', 'app']);

module.component('ljsHeader', LjsHeaderComponent);
//module.controller('FooterController', FooterController);

export {module as layoutModule};