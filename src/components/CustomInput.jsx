import React from 'react'

export default class CustomInput extends React.Component{
    render(){
        console.log(this.props)
        const { input, meta, title, ...props } = this.props
        return(
            <div>
                {title && <label>{title}</label>}
                <input {...input} {...props} />
                {meta.submitFailed && meta.error && <span>{meta.error}</span>}
            </div>
        )
    }
}