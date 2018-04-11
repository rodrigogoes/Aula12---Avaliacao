import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Consulta } from '../domain/consulta';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsultaService {

  constructor(private http : HttpClient) { }

  getConsultas() : Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`);
  }

}
