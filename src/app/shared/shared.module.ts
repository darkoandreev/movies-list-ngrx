import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [HeaderComponent, FooterComponent, MatToolbarModule],
  providers: [AlertService]
})
export class SharedModule { }
