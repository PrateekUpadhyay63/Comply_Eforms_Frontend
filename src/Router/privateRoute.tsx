import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../Utils/storage';

function PrivateRoute({ children }: any) {
  const auth = getAccessToken();
  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
