import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core';
import { ScanService } from './services/scan.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ScanService]
})
export class DashboardComponent implements OnInit {

  public selectedScan:Scan;
  public scans: Scan[];
  constructor(private scanService:ScanService){}

  ngOnInit() {
    // this.scanService.getAll().then((scans:Scan[])=>{
    //   if(scans.length >0){
    //     this.scans = scans
    //   }
    // });

   this.scans = [
      {
        id: 1,
        title: "first scan",
        type: "information gathering",
        description: "Lorem ipsum is just amazing !"
      },
      {
        id: 2,
        title: "second scan",
        type: "information gathering",
        description: "Lorem ipsum is just amazing !"
      }
    ];
    this.selectedScan = this.scans[0];
  }
}

  

interface Scan {
  id: number;
  title: String;
  type: String;
  description: String;
}