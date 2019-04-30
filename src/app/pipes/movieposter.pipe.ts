import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movies.interface';

const moviedb_url = environment.imgPath;

@Pipe({
	name: 'movieposter'
})
export class MovieposterPipe implements PipeTransform {
	transform(src: string, size: string = 'w500'): any {
		if (!src) return './assets/noimage.svg';

		const url = `${moviedb_url}/${size}${src}`;

		return url;
	}
}

@Pipe({
	name: 'castprofile'
})
export class CastprofilePipe implements PipeTransform {
	transform(src: string, size: string = 'w500'): any {
		if (!src) return './assets/noavatar.svg';
		const url = `${moviedb_url}/${size}${src}`;

		return url;
	}
}

@Pipe({
	name: 'filterbyimages'
})
export class FilterByImagePipe implements PipeTransform {
	transform(movies: Movie[]): any {
		return movies.filter((m) => m.backdrop_path);
	}
}
