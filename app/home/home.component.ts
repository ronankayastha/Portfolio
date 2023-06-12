import { Component,OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit{
  workExpList:WorkExperience[]= [
    {
    role:'Software Developer',
    company:'McKinsey & Co',
    duration:'Sep 2020 - Mar 2021',
    description: [
      'Worked with multiple teams to develop desktop and web application',
      'Worked with different technologies such as (Dotnet C++, Java)',
    ],

  },
  {
    role:'Software Developer',
    company:'Rogers',
    duration:'Mar 2021 - May2021',
    description: [
      'Worked with multiple teams to develop desktop and web application',
      'Worked with different technologies such as (Dotnet C++, Java)',
    ],

  },
  {
    role:'  Backend Developer',
    company:'Telus',
    duration:' May 2021 - Dec 2011',
    description: [
      'Worked with multiple teams to develop desktop and web application',
      'Worked with different technologies such as (Dotnet C++, Java)',
    ],

  },
];
constructor() {}
ngOnInit(): void {
  
}
}
