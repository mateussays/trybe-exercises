import React from 'react';
import Persona from './Persona'
import ProfesionalForm from './ProfessionalForm'


class Form extends React.Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props

    return (
      <form>
        <Persona 
          changeHandler= { changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <ProfesionalForm 
          changeHandler={ changeHandler }
        />
        <input 
        type="button"
        onClick={ sendForm }
        value="Enviar"
        />
        <input 
        type="reset"
        onClick={ resetForm }
        value="Limpar"
        />
      </form>
    );
  }
  
}

export default Form 