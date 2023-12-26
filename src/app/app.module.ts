import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { EquipeModule } from './features/equipe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, EquipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}