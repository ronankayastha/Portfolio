import { Component, OnInit } from '@angular/core';
import { skill } from '../models/models';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  skills: skill[]=[
    {
    name:'Angular, Angular Material',
    level: 'Expert',
    rating:85,
     },
     {
      name:'ASP.NET Core, EF Core',
      level: 'Intermediate',
      rating:70,
       },
       {
        name:'HTML,CSS,JS',
        level: 'Expert',
        rating:90,
         },
         {
          name:'JAVA',
          level: 'Expert',
          rating:85,
           },
  ]
  constructor() {}
  ngOnInit(): void {
    
  }

}
