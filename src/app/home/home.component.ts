import {Component, OnInit} from '@angular/core';
import {TourService} from "../service/TourService";
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tours!:Product[];
  constructor(private productservice:TourService, private router:Router) {
  }
  ngOnInit():void{
    this.getAllProduct()
  }
  getAllProduct(){
    this.productservice.getAllProduct().subscribe((data)=>{
      this.tours=data
    })
  }

}
