const EndPoint = {
  login: "/Account/SignIn",
  individualAccountHolder: "/AccountHolderDetail/InsertAccountHolderDetail",
  GetCountries: "/Country/GetAllCountries",
  GetCountriesCode: "/Country/GetCountriesCode",
  GetAllIncomeCodes: "/Countries/GetAllIncomeCodes",
  GetStateByCountryId: "/Country/GetStateByCountryId?CountryId=258",
  InsertAccountHolderDetail: "/AccountHolderDetail/InsertAccountHolderDetail",
  W9PDF: "/W9Common/W9ViewFormPdf",
  postSecurutyCode: "/W9Common/SecurityCode",
  GetSecurityQuestions: "/WebAppBasic/GetAllSecurityQuestion",
  GetTinTypes: "/WebAppBasic/GetAgentTINTypeSelectionByAgentIdForEform",
  PostFormSelection: "/AccountHolderDetail/InsertConfirmationCode",
  getBreadCrums: "/Form/GetBreadCrumbs",
  GetAgentPaymentType: "/WebAppBasic/GetAgentPaymentTypeForEform",
};
export default EndPoint;
