import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

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
