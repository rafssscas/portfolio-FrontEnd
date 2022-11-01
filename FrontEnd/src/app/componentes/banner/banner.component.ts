import { Component, OnInit } from '@angular/core';
import {PersonaService} from "../../servicio/persona.service";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    constructor(public personaService: PersonaService) { }
     ngOnInit(): void {

     }
}
