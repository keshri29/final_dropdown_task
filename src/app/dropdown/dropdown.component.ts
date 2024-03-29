import { Component, OnInit, input,EventEmitter,Output,  } from '@angular/core';

interface Option {
  label: string;
  value: string;
  showInput?: boolean; 
  showNestedButton?: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Output() selected: EventEmitter<Option> = new EventEmitter<Option>();

  isOpen = false;
  isClosed = false;
  selectedOption: Option | null = null;

  options: Option[] = [
    { label: 'Table', value: 'table', showInput: true },
    { label: 'Folder', value: 'folder',showNestedButton: true }
  ];
 
   
    tableOptions: { label: string, value: string }[] = [
                  { label: 'TABLE', value: 'make' }
    ];
  
  isOpenTableOptions: boolean = false;
  inputValue: string = ''; 

  toggleTableOptions() {
    this.isOpenTableOptions = !this.isOpenTableOptions;
  }
 
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  f : boolean = false;
  dropdown(){
   this.f = true;
  }

  selectOption(option: Option) {
    this.selectedOption = option;
    this.isOpen = true; 
    this.inputValue = ''; 
    this.selected.emit(option);
  }

  handleSelection(option: Option) {
    this.selectedOption = option;
    this.isOpen = false;
     this.selected.emit(option);
  }

  handleNestedSelection(option: Option) {
    console.log('Nested selection:', option);
    this.selected.emit(option); 
    if (option.value === 'table') {
      this.isOpen = false; 
    } else if (option.value === 'folder' && option.showNestedButton) {
      this.isOpen = true;
    }
  }
  
  savedData: string[] = [];
  save() {
    console.log( this.inputValue);
    if (this.selectedOption?.value === 'table' && this.inputValue.trim() !== '') {
      this.selectedOption.label = this.inputValue.trim();
      console.log(this.selectedOption.label);
  
      this.savedData.push(this.inputValue.trim());
      console.log(this.savedData);
    }
  
    this.inputValue = '';
    this.selectedOption = null;
  }

  cancel() {
    if (this.selectedOption?.value === 'table') {
      this.selectedOption.label = 'Table'; 
    }
    this.inputValue = ''; 
    this.selectedOption = null;
  }

  toggleNestedDropdown() {
    console.log('Nested plus button clicked!');
    if (!this.isClosed && this.selectedOption?.showNestedButton) {
      this.isClosed = true;
    } else {
      this.isClosed = false;
    }
  }

isPlus = false;
plusbtn(){
  this.isPlus =  true;
}

  ngOnInit() {
  }
}
