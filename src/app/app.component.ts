import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import moment from "moment-hijri"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  mapWeekDays = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]

  title = 'hasan-homework';

  gregDate: Date = new Date()

  hijriDate: string = ""

  day: string = ""

  convertDate(){
    this.hijriDate = moment(this.gregDate).format("iYYYY/iM/iD")
    this.day = this.mapWeekDays[moment(this.gregDate).weekday()]
  }
}
