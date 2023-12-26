import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BaseComponent } from "../../../shared/base/components/base-page/base.component";

import { CardEquipe } from "./card-equipe.model";


@Component({
    selector: 'card-equipe',
    templateUrl: './card-equipe.component.html',
    styleUrls: ['./card-equipe.component.css']
})

export class CardEquipeComponent extends BaseComponent implements OnInit {

    @Input() card_equipe: CardEquipe = new CardEquipe()
    @Output() pressclick: EventEmitter<boolean> = new EventEmitter();

    ngOnInit(): void {

    }

    pressClick() : void {

        this.pressclick.emit(true)
    }

    getFoto() : string {

        if (this.card_equipe.foto != "")
            return this.card_equipe.foto

        return this.card_equipe.emptyPhoto
    }
}