import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactReasons: Array<any> =[
    { value: 'help-needed', viewValue: 'Help Needed'},
    { value: 'general-question', viewValue: 'General Question'},
    { value: 'complaint', viewValue: 'Complaint' }
  ];

  constructor() { }



  ngOnInit(): void {
  }



}
