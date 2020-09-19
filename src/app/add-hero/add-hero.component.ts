import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  [x: string]: any;

  constructor(private heroService: HeroService,private router: Router) { }

  ngOnInit(): void {
  }

  addHero(form: NgForm){
    this.heroService.addHero(form.value);
    console.log("form  *****    " + form.value);
    this.router.navigate(['heroes']);

  }

}
