import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  constructor() { }

async getUser() {
    try {
      const response = await axios.get('https://www.indecon.online/last');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
