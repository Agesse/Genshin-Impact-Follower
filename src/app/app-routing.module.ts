import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattlepassVueComponent } from './vues/battlepass/battlepass.component';

const routes: Routes = [
  // { path: 'first-component', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
  { path: '', component: BattlepassVueComponent },
  { path: '**', component: BattlepassVueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
