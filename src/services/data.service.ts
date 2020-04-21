import { Injectable } from '@angular/core';
import categories from '../mock/categories';
import jobs from '../mock/jobs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCategories() {
    return categories;
  }

  getJobs() {
    return jobs;
  }
}
