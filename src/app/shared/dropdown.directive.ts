import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
 
@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropDown'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
 
  constructor(private el: ElementRef, private elRef:ElementRef, private renderer: Renderer2) { }
 
  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    const part = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) this.renderer.addClass(part, 'show');
    else this.renderer.removeClass(part, 'show');
  }
}