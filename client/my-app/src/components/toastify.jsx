import { toast } from 'react-toastify';


const showMessage = (type,message)=>{
    if(toast[type]){
        toast[type](message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
}

export default showMessage