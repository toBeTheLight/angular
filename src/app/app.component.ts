import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) {

    }
    title = 'Tour of Heroes'
    heroes: Hero[]
    //selectedHero: Hero = HEROES[1]
    selectedHero: Hero
    onSelect(hero: Hero): void {
        this.selectedHero = hero
    }
    getHeroes ():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    ngOnInit(): void {
        this.getHeroes()
    }
}
