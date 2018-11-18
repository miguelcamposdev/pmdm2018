import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [
    {title: 'Nota 1', content: 'jhdsajf sdgf dsjhfg s'},
    {title: 'Nota 2', content: 'jsdfgsjdf sjhdfg j'},
    {title: 'Nota 3', content: 'jsdhfsjhdf gsdf '},
    {title: 'Nota 4', content: 'kdsjfsdj fj'},
    {title: 'Nota 5', content: 'jshdfggjshdf gdjs'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
