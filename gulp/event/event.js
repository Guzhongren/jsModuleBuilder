var TestClickComponet = React.createClass({displayName: "TestClickComponet",
    handleClikc: function(event){
        var tipE= React.findDOMNode(this.refs.tip);
        if(tipE.style.display ==="none"){
            tipE.style.display= "inline";
        }else{
            tipE.style.display= "none";
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render: function(){
         return (
             React.createElement("div", null, 
                React.createElement("button", {onClick: this.handleClikc}, "显示|隐藏"), React.createElement("span", {ref: "tip"}, "测试点击")
             )
         )
    }
});
var TestInputComponent= React.createClass({displayName: "TestInputComponent",
    getInitialState: function(){
        return {
            inputContent: " "
        }
    },
    changeHandler: function(event){
        this.setState({inputContent: event.target.value});
        event.stopPropagation();
        event.preventDefault();
    },
    render :function(){
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", onChange: this.changeHandler}), React.createElement("span", null, this.state.inputContent)
            )
        );
    }
});
React.render(React.createElement("div", null, 
    React.createElement(TestClickComponet, null), 
    React.createElement(TestInputComponent, null)
    ),document.getElementById("container"));
