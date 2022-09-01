export interface Dynform {
    type: string,
    validation: {
        required: boolean,
        minlength?: number,
        maxlenght?: number,
        pattern?: RegExp
    },
    errormsg:{
        required: string,
        minlength?: string,
        maxlength?: string,
        pattern?: string
    },
    value: string
}
