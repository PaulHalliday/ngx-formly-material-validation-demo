import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validators } from '@angular/forms';

export class Contact {
	name: string;
	phoneNumber: string;
	email: string;

	formFields() {
		return <FormlyFieldConfig[]>[
			{
				key: 'name',
				type: 'input',
				templateOptions: { type: 'text', label: 'Name', placeholder: 'Name', required: true },
				validation: { messages: { required: 'You need to provide a name.' } }
			},
			{
				key: 'email',
				type: 'input',
				templateOptions: { type: 'email', label: 'Email', placeholder: 'Email', required: true },
				validation: { messages: { required: 'You need to provide an email.' } }
			},
			{
				key: 'phoneNumber',
				type: 'input',
				templateOptions: { type: 'tel', label: 'Phone Number', placeholder: 'Phone Number', required: true },
				validation: { messages: { required: 'You need to provide a phone number.' } }
			}
		];
	}
}
