import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import {PersonaService} from "../../servicio/persona.service";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: persona = new persona("","","");
    constructor(public personaService: PersonaService) { }
     ngOnInit(): void {
       this.personaService.getPersona().subscribe(data => {this.persona = data})
     }
}
