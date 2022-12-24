/**
 * Mark input as Bootstrap valid/invalid
 * @see https://stackoverflow.com/questions/52366384/angular-access-formcontrol-from-directive
 * @see https://stackoverflow.com/questions/53783501/accessing-formgroup-instance-from-within-directive-attached-to-form
 */
import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formControlStatus]'
})
export class FormControlStatusDirective implements OnDestroy, OnInit {
  @Input()
  showValid?: boolean; // Show valid icon on input (optional feature)

  private statusSubscription!: Subscription;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly formControl: NgControl,
    private readonly renderer: Renderer2,
  ) { }
  
  ngOnInit(): void {
    this.statusSubscription = this.formControl.statusChanges!.subscribe(() => {
      this.onChange();
    });
  }

  ngOnDestroy(): void {
    this.statusSubscription.unsubscribe();
  }

  @HostListener('blur')
  onChange(): void {
    if (!this.formControl)
      return;

    if (this.formControl.touched && this.formControl.dirty) {
      if (this.formControl.disabled) {
        if (this.showValid) this.renderer.removeClass(this.elementRef.nativeElement, 'is-valid');
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
      } else if (this.formControl.invalid) {
        if (this.showValid) this.renderer.removeClass(this.elementRef.nativeElement, 'is-valid');
        this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
        if (this.showValid) this.renderer.addClass(this.elementRef.nativeElement, 'is-valid');
      }
    }
  }
}
