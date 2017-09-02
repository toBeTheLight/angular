import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROES } from './mock-heros' 

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        console.log(HEROES.length)
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(HEROES)
            }, 2000);
        })
    }
    getHero(id: number): Promise<Hero> {
        return new Promise(resolve => {
            setTimeout(function () {
                resolve(HEROES[id])
            }, 500)
        })
    }
}