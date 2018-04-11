import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';
import { Consulta } from '../domain/consulta';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas : Consulta[];

  constructor(private consultaService : ConsultaService) {
  this.getConsultas();
  }

  ngOnInit() {
  }
  
  getConsultas(){
    this.consultaService.getConsultas()
    .subscribe(response => {
      this.consultas = response;
      console.log(response)
    })
  }

}