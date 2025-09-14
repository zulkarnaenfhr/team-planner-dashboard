// page

//   setDefaultValue() {
//     let request: getAllDataRequest = {
//       reg_no: this.storageService.get('reg_no'),
//       last_step: stepBackend.DataKeluargaTidakSerumah,
//       dob: this.storageService.get('dob'),
//     };

//     this.dataMainService
//       .getMainData(request, this.state.FORM_DATA_KELUARGA.state)
//       .subscribe((resp: BaseResponse<responseGetDataFormDataKeluarga>) => {
//         let dataResp = resp.output_schema;

//         this.formDataKeluarga.patchValue({
//           namaLengkap: dataResp?.emr_name,
//           hubungan: this.listCustRelation.filter(
//             (val) => val?.code == dataResp?.emr_cust_relation_cd
//           )[0],
//           handphone: dataResp?.emr_mobile_no,
//         });

//         this.CustomFormValidatorService.firstValidateForm(
//           this.formDataKeluarga
//         );

//         GlobalService.hideLoading();
//       });
//   }