import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteType } from './types';
import PrivateRoute from './privateRoute';
import ROUTES from './routes';
import { CircularProgress } from '@mui/material';
// import AccessControlWrapper from './accessControlWrapper';

function RoutesWrapper() {
  return (
    <Suspense
      fallback={
        <div className="loding_spinner">
          <CircularProgress />
        </div>
      }
    >
      <Routes>
        {ROUTES.map(({ path, id, Component, isPrivate, name, roleName }: RouteType) => {
        //   if (isPrivate) {
        //     return (
        //       <Route
        //         key={id}
        //         path={path}
        //         element={
        //           <PrivateRoute>
        //             <AccessControlWrapper name={name} roleName={roleName}>
        //               <Component />
        //             </AccessControlWrapper>
        //           </PrivateRoute>
        //         }
        //       />
        //     );
        //   }
          return <Route key={id} path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default RoutesWrapper;
