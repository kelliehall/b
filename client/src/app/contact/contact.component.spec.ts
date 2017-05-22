import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { Observable, BehaviorSubject } from 'rxjs';
import { ContactComponent } from './';

let comp: ContactComponent;
let fixture: ComponentFixture<ContactComponent>;

describe('ContactComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            providers: [
            ]
        });

        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should disable sending based on validity of the form ', () => {
        expect(comp.isValid).toBeFalsy();
        comp.contactForm.patchValue({ name: 'bob from accounting', email: 'test@test.com', message: 'i want to hire you for all the monies' });
        expect(comp.isValid).toBeTruthy();
    });
});
