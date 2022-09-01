import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { OtpComponent } from './otp/otp.component';
import { TimerComponent } from './timer/timer.component';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormFieldComponent } from './dynamic-form/form-field/form-field.component';
import { DynamicPopupComponent } from './dynamic-popup/dynamic-popup.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardComponent, DynamicFormComponent, OtpComponent, TimerComponent, PopupComponent, FormFieldComponent, DynamicPopupComponent],
  imports: [CommonModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DynamicFormComponent,
    OtpComponent
  ],
})
export class SharedModule {}
