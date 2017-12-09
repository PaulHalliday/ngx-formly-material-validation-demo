import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './models/contact.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	contactForm: FormGroup;
	contactModel: Contact;
	contactFields: Array<FormlyFieldConfig>;

	constructor() {
		this.contactForm = new FormGroup({});
		this.contactModel = new Contact();
		this.contactFields = this.contactModel.formFields();
	}

	submit(contact: Contact) {
		console.log(contact);
	}
}
