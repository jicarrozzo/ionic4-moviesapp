import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../../components/detail/detail.component';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: [ 'tab2.page.scss' ]
})
export class Tab2Page implements OnInit {
	searching: boolean = false;
	textSearch: string = '';
	movies: Movie[] = [];

	examples: string[] = [ 'Casablanca', 'Avengers', 'Sex and the city' ];

	constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}

	ngOnInit() {}

	search(ev) {
		this.movies = [];
		const text: string = ev.detail.value;

		if (text.length > 2) {
			this.searching = true;
			this.moviesService
				.searchMovie(text)
				//.pipe(map((x) => console.log(x)));

				.subscribe(
					(data) => {
						this.movies = data.results;
						this.searching = false;
					},
					(err) => {
						this.searching = false;
					}
				);
		}
	}

	async details(id: string) {
		const m = await this.modalCtrl.create({
			component: DetailComponent,
			componentProps: { id }
		});
		m.present();
	}
}
