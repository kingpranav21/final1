import React,{Component} from "react";
import { ReactDOM } from "react";
import "./SignIn.css";
import { NavLink ,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

 class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            phone:"",
            email:"",
            password:""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e){
      
        e.preventDefault();
        const{name,phone,email,password} = this.state;
        console.log(name,phone,email,password);

        fetch("http://localhost:5000/signin",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                password,
            }),
        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userRegister");
            });

            document.getElementById('my_form1').reset();
            
            this.props.navigate("/home");
    }


render(){
    return(
        <>
        <div className="login-div">
        <form onSubmit={this.handleSubmit} id="my_form1" >
            <div className="sinin">
                <h3>CREATE ACCOUNT</h3>
            </div>


            <div className="mb-3 sinin">
          
          <input
            
            type="text"
            className="form-control inpin"
            placeholder="Enter Your Name"
            onChange={(e)=>this.setState({name:e.target.value})}  
            required={true}     
          />
        </div>
        <br/>

        <div className="mb-3 sinin">
          
          <input
            
            type="number"
            className="form-control inpin"
            placeholder="Phone Number"
            onChange={(e)=>this.setState({phone:e.target.value})}  
            required={true}     
          />
        </div>
        <br/>

        <div className="mb-3 sinin">
          {/* <label>Email address</label> <br/> */}
          <input
            
            type="email"
            className="form-control inpin"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}  
            required={true}     
          />
        </div>
        <br/>

        <div className="mb-3 sinin">
          {/* <label>Password</label><br/> */}
          <input
            type="password"
            className="form-control inpin"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>
        <br/>

        
        <div className="d-grid sinin">

            <button type="submit" className="btn btn-primary inp1in"> 
              REGISTER
            </button>

          
        </div>

          
       
      </form>


        </div>
        </>
    );

}}

export function Signini(props){
  const navigate = useNavigate();
  return(<SignIn navigate={navigate}></SignIn>)
}
