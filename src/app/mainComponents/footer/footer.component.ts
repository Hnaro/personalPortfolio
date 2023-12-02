import { Component, DoCheck, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements DoCheck, OnInit {
  isDarkModeActive: any;

  src: any;
  instagram38PXIconSrc: any;
  linkdln38pxIconSrc: any;

  defaultSrcpath: any = "../../../assets/images/"
  defaultImageName: any[] = ["mailicon.jpg", "facebookIcon.jpg", "githubIcon.jpg", "phone-no.jpg"];


  socMedIconSrc: any[] = [];

  constructor(private themeService: MainServiceService) {}
  ngOnInit(): void {
    // default
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();  }
  ngDoCheck(): void {
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();
    if (this.isDarkModeActive) {
      // dark mode
      this.linkdln38pxIconSrc = "../../../assets/images/linkdlndarkIcon.jpg";
      this.instagram38PXIconSrc = "../../../assets/images/instagramdarkIcon.jpg";
      this.src = "../../../assets/images/ASLOGODark.jpg";
      this.socMedIconSrc = [];
      this.setSocMedIcon(2);
    } else {
      // default
      this.linkdln38pxIconSrc = "../../../assets/images/linkdlnIcon.jpg";
      this.src = "../../../assets/images/ASLOGOLight.jpg";
      this.instagram38PXIconSrc = "../../../assets/images/instagramIcon.jpg";
      this.socMedIconSrc = [];
      this.setSocMedIcon(1);

    }
  }
  setSocMedIcon(option: number) {
    switch(option) {
      case 1:
        this.defaultImageName.forEach(imageName => {
          this.socMedIconSrc.push(this.defaultSrcpath+imageName);
        });
      break;
      case 2:
      this.defaultImageName.forEach(imageName => {
        this.socMedIconSrc.push(this.defaultSrcpath+"darkMode"+imageName);
      });
      break;
    }
  }
}
