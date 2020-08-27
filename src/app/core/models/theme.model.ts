export interface Theme {
  value: string;
  viewValue: string;
  dark: boolean;
}

export const themes: Theme[] = [
  /* Custom Themes */
  {value: 'green-thumb', viewValue: 'Green Thumb', dark: true},
  {value: 'america', viewValue: 'America', dark: false},
  /* Material Themes */
  {value: 'deeppurple-amber', viewValue: 'Deep Purple/Amber', dark: false},
  {value: 'indigo-pink', viewValue: 'Indigo/Pink', dark: false},
  {value: 'pink-bluegrey', viewValue: 'Pink/Blue Grey', dark: false},
  {value: 'purple-green', viewValue: 'Purple/Green', dark: false},
];
