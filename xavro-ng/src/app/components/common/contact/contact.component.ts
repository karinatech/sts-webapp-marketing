import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactUsService} from "../../../services/contact-us/contact-us.service";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    form: FormGroup;

    constructor(private viewportScroller: ViewportScroller,
                private contactUsService: ContactUsService
    ) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            description: new FormControl('', [Validators.required]),
            number: new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required]),
            message: new FormControl('', [Validators.required]),
        });
    }

    onSubmit() {
        const formValue: Contact = this.form.value;
        const headers = new Headers();
        headers.append('Content-Type', 'Content-Type: application/json');
        headers.append('X-API-Key', environment.API_KEY);
        this.contactUsService.create<any>(formValue, headers).subscribe((response: any) => {
            console.log(`response: ${JSON.stringify(response)}`);
            if (response) {
                this.form.reset();
            }
        }, error => {
            console.error(`error: ${JSON.stringify(error)}`);
        });
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
