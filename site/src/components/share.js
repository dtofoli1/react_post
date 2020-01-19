import React from 'react'
import { 
    FacebookShareButton,
    FacebookIcon
} from 'react-share'

export class Share extends React.Component{
    initialState = {
        '_id': null,
        'msg': ''
    }
    state = {...this.initialState}

    msgChange(e){
        this.setState({msg : e.target.value})
    }
    
    render(){
        return(
            <div>
                <div align="center">
                    <input type="text"
                        className="form-control" id="msg"
                        value={this.props.msg} onChange={this.props.msgChange} />   
                </div>
                <div align="center">
                    <FacebookShareButton url={"github.com/dtofoli1"} quote={this.state.msg}>
                        <FacebookIcon size={28} round />
                    </FacebookShareButton>
                </div>
            </div>
        )
    }
}