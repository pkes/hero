import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const herosModule = () =>
  import('./components/heros/heros.module').then((x) => x.HerosModule)

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heros', loadChildren: herosModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
