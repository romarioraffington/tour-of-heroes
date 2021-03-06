// External Dependencies
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

// Our Dependencies
import { Hero } from '../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHero();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
