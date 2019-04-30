import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieposterPipe, CastprofilePipe, FilterByImagePipe } from './movieposter.pipe';
import { ListToPairsPipe } from './list-to-pairs.pipe';

@NgModule({
	declarations: [ MovieposterPipe, CastprofilePipe, ListToPairsPipe, FilterByImagePipe ],
	imports: [ CommonModule ],
	exports: [ MovieposterPipe, CastprofilePipe, ListToPairsPipe, FilterByImagePipe ]
})
export class PipesModule {}
