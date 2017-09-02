import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeroService　} from './hero.service'
import { HeroesComponent } from '../pages/heroes/heroes.component'
import { DashboardPage } from '../pages/dashboard/dashboard.component'
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component'

const Routers = RouterModule.forRoot([
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
])

@NgModule({
  // 从属当前模块的组件、指令、管道
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routers
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
