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
                <input type="text"
                    className="form-control" id="msg"
                    value={this.props.msg}
                    onChange={this.props.msgChange} />
                </div>
                </div>
            </div>
        )
    }
}