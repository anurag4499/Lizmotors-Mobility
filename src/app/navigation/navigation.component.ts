import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

// @HostListener('window:scroll', ['$event'])({

// onWindowScroll() {
//     let element = document.querySelector('.navbar') as HTMLElement;
//     if (window.pageYOffset > element.clientHeight) {
//       element.classList.add('bg-white');
//     } else {
//       element.classList.remove('bg-white');
//     }
//   }
// })
declare let $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // $(window).scroll(function(){
  // 	var scroll = $(window).scrollTop();
	//   if (scroll > 300) {
	//     $(".black").css("background" , "blue");
	//   }

	//   else{
	// 	  $(".black").css("background" , "#333");
	//   }
  // })
}
