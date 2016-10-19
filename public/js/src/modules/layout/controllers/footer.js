let _state = new WeakMap();

class FooterController {
    constructor($state) {
        _state.set(this, $state);
    }
}
FooterController.$inject = ['$state'];

export {FooterController};