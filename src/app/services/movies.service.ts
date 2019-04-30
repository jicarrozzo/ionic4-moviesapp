import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results, MovieDetail, MovieCast, Genre, Genres } from '../interfaces/movies.interface';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

const url = environment.url;
const api_key = environment.apiKey;

@Injectable({
	providedIn: 'root'
})
export class MoviesService {
	private pagePopulares: number = 0;
	genres: Genre[];

	constructor(private http: HttpClient) {}

	private callApi<T>(query: string) {
		query = url + query;
		query += `&api_key=${api_key}`;

		return this.http.get<T>(query);
	}

	getFeature() {
		const today = moment();
		const firstDay = today.startOf('month').format('YYYY-MM-DD');
		const lastDay = today.endOf('month').format('YYYY-MM-DD');

		return this.callApi<Results>(
			`/discover/movie?primary_release_date.gte=${firstDay}&primary_release_date.lte=${lastDay}`
		);
	}

	getSortByPopularity() {
		this.pagePopulares++;
		return this.callApi<Results>(`/discover/movie?sort_by=popularity.desc&page=${this.pagePopulares}`);
	}

	getMovieDetail(id: string) {
		return this.callApi<MovieDetail>(`/movie/${id}?a=1`);
	}

	getMovieCast(id: string) {
		return this.callApi<MovieCast>(`/movie/${id}/credits?a=1`);
	}

	searchMovie(text: string) {
		return this.callApi<Results>(`/search/movie?query=${text}`);
	}

	getGenres(): Promise<Genre[]> {
		return new Promise((resolve) => {
			this.callApi<Genres>(`/genre/movie/list?a=1`).subscribe((data) => {
				this.genres = data.genres;
				console.log(this.genres);

				resolve(this.genres);
			});
		});
	}
}
