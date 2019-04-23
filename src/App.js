import React, { Component } from 'react';

import './App.css';
import { Button, Modal, Row,Col,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



import axios from 'axios';

 class App  extends Component {
  
  state = {
    Userdata: [],
    loading:false
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const Userdata = res.data;
        this.setState({ Userdata:Userdata});
        console.log(this.state.Userdata)
      }).catch((e) =>{
        console.log('error',e)
      })
  }

 

   
  render(){

const arr=[

  {id:"1",name:"kunal",
  rollmo:"123456",
  age:"12",
  url:"https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"},
  {id:"2",
  name:"ram",
  rollmo:"126s121",
  age:"20",
  url:"http://www.tspmb.telangana.gov.in/Resumes/20140709132010_cheat_codes.pdf"},
  {id:"3",
    name:"sam",
  rollmo:"126s121",
  age:"23",
  url:"https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"},
  {id:"4",
    name:"jack",
  rollmo:"126s121",
  age:"21",
  url:"https://rapids.ai/assets/files/cheatsheet.pdf"},
  
    ]

   return( <>
    <h1 style={{textAlign:"center",background:"lightgrey",padding:"5px"}}>
   Student PDF VIEW
   
  
  </h1>
  <Row style={{margin:"100px"}}>
    <Col>
<table>
  <thead>
  <tr>
    <th>Company</th>
    <th>rollmo</th>
    <th>age</th>
    <th>Doc view</th>
  </tr>
  </thead>
  <tbody>
  {arr.map((item)=>{

return(
  
  <tr key={item.id}>
  

    <td>{item.name}</td>
    <td>{item.rollmo}</td>
    <td>{item.age}</td>
    <td>
    
    
<Kunal  item={item}  /> 
    </td>
  </tr>




)
       })}
       </tbody>
  
 
</table>
</Col>
     
</Row>
<h1 style={{textAlign:"center"}}>Data with axios</h1> <br/>
<Row style={{margin:"100px"}}>

    <Col>
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Phone no</th>
    <th>website</th>
    <th>email</th>
  </tr>
  </thead>
  <tbody>
  {this.state.Userdata.map((item)=>{

return(
  
  <tr key={item.id}>
  

    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.website}</td>
    <td>{item.email}</td>
    
  </tr>




)
       })}
       </tbody>
  
 
</table>
</Col>
     
</Row>




   </> ) }
}
class Kunal extends Component {


    state = {
      modal: false
    }

  

 

  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    
  
    return (
      <div className="App">
     
      

     <Modal style={{width:"800px",height:"800px",maxWidth:"1000px"}}   isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
<ModalBody>
<p>{this.props.item.url}</p>
     <p>please wait few sec.. </p>
<object width="700" height="600" data={this.props.item.url} alt={this.props.name} aria-label="" />
</ModalBody>
<ModalFooter>
 
  <Button color="secondary" onClick={this.toggle}>Close</Button>
</ModalFooter>
</Modal>

<Button color="danger" onClick={this.toggle}>DOC</Button>



      </div>
    );
  }
}

export default App;

