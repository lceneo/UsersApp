import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { UserCardsComponent } from './components/user-cards/user-cards.component';

const routes: Routes = [
  { path: '', component: UserCardsComponent },
  { path: 'about', component: DetailedInfoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
