import { Component, OnInit } from '@angular/core'

import { Hero } from '../../app/hero'
import { HeroService } from '../../app/hero.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardPage implements OnInit{
  heroes: Hero[] = []
  constructor(private heroService: HeroService) {

  }
  getHeroes (): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.splice(0, 5))
  }
  ngOnInit (): void {
    this.getHeroes()
  }
}