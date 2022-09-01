
export interface Dynform {
  type: string;
  validation: {
    required: boolean;
    minlength?: number;
    maxlenght?: number;
    pattern?: string;
  };
  errormsg: {
    required: string;
    minlength?: string;
    maxlength?: string;
    pattern?: string;
  };
  value: string;
  label: string;
  iconName?: string;
  controlName: string;
}
