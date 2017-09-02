import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { Hero } from '../../app/hero'
import { HeroService } from '../../app/hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) {

    }
    heroes: Hero[] = []
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
