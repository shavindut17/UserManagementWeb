import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

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



  constructor(private userService: UserService) {
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
      this.navigationPage = selection ;
      if (selection === 'create') {
          this.headerText = 'Item Creation';
          this.headerDescription =  'Please Create Items to show on the web site ';
      } else if (selection === 'all') {
        this.headerText = 'Created Items';
        this.headerDescription =  'Items currently showing';
      }
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
