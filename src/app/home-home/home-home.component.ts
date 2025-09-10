import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-home',
  standalone: true,
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrl: './home-home.component.css'
})
export class HomeHomeComponent {
  bankerName: string = "JennaTheBanker";
  bankerCity: string = "Raleigh";
  bankerState: string = "NC";
  bankerPhone: string = "(123) 456-7890";
  bankerEmail: string = "jennathebanker@me.com";

  summary: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  school: string = "North Carolina State University";
  schoolDegree: string = "Bachelor of Science, Accounting";
  schoolDates: string = "10/2024 - Present";
  employerName: string = "J.P. Morgan Chase & Co";
  jobTitle: string = "Banker/Teller"
  employmentDates: string = "06/2024 - 08/2024";


  constructor() { }
  ngOnInit(): void { }
}
