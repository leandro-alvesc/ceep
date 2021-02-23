import React, { Component } from "react";
import "./estilo.css";

export default class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escreva sua nota</p>
      </section>
    );
  }
}
