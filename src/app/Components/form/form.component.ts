import { Component, OnInit } from '@angular/core';
import { DataShareService } from './../../Services/DataSharing';
import { AvengerInterface } from './avenger-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  submitted = false;
  newAvenger: AvengerInterface = {
    name: '',
    orbital_period: 0,
    rotation_period: 0,
    diameter: 0,
    gravity: ''
  };

  constructor(private dataShare: DataShareService) {}

  ngOnInit() {
    console.log('!!', typeof this.newAvenger);
  }

  formSubmit(value) {
    this.newAvenger.name = value.name;
    this.newAvenger.orbital_period = value.orbital_period;
    this.newAvenger.rotation_period = value.rotation_period;
    this.newAvenger.gravity = value.gravity;
    this.newAvenger.diameter = value.diameter;
    this.submitted = true;
    this.dataShare.setValue(this.newAvenger);
  }
}
