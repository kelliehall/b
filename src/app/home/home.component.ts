import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {
    public languages: any[] = [
        { skill: 'Typescript', icon: '' },
        { skill: 'Javascript', icon: '' },
        { skill: 'HTML', icon: 'fa-html5' },
        { skill: 'CSS', icon: 'fa-css3' },
        { skill: 'jQuery', icon: '' }
    ];
    public devTools: any[] = [
        { skill: 'Git', icon: 'fa-git' },
        { skill: 'Webpack', icon: '' },
        { skill: 'Grunt', icon: '' },
        { skill: 'Jasmine', icon: '' },
        { skill: 'Karma', icon: '' },
        { skill: 'Instanbul', icon: '' },
        { skill: 'Node.js', icon: '' }
    ];
    public os: any[] = [
        { skill: 'Windows', icon: 'fa-windows' },
        { skill: 'Debian 7 & 8', icon: '' },
        { skill: 'Ubuntu', icon: 'fa-linux' }
    ];
    public frameworks: any[] = [
        { skill: 'Angular 2', icon: '' },
        { skill: 'Angular 1.5', icon: '' }
    ];
    public other: any[] = [
        { skill: 'vsCode', icon: 'fa-code' },
        { skill: 'MongoDB', icon: '' },
        { skill: 'Postman', icon: '' },
        { skill: 'VMWare', icon: '' },
        { skill: 'PuTTY', icon: '' },
        { skill: 'Stack Overflow', icon: 'fa-stack-overflow' },
        { skill: 'Bitbucket', icon: 'fa-bitbucket' }
    ];

    constructor() {
        // nothing
    }

    ngOnInit(): void {
        // nothing
    }

}
