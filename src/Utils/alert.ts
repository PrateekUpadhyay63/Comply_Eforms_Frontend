import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "../App.scss";
const commonErr = 'OOPS! something went wrong!';

const toastList = new Set();
const MAXIMUM_TOAST = 1;
const showAlert = (type: number, message: string = commonErr) => {
  if (toast.error === undefined) {
    toast.arguments({
      autoClose: 1000,
      draggable: false,
      newestOnTop: true,
      position: 'bottom-left',
    });
  }
  // ddxd

  switch (type) {
    case 1:
      toast.success(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    case 2: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id : any = toast.error(message, {
          onClose: () => toastList.delete(id),
          className: '.Toastify__toast--error toast-info-container toast-info-container-after',
        });
        toastList.add(id);
      }
      break;
    }
    case 3: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id : any = toast.info(message, {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
      break;
    }
  }
};

export default showAlert;
