import { Component, OnInit } from '@angular/core';
import { absence } from 'src/app/models/Absence';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
  absences:absence = []
  constructor() { }

  ngOnInit(): void {
  }

}
