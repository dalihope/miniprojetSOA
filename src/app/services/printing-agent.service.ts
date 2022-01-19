import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrintingAgent } from 'src/models/printingAgent';

@Injectable({
  providedIn: 'root'
})
export class PrintingAgentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPrintingAgents(): Observable<PrintingAgent[]> {
    return this.http.get<PrintingAgent[]>(`${this.apiServerUrl}/printingAgent/all`);
  }

  public addPrintingAgent(printingAgent: PrintingAgent): Observable<PrintingAgent> {
    return this.http.post<PrintingAgent>(`${this.apiServerUrl}/printingAgent/add`, printingAgent);
  }

  public updatePrintingAgent(printingAgent: PrintingAgent): Observable<PrintingAgent> {
    return this.http.put<PrintingAgent>(`${this.apiServerUrl}/printingAgent/update`, printingAgent);
  }

  public deletePrintingAgent(printingAgentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/printingAgent/delete/${printingAgentId}`);
  }
}
