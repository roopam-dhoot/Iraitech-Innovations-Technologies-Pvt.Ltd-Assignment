import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Subcomp1Component } from './subcomp1/subcomp1.component';
import { Subcomp2Component } from './subcomp2/subcomp2.component';
import { Subcomp3Component } from './subcomp3/subcomp3.component';
import { Subcomp4Component } from './subcomp4/subcomp4.component';
import { DynamicTextFieldComponent } from './dynamic-text-field/dynamic-text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    Subcomp1Component,
    Subcomp2Component,
    Subcomp3Component,
    Subcomp4Component,
    DynamicTextFieldComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
