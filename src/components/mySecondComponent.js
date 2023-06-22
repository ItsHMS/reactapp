import React from "react";
class MySecondComponent extends React.Component{
    componentDidMount(){
        console.log("mounted second component");
    }
    componentWillUnmount(){
        console.log("unmounting  second component");
    }
    render(){
        return (
            <div>
                <p>this is my second component</p>
            </div>
        )
    }
}
export default MySecondComponent