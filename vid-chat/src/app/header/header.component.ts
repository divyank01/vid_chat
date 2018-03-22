import { Component, OnInit, Output, AfterViewInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {


  @Input() email:string;
  constructor(userService:UserService) { }
  @ViewChild('input_search') search;


  ngOnInit() {
    this.lookupUsername.bind(this)
  }

  ngAfterViewInit() {
    //this.search.nativeElement.addEventListener('modelChange', this.lookupUsername.bind(this));
  }

  lookupUsername(value){
    if(value.indexOf(';')>=0)
      console.log(this.email);
  }

}
