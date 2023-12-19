import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Lottie from 'lottie-web';
import lottieJson from '../assets/lottie.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('lottie', { static: true }) private lottieElement: ElementRef<any>;
  private lottieSrc = '../assets/lottie.json';

  ngOnInit() {
    Lottie.loadAnimation({
      container: this.lottieElement.nativeElement.querySelector('#lottie'),
      renderer: 'svg',
      animationData: lottieJson,
    });
  }
}
