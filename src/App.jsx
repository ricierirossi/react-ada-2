import React from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { showCounter: false };
  }

  render() {
    return (
      <>
        <h1>Ciclo de Vida no React</h1>
        <h2>{this.state.showCounter}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              showCounter: !prevState.showCounter,
            }))
          }
        >
          {this.state.showCounter ? "Ocultar Contador" : "Mostrar Contador"}
        </button>

        {this.state.showCounter ? <Counter /> : null}
      </>
    );
  }
}
