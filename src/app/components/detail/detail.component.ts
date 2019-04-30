import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, MovieCast } from '../../interfaces/movies.interface';
import { ModalController } from '@ionic/angular';
import { LocalService } from '../../services/local.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
	@Input() id;

	detail: MovieDetail;
	castcrew: MovieCast;
	showmore: number = 150;
	isfavorite: boolean = false;

	slidesCastOpt = {
		slidesPerView: 3.3,
		freeMode: true,
		spacebetween: -5
	};

	constructor(
		private movieService: MoviesService,
		private modalCtrl: ModalController,
		private localService: LocalService
	) {}

	async ngOnInit() {
		console.log('ID :', this.id);
		this.isfavorite = await this.localService.exists(Number(this.id));
		this.get();
	}

	get() {
		this.movieService.getMovieDetail(this.id).subscribe((data) => {
			this.detail = data;
		});
		this.movieService.getMovieCast(this.id).subscribe((data) => {
			this.castcrew = data;
		});
	}

	dismiss() {
		this.modalCtrl.dismiss();
	}
	async favorite() {
		await this.localService.save(this.detail);
		this.isfavorite = !this.isfavorite;
	}
}
