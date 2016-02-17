var React = require('react');
var ReactDOM = require('react-dom');
var ReactJSON = require('react-json');

var SecondPage = React.createClass({

    
      getInitialState: function() {
    return {
       testValue : 5
    }
  },
    
    
    testClick: function(e) {
this.setState({testValue: '10000'});
},
    
        
    render: function(){
        return (
           <div> 
            <div id = "leftside">
            <div id="tree">
            <h4><a href="#" onClick={this.testClick}>{this.props.fieldValues.name}</a></h4> 
            </div>
            <div id="buttonpanel" className="buttonAlign btn-group" role="group" aria-label="...">
                <button id="savebutton" className="btn btn-primary">Save</button>
                <button id="loadbutton" className="btn btn-primary">Load</button>
                <button id="previewbutton" className="btn btn-primary">Preview</button>
                <button id="generatebutton" className="btn btn-primary">Generate</button>
            </div>
            
            </div>
            
            
            <div id = "rightside">
            <Trial  testValue={this.state.testValue}/>

            </div>
            </div>
            );
    }
    
});



   var Trial = React.createClass({
       getInitialState: function() {
    return {
       testValue : 500
    }
  },
       render:function(){
      return(<span>{this.props.testValue}</span>) ;
        }
            });

module.exports = SecondPage;

