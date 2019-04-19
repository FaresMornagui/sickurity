import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scan-preview',
  templateUrl: './scan-preview.component.html',
  styleUrls: ['./scan-preview.component.css']
})
export class ScanPreviewComponent implements OnInit {

  @Input('scan') scan: any;

  constructor() { }

  ngOnInit() {
    console.log(this.scan)
  }

}
