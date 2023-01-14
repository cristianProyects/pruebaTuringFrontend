import axios from "axios";
import React from "react";
import Logo from "../img/logoHome.png"
import "../css/login.css";
import Swal from "sweetalert2";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let email=this.state.email;
    let password=this.state.password
    const obtenerProductos=async (email,password)=>{
      try {
        const data=await axios.post(`http://${window.location.hostname}:3500/api/login`,{
          email,
          password
      })
      if(data.data.data.token){
        localStorage.setItem("token",data.data.data.token)
        let timerInterval;
        Swal.fire({
        icon: "success",
        title: `<font face="Urbanist">${data.data.message}</font>`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color: "#264EF8",
        backdrop: `
                rgba(152,255,152,0.4)
                left top
                `,

        willClose: async () => {
          const usuario=await axios.get(`http://${window.location.hostname}:3500/api/user/select/${data.data.data.user}`)
          if(usuario.data.data.typeUser==="admin"){
            clearInterval(timerInterval);
            window.location.replace(`http://${window.location.hostname}:3000/admin`);
          }
          else{
            clearInterval(timerInterval);
            window.location.replace(`http://${window.location.hostname}:3000/inicio`);
          }
          
        },
      });
      }  
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "",
          html: `<font face="Urbanist">Usuario o contraseña incorrectos</font>`,
        });
      }
          
   }
   obtenerProductos(email,password)
  }
  render(){
  return (
    <div className="bg-login vh-100">
        <div class="card card-login mx-auto">
          <div className="card-image">
          <img src={Logo} class="card-img-top img-responsive" alt="logo"/>
          </div>
          <div class="card-body">
          <form onSubmit={this.handleSubmit} className="text-center">
            <div className="input-text">
              <div >
              Correo electronico:
              </div>
              <input value={this.state.value} onChange={this.handleChangeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
            </div>
            <div className="input-text">
              <div>
              Contraseña:
              </div>
              <input value={this.state.value} onChange={this.handleChangePassword} type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <button ype="submit" value="Submit" class="btn btn-success">Iniciar sesion</button>
          </form>
          </div>
      </div>
    </div>
  );
}
};
export default login;

