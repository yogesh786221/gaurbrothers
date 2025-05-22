import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { content } from './routes/content.route';

export const routes: Routes = [

    { 
        path: '',  component: FullComponent , children: content
    },
   
    
];
