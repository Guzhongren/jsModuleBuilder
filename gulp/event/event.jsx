var TestClickComponet = React.createClass({
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
             <div>
                <button onClick= {this.handleClikc}>显示|隐藏</button><span ref="tip">测试点击</span>
             </div>
         )
    }
});
var TestInputComponent= React.createClass({
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
            <div>
                <input type="text" onChange={this.changeHandler}/><span >{this.state.inputContent}</span>
            </div>
        );
    }
});
React.render(<div>
    <TestClickComponet></TestClickComponet>
    <TestInputComponent></TestInputComponent>
    </div>,document.getElementById("container"));
