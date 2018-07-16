import React, { Component } from 'react';
import PropTypes from 'prop-types';
const PropTipleri={
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func,
    title: PropTypes.string.isRequired
}
const defProp={
    name: "Default name of App"
}
class MyComponent extends Component {
    componentWillMount(){
        console.log("WILL MOUNT");
    }
    componentDidMount(){
        console.log("DID MOUNT");
    }
    componentWillUpdate(nextProps,nextState){
        console.log(this.props,this.state,nextProps,nextState);

    }

    render() {
        const{title,name, onClick}=this.props;
        return (
            <div className="component">
                <h3>Aday: {title}</h3>
                <h4>Oy Sayısı: {name}</h4>
                {/* <div onClick={onClick}>Click Me</div> */}

            </div>
        );
    }
}

MyComponent.propTypes=PropTipleri;
MyComponent.defaultProps=defProp;
export default MyComponent;