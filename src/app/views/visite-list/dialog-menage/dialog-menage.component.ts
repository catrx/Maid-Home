import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-menage',
  templateUrl: './dialog-menage.component.html',
  styleUrls: ['./dialog-menage.component.css']
})
export class DialogMenageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
