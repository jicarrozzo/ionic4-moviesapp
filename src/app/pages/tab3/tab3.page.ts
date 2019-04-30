import { Component, OnInit } from '@angular/core';
import { MovieDetail, Genre, GenreMovies } from '../../interfaces/movies.interface';
import { LocalService } from '../../services/local.service';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: [ 'tab3.page.scss' ]
})
export class Tab3Page {
	moviesFavorites: MovieDetail[] = [];
	genres: Genre[] = [];
	moviesByGenre: GenreMovies[] = [];
	slidesOpts = {
		allowSlidePrev: false,
		allowSlideNext: false
	};

	constructor(private localService: LocalService, private movieService: MoviesService) {}

	async ionViewWillEnter() {
		this.moviesFavorites = await this.localService.load();
		this.genres = await this.movieService.getGenres();
		this.mergeByGenre();
	}

	mergeByGenre() {
		this.moviesByGenre = new Array<GenreMovies>();
		this.genres.forEach((genre) => {
			this.moviesByGenre.push(
				new GenreMovies(genre, this.moviesFavorites.filter((m) => m.genres.find((g) => g.id === genre.id)))
			);
		});
	}
}
