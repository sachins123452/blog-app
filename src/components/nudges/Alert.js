import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showSuccess = (message) => {
  toast(message,{
    type: 'success'
  });  
};
const showDanger = (message) => {
  toast(message,{
    type: 'error'
  });
};
const showWarning = (message) => {
  toast(message,{
    type: 'warning'
  });
};
const showInfo = (message) => {
  toast(message,{
    type: 'info'
  })
};

const showDefault = (message) => {
  toast(message)
}

export { showSuccess,showDanger,showWarning,showInfo,showDefault};
