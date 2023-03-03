import {Component, OnInit} from '@angular/core';
import {TourService} from "../service/TourService";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private tourService: TourService, private router: Router, private route: ActivatedRoute) {
  }

  tour!: Product;
  id!: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']});
      this.tourService.findTourById(this.id).subscribe(res => this.tour = res
      )
    }


  back() {
    this.router.navigate([''])
  }
}
