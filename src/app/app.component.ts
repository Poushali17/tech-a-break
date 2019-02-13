import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechABreak';
  isNavbarVisible : boolean = false;
  home: boolean = true;

ngOnInit() {
  window.addEventListener('scroll', this.scroll, true); //third parameter
}

ngOnDestroy() {
  window.removeEventListener('scroll', this.scroll, true);
}

scroll = (): void => {
//handle your scroll here
  if(window.scrollY >= 2){
      this.isNavbarVisible = true;
  }
else{
  this.isNavbarVisible = false;
}
};

  constructor(private router: Router) { }
  options = [
    'Mobile',
    'Laptop',
    'Tablet',
    'Desktop',
    'Camera',
    'Headphone'
   ];
  //  tiles = [
  //   {title: 'Mobile', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Laptop', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Tablet', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Top Pick of the Week', cols: 1, rows: 3, color: 'lightgrey'},
  //   {title: 'Desktop', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Camera', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Headphone', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Speaker', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'Smart Watch', cols: 1, rows: 1, color: 'lightgrey'},
  //   {title: 'VR', cols: 1, rows: 1, color: 'lightgrey'}
  // ];
  reviews = [
    {heading: 'Review1',text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',imageUrl: 'assets/images/camera/camera1.jpg',rating: 5},
    {heading: 'Review2', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages', imageUrl: 'assets/images/mobile/mobile1.jpg',  rating: 3},
    {heading: 'Review4', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages', imageUrl: 'assets/images/laptop/laptop1.jpg',  rating: 4},
    {heading: 'Review5', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages', imageUrl: 'assets/images/headphones/headphone1.jpg',  rating: 1}
  ]

   // login method
  login() {
    this.router.navigateByUrl('/login');
    this.home = false;
    this.isNavbarVisible = false;
  }

  // register method
  register() {
    this.router.navigateByUrl('/register');
    this.home = false;
    this.isNavbarVisible = false;
  }
}

