import React,{Component} from 'react'
export const styles={
    border:'solid 0px 0px  0px 0px red',
    textAlign:'center',
    boxShadow:'0px 2px orange'
  }




  class Component1 extends Component{
  
    render(){
      return (
        <div>
          
          {this.props.name}
          {this.props.age}
          
        </div>
      )
    }
  }


  export default Component1;