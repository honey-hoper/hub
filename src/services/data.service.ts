import { Injectable } from '@angular/core';
import categories from '../mock/categories';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCategories() {
    return categories;
  }
}
