import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'

class App extends Component {
  state ={
    citas: []
  }

  crearNuevaCita = datos => {
    // Copiar el state actual
    const citas = [...this.state.citas, datos];

    // Agregar el nuevo state
    this.setState({
      // ususalmente se utilzia citas: citas pero como se llaman igual pasándole uno basta
      citas
    })
  }

  render(){
    return(
      <div className="container">
        <Header 
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
