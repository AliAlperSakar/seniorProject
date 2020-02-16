import React, {Component} from "react";
import bilkentImage from '../images/bilkentImage.png';
import "../css/Login.css";
import Axios from "axios";
import Iframe from "react-iframe";

export default class Login extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            url:'',
           id:'',
           password:'',
           status:'',
           data:''
        }
        // this.sendUrl = this.sendUrl.bind(this);
    }

    componentDidMount(){
        // this.sendUrl();
        // console.log("Hello");
    }

    // sendUrl(){
    //     Axios.get('https://stars.bilkent.edu.tr/accounts/login',{
    //         params: {url: this.state.url}
    //     }).then( (response) => {
    //         this.setState({
    //             data: response.data
    //         })

    //         console.log(response);
    //     });
    // }
    // submitForm(){
    //     console.log("Submit Form");
    // }

    load(){

    }
    render(){
        console.log(this.state.url);
        return(
            <div>
                <Iframe url=''
                    width="100%"
                    height="1000px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    src="https://stars.bilkent.edu.tr/accounts/login"
                    onLoad = {function() { console.log(document.getElementById("myId").ownerDocument.body.children) }}
                    />
            </div>
        //     <div className="col-md-8">
        //     <div id="login">
        //         <div className="bilkentImage">
        //     <img className="bilkentlogo" src={bilkentImage} alt="bilkentImage" />
        //   </div>
        //         <div className="cardlogin">
        //     <div className="card-body">
        //       <div>
        //         <h3>BilSports Login System</h3>
        //       </div>
        //       <form onSubmit={this.submitForm} className="form">
        //         <div className="form-group">
        //           <label htmlform="id">User Id</label>
        //           <input
        //             type="text"
        //             name="id"
        //             id="id"
        //             value={this.state.id}
        //             placeholder=" Enter id "
        //             className="form-control"
        //             // onChange={this.onChange}
        //           />
        //         </div>

        //         <div className="form-group">
        //           <label htmlform="password">Password</label>
        //           <input
        //             type="password"
        //             name="password"
        //             id="id"
        //             value={this.state.password}
        //             placeholder=" Enter password "
        //             className="form-control"
        //             // onChange={this.onChange}

        //           />
        //         </div>
        //         <button className="btn btn-danger btn-block" type="submit">Login</button>

        //       </form>
        //     </div>
        //   </div>
        //   </div>
        //   </div>

        )
    }
}