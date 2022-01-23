import React from 'react';
// import M from 'materialize-css';
import './AppBar.css';
import logo from './AppBar.logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
    <main>
      <div className="container">
        <div className="row">
          <h3>Convertisseur</h3>
          <div className="col s8">
            <div className="row">
              <div className="col s6">
                <label>From</label>
                <select
                  defaultValue="EUR"
                  className="browser-default"
                  name="inputDevises"
                  id="inputDevises"
                >
                  <option value="EUR">EUR</option>
                  <option value="CHF">CHF</option>
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="col s6">
                <label>To</label>
                <select
                  defaultValue="EUR"
                  className="browser-default"
                  name="outputDevises"
                  id="outputDevises"
                >
                  <option value="EUR">EUR</option>
                  <option value="CHF">CHF</option>
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="amount" type="text" className="" value="0" />
                <span
                  className="helper-text"
                  data-error="Erreur"
                  data-success="Valide"
                ></span>
                <label htmlFor="amount">Montant</label>
              </div>
              <div className="input-field col s12">
                <h5>Result : 0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
