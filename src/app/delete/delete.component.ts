import {Component, OnInit} from '@angular/core';
import {TourService} from "../service/TourService";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private tourService: TourService, private router: Router, private route: ActivatedRoute) {
  }

  tour!: Product;
  id!: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']
      this.tourService.findTourById(this.id).subscribe(res => this.tour = res
      )
    });
  }

  deleteProduct(id: number) {
    this.tourService.deleteProduct(this.id).subscribe((res) => alert()
    )
  }


  back() {
    this.router.navigate([''])
  }
}
