import React,{Component} from 'react'
import ImageHolder from './imageHolder';

class Profiles extends Component{
    cardColor="rgba(255,255,255,0)"
    headerStyle={
        margin:"1%",
        color:"white",
        paddingLeft:"20px",
        fontSize:"1.5em",
        textAlign:"center",
        backgroundColor:this.cardColor
    }
    

    onHoverIn=()=>this.setState(()=>this.cardColor="rgba(255,255,255,0.45)")
    
    render(){
        return (
            <div style={this.headerStyle} onMouseOver={this.onHoverIn} >
               <center style={{marginBottom:"0"}}><h4>{this.props.name}</h4></center>
               <center> <ImageHolder urls={this.props.url}/>  </center>
            </div>
        )
    }
}


export default Profiles;