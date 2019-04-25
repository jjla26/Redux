import React from 'react'
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'

const validate = values => {
    const errors = {}
    if(!values.name){
        errors.name="Campo nombre obligatorio"
    } 
    if(!values.lastname){
        errors.lastname="Campo apellido obligatorio"
    }
    return errors

}

class UserForm extends React.Component{
    render(){
        console.log(this.props)
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Field name="name" title="Nombre" component={CustomInput} placeholder="nombre" />
                <Field name="lastname" title="Apellido" component={CustomInput} placeholder="apellido" />
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default reduxForm({
    form: 'user',
    validate
})(UserForm)