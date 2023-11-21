import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactUsService} from "../../../services/contact-us/contact-us.service";
import {environment} from "../../../../environments/environment";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({ opacity: 0 })),
            transition(':enter', [animate('0s')]),  // Immediately visible on enter
            transition(':leave', [animate('5s')])  // Fades out over 5 seconds
        ])
    ]
})
export class ContactComponent implements OnInit {
    form: FormGroup;
    successMessageText: string = `Thank you for contacting us! We've received your message and our team will get back to you shortly.`;
    errorMessageText: string = `Oops! Something went wrong. Please try again later.`;
    messageText: string;
    showMessage: boolean;
    success: boolean;

    constructor(private viewportScroller: ViewportScroller,
                private contactUsService: ContactUsService
    ) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            number: new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required]),
            message: new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        if (this.form.invalid) {
            this.displayMessage('error');
            return;
        }
        const formValue: Contact = this.form.value;
        const headers = new Headers();
        headers.append('Content-Type', 'Content-Type: application/json');
        headers.append('X-API-Key', environment.API_KEY);
        this.contactUsService.create<any>(formValue, headers).subscribe((response: any) => {
            console.log(`response: ${JSON.stringify(response)}`);
            if (response) {
                this.displayMessage();
                this.form.reset();
            }
        }, error => {
            this.success = false;
            this.displayMessage('error');
            console.error(`error: ${JSON.stringify(error)}`);
        });
    }

    displayMessage(success: string = 'success') {
        this.showMessage = true;
        this.success = success === 'success';
        this.messageText = success === 'success' ? this.successMessageText : this.errorMessageText;
        setTimeout(() => this.showMessage = false, 5000);
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    noWhitespaceValidator(control: FormControl) {
        return (control.value || '').trim().length ? null : {whitespace: true};
    }

}

type Contact = {
    name: string;
    email: string;
    number: string;
    subject: string;
    message: string;
}
