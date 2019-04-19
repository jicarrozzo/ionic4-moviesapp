import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieposterPipe } from './movieposter.pipe';
import { ListToPairsPipe } from './list-to-pairs.pipe';

@NgModule({
	declarations: [ MovieposterPipe, ListToPairsPipe ],
	imports: [ CommonModule ],
	exports: [ MovieposterPipe, ListToPairsPipe ]
})
export class PipesModule {}
