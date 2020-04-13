import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cordee-telephonique-anim';

  /** Template reference to the canvas element */
  @ViewChild('canvasEl', { static : true} ) canvasEl: ElementRef;
  
  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
  
    this.draw();
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private draw() {
    this.context.font = "30px Arial";
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    var background = new Image();
    background.src = '../assets/img/background.png'

    const backgroundWidth = 2000;
    const backgroundHeight = 1069;

    const width = (this.canvasEl.nativeElement as HTMLCanvasElement).width;
    const height = (this.canvasEl.nativeElement as HTMLCanvasElement).height;
    const widthCoef = width / backgroundWidth;
    const heightCoef = height / backgroundHeight;

    const climberWidth = 292;
    const climberHeight = 295;
    var climber = new Image();
    climber.src = '../assets/img/3climbers.png';

    background.onload = () => {
      this.context.drawImage(background,0,0,width,height);  
      this.context.drawImage(climber, 25, height - 140, climberWidth * widthCoef, climberHeight * heightCoef);  
    }

    /*
    const climberWidth = 98;
    const climberHeight = 107;
    var climber = new Image();
    climber.src = '../assets/img/climber1.png';

    climber.onload = () =>{
      this.context.drawImage(climber,width / 5, height / 2,climberWidth * widthCoef, climberHeight * heightCoef);  

    }*/


  }

  open() {
    window.open('Anim', '_blank')
  }
}
