import React from 'react'
import { Buttons } from './buttons.js'
import { 
    FacebookShareButton,
    FacebookIcon
} from 'react-share'

export class Share extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        msg : '',
        odd : false
        }
        this.getTime = this.getTime.bind(this)
    }

    msgChange(e){
        this.setState({msg : e.target.value})
    }

    getTime(){
        const date = new Date()
        const hour = date.getHours()
        if(hour % 2 === 1){
            this.setState({odd: true})
        }
        console.log('teste')
    }

    componentDidMount() {
        this.intervalId = setInterval(this.getTime, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return(
            <div>
                <Buttons 
                msg={this.state.codigo}
                msgChange={this.msgChange.bind(this)}/>
                <div align="center">
                    <FacebookShareButton url={"github.com/dtofoli1"} quote={this.state.msg} hidden={this.state.odd}>
                        <FacebookIcon size={28} round />
                     </FacebookShareButton>
                </div>
            </div>
        )
    }
}