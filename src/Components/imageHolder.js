import React,{Component} from 'react';


class ImageHolder extends Component{

    imageHolder = {
        width:"250px",
        height:"300px",
        borderRadius:"50px"
    };

    render(){
        return (
            <div style={this.imageHolder}>
                <img style={this.imageHolder} src={this.props.urls} alt="lol"/>
            </div>
        )
    }

}


export default ImageHolder;