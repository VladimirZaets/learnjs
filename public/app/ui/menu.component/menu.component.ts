import { Component } from '@angular/core';
import { MenuItemComponent } from  './menu.item.component/menu.item.component'

@Component({
    selector: 'menu-cmp',
    templateUrl: './app/ui/menu.component/menu.component.html'
})
export class MenuComponent {
    items: Object[];

    constructor() {
        this.items = [
                {
                    name: 'Authorization',
                    link: 'authorization'
                },
                {
                    name: 'secondName',
                    link: 'secondLink'
                },
                {
                    name: 'thirdName',
                    link: 'thirdLink'
                }
            ];
    }
}
