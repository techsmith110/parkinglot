import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterArrayPipe } from "./filterArray/filter-array.pipe";

@NgModule({
  declarations: [FilterArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterArrayPipe]
})
export class PipesModule { }
