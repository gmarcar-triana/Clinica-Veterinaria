import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientClinica } from './componets/client-clinica/client-clinica';

@Component({
  imports: [RouterOutlet, ClientClinica],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('form-clinica');
}
