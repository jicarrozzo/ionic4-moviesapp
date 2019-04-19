import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

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

	constructor() {}

	ngOnInit() {}
}
