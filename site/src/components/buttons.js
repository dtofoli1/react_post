import React from 'react'

export class Buttons extends React.Component{
    render(){
        return(
            <div align="center">
                <div>
                <label htmlFor="msg">
                    Insira seu texto aqui
                </label>
                <div>  
                <input classname="mb-3" type="text"
                    id="msg"
                    value={this.props.msg}
                    onChange={this.props.msgChange} />
                </div>
                </div>
            </div>
        )
    }
}