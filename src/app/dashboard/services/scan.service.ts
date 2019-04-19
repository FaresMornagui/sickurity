import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  private all_scans_url = "http://api.url.com/scans";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.all_scans_url).toPromise().then((response: any) => {
      if (response.status == 200) {
        return response.scans;
      }
    }).catch(err => {
      console.log('ERROR FETCHING THE SCANS => ', err);
    });
  }
}
