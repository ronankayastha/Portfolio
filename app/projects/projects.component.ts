import { Component, OnInit } from '@angular/core';
import {Project} from '../models/models';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects: Project[]=[
  {
    title:'Google Cloud, Gmail Gooogle Maos',
    technologies:'Cloud Computing, Angular, Angular Material',
    description: [
      'Worked as a team lead to develop apps that are powered by cloud',
      'Built the services of Google Map that can be used by third party apps to get data.',
      'Wasn part of team to expand the google drive'
    ]

  },
  {title:'ChromeOS',
  technologies:'C, C++',
  description: [
    'Worked as a team lead to develop ChromeOs',
    'Got to learn abot linux kernal',
    'Learned C, C++ to build an O.S'
  ]

  },

{title:'Google Toolbar',
technologies:'HTML, CSS, JS, C#',
description: [
  'Worked as a team to create google toolbar',
  'Got to learn about CSS JS and C#',
  'Used mongo js, angular'
]

},

  
]
  constructor() {}
ngOnInit(): void {
  
}
}
