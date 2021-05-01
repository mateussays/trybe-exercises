import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        <div className="container">
          Resumo do Curriculo:
          <textarea 
            name="resume"
            maxLength="1000"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="container">
          Cargo:
          <input 
          type="text"
          name="role"
          maxLength="40"
          required
          onChange={changeHandler}
          onMouseEnter={() => {
            alert('Preencha com cuidado essa informação.')
          }}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea 
          name="roleDescription" 
          maxLength="500"
          onChange={changeHandler}
          />
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalForm