import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  isOpen: boolean;
  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;
  }
  stopPropagation(event: any) {
    event.stopPropagation();
  }
}
