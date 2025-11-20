import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../model/event';
import { EventService } from '../../../../data-access/event.service';
import { futurDateValidator } from '../../../../shared/Validators/futur-date.validator';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent {
  addEventForm = new FormGroup({
    titre: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
    ]),
    date: new FormControl('', [Validators.required, futurDateValidator(7)]),
    prix: new FormControl(0, [
      Validators.required,
      Validators.pattern('^\\d+(\\.\\d+)?$'),
    ]),
    nbPlaces: new FormControl(
      Validators.required,
      Validators.pattern('^[1-9][0-9]?$|^100$')
    ),
    lieu: new FormControl(),
    imageUrl: new FormControl(),
  });

  onSubmit() {
    if (this.addEventForm.valid) {
    }
  }
}
