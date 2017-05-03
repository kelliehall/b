import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {
    public languages: any[] = [
        { skill: 'Typescript', icon: '' },
        { skill: 'Javascript', icon: '' },
        { skill: 'HTML', icon: 'html5' },
        { skill: 'CSS', icon: 'css3' },
        { skill: 'jQuery', icon: '' }
    ];
    public devTools: any[] = [
        { skill: 'Git', icon: 'git' },
        { skill: 'Webpack', icon: '' },
        { skill: 'Grunt', icon: '' },
        { skill: 'Jasmine', icon: '' },
        { skill: 'Karma', icon: '' },
        { skill: 'Instanbul', icon: '' },
        { skill: 'Node.js', icon: '' }
    ];
    public os: any[] = [
        { skill: 'Windows', icon: 'windows' },
        { skill: 'Debian 7 & 8', icon: '' },
        { skill: 'Ubuntu', icon: 'linux' }
    ];
    public frameworks: any[] = [
        { skill: 'Angular 2', icon: '' },
        { skill: 'Angular 1.5', icon: '' }
    ];
    public other: any[] = [
        { skill: 'vsCode', icon: 'code' },
        { skill: 'MongoDB', icon: '' },
        { skill: 'Postman', icon: '' },
        { skill: 'VMWare', icon: '' },
        { skill: 'PuTTY', icon: '' },
        { skill: 'Stack Overflow', icon: 'stack-overflow' },
        { skill: 'Bitbucket', icon: 'bitbucket' }
    ];

    constructor() {
        //nothing
    }

    ngOnInit() {
        //nothing
    }
}
