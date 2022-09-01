import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Dynform } from '../../interface/dynform';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() control: Dynform
  @Input() form: FormGroup;
  

  @ViewChild('inputControl') input: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  

  showPassword(){
    this.input.nativeElement.setAttribute('type', 'text');
    setTimeout(()=>{
      this.input.nativeElement.setAttribute('type', 'password');
    }, 800)
  }
  
  get dyForm(){
    return this.form.controls;
  }
}
