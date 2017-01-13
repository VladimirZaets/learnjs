import { Component } from '@angular/core';

@Component({
    selector: 'menu-item-cmp',
    templateUrl: './app/ui/menu.component/menu.item.component/menu.item.component.html',
    inputs: ['item']
})
export class MenuItemComponent {
    name: string;

    constructor() {
        this.name = 'Vovvaaa'
    }
}
