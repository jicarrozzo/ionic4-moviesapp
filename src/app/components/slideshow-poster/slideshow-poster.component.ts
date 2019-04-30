import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
	selector: 'app-slideshow-poster',
	templateUrl: './slideshow-poster.component.html',
	styleUrls: [ './slideshow-poster.component.scss' ]
})
export class SlideshowPosterComponent implements OnInit {
	@Input() movies: Movie[];

	slidesOpt = {
		slidesPerView: 3.3,
		freeMode: true
	};

	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	async details(id: string) {
		const m = await this.modalCtrl.create({
			component: DetailComponent,
			componentProps: { id }
		});
		m.present();
	}
}
