import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-electric-mobolity',
  templateUrl: './electric-mobolity.component.html',
  styleUrls: ['./electric-mobolity.component.css']
})
export class ElectricMobolityComponent implements OnInit {

  constructor() { window.scrollTo(0, 0) }

  ngOnInit(): void {
  }
  Clientlogo: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items:5
      }
    },
    nav: false,
  }

  @ViewChild('myVideo') myVideo: any;

  ngAfterViewInit() {
    this.myVideo.nativeElement.play();
  }


}
