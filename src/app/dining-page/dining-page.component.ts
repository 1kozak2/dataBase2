import { Component } from '@angular/core';

interface MealOption {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-dining-page',
  standalone: true,
  imports: [],
  templateUrl: './dining-page.component.html',
  styleUrl: './dining-page.component.css'
})
export class DiningPageComponent {
  mealOptions: MealOption[] = [
    {
      name: 'Pełne Wyżywienie',
      description: 'Śniadanie, obiad i kolacja na każdy dzień pobytu',
      price: 120
    },
    {
      name: 'Obiad',
      description: 'Sam obiad na każdy dzień pobytu',
      price: 50
    },
    {
      name: 'Śniadanie i Kolacja',
      description: 'Śniadanie i kolacja na każdy dzień pobytu',
      price: 90
    }
  ];
}
