import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  slides = [{'image': 'https://images.pexels.com/photos/4617253/pexels-photo-4617253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}, 
  {'image': 'https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {'image': 'https://images.pexels.com/photos/3933227/pexels-photo-3933227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
  {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
