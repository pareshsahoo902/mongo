import React from "react";

import './App.css';
var res;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      first_name:"",
      last_name:"",
      email:"",
      phone_number:"",
      image_url:"",
      response:"hhh"
    }
  }
  
  apicall=(first_name,last_name,email,phone,image)=>{
    const formData = new FormData()
    formData.append('firstname', first_name);
    formData.append('lastname', last_name);
    formData.append('email', email);
    formData.append('phonenumber', phone);
    formData.append('profile_image', image);
  
    fetch("https://nodeexcersize.herokuapp.com/api/userModel",{
      method:"POST",
      
      body:formData,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
       res=responseJson;
      })
      .catch(error => {
      });
          
        
      
  }
  render(){
    console.log(res);
  return (
    <div className="App">
      <h1>Welcome</h1>
      <form>
      <br/>
      <label class='text-feild'>
         Select Your Image : 
      <input type="file" name="name" onChange={(e)=>{this.setState({image_url:e.target.files[0]})}}/>
      </label>      <br/>
      <br/>
      <label class='text-feild'>
         First Name:
      <input type="text" name="name" onChange={(e)=>{
        this.setState({
          first_name:e.target.value
        })
      }}/>
      </label>
      <br/>
      <label class='text-feild'>
         Last Name:
      <input  type="text" name="name" onChange={(e)=>{
        this.setState({
          last_name:e.target.value
        })
      }}/>
      </label>
      <br/>
      <label class='text-feild'>
         Email ID:
      <input type="text" name="name" onChange={(e)=>{
        this.setState({
          email:e.target.value
        })
      }}/>
      </label>
      <br/>

      <label class='text-feild'>Phone Number:   
      <input type="text" name="name" onChange={(e)=>{
        this.setState({
          phone_number:e.target.value
        })
      }}/>
      </label>
      <br/>
      <br/>
      <br/>
      <br/>
    
      <button onClick={()=>{this.apicall(this.state.first_name,this.state.last_name,this.state.email,this.state.phone_number,this.state.image_url)}}>Click</button>
  </form>
      
    </div>
  );
}
}


export default App;
