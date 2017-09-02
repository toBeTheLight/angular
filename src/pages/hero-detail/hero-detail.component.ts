import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute,ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import {Hero } from '../../app/hero'
import { HeroService } from '../../app/hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private Location: Location
  ) {}
  goBack(): void {
    this.Location.back()
  }
  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => 
        this.heroService.getHero(+params.get('id'))
      )
      .subscribe(hero => {this.hero = hero})
  }
}
