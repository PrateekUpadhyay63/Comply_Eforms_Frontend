const EndPoint = {
  login: "/Account/SignIn",
  individualAccountHolder: "/AccountHolderDetail/InsertAccountHolderDetail",
  GetCountries: "/Country/GetAllCountries",
  GetCountriesCode: "/Country/GetCountriesCode",
  GetAllIncomeCodes: "/Countries/GetAllIncomeCodes",
  GetStateByCountryId: "/Country/GetStateByCountryId",
  InsertAccountHolderDetail: "/AccountHolderDetail/InsertAccountHolderDetail",
  W9PDF: "/W9Common/W9ViewFormPdf",
  postSecurutyCode: "/W9Common/SecurityCode",
  GetSecurityQuestions: "/WebAppBasic/GetAllSecurityQuestion",
  GetTinTypes: "/WebAppBasic/GetAgentTINTypeSelectionByAgentIdForEform",
  PostFormSelection: "/AccountHolderDetail/InsertConfirmationCode",
  getBreadCrums: "/Form/GetBreadCrumbs",
  GetAgentPaymentType: "/WebAppBasic/GetAgentPaymentTypeForEform",
  GetLimitationBenefits:"/W9Common/GetLimitationBenefits",
  GetIncomeTypes:"/W9Common/GetIncomeTypeDefaults",

  //
  GetAgentCapacityHiddenForEform: "/WebAppBasic/GetAgentCapacityHiddenForEform",
  GetAgentChapter4EntityTypeHiddenForEform: "/WebAppBasic/GetAgentChapter4EntityTypeHiddenForEform",
  GetAgentChapter3EntityTypeHiddenForEform: "/WebAppBasic/GetAgentChapter3EntityTypeHiddenForEform",
  GetAgentChapter4EntityTypeImportantForEform: "/WebAppBasic/GetAgentChapter4EntityTypeImportantForEform",
  GetAgentDocumentationMandatoryForEform: "/WebAppBasic/GetAgentDocumentationMandatoryForEform",
  GetAgentExemptionCodeDisabledForEform: "/WebAppBasic/GetAgentExemptionCodeDisabledForEform",
  GetAgentIncomeCodeHiddenForEform: "/WebAppBasic/GetAgentIncomeCodeHiddenForEform",
  GetAgentUSVisaTypeHiddenForEform: "/WebAppBasic/GetAgentUSVisaTypeHiddenForEform",
  GetAgentFATCAExemptionCodeHiddenForEform: "/WebAppBasic/GetAgentFATCAExemptionCodeHiddenForEform",
  GetAgentFATCAEntityGIINChallengeDisabledForEform: "/WebAppBasic/GetAgentFATCAEntityGIINChallengeDisabledForEform",
  GetAgentSPTQuestionHiddenForEform: "/WebAppBasic/GetAgentSPTQuestionHiddenForEform",
  GetAgentWrittenStatementSelectionByAgentIdForEform: "/WebAppBasic/GetAgentWrittenStatementSelectionByAgentIdForEform",
  GetAgentTINTypeSelectionByIdForEform: "/WebAppBasic/GetAgentTINTypeSelectionByIdForEform",
  GetAgentCountriesImportantForEform:"/WebAppBasic/GetAgentCountriesImportantForEform",
  GetChapter3Status:"/W9Common/GetChapter3Status",
  GetChapter4Statuses:"/W9Common/GetChapter4Statuses",
  GetAgentIncomeTypeHiddenAllowAnoymo:"/AgentUSSourceIncome/GetAgentIncomeTypeHiddenAllowAnoym",
  SendOTPMail:"/Mail/SendOTPMail",
};
export default EndPoint;
