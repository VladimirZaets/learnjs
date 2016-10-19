import {HeaderController} from './controllers/header.js'
import {FooterController} from './controllers/footer.js'

let module = angular.module('layout', ['app']);

module.controller('HeaderController', HeaderController);
module.controller('FooterController', FooterController);

export {module as layoutModule};