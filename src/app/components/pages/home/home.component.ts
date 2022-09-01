import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faSearch = faSearch;
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  // todo search

  constructor(private momentsService: MomentService) {}

  ngOnInit(): void {
    this.momentsService.getMoments().subscribe((item) => {
      const data = item.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
}
