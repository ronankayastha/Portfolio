import {Route, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactmeComponent } from './contactme/contactme.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {path: 'aboutme',
    component: AboutmeComponent,
    },
    
    {path:'projects',
    component:ProjectsComponent},
    
    {path:'services',
    component:ServicesComponent},
    
    {path:'contactme',
    component:ContactmeComponent},
    ];  
    
    export default appRoutes;