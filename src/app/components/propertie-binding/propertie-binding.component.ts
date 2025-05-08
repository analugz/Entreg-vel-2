import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propertie-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './propertie-binding.component.html',
  styleUrl: './propertie-binding.component.css'
})
export class PropertieBindingComponent {
  imgUrl="../../../assets/image.png"
  isDisabled = true;
  descImg="Angular JS";

}
