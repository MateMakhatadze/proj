import { Component,OnInit } from '@angular/core';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project10';

  constructor(private NewServiceService: NewServiceService) { }

  deleteItem(postid: number): void {
    this.NewServiceService.deleteItem(postid)
      .subscribe(
        () => {
          // Handle success, maybe show a success message
          console.log('Item deleted successfully');
        },
        error => {
          // Handle error, maybe show an error message
          console.error('Error deleting item:', error);
        }
      );
  }
}
