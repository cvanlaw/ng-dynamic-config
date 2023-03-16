import { Component, OnInit, } from '@angular/core';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string = "not set";
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getMessage().subscribe(resp => this.message = resp);
  }
}
