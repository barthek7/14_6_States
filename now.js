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
});

var counter1 = React.createElement(Counter);
ReactDOM.render(counter1, document.getElementById('app'));
var counter2 = React.createElement(Counter);
var counter3 = React.createElement(Counter);
ReactDOM.render(counter2, document.getElementById('app2'));
ReactDOM.render(counter3, document.getElementById('app3'));
