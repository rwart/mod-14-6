var counter = [];
for (i = 0; i < 5; i++) {
  counter[i] = React.createElement(Counter, { num: i });
  ReactDOM.render(counter[i], document.getElementById('counter' + i));
}

var newCounter = React.createElement(Counter, {});
ReactDOM.render(newCounter, document.getElementById('newCounter'));

setTimeout(function () {
  var newCounter = React.createElement(Counter, { num: 5 });
  ReactDOM.render(newCounter, document.getElementById('newCounter'));
}, 5000);

setTimeout(function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('newCounter'));
}, 10000);
