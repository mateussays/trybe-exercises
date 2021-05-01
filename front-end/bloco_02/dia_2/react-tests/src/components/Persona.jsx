import React from 'react'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Persona extends React.Component {
  render () {
    const { changeHandler, onBlurHandler, currentState } = this.props
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input 
          type="text"
          name="name"
          maxLength="40"
          required
          onChange={changeHandler}
          />
        </div>
        <div className="container">
          Email:
          <input 
          type="text"
          name="email"
          maxLength="50"
          required
          onChange={changeHandler}
          />
        </div>
        <div className="container">
          CPF:
          <input 
          type="text"
          name="cpf"
          maxLength="11"
          required
          onChange={changeHandler}
          />
        </div>
        <div className="container">
          Endereço:
          <input 
          type="text"
          name="address"
          maxLength="200"
          required
          onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cidade:
          <input 
          type="text"
          name="city"
          maxLength="28"
          required
          value={currentState.city}
          onBlur={onBlurHandler}
          onChange={changeHandler}
          />
        </div>
        <div>
          Estado:
          <select 
          name="countryState" 
          required
          onChange={changeHandler}
          defaultValue=""
          >
            <option value="">Selecione</option>
            {
              states.map((value, key) => (
                <option key={ key }>{ value }</option>
              ))
            }
          </select>
        </div>
        <div className="container">
          <label htmlFor="house">
            <input 
            type="text"
            id="house"
            name="addressType"
            value="house"
            onChange={changeHandler}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input 
            type="text"
            id="apart"
            name="addressType"
            value="apartment"
            onChange={changeHandler}
            />
          </label>
          Apartamento
        </div>
      </fieldset>
    )
  }
}

export default Persona