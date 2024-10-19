import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-header', /*este va a ser el nombre de  como se llame para llamarlo general osea <app-header> */
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
