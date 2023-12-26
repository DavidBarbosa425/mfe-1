import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/libraries/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CardEquipeComponent } from './equipe/card-equipe/card-equipe.component';
import { CardEquipe } from './equipe/card-equipe/card-equipe.model';
import { EquipeComponent } from './equipe/equipe.component';


@NgModule({
  declarations: [EquipeComponent, CardEquipeComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [EquipeComponent, CardEquipeComponent],
  providers: [],

})
export class EquipeModule {}