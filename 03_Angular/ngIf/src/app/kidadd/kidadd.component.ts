import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kidadd',
  templateUrl: './kidadd.component.html',
  styleUrls: ['./kidadd.component.css']
})
export class KidaddComponent implements OnInit {
  nombre = '';
  peso = '0';

  constructor() { }

  ngOnInit() {
  }

  saveKid() {

  }

  validateKid(): boolean {
    let validate = true;

    if (this.nombre === '' || parseInt(this.peso, 10) <= 0) {
      validate = false;
    }
    return validate;
  }

  pesoColor(): string {
    if (parseInt(this.peso, 10) <= 0 ||  isNaN(parseInt(this.peso, 10))) {
      return 'red';
    } else {
      return 'green';
    }
  }

  checkNombre() {
    return this.nombre.length >= 3;
  }

}
