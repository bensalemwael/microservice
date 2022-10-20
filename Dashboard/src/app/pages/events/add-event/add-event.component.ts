import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  form: FormGroup;

  constructor(private eventService:EventService,private fb: FormBuilder ,private router: Router) { 
    this.createForm()

  }

  ngOnInit(): void {
  }

  addEvent() {
    if (this.form.valid)
    {
      let event:Event = this.form.value;
      this.eventService.addEvent(event).subscribe(res => {
        this.router.navigate(['/events'])
      })
    }
    
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      starting_date: ['', Validators.required ],
      ending_date: ['', Validators.required ],
    });
  }

}
