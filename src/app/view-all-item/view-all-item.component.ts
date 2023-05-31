import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-all-item',
  templateUrl: './view-all-item.component.html',
  styleUrls: ['./view-all-item.component.css']
})
export class ViewAllItemComponent implements OnInit {

  allItems1:any=[]
  searchKey:string=''
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.allItems()
    .subscribe((result:any)=>{
      console.log(result);
      this.allItems1=result
    })
  }

}
