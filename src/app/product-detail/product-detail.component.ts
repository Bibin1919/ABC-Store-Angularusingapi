import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  itemId:string=''
  item:any={}

  constructor (private activatedRoute:ActivatedRoute, private api:ApiService ){

  }
ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data.id);
    this.itemId=data.id
    console.log(this.itemId);
    
  })  
  this.api.viewItem(this.itemId)
.subscribe((result:any)=>{
  console.log(result);
  this.item=result
})
}


}
