import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Buttonlist } from '../interface/buttonlist';
import { Dynform } from '../interface/dynform';
import { FormServicesService } from './form-services.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formObj: Dynform[];
  @Input() buttonList: Buttonlist[];
  
  @Output() buttonClick = new EventEmitter();

  public form: FormGroup;

  constructor(private fs:FormServicesService) { }

  ngOnInit(): void {
    this.form = this.fs.createForm(this.formObj);
  }

  
  get dyForm(){
    return this.form.controls;
  }

  public formBtnClick(){
    if(this.form.valid){
      this.buttonClick.emit(this.form);
    }else{
      Object.keys(this.dyForm).forEach(field => { 
        const control = this.form.get(field);   
        if(control){
          control.markAsTouched({ onlySelf: true });       
        }         
      });
    }
  }

}
