import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servicesRef = [
    {'id': 1, 'name': 'Tooth Extractions', 'description': 'We offer Tooth Extractions'},
    {'id': 2, 'name': 'Teeth Whitening', 'description': 'We offer Teeth Whitening'},
    {'id': 3, 'name': 'Braces', 'description': 'We offer Braces'},
  ]

}
