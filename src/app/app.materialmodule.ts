import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
            MatToolbarModule,MatIconModule,MatSidenavModule,
            MatListModule,MatFormFieldModule,MatSelectModule,
            MatInputModule,MatTabsModule,MatCardModule,
            MatDialogModule,MatTreeModule,MatExpansionModule,
            MatDatepickerModule,MatNativeDateModule,
            MatProgressSpinnerModule,MatGridListModule,
            MatSlideToggleModule],
  exports: [MatButtonModule, MatCheckboxModule,
            MatToolbarModule,MatIconModule,MatSidenavModule,
            MatListModule,MatFormFieldModule,MatSelectModule,
            MatInputModule,MatTabsModule,MatCardModule,
            MatDialogModule,MatTreeModule,MatExpansionModule,
            MatDatepickerModule,MatNativeDateModule,
            MatProgressSpinnerModule,MatGridListModule,
            MatSlideToggleModule]
  
  
})
export class MaterialModule { }