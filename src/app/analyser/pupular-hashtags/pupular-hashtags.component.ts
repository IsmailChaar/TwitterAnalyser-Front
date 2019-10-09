import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pupular-hashtags',
  templateUrl: './pupular-hashtags.component.html',
  styleUrls: ['./pupular-hashtags.component.scss']
})
export class PupularHashtagsComponent {


    data: any;

        constructor() {
            this.data = {
                labels: ['#ProvaDoFazendeiro', '#SegundaChamada', '#HipHopAwards', '#MakeAHorrorFilmLessScary', 'Rays', '#住んでる都道府県を名前を出さずに言う', 'PG&E'],
                datasets: [
                    {
                        label: 'number of tweets in k',
                        backgroundColor: '#4263F5',
                        borderColor: '#1E36E5',
                        data: [101, 23, 92, 97, 84, 41, 18]
                    }

                ]
            }
        }

}
