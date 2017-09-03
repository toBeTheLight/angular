import { Component,OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Hero } from '../../api/hero'
import { HeroService } from '../../api/hero.service'


@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}
    heroes: Hero[] = []
    //selectedHero: Hero = HEROES[1]
    selectedHero: Hero
    onSelect(hero: Hero): void {
        this.selectedHero = hero
    }
    getHeroes ():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    gotoDetail (): void {
        this.router.navigate(['/detail',this.selectedHero.id])
    }
    ngOnInit(): void {
        this.getHeroes()
    }
}
