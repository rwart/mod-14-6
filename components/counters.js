var Counter = React.createClass({
  propTypes: {
    num: React.PropTypes.number,
  },

  getDefaultProps: function () {
    console.log('getDefaultProps: Ustawiamy wartości domyślne dla props na wypadek gdyby instancja komponentu została utworzona bez props.');
    return {
      num: 0,
    };
  },

  getInitialState: function () {
    console.log('getInitialState: Ustawiamy wartości początkowe stanu instancji komponentu.');
    return {
      counter: 0,
    };
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1,
    });
  },

  decrement: function () {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  },

  componentWillMount: function () {
    console.log('componentWillMount: Walidujemy pierwsze propsy zanim instancja komponentu zostanie zrenderowana i odpowiednio reagujemy dostosowując stan. Wykonujemy ostatnie przygotowania przed renderowaniem, wykonujemy obliczenia, które powinny być wykonane przed rederowaniem a z jakiegoś powodu (np. dla przejrzystości kodu) nie chcemy ich wykonywać w metodzie render.');
  },

  render: function () {
      console.log('render: Tworzymy lub aktualizujemy instancję komponentu w DOM.');
      return React.createElement('div', {},
        React.createElement('button', { onClick: this.increment }, '+'),
        React.createElement('button', { onClick: this.decrement }, '-'),
        React.createElement('span', {}, 'Licznik ' + this.props.num + ': ' + this.state.counter)
      );
    },

  componentDidMount: function () {
    console.log('componentDidMount: Wykonujemy niezbędne subskrypcje lub zakładamy trwałość lokalnie lub w backend. Uruchomiamy zapytania o dane do backend (baza danych, usługi) w celu uzupełnienia informacji na stronie, wykonujemy synchroniczne mierzenie elementów DOM po zrenderowaniu w celu manipulacji na DOM i wywołaniu setState tak by nastąpiło szybkie ponowne renderowanie zanim użytkownik zobaczy obraz, podpinamy dodatkowe callback do zdarzeń na elementach DOM, wykonujemy inne manipulacje na DOM np. z wykorzystaniem jQuery, których z jakiś powodów nie można było zrobić w fazie "render".');
  },

  componentWillReceiveProps: function (nextProps) {
    console.log('componentWillReceiveProps: Aktualizujemy stan na podstawie przychodzących props (w tym walidujemy propsy).');
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('shouldComponentUpdate: Oceniamy czy zmiana w propsach lub stanie wymaga aktualizacji komponentu i zwracamy "false" jeśli można zaoszczędzić renderowanie.');
    return true;
  },

  componentWillUpdate: function (nextProps, nextState) {
    console.log('componentWillUpdate: Wykonujemy ostatnie przygotowania przed renderowaniem bez modyfikacji stanu, wykonujemy obliczenia których można było zaniechać przed decyzją czy renderować ale które powinny być wykonane przed rederowaniem a z jakiegoś powodu (np. dla przejrzystości kodu) nie chcemy ich wykonywać w metodzie render.');
  },

  componentDidUpdate: function (prevProps, prevState) {
    console.log('componentDidUpdate: Uruchomiamy zapytania o dane do backend (baza danych, usługi) w celu uzupełnienia informacji na stronie, jeśli potrzeba to wykonujemy synchroniczne mierzenie elementów DOM po zrenderowaniu w celu manipulacji na DOM i wywołaniu setState tak by nastąpiło szybkie ponowne renderowanie zanim użytkownik zobaczy obraz, podpinamy dodatkowe callback do zdarzeń na elementach DOM, wykonujemy inne manipulacje na DOM np. z wykorzystaniem jQuery, których z jakiś powodów nie można było zrobić w fazie "render".');
  },

  componentWillUnmount: function () {
    console.log('componentWillUnmount: Sprzątamy po usunięciu komponentu, np. odpięcie timerów, odpięcie event handler dla elementów DOM, odwoływanie asynchronicznych wywołań sieciowych (jeśli się da to zrobić), czyszczenie backendu lub danych lokalnych jeśli komponent korzysta z trwałości lub subskrypcji, które nie są potrzebne po usunięciu komponentu, itp.');
  },

});
