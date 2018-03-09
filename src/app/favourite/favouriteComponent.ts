import { Component, Input, Output } from '@angular/core';
@Component ({
    moduleId: module.id,
    selector:'app-favourite',
    templateUrl:'favouriteComponent.html'
})
export class favouriteComponent {
    fav : boolean =false;
    @Input() favouriteBookTitle : string;
    @Input() reviews : number;
    onClick():void {
        this.fav = !this.fav;
        console.log('event occured');
    }
}