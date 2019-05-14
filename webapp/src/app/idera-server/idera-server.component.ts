import { Component, OnInit } from '@angular/core';
import { IderaServerService } from './idera-server.service';

@Component({
  selector: 'app-idera-server',
  templateUrl: './idera-server.component.html',
  styleUrls: ['./idera-server.component.scss']
})
export class IderaServerComponent implements OnInit {

  constructor(private ideraService: IderaServerService) { }
  serverName;
  serverLogin;
  serverPassword;
  consoleError;

  savedServerdetails = [{ 'id': 4, 'name': "Jasgeet", 'login': 'jasgeet@1', 'password': '1234' },
  { 'id': 5, 'name': "Geet", 'login': 'jasgeet@2', 'password': '1234' },
  { 'id': 6, 'name': "Jaffie", 'login': 'jasgeet@3', 'password': '1234' }
  ];

  serverdetails = [{ 'activity': true, 'id': 1, 'name': "Abcd" },
  { 'activity': true, 'id': 2, 'name': "def" },
  { 'activity': false, 'id': 3, 'name': "ghi" }]

  ngOnInit() {
    this.ideraService.getServerData().subscribe(res => {
      console.log(res);
    })


  }


  changeStatus(id) {
    for (let i = 0; i < this.serverdetails.length; i++) {
      if (this.serverdetails[i].id == id) {
        if (this.serverdetails[i].activity)
          this.serverdetails[i].activity = false;
        else
          this.serverdetails[i].activity = true;

      }
    }
  }

  startAll() {

    for (let i = 0; i < this.serverdetails.length; i++) {

      this.serverdetails[i].activity = true;

    }
  }


  stopAll() {

    for (let i = 0; i < this.serverdetails.length; i++) {

      this.serverdetails[i].activity = false;
    }
  }

  checkforDuplicateid(id) {
    for (let i = 0; i < this.serverdetails.length; i++) {
     if(this.serverdetails[i].id == id)
      return 1;

    }
    return 0;
  }

  connect() {
    var obj={
      "id":131,
     "loginId":this.serverLogin,
     "serverName":this.serverName,
     "password":this.serverPassword,
     "activity":true
     }
   this.ideraService.insertServerData(obj).subscribe(res=>{
  console.log(res)
});

    let loginCheck = 0;
    for (let i = 0; i < this.savedServerdetails.length; i++) {
      if (this.serverLogin == this.savedServerdetails[i].login) {
        loginCheck = 1;
        if (this.serverPassword == this.savedServerdetails[i].password) {

          let check = this.checkforDuplicateid(this.savedServerdetails[i].id);

          console.log(check);
          if (check == 0) {
            this.serverdetails.push({
              'id': this.savedServerdetails[i].id,
              'activity': false,
              'name': this.savedServerdetails[i].name
            }
            );
            this.consoleError='';
          }
          else{
            this.consoleError="Connection already added to the table"
          }

        }
        else {
          this.consoleError = 'Password didnt matched';
        }
      }
    }
    if (loginCheck == 0) {
      this.consoleError = 'No login found';
    }
   }

}
