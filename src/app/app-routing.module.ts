import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"listHero",component:ListHeroComponent},
  {path:"update/:id",component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
