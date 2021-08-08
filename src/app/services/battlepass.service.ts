import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  BattlepassMetadata,
  BattlepassUpdateData,
  BattlepassWeekData,
  QuestInstance,
} from '../types/battlepass.types';

interface QuestUpdate {
  id: number;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class BattlepassService {
  battlepassMetadataUrl = '/bp-metadata';
  battlepassWeekDataUrl = '/bp-weekdata';

  constructor(private http: HttpClient) {}

  getBattlepassMetadata() {
    return this.http
      .get<BattlepassMetadata>(environment.apiUrl + this.battlepassMetadataUrl)
      .pipe(catchError(this.handleError));
  }

  getBattlepassWeekData(weekNumber: number) {
    return this.http
      .get<BattlepassWeekData>(
        environment.apiUrl + this.battlepassWeekDataUrl + '/' + weekNumber
      )
      .pipe(catchError(this.handleError));
  }

  updateBattlepassWeekData(weekNumber: number, quest: QuestInstance) {
    let questInstance: QuestUpdate = {
      id: quest.id,
      status: quest.status,
    };
    return this.http
      .put<BattlepassUpdateData>(
        environment.apiUrl + this.battlepassWeekDataUrl + '/' + weekNumber,
        questInstance
      )
      .pipe(catchError(this.handleError));
  }

  //todo:
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
