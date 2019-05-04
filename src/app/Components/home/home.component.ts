import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Avenger } from './AvengerInterface';
import { DataShareService } from './../../Services/DataSharing';
import { Observable } from 'rxjs';
import { AvengerInterface } from './../form/avenger-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  avengers: Array<AvengerInterface> = [];
  selectedAvenger: Avenger = <Avenger>{};
  readOnly = false;
  show = false;
  newAvengerObs: Observable<AvengerInterface>;
  newAvenger: AvengerInterface;
  constructor(private userService: UserService, private dataShare: DataShareService) {
  }

  ngOnInit() {
    this.userService.getData().subscribe(d => {
    this.avengers = d.results;
    if (this.newAvenger != null) {
    this.avengers.push(this.newAvenger);
    }
    console.log('at the end', this.avengers);
    });
    this.dataShare.getValue().subscribe(obj => this.newAvenger = obj);
    console.log(this.avengers);
    }

  details(name: string) {
    this.show = true;
    for (const i of this.avengers) {
      if (i.name === name ) {
        this.selectedAvenger.name = i.name;
        this.selectedAvenger.diameter = i.diameter;
        this.selectedAvenger.gravity = i.gravity;
        this.selectedAvenger.orbital_period = i.orbital_period;
        this.selectedAvenger.rotation_period = i.rotation_period;
      } else { continue; }
    }
    console.log(this.selectedAvenger);
  }

  isEmptyObject(obj) {
  if (Object.keys(obj).length === 0) {
      return false;
  } else { return true; }
}

editText() {
  this.readOnly = true;
  (document.querySelector('.name-box') as HTMLInputElement).readOnly = false;
  (document.querySelector('.name-box') as HTMLInputElement).focus();
}

onSubmit(f) {
  this.readOnly = false;
  for ( const i of this.avengers) {
      if (i.diameter === this.selectedAvenger.diameter) {
       i.name = f.value;
       break;
      } else { continue; }
  }
  this.show = false;
}
}
