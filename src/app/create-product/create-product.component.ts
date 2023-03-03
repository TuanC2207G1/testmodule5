import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../service/TourService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: TourService, private roter: Router) {
  }

  formCreate!: FormGroup

  ngOnInit() {
    this.formCreate=new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    })
  }
  createProduct() {
    this.productService.createProduct(this.formCreate.value).subscribe()
    this.roter.navigate([''])
      }

}

