import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page implements OnInit {
	moviesFeature: Movie[] = [];
	moviesPopular: Movie[] = [];

	slidesOpt = {
		slidesPerView: 1.1,
		freeMode: true
	};

	constructor(private moviesService: MoviesService) {
		this.moviesPopular = new Array<Movie>();
	}

	ngOnInit() {
		this.moviesService.getFeature().subscribe((data) => {
			this.moviesFeature = data.results;
		});

		this.getPopulars();
	}

	getmore(ev) {
		this.getPopulars();
	}

	getPopulars() {
		this.moviesService.getSortByPopularity().subscribe((data) => {
			const tmp = [ ...this.moviesPopular, ...data.results ];
			this.moviesPopular = tmp;
		});
	}
}
