import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrintingAgent } from 'src/models/printingAgent';
import { PrintingAgentService } from '../services/printing-agent.service';

@Component({
  selector: 'app-printing-agent',
  templateUrl: './printing-agent.component.html',
  styleUrls: ['./printing-agent.component.css']
})
export class PrintingAgentComponent implements OnInit {
  public printingAgents: PrintingAgent[];
  public editPrintingAgent: PrintingAgent;
  public deletePrintingAgent: PrintingAgent;

  constructor(private printingAgentService: PrintingAgentService){}

  ngOnInit() {
    this.getPrintingAgents();
  }

  public getPrintingAgents(): void {
    this.printingAgentService.getPrintingAgents().subscribe(
      (response: PrintingAgent[]) => {
        this.printingAgents = response;
        console.log(this.printingAgents);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-printingAgent-form').click();
    this.printingAgentService.addPrintingAgent(addForm.value).subscribe(
      (response: PrintingAgent) => {
        console.log(response);
        this.getPrintingAgents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(printingAgent: PrintingAgent): void {
    this.printingAgentService.updatePrintingAgent(printingAgent).subscribe(
      (response: PrintingAgent) => {
        console.log(response);
        this.getPrintingAgents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePrintingAgent(printingAgentId: number): void {
    this.printingAgentService.deletePrintingAgent(printingAgentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPrintingAgents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPrintingAgents(key: string): void {
    console.log(key);
    const results: PrintingAgent[] = [];
    for (const printingAgent of this.printingAgents) {
      if (printingAgent.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || printingAgent.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || printingAgent.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1){
      
        results.push(printingAgent);
      }
    }
    this.printingAgents = results;
    if (results.length === 0 || !key) {
      this.getPrintingAgents();
    }
  }

  public onOpenModal(printingAgent: PrintingAgent, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPrintingAgentModal');
    }
    if (mode === 'edit') {
      this.editPrintingAgent = printingAgent;
      button.setAttribute('data-target', '#updatePrintingAgentModal');
    }
    if (mode === 'delete') {
      this.deletePrintingAgent = printingAgent;
      button.setAttribute('data-target', '#deletePrintingAgentModal');
    }
    container.appendChild(button);
    button.click();
  }

}
