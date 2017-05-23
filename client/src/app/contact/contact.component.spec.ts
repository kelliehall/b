import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import {
    RequestOptions,
    Http,
    ResponseOptions,
    Response,
    BaseRequestOptions,
    ConnectionBackend
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './';
import { SecretService } from '../secret';

let comp: ContactComponent;
let fixture: ComponentFixture<ContactComponent>;

describe('ContactComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            providers: [
                BaseRequestOptions,
                MockBackend,
                SecretService,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend,
                        defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule
            ]
        });

        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should disable sending based on validity of the form ', () => {
        comp.contactForm.patchValue({ name: 'bob from accounting', email: 'test@test.com', message: 'i want to hire you for all the monies' });
        expect(comp.isValid()).toBeTruthy();
        comp.contactForm.patchValue({ name: null, email: 'test@test.com', message: 'i want to hire you for all the monies' });
        expect(comp.isValid()).toBeFalsy();
    });
});
