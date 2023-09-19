import React from 'react';
import { RouteType } from './types';
import Utils from '../Utils';

const login = React.lazy(() => import('../Components/login'));
const W9 = React.lazy(() => import('../Components/w9'));
const IndividualUs = React.lazy(() => import('../Components/individualUS'));
const EntityUs = React.lazy(() => import('../Components/entity'));
const Term =  React.lazy(() => import('../Components/term'));
const Certificates = React.lazy(() => import('../Components/certificates'));
const form = React.lazy(() => import('../FormGuide/form/index'));
const Guide = React.lazy(() => import('../FormGuide/form/guide'));
const Complete = React.lazy(() => import('../Components/complete'));

//
const Declaration = React.lazy(() => import('../Components/W-8BEN/Declaration'));
//
const US_Sourced = React.lazy(() => import('../Components/W-8BEN/Declaration/US'));


// 
const Non_us_sourced = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/Status'));
const Non_us_tin = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/US_Tin'));
const Claim = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/Claim/index'));
const Rates = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/Rates/index'));
const Certi = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/Certificates'));
const Part = React.lazy(() => import('../Components/W-8BEN/Declaration/Non-US/Part-certi'));



const ROUTES: Array<RouteType> = [
  {
    name: 'Login',
    path: "login",
    id: 0,
    Component: login,
    isPrivate: true,
  },
  {
    name: 'IndividualUs',
    path: "/",
    id: 10,
    Component: IndividualUs,
    isPrivate: true,
  },
  {
    name: 'W9',
    path: "W9",
    id: 1,
    Component: W9,
    isPrivate: true,
  },
  {
    name: 'IndividualUs',
    path:"IndividualUs",
    id: 2,
    Component: IndividualUs,
    isPrivate: true,
  },
  {
    name: 'EntityUs',
    path:"EntityUs",
    id: 2,
    Component: EntityUs,
    isPrivate: true},
    {
      name: 'Term',
      path:"Term",
      id: 3,
      Component: Term,
      isPrivate: true},
      {
        name:"Guide",
        path:"/Guide",
        id: 3,
        Component: Guide,
        isPrivate: true
      },
      {
        name: 'Certificates',
        path:"/Certificates",
        id: 4,
        Component: Certificates,
        isPrivate: true},
        {
          name: 'Complete',
          path:"Complete",
          id: 4,
          Component: Complete,
          isPrivate: true},
          {
            name:"form",
            path:"/form",
          id: 4,
          Component: form,
          isPrivate: true
          },

          {
            name:"Declaration",
            path:"W-8BEN/Declaration",
           id: 5,
           Component: Declaration,
           isPrivate: true
          },
          {
name:"Non_us_sourced",
path:"W-8BEN/Declaration/Non_US_Sorced/Status",
           id: 5,
           Component: Non_us_sourced,
           isPrivate: true
          },

          {
            name:"US_Sourced",
            path:"W-8BEN/Declaration/US_Sourced",
           id: 4,
           Component: US_Sourced,
           isPrivate: true
          },
          {
            name:"Non_us_tin",
            path:"W-8BEN/Declaration/US_Tin",
           id: 4,
           Component: Non_us_tin,
           isPrivate: true
          },
          {
            name:"Claim",
            path:"W-8BEN/Declaration/US_Tin/Claim",
           id: 5,
           Component: Claim,
           isPrivate: true
          },{
            name:"Rates",
            path:"W-8BEN/Declaration/US_Tin/Rates",
           id: 6,
           Component: Rates,
           isPrivate: true
          },{
            name:"Certi",
            path:"W-8BEN/Declaration/US_Tin/Certificates",
            id: 6,
            Component: Certi,
            isPrivate: true
          },
          {
            name:"Part",
            path:"W-8BEN/Declaration/US_Tin/Certification_Substitute",
            id: 6,
            Component: Part,
            isPrivate: true
          }



  


];

export default ROUTES;
