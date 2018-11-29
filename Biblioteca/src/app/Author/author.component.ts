import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author.service';
import { Author } from '../shared/model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Array<Author>;

  constructor(private authorService: AuthorService) {
    this.authorService = authorService;
   }

  ngOnInit() {
    this.authorService.getAuthor()
      .subscribe((data: Array<Author>) => {
        this.author = data.slice(0, 10);
      }, error => {
        console.log(error);
      });
  }

}
