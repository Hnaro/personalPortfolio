import { animate, transition, trigger, state, stagger, style, keyframes } from "@angular/animations";

export const fadetextDarkMode = trigger("fadetextDarkMode", [
  state('dark', style({ "color":"#FFFFFF" })),
  transition("* => dark", animate("100ms")),
  transition("dark => *", animate("100ms"))
]);
export const fadeBGDarkMode = trigger("fadeBGDarkMode", [
  state('dark', style({ "background-color":"var(--darkModeBG)" })),
  transition("* => dark", animate("100ms")),
  transition("dark => *", animate("100ms"))
]);
export const slideLeftLightModeIcon = trigger("slideLeftLightModeIcon", [
  transition(":enter", [
    style({ opacity: 0, transform: "translateX(-200%)" }), //apply default styles before animation starts
    animate(
        "750ms ease-in-out",
        style({ opacity: 1, transform: "translateX(0)" })
    )
])
]);
export const slideRightLightModeIcon = trigger("slideRightLightModeIcon", [
  transition("* => *", [
    style({ opacity: 0, transform: "translateX(200%)" }), //apply default styles before animation starts
    animate(
        "750ms ease-in-out",
        style({ opacity: 1, transform: "translateX(0)" })
    )
])
]);
/* export const slideRightDarkModeIcon = trigger("slideRightDarkModeIcon", [
  state("", style({ "transform":"translateX(5px)" })),
]); */
//export const fadeInOutDarkModeIcon = trigger();
