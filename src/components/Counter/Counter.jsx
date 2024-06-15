import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    console.log("Construindo o componente");
  }

  //   UNSAFE_componentWillMount() {
  //     console.log("O componente  será montado");
  //   }

  componentDidMount() {
    console.log("Componente montado");
  }

  // Método chamado sempre que uma prop ou state for atualizado
  shouldComponentUpdate() {
    return this.state.counter !== 2;
  }

  //   UNSAFE_componentWillUpdate() {
  //     console.log("Componente será atualizado?");
  //   }

  componentDidUpdate() {
    console.log("Componente foi atualizado");
  }

  componentWillUnmount() {
    console.log("Componente será dismontado");
  }

  render() {
    console.log("Renderizando o componente");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              counter: prevState.counter - 1,
            }))
          }
        >
          Diminuir
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }))
          }
        >
          Aumentar
        </button>
      </>
    );
  }
}
