import { Component, OnInit } from '@angular/core'

import { Hero } from '../../api/hero'
import { HeroService } from '../../api/hero.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardPage implements OnInit{
  heroes: Hero[] = []
  constructor(private heroService: HeroService) {

  }
  getHeroes (): void {
    this.heroService.getHeroes()
      .then(heroes => {
          this.heroes = heroes.slice(0, 5)
        }
      )
  }
  ngOnInit (): void {
    this.getHeroes()
  }
}