import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller, private http: HttpClient) { }

    ngOnInit() {
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    submit(form){
        var name = form.name;
        console.log(name);

        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);

        var subject = form.subject;
        console.log(subject);

        var message = form.message;
        console.log(message);
        alert('Your message has been sent');
    }
}
