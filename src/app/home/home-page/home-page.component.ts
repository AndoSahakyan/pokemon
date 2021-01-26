import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(private router: Router) {
    this.simpleForm = new FormGroup({
      'id': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  submit(): void {    
    this.router.navigate(['/details', this.simpleForm.value.id]);
  }
}
