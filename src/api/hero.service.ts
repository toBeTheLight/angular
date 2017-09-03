import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Hero } from './hero'

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'
    private headers = new Headers({'Content-Type': 'application/json'});
    private handleError (error: any): Promise<any> {
        console.log(error)
        return Promise.reject(error.message || error)
    }
    constructor (private http: Http) { }

    update (hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }
    // 英雄列表
    getHeroes (): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }
    // id获取英雄
    getHero (id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError)
        // return new Promise(resolve => {
            // setTimeout(function () {
                // resolve(HEROES[id])
            // }, 500)
        // })
    }
}