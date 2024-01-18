import { Component } from '@angular/core';
import { Database ,set,ref} from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticalAngular2'
  
  name:any;
  email:any;
  subject:any;
  message:any;
  errormessage:any;

  constructor(public database:Database)
  {
  
  }
  myfunc()
  {
    if(this.name ==null || this.email == null || this.subject == null || this.message == null)
    {
      
      this.errormessage = "Filled the form correctly";
    }
    else{
      
    

      const db = Database;
      set(ref(this.database, 'Abc/' + this.name), {
        username: this.name,
        useremail: this.email,
        usersubject: this.subject,
        usermessage: this.message,
      
      });
      alert("Data Submited Successfuly");
    }

  }
}
