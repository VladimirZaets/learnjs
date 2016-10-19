let _state = new WeakMap();

class HeaderController {
    constructor($state) {
        _state.set(this, $state);
    }
    init($state) {
        $state.text = 'Header'
    }
}
HeaderController.$inject = ['$state'];

export {HeaderController};