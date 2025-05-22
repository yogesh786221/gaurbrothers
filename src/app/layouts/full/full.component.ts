import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
   standalone:true,
  imports: [RouterOutlet ,HeaderComponent, FooterComponent]
})
export class FullComponent {

}
