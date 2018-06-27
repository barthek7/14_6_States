var Counter = React.createClass({
   getInitialState: function () {
       return {
           counter: 0
       };
   },

    render: function() {
       return React.createElement('div', {},
           React.createElement('span', {}, 'Licznik ' + this.state.counter),
           React.createElement('button', {className: "decrement", onClick: this.decrement}, 'Decrement Counter'),
           React.createElement('button', {className: "increment", onClick: this.increment}, 'Increment Counter')
       );
    },

    increment: function () {
       this.setState({
           counter: this.state.counter + 1
       });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter -1
        });
    },
    getDefaultProps: function(){
      console.log('Setting default props values');
    },
    componentWillMount: function () {
       console.log('Right before invoking render');

    },
    componentDidMount: function () {
        console.log('Right after render, component present on page');
    },
    componentWillReceiveProps: function(nextProps){
       console.log('When component received new props, new props are: ' + nextProps);

    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('Checking if the component should be rendered again with new props/state: ' + nextProps + " state: " + nextState);
        return true;
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('Should update returned true, the component will update...');
        return true;
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('Component updated! You can manipulate the DOM now');
    },
    componentWillUnmount: function () {
        console.log('Cleaning up...');
    }
});

var counter1 = React.createElement(Counter);
ReactDOM.render(counter1, document.getElementById('app'));
var counter2 = React.createElement(Counter);
var counter3 = React.createElement(Counter);
ReactDOM.render(counter2, document.getElementById('app2'));
ReactDOM.render(counter3, document.getElementById('app3'));
