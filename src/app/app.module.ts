import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from '../api/in-memory-data.service'

import { AppComponent } from './app.component'
import { HeroesComponent } from '../pages/heroes/heroes.component'
import { DashboardPage } from '../pages/dashboard/dashboard.component'
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component'
import { HeroSearchComponent } from '../pages/hero-search/hero-search.component'
import { HeroService　} from '../api/hero.service'

import { AppRoutingModule } from '../route/app-routing.module'



@NgModule({
  // 从属当前模块的组件、指令、管道
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardPage,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
