import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrintingOperation } from 'src/models/printingOperation';
import { PrintingOperationService } from '../services/printing-operation.service';

@Component({
  selector: 'app-printing-operation',
  templateUrl: './printing-operation.component.html',
  styleUrls: ['./printing-operation.component.css']
})
export class PrintingOperationComponent implements OnInit {
  public printingOperations: PrintingOperation[];
  public editPrintingOperation: PrintingOperation;
  public deletePrintingOperation: PrintingOperation;

  constructor(private printingOperationService: PrintingOperationService){}

  ngOnInit() {
    this.getPrintingOperations();
  }

  public getPrintingOperations(): void {
    this.printingOperationService.getPrintingOperations().subscribe(
      (response: PrintingOperation[]) => {
        this.printingOperations = response;
        console.log(this.printingOperations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-printingOperation-form').click();
    this.printingOperationService.addPrintingOperation(addForm.value).subscribe(
      (response: PrintingOperation) => {
        console.log(response);
        this.getPrintingOperations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(printingOperation: PrintingOperation): void {
    this.printingOperationService.updatePrintingOperation(printingOperation).subscribe(
      (response: PrintingOperation) => {
        console.log(response);
        this.getPrintingOperations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePrintingOperation(printingOperationId: number): void {
    this.printingOperationService.deletePrintingOperation(printingOperationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPrintingOperations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPrintingOperations(key: string): void {
    console.log(key);
    const results: PrintingOperation[] = [];
    for (const printingOperation of this.printingOperations) {
      if (printingOperation.fileUrl.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || (printingOperation.numberofCopy) != 0
      || (printingOperation.teacher_id) != 0){
      
        results.push(printingOperation);
      }
    }
    this.printingOperations = results;
    if (results.length === 0 || !key) {
      this.getPrintingOperations();
    }
  }

  public onOpenModal(printingOperation: PrintingOperation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPrintingOperationModal');
    }
    if (mode === 'edit') {
      this.editPrintingOperation = printingOperation;
      button.setAttribute('data-target', '#updatePrintingOperationModal');
    }
    if (mode === 'delete') {
      this.deletePrintingOperation = printingOperation;
      button.setAttribute('data-target', '#deletePrintingOperationModal');
    }
    container.appendChild(button);
    button.click();
  }


}
