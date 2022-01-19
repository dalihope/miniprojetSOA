import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrintingOperation } from 'src/models/printingOperation';

@Injectable({
  providedIn: 'root'
})
export class PrintingOperationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPrintingOperations(): Observable<PrintingOperation[]> {
    return this.http.get<PrintingOperation[]>(`${this.apiServerUrl}/printingOperation/all`);
  }

  public addPrintingOperation(printingOperation: PrintingOperation): Observable<PrintingOperation> {
    return this.http.post<PrintingOperation>(`${this.apiServerUrl}/printingOperation/add`, printingOperation);
  }

  public updatePrintingOperation(printingOperation: PrintingOperation): Observable<PrintingOperation> {
    return this.http.put<PrintingOperation>(`${this.apiServerUrl}/printingOperation/update`, printingOperation);
  }

  public deletePrintingOperation(printingOperation: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/printingOperation/delete/${printingOperation}`);
  }
}
