import { Component } from '@angular/core';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private configService: ConfigService) {}

  getMessage(): string {
    return this.configService.getMessage()
  }
}
