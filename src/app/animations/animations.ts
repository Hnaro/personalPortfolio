import { animate, transition, trigger, state, stagger, style } from "@angular/animations";


export const fadetextDarkMode = trigger("fadetextDarkMode", [
  state('dark', style({ "color":"#FFFFFF" })),
  transition("* => dark", animate("200ms")),
  transition("dark => *", animate("200ms"))
]);
export const fadeBGDarkMode = trigger("fadeBGDarkMode", [
  state('dark', style({ "background-color":"var(--darkModeBG)" })),
  transition("* => dark", animate("200ms")),
  transition("dark => *", animate("200ms"))
]);

//export const fadeInOutDarkModeIcon = trigger();
