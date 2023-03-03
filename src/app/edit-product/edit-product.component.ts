import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../service/TourService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  constructor(private productService: TourService, private roter: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  formEdit!: FormGroup;
  id!: any;
  product: Product | undefined


  ngOnInit() {
    this.formEdit=new FormGroup({
      id:new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    })
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id)
      this.showEdit(this.id)
    });
    }
  showEdit(id: number) {
    this.productService.findTourById(id).subscribe((data) => {
      this.formEdit.setValue({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description
        }
      )
    })
  }

  editProduct() {
    this.productService.createProduct(this.formEdit.value).subscribe((data) => {
        this.roter.navigate(['']);
      }
    )
  }
}
