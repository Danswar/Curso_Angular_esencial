import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    AleatorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
