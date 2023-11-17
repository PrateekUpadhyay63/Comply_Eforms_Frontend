import React from "react";
import { RouteType } from "./types";
import Utils from "../Utils";

const login = React.lazy(() => import("../Components/login"));
// const W9 = React.lazy(() => import("../Components/w9"));
const IndividualUs = React.lazy(() => import("../Components/individualUS"));
const EntityUs = React.lazy(() => import("../Components/entity"));
const Term = React.lazy(() => import("../Components/term"));
const Certificates = React.lazy(() => import("../Components/certificates"));
const form = React.lazy(() => import("../FormGuide/form/index"));
const Guide = React.lazy(() => import("../FormGuide/form/guide"));
const Complete = React.lazy(() => import("../Components/complete"));
const Security = React.lazy(() => import("../Components/Security"));
const Submit = React.lazy(() => import("../Components/Submit"));
const PDFViewer=React.lazy(() => import("../Components/reusables/PdfViewer"));
const Chapter4=React.lazy(() => import("../Components/Chapter4Guide/index"));
//
const Declaration = React.lazy(
  () => import("../Components/W-8BEN/Declaration")
);
//
const US_Sourced = React.lazy(
  () => import("../Components/W-8BEN/Declaration/US")
);

//
const Non_us_sourced = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/Status")
);
const Non_us_tin = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/US_Tin")
);
const Claim = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/Claim/index")
);
const Rates = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/Rates/index")
);
const Certi = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/Certificates")
);
const Part = React.lazy(
  () => import("../Components/W-8BEN/Declaration/Non-US/Part-certi")
);


//
const Fedral_tax= React.lazy(() => import("../Components/W9Form/Purposes/index"));
const Back= React.lazy(() => import("../Components/W9Form/Backup"));
const Exemption= React.lazy(() => import("../Components/W9Form/Exemption"));
const tax= React.lazy(() => import("../Components/W9Form/tax"));
const Certificates_w9 = React.lazy(() => import("../Components/W9Form/Certification"));
const Penlities_W9= React.lazy(() => import("../Components/W9Form/penalities"));
//
const Eci = React.lazy(() => import("../Components/W-8ECI/Info"));
const TaxPurpose = React.lazy(() => import("../Components/W-8ECI/TaxPurpose"));
const TaxPayer = React.lazy(() => import("../Components/W-8ECI/TaxPayer"));
const Income_Eci = React.lazy(() => import("../Components/W-8ECI/Income"));
const Certi_Eci = React.lazy(
  () => import("../Components/W-8ECI/Certification")
);
const Part_ceri = React.lazy(
  () => import("../Components/W-8ECI/Participation")
);
//

const Presence= React.lazy(() => import("../Components/Form8233/SubstantialPresence"));
const TaxPay= React.lazy(() => import("../Components/Form8233/Taxpayer"));
const Owner= React.lazy(() => import("../Components/Form8233/owner"));
const Claim_part= React.lazy(() => import("../Components/Form8233/ClaimPart"));
const Documentaion= React.lazy(() => import("../Components/Form8233/Documentation"));
const Certi_8233= React.lazy(() => import("../Components/Form8233/Certi"));
const Submission= React.lazy(() => import("../Components/Form8233/submission"));

//
const Tax_Purpose_BenE= React.lazy(() => import("../Components/W8BEN-E/Tax-Purposes"));
const Factors_BenE= React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/US/Factors"));
const Declaration_BenE= React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE"));
const Status_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/Status"));
const US_Tin_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/US_Tin"));
const Claim_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/Claim_Non_US"));
const Rates_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/Rates"));
const Certi_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/Certification_BenE"));
const Participation_BenE = React.lazy(() => import("../Components/W8BEN-E/Declaration_BENE/Non_US/Participation_BenE"));


const ROUTES: Array<RouteType> = [
  {
    name: "Login",
    path: "login",
    id: 0,
    Component: login,
    isPrivate: true,
  },
  {
    name: "IndividualUs",
    path: "/",
    id: 10,
    Component: IndividualUs,
    isPrivate: true,
  },
  {
    name: "purposes",
    path: "/W9/purposes",
    id: 1,
    Component: Fedral_tax,
    isPrivate: true,
  },
  {
    name: "IndividualUs",
    path: "IndividualUs",
    id: 2,
    Component: IndividualUs,
    isPrivate: true,
  },
  {
    name: "Security",
    path: "/Security",
    id: 2,
    Component: Security,
    isPrivate: true,
  },
  {
    name: "EntityUs",
    path: "EntityUs",
    id: 2,
    Component: EntityUs,
    isPrivate: true,
  },
  {
    name: "Term",
    path: "Term",
    id: 3,
    Component: Term,
    isPrivate: true,
  },
  {
    name: "Guide",
    path: "/Guide",
    id: 3,
    Component: Guide,
    isPrivate: true,
  },
  {
    name: "Submit",
    path: "/Submit",
    id: 3,
    Component: Submit,
    isPrivate: true,
  },
  {
    name: "Certificates",
    path: "/Certificates",
    id: 4,
    Component: Certificates,
    isPrivate: true,
  },
  {
    name: "Complete",
    path: "Complete",
    id: 4,
    Component: Complete,
    isPrivate: true,
  },
  {
    name: "form",
    path: "/form",
    id: 4,
    Component: form,
    isPrivate: true,
  },

  {
    name: "Declaration",
    path: "W-8BEN/Declaration",
    id: 5,
    Component: Declaration,
    isPrivate: true,
  },
  {
    name: "Non_us_sourced",
    path: "W-8BEN/Declaration/Non_US_Sorced/Status",
    id: 5,
    Component: Non_us_sourced,
    isPrivate: true,
  },

  {
    name: "US_Sourced",
    path: "W-8BEN/Declaration/US_Sourced",
    id: 4,
    Component: US_Sourced,
    isPrivate: true,
  },
  {
    name: "Non_us_tin",
    path: "W-8BEN/Declaration/US_Tin",
    id: 4,
    Component: Non_us_tin,
    isPrivate: true,
  },
  {
    name: "Claim",
    path: "W-8BEN/Declaration/US_Tin/Claim",
    id: 5,
    Component: Claim,
    isPrivate: true,
  },
  {
    name: "Rates",
    path: "W-8BEN/Declaration/US_Tin/Rates",
    id: 6,
    Component: Rates,
    isPrivate: true,
  },
  {
    name: "Certi",
    path: "W-8BEN/Declaration/US_Tin/Certificates",
    id: 6,
    Component: Certi,
    isPrivate: true,
  },
  {
    name: "Part",
    path: "W-8BEN/Declaration/US_Tin/Certification_Substitute",
    id: 6,
    Component: Part,
    isPrivate: true,
  },
  {
    name: "Eci",
    path: "W-8ECI/Info",
    id: 6,
    Component: Eci,
    isPrivate: true,
  },
  {
    name: "TaxPurpose",
    path: "W-8ECI/Tax_Purpose",
    id: 6,
    Component: TaxPurpose,
    isPrivate: true,
  },
  {
    name: "TaxPayer",
    path: "W-8ECI/Tax_Payer",
    id: 6,
    Component: TaxPayer,
    isPrivate: true,
  },
  {
    name: "Income_Eci",
    path: "W-8ECI/Income",
    id: 6,
    Component: Income_Eci,
    isPrivate: true,
  },
  {
    name: "Certi_Eci",
    path: "W-8ECI/Certification",
    id: 6,
    Component: Certi_Eci,
    isPrivate: true,
  },

  {
    name: "Declaration",
    path: "W-8BEN/Declaration",
    id: 5,
    Component: Declaration,
    isPrivate: true,
  },
  {
    name: "Non_us_sourced",
    path: "W-8BEN/Declaration/Non_US_Sorced/Status",
    id: 5,
    Component: Non_us_sourced,
    isPrivate: true,
  },

  {
    name: "US_Sourced",
    path: "W-8BEN/Declaration/US_Sourced",
    id: 4,
    Component: US_Sourced,
    isPrivate: true,
  },
  {
    name: "Non_us_tin",
    path: "W-8BEN/Declaration/US_Tin",
    id: 4,
    Component: Non_us_tin,
    isPrivate: true,
  },
  {
    name: "Claim",
    path: "W-8BEN/Declaration/US_Tin/Claim",
    id: 5,
    Component: Claim,
    isPrivate: true,
  },
  {
    name: "Rates",
    path: "W-8BEN/Declaration/US_Tin/Rates",
    id: 6,
    Component: Rates,
    isPrivate: true,
  },
  {
    name: "Certi",
    path: "W-8BEN/Declaration/US_Tin/Certificates",
    id: 6,
    Component: Certi,
    isPrivate: true,
  },
  {
    name: "Part",
    path: "W-8BEN/Declaration/US_Tin/Certification_Substitute",
    id: 6,
    Component: Part,
    isPrivate: true,
  },
  {
    name: "Part_ceri",
    path: "W-8ECI/Certification/Participation",
    id: 6,
    Component: Part_ceri,
    isPrivate: true,
  },
  {
    name:"Presence",
    path: "Form8233/SubstantialPresence",
    id: 7,
    Component: Presence,
    isPrivate: true,
  },{
    name:"TaxPay",
    path: "Form8233/TaxPayer_Identification",
    id: 7,
    Component: TaxPay,
    isPrivate: true,
  },
  {
    name:"Owner",
    path: "Form8233/TaxPayer_Identification/Owner",
    id: 7,
    Component: Owner,
    isPrivate: true,
  },
  {
name:"Claim_part",
path: "Form8233/TaxPayer_Identification/Owner/Claim_part",
id: 7,
Component: Claim_part,
isPrivate: true,
  },
  {
    name:"Documentaion",
    path: "Form8233/TaxPayer_Identification/Owner/Documentaion",
    id: 7,
    Component: Documentaion,
    isPrivate: true,
  },{
    name:'Certi_8233',
    path: "Form8233/TaxPayer_Identification/Owner/Documentaion/certification",
    id: 7,
    Component: Certi_8233,
    isPrivate: true,
  },
  {
    name:"Submission",
    path: "Form8233/TaxPayer_Identification/Owner/Documentaion/certification/Submission",
    id: 7,
    Component: Submission,
    isPrivate: true,
  },
  {
    name:"PDFViewer",
    path: "PDFViewer",
    id: 7,
    Component: PDFViewer,
    isPrivate: true,
  },
  {
    name:"Back",
    path: "US_Purposes/Back",
    id: 7,
    Component: Back,
    isPrivate: true,
  },
  {
    name:"Exemption",
    path: "US_Purposes/Back/Exemption",
    id: 7,
    Component: Exemption,
    isPrivate: true,
  },
  {
    name:"tax",
    path: "US_Purposes/Back/Exemption/Tax",
    id: 7,
    Component: tax,
    isPrivate: true,
  },
  {
    name:"Certificates_w9",
    path: "US_Purposes/Back/Exemption/Tax/Certificates",
    id: 7,
    Component: Certificates_w9,
    isPrivate: true,
  },
  {
    name:"Penlities_W9",
    path: "US_Purposes/Back/Exemption/Tax/Certificates/Penlities_W9",
    id: 7,
    Component: Penlities_W9,
    isPrivate: true,
  },
  {
    name:"Tax_Purpose_BenE",
    path: "BenE/Tax_Purpose_BenE",
    id: 7,
    Component: Tax_Purpose_BenE,
    isPrivate: true,
  },
  {
    name:"Declaration_BenE",
    path: "BenE/Tax_Purpose_BenE/Declaration_BenE",
    id: 7,
    Component: Declaration_BenE,
    isPrivate: true,
  },
  {
    name:"Status_BenE",
    path: "BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Status_BenE",
    id: 7,
    Component: Status_BenE,
    isPrivate: true,
  },
  {
    name:"US_Tin_BenE",
    path: "BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/US_Tin_BenE",
    id: 7,
    Component: US_Tin_BenE,
    isPrivate: true,


  },
  {
    name:"Claim_BenE",
    path:"BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E",
    id: 7,
    Component: Claim_BenE,
    isPrivate: true,
  },
  {
    name:"Rates_BenE",
    path:"BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE",
    id: 7,
    Component: Rates_BenE,
    isPrivate: true,
  },
  {
    name:"Certi_BenE",
    path:"BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE/Certi_BenE",
    id: 7,
    Component: Certi_BenE,
    isPrivate: true,
  },
  {
    name:"Participation_BenE",
    path:"BenE/Tax_Purpose_BenE/Declaration_BenE/Non_US/Claim_Ben_E/Rates_BenE/Certi_BenE/Participation_BenE",
    id: 7,
    Component: Participation_BenE,
    isPrivate: true,
  },
  {
    name:"Factors_BenE",
    path:"BenE/Tax_Purpose_BenE/Declaration_BenE/US/Factors_BenE",
    id: 7,
    Component: Factors_BenE,
    isPrivate: true,
  },
  {
    name:"Chapter4",
    path:"/Chapter4",
    id: 7,
    Component: Chapter4,
    isPrivate: true,
  }

  
];

export default ROUTES;
