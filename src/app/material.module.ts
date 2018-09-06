import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    
} from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,

    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,

    ]
})

export class MaterialModule { }