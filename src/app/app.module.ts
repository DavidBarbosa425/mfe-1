import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/libraries/material/material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}