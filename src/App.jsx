import './App.css'

function Input() {
  return <input id="name" type="text" name="name" placeholder="Enter a name"></input>;
}

function Button() {
  return <button id="button" type="submit">Check</button>;
}

function Output() {
  return <p id="output"></p>;
}

function App() {

  function handleSubmit(e) {
    const serverUrl = 'https://api.genderize.io';
    const firstName = e.target[0].value;
    const url = `${serverUrl}?name=${firstName}`;

    e.preventDefault();
    e.target.reset();

    fetch(url)
      .then(response => response.json())
      .then(data => {
        e.target.lastElementChild.textContent = data.name[0].toUpperCase() +
          data.name.slice(1) +
          ' is ' +
          data.gender;
      });

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <Input />
          <br />
          <Button />
          <br />
          <Output />
        </form>
      </header>
    </div>
  );
}

export default App
