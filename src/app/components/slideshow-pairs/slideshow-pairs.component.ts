import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/movies.interface';

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

	constructor() {}

	ngOnInit() {}

	more() {
		this.getMore.emit();
	}
}
