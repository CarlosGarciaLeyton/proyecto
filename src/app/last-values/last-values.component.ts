import { Component, OnInit, PipeTransform } from '@angular/core';
import { ConsultaServiceService } from 'src/service/consulta-service.service';


@Component({
  selector: 'wt-last-values',
  templateUrl: './last-values.component.html',
  styleUrls: ['./last-values.component.css']
})

export class LastValuesComponent implements OnInit {
  key = 'cobre';
  data;
  datitos;

   constructor(private consultaService: ConsultaServiceService) {}
  // tslint:disable-next-line: typedef
    async ngOnInit(){
     this.data = Object.values(await this.consultaService.getUser());
     this.datitos = Object.values(this.consultaService.getService(this.key));
     console.log('this is getService', this.datitos);
    }

  async search(text: string, pipe: PipeTransform): data{
      return this.data.filter(data => {
      const term = text.toLowerCase();
      return data.name.toLowerCase().includes(term)
          || pipe.transform(this.data).includes(term)
          || pipe.transform(this.data).includes(term);
  });
}
  
}






