import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgOptimizedImage } from '@angular/common';


declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // standalone: true,
  // imports: [NgOptimizedImage],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  



  serviceArray:any=[]


  constructor(private router: Router) {
    window.scroll(0,0);

    // window.scroll(1000,1000);

  }

  ngOnInit(): void {

    $("#mobile").removeClass('service-inactive');
    $("#mobile").addClass('service-active');
    $("#mobile_btn").addClass('service-btn-active-t');

    $('.paroller-example').paroller({
      factorXs: 0.1,
      factorSm: 0.1,
      factorMd: -0.4,
      factorLg: -0.5,
      factorXl: -0.6,
      factor: -0.4,
      type: 'foreground',
      direction: 'horizontal'
      });

  }

//   $('.faculty-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     dots: false,
//     nav: true,
//     center: true,
//     autoplay: true,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         700: {
//             items: 3,
//         },
//         902: {
//             items: 3,
//         },
//         1200: {
//             items: 3,

//         }
//     }
// })

  Clients: OwlOptions = {
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
  }
// testimonal







getEnter(e:any){
  if(e.target.value=="y" || e.target.value=="Y"){
    this.router.navigate(['/contact']);
  }else {
    $("#startInput").val("");
  }
}


}

