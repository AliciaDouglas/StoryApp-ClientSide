import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule, MatError} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    imports: [
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatError
    ],
    exports: [
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatError
    ],
  })
  export class Material { }
