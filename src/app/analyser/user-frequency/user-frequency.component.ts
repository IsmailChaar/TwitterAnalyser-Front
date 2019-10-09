import { Component, OnInit } from '@angular/core';

import {ChartModule} from 'primeng/chart';

@Component({
  selector: 'app-user-frequency',
  templateUrl: './user-frequency.component.html',
  styleUrls: ['./user-frequency.component.scss']
})
export class UserFrequencyComponent {
  data: any;

      constructor() {
          this.data = {
              labels: ['Reuters', 'NatGeo', 'TEDTalks', 'MSN', 'jakpost', 'UN', 'java'],
              datasets: [
                  {
                      label: 'number of tweets',
                      backgroundColor: '#42A5F5',
                      borderColor: '#1E88E5',
                      data: [42, 30, 18, 12, 8, 6, 4]
                  }

              ]
          }
      }

}
