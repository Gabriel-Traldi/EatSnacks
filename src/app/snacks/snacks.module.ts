import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SnackComponent } from './snack/snack.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { SnacksComponent } from './snack-list/snacks/snacks.component';
import { FilterByDescription } from './snack-list/filter-by-description';

@NgModule({
  declarations: [
    SnackComponent,
    SnackListComponent,
    SnacksComponent,
    FilterByDescription,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SnacksModule { }
