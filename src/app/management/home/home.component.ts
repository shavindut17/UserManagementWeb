import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public  currentUser = new User();
 public  navigationPage: any;
 public  headerText: any;
 public  headerDescription: any;



  constructor(private userService: UserService, private router: Router) {
    this.getUser();
  }


  ngOnInit() {
    this.loadJquery();
    this.navigationPage = 'landing';
    this.headerText = 'Faster Bakers';
    this.headerDescription = 'Faster bakers admin panel';
  }

  getUser() {
    this.userService.getCurrentUser().subscribe( res => {
      this.currentUser = res as User ;
    });
  }

  navigation(selection) {
    debugger ;
      this.navigationPage = selection ;
      if (selection === 'ProductTypeCreation') {
          this.headerText = 'Product Type Creation';
          this.headerDescription =  'Please Create Product Type to show on the web site ';
      } else if (selection === 'ProductCreation') {
        this.headerText = 'Product  Creation';
        this.headerDescription =  'Please Create Product to show on the web site ';
      }
  }


  logOut(){
    window.localStorage.setItem('currentUser', null);
    this.router.navigate(['']);
  }


  loadJquery(){
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
      } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
      }

  });
  $("#toggle-sidebar").click(function () {
      $(".page-wrapper").toggleClass("toggled");
  });

  }

}
