import { Injectable } from '@angular/core';
import categories from '../mock/categories';
import jobs from '../mock/jobs';
import startups from '../mock/startups';

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

  getStartups() {
    return startups;
  }
}
