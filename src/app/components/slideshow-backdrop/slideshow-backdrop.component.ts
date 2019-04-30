import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
	selector: 'app-slideshow-backdrop',
	templateUrl: './slideshow-backdrop.component.html',
	styleUrls: [ './slideshow-backdrop.component.scss' ]
})
export class SlideshowBackdropComponent implements OnInit {
	@Input() movies: Movie[] = [];

	slidesOpt = {
		slidesPerView: 1.3,
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
