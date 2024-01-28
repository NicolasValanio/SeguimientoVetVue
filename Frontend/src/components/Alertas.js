import Swal from 'sweetalert2'


const Alertas={
  // Alerta registro
  AlertaRegistro(mensaje){
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: `${mensaje}`,
      showConfirmButton: false,
      timer: 1500
    })
  },
  
  //   Alerta Error
  AlertaError(mensaje){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${mensaje}`,
    })
  },
  

}


export default Alertas