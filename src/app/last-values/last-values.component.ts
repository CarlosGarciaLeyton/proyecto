import { Component, OnInit } from '@angular/core';
import { ConsultaServiceService } from 'src/service/consulta-service.service';


@Component({
  selector: 'wt-last-values',
  templateUrl: './last-values.component.html',
  styleUrls: ['./last-values.component.css']
})
export class LastValuesComponent implements OnInit {
  consultaServiceService = new ConsultaServiceService();
  constructor() { }

  ngOnInit(): void {
    this.consultaServiceService.getUser();
  }
  
}
