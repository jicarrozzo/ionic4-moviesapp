import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
	selector: 'app-slideshow-pairs',
	templateUrl: './slideshow-pairs.component.html',
	styleUrls: [ './slideshow-pairs.component.scss' ]
})
export class SlideshowPairsComponent implements OnInit {
	@Input() movies: Movie[];
	@Output() getMore = new EventEmitter();

	slidesOpt = {
		slidesPerView: 3.3,
		freeMode: true,
		spaceBetween: -10
	};

	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	more() {
		this.getMore.emit();
	}

	async details(id: string) {
		const m = await this.modalCtrl.create({
			component: DetailComponent,
			componentProps: { id }
		});
		m.present();
	}
}
