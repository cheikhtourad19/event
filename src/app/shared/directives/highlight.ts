import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add('highlight');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('highlight');
  }
}
