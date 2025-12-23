import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { CloudService } from './pages/cloud.service/cloud.service';
import { Home } from './pages/home/home';
import { CyberSecurity } from './pages/cyber.security/cyber.security';
import { DataEngineering } from './pages/data.engineering/data.engineering';
import { Devops } from './pages/devops/devops';


export const routes: Routes = [
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'service',component:Service},
    {path:'contact',component:Contact},
    {path:'cloud.service',component:CloudService},
    {path:'cyber.security',component:CyberSecurity},
    {path:'data.engineering',component:DataEngineering},
    {path:'devops',component:Devops},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
       
];
