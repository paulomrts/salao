import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.services';
import { CustomValidator } from 'src/app/validators/custom.validators';

@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
})
export class ClientsInfoComponent implements OnInit {

  public form: FormGroup;
  public busy= false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,

  ) { 
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.required
      ])],
      document: [{value: '', disabled: true}],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
    });
  }

  ngOnInit()  {

      this.busy = true;
      this.service.getProfile().subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls['name'].setValue(data.name);
          this.form.controls['document'].setValue(data.document);
          this.form.controls['email'].setValue(data.email);
        },
        (err)=>{
          console.log(err);
          this.busy = false;
        }
      );

  }

}
