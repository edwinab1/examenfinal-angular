import { Component, OnInit } from '@angular/core';
import { Dog } from '../interface/dog.interface';
import { PeticioneshttpService } from '../services/peticioneshttp.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private httpService: PeticioneshttpService) { }

  informacion: Dog;
  listaPerritos:Dog[] = [];

  ngOnInit(): void {

    this.recuperarData();
  }

  recuperarData() {

    this.httpService.getData().subscribe(
      data => {

        console.table(data);
        this.informacion = data;

      })
  }

  agregarData(){

    this.listaPerritos.push(this.informacion);

  }
}
