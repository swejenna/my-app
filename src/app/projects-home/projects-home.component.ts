import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  standalone: true,
  imports: [],
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css'
})
export class ProjectsHomeComponent {
  firstName: string = "Jenna";
  lastName: string = "Banker";
  phoneNumber: string = "(123) 456-7890";
  jobTitle: string = "Vice President";

  setProperty(event: Event) {
    let target = event.target as HTMLInputElement;
    let property: string = target.id;

    switch(property) {
      case "firstNameInput":
        this.firstName = target.value;
        break;
      case "lastNameInput":
        this.lastName = target.value;
        break;
      case "phoneNumberInput":
        this.phoneNumber = target.value;
        break;
      case "jobTitleInput":
        this.jobTitle = target.value;
        break;
      default:
        console.warn("No matching ID found for ID: " + property);
        break;
    }
  }

  constructor() { }
  ngOnInit(): void { }
}
