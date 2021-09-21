import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  t1 = 'Wymiana sprzętu'
  t2 = 'Awaria sprzętu'
  t3 = 'Problem z zalogowaniem'
  t4 = 'Awaria oprogramowania'
  t5 = 'Przyznanie dostępu'
  t6 = 'Instalacja programów'
  t7 = 'Problemy z telefonem'
  t8 = 'VPN'
  t9 = 'Inne'

  constructor() { }

  ngOnInit(): void {


  };
}
