import { animate, trigger, style, stagger, sequence, state, transition } from '@angular/animations';


export const fadeInDarkLightTheme = trigger("fadeInDarkLightTheme", [
  state("dark", style({

  })),
  transition("* <=> dark", animate("250ms"))
]
);
