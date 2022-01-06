import actionTypes from "../actionTypes";

const intialState = {
  isLoading: false,
  successCreatePersonal: false,
  successCreatePendidikan: false,
  data: [],
  dataUser: {},
  dataPendidikan: [],
  dataKerja: [],
  dataKemampuan: []
};

const cvReducer = (state = intialState, action) =>{
    switch (action.type) {
      case actionTypes.SUCCESS_CREATE_PERSONAL:
        return {
          ...state,
          successCreatePersonal: action.value,
        };
      case actionTypes.SUCCESS_CREATE_PENDIDIKAN:
        return {
          ...state,
          successCreatePendidikan: action.value,
        };
      case actionTypes.IS_DATA:
        return {
          ...state,
          data: action.value,
        };
      case actionTypes.Data_USER:
        return {
          ...state,
          dataUser: action.value,
        };
      case actionTypes.DATA_PENDIDIKAN:
        return {
          ...state,
          dataPendidikan: action.value,
        };
      case actionTypes.DATA_KERJA:
        return {
          ...state,
          dataKerja: action.value,
        };
      case actionTypes.DATA_KEMAMPUAN:
        return {
          ...state,
          dataKemampuan: action.value,
        };
      default:
        return state;
    }
}

export default cvReducer