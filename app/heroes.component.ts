import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	title = "Tour of Heroes";
	selectedHero: Hero;
	heroes: Hero[];
	constructor(private _heroService: HeroService) { }
	ngOnInit() {
		this.getHeroes();
	}
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}
