import { HeroesComponent } from '../pages/heroes/heroes.component'
import { DashboardPage } from '../pages/dashboard/dashboard.component'
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component'

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routers: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    // full:path完全等于''才匹配
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule {}