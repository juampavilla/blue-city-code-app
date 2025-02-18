import { Component, Input } from '@angular/core';
import { Svg } from '../../model/svg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {

  @Input() SvgTag!: Svg;

}
