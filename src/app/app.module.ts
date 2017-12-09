import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		ReactiveFormsModule,
		FormlyModule.forRoot(),
		FormlyMaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
