import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

interface Option {
  label: string;
  value: string;
  showInput?: boolean; 
  showNestedButton?: boolean;

}

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrl: './recursion.component.css'
})
export class RecursionComponent implements OnInit {

  @Input() isOpen: boolean = false;
  @Output() selected: EventEmitter<Option> = new EventEmitter<Option>();

  inputValue: string = ''; 
  // @Input() isOpen:any = false;
  selectedOption: Option | null = null;

  options: Option[] = [
    { label: 'Table', value: 'table', showInput: true },
    { label: 'Folder', value: 'folder',showNestedButton: true }
  ];

  selectOption(option: Option) {
    this.selectedOption = option;
    this.isOpen = true; 
    this.inputValue = ''; 
    this.selected.emit(option);
  }


  save() {
    if (this.selectedOption?.value === 'table' && this.inputValue.trim() !== '') {
      console.log('Saving table input:', this.inputValue);
      this.selectedOption.label = this.inputValue;
      this.inputValue = '';
      this.selectedOption = null; 
       }
    else {
      console.error('Invalid input for saving table name.');
    }
  }

  // save() {
  //   console.log('Saving table input:', this.inputValue);
  //   const mockRequest = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('Table name saved successfully!');
  //       resolve(false); 
  //     }, 100000); 
  //   });
  //   mockRequest.then(() => {
  //     this.inputValue = ''; 
  //   }).catch((error) => {
  //     console.error('Error saving table name:', error);
  //   });
  // }
 

  // cancel() {
  //   this.inputValue = ''; 
  //   this.selectedOption = null;   
  // }
  

  cancel() {
    if (this.selectedOption?.value === 'table') {
      this.selectedOption.label = 'Table'; 
    }
    this.inputValue = '';
    this.selectedOption = null; 
  }
  

  isPlus = false;
  plusbtn(){
  this.isPlus =  true;
}

  ngOnInit(): void {
  }
}
