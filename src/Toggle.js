import React from 'react';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        // this.setState({isToggleOn: !this.state.isToggleOn});
        this.setState((state=>({
            isToggleOn: !state.isToggleOn
        })));
    }
    // handleClick(){
    //     this.setState({isToggleOn: !this.state.isToggleOn});
    // }
    render(){
        return (
            // <button onClick={(e)=>this.handleClick(e)}>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}

export default Toggle;