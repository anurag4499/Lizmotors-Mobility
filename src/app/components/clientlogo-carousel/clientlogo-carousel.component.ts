import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlogo-carousel',
  templateUrl: './clientlogo-carousel.component.html',
  styleUrls: ['./clientlogo-carousel.component.css']
})
export class ClientlogoCarouselComponent implements OnInit {

  clientLogo=[
   
    {img:'../../assets/icons/clients-logo/ashok.png'},
    {img:'../../assets/icons/clients-logo/hund.png'},
    {img:'../../assets/icons/clients-logo/MG.png'},
    {img:'../../assets/icons/clients-logo/mahindra.png'},
    {img:'../../assets/icons/clients-logo/tata.png'},
    
   
    
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
