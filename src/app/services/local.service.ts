import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Movie, MovieDetail } from '../interfaces/movies.interface';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class LocalService {
	movies: MovieDetail[] = [];

	constructor(private storage: Storage, private toastCtrl: ToastController) {}

	async save(movie: MovieDetail) {
		let message: string = '';
		if (this.movies.filter((x) => x.id === movie.id).length === 0) {
			this.movies.push(movie);
			message = 'Add to favorites!';
		} else {
			this.movies = this.movies.filter((x) => x.id !== movie.id);
			message = 'Remove from favorites';
		}
		const t = await this.toastCtrl.create({ message, duration: 2000, position: 'top' });
		t.present();

		this.storage.set('favorites', this.movies);
	}

	async load() {
		const ms: MovieDetail[] = await this.storage.get('favorites');
		this.movies = ms || [];
		return this.movies;
	}

	async exists(id) {
		await this.load();
		return this.movies.find((x) => x.id === id) != null;
	}
}
