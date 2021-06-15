import { Component } from 'react';


export default class tipoRepositorios extends Component {
  constructor(props){
    super(props);
    this.state = {
      repositorios: [],
      nome: ''
    };
  };

  reposQuery = (r) => {
    r.preventDefault();

    fetch(`http://api.github.com/users/${this.state.nome}/repos?sort=created`)
    .then( response => response.json() )
    .then( data => this.setState({repositorios: data}) )
    .catch( erro => console.log(erro) )
  }

  render() {
    return(
      <div>
        <header>
          <h1>Pesquisar Repositórios</h1>
        </header>
        
        <section id="input">
          <form onSubmit={this.reposQuery}>
            <input 
              type='text'
              value={this.state.nome}
              onChange={r => this.setState({nome: r.target.value})}
            /><button type='submit'>Pesquisar</button>
            
          </form>
        </section>

        <section>
          <table>
            <thead>
              <tr>
                  <th>Nome da pasta</th>
                <th>Id</th>
                <th>Descrição</th>
                <th>Data/Horário</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.repositorios.map(m => {
                  return (
                    <tr key={m.id}>
                      <td>{m.name}</td>
                      <td>{m.id}</td>
                      <td>{m.description}</td>
                      <td>{m.created_at}</td>
                      <td>{m.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    )
  }
};