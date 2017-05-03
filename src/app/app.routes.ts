import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PostsComponent } from './posts';
import { ProjectsComponent } from './projects';
import { ContactComponent } from './contact';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent }
];
