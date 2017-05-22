import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';
import { SecretService } from '../secret';

@Component({
    selector: 'contact',
    template: require('./contact.component.html')
})

export class ContactComponent implements OnInit {
    contactForm: FormGroup;

    constructor(private _fb: FormBuilder,
        private http: Http,
        private _secret: SecretService) {
        this.contactForm = this._fb.group({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void {
        //do nothing
    }

    disableSend(): boolean {
        return this.contactForm.valid;
    }

    send(): void {
        let postmark = 'https://api.postmarkapp.com/email';
        let data = {
            'From': this._secret.getEmail(),
            'To': this._secret.getEmail(),
            'Subject': 'kelbie.rip contact form',
            'TextBody': this.buildMessage(),
            'HtmlBody': this.buildMessage()
        };
        this.http.post(postmark, data, this.getRequestOptionArgs()).subscribe(x => { console.log(x); });
    }

    private buildMessage(): string {
        return 'name: ' + this.contactForm.value.name + '<br>' +
            'email' + this.contactForm.value.email + '<br>' +
            'message' + this.contactForm.value.message;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Accept', 'application/json');
        options.headers.append('X-Postmark-Server-Token', this._secret.getPostmarkServer());

        return options;
    }
}
