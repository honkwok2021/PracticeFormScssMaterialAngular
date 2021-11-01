import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  topics :string[] = ['Angular', 'React', 'Vue']
  userModel: User  = new User('ddd', 'rob@test.com', 5543223423,'', 'evening', true);
  topicHasError: Boolean = true;

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  validateTopic(value:any){
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data =>console.log('Success', data),
      error => console.error('Error', error)

    )
  }
}
