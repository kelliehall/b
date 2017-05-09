import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { HomeComponent } from './home';
import { PostsComponent } from './posts';
import { ProjectsComponent } from './projects';
import { ContactComponent } from './contact';
//services
import { SecretService } from './secret';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostsComponent,
        ProjectsComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig),
        BrowserAnimationsModule,
        MaterialModule.forRoot()
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        SecretService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
