import React,{Component} from "react";
import { ReactDOM } from "react";
import "./Login.css";
import { NavLink ,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

 class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


    handleSubmit(e){
      
        e.preventDefault();
        const{email,password} = this.state;
        console.log(email,password);

        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userLoggedIN");
            });

            document.getElementById('my_form').reset();
            
            this.props.navigate("/home");
    }


render(){
    return(
        <>
        <div className="login-div">
        <form onSubmit={this.handleSubmit} id="my_form" >
            <div className="sin">
                <h3>MEMBER LOGIN</h3>
            </div>

        <div className="mb-3 sin">
          {/* <label>Email address</label> <br/> */}
          <input
            
            type="email"
            className="form-control inp"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}  
            required={true}     
          />
        </div>
        <br/>

        <div className="mb-3 sin">
          {/* <label>Password</label><br/> */}
          <input
            type="password"
            className="form-control inp "
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>
        

        <div className="d-grid sin">

            <button type="submit" className="btn btn-primary inp1"> 
              LOGIN
            </button>

          
        </div>

        <hr className="hrr"/>
        <div className="d-grid sin">
            <Link to={'/signin'}>
              <button type="button" className="btn btn-primary inp11"> 
                REGISTER
              </button>
            </Link>
        </div>  
       
      </form>


        </div>
        </>
    );

}}

export function Logini(props){
  const navigate = useNavigate();
  return(<Login navigate={navigate}></Login>)
}

// export default Login;