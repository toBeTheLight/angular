import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute,ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import {Hero } from '../../api/hero'
import { HeroService } from '../../api/hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
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
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack())
  }
  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => 
        this.heroService.getHero(+params.get('id'))
      )
      .subscribe(hero => {this.hero = hero})
  }
}
