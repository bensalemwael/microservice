import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  form: FormGroup;
  event:Event ;
  constructor(private activatedroute:ActivatedRoute,private fb: FormBuilder,private eventService : EventService,private router: Router) { 
    this.createForm()
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.eventService.getEventById(params['event_id']).subscribe(res => {
        this.event = res;
        this.form.get('name').setValue( this.event.name);
        this.form.get('starting_date').setValue( this.event.starting_date);
        this.form.get('ending_date').setValue( this.event.ending_date);
      })
      });
  }


  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      starting_date: ['', Validators.required ],
      ending_date: ['', Validators.required ],
    });
  }

  editEvent() {

    this.event['name'] = this.form.value['name'] ;
    this.event['starting_date'] = this.form.value['starting_date'] ;
    this.event['ending_date'] = this.form.value['ending_date'] ; 
    this.eventService.updateEvent(this.event).subscribe(res => {
      this.router.navigate(['/events']) ;
    })
  }

}
