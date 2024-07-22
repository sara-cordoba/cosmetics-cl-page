import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaceComponent } from './face/face.component';
import { HairComponent } from './hair/hair.component';
import { BodyComponent } from './body/body.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'face', component: FaceComponent },
  { path: 'hair', component: HairComponent },
  { path: 'body', component: BodyComponent },
  { path: 'bathroom', component: BathroomComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
