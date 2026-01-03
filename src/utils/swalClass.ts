import Swal from 'sweetalert2'


export default class Alert{
    static SuccessAlert(title:string,message:string){
        Swal.fire(
            {title:title,text:message,icon:'success'}
        )
    }
    static ErrorAlert(title:string,message:string){
        Swal.fire(
            {title:title,text:message,icon:'error'}
        )
    }
    static LoadingAlert(){
        Swal.fire({
        title: 'Cargando',
        html: 'Espere a que termine la carga de datos',
        allowOutsideClick: false, 
        allowEscapeKey: false,    
        didOpen: () => {
            Swal.showLoading();
        }
        });
    }
}