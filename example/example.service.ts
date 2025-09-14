// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { getAllDataRequest } from '../base/entity/main-data.model';
// import {
//   BaseResponse,
//   BaseResponseError,
// } from '../base/entity/base-response.model';
// import { LogService } from './log.service';
// import { GlobalService } from './global.service';
// import {
//   ISC_TOKEN_EXPIRED,
//   ISC_TOKEN_INVALID,
//   ISC_UNAUTHORIZED,
// } from '../base/helper/constants/response-code';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataMainService {
//   constructor(
//     private httpClient: HttpClient,
//     private log: LogService,
//     private globalService: GlobalService
//   ) {}
//   private baseUrlIsaccGateway = environment.base_url_isacc_gateway;

//   updateMainData(request: any, flow: string): Observable<BaseResponse<any>> {
//     this.log.info(
//       flow,
//       'onRequestServices-updateMainData-request',
//       'Request update main data',
//       JSON.stringify(request)
//     );

//     return new Observable((observer) => {
//       this.httpClient
//         .put<BaseResponse<any>>(
//           this.baseUrlIsaccGateway + 'v2/apply/data/main',
//           request
//         )
//         .subscribe(
//           (data: BaseResponse<any>) => {
//             this.log.info(
//               flow,
//               'onRequestServices-updateMainData-response',
//               Success update main data,
//               data.output_schema
//             );

//             observer.next(data);
//             observer.complete();
//           },
//           (error: any) => {
//             this.log.error(
//               flow,
//               'onRequestServices-updateMainData-response',
//               Error update main data,
//               error
//             );

//             if (error instanceof DOMException) {
//               GlobalService.showPopupRefresh('Messages.Ooops');
//             }

//             observer.error(error);
//             observer.complete();
//           }
//         );
//     });
//   }

//   getMainData(
//     request: getAllDataRequest,
//     flow: string
//   ): Observable<BaseResponse<any>> {
//     this.log.info(
//       flow,
//       'onRequestServices-getMainData-request',
//       'Request get main data',
//       request
//     );

//     let params = new HttpParams();

//     params = params.append('reg-no', request.reg_no);
//     params = params.append('last-step', request.last_step);
//     params = params.append('dob', request.dob);

//     return new Observable((observer) => {
//       this.httpClient
//         .get(this.baseUrlIsaccGateway + 'v2/apply/data/main', { params })
//         .subscribe(
//           (data: any) => {
//             this.log.info(
//               flow,
//               'onRequestServices-getMainData-response',
//               Success get main data,
//               data.output_schema
//             );

//             observer.next(data);
//             observer.complete();
//           },
//           (error: BaseResponseError) => {
//             this.log.error(
//               flow,
//               'onRequestServices-getMainData-response',
//               Success get main data,
//               error
//             );

//             observer.error(error);
//             observer.complete();
//           }
//         );
//     });
//   }

//   validateSlipGaji(request: any, flow: string): Observable<any> {
//     let params = new HttpParams();

//     params = params.append('reg-no', request.regNo);

//     this.log.info(
//       flow,
//       'onRequestServices-validateSlipGaji-request',
//       'Request validate slip gaji',
//       params
//     );

//     return new Observable((observer) => {
//       this.httpClient
//         .get(this.baseUrlIsaccGateway + 'v2/apply/slip-gaji', {
//           params,
//         })
//         .subscribe(
//           (data: any) => {
//             this.log.info(
//               flow,
//               'onRequestServices-validateSlipGaji-response',
//               'Success Request validate slip gaji',
//               data
//             );

//             observer.next(data);
//             observer.complete();
//           },
//           (error: any) => {
//             this.log.error(
//               flow,
//               'onRequestServices-validateSlipGaji-response',
//               'Error Request validate slip gaji',
//               error
//             );

//             observer.error(error);
//             observer.complete();
//           }
//         );
//     });
//   }
// }
