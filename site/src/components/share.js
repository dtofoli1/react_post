import React from 'react'
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share'
import { Buttons } from './buttons.js'

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

    componentWillMount() {
        this.intervalId = setInterval(this.getTime, 1);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    render(){
        return(
            <div>
                <Buttons classname="buttonsComponent"
                msg={this.state.codigo}
                msgChange={this.msgChange.bind(this)}/>
                <div align="center">
                        <FacebookShareButton url={"github.com/dtofoli1"} quote={this.state.msg} hidden={this.state.odd}>
                            <FacebookIcon size={28} round />
                        </FacebookShareButton>
                     <TwitterShareButton url={"github.com/dtofoli1"} quote={this.state.msg} hidden={this.state.odd}>
                        <TwitterIcon size={28} round />
                     </TwitterShareButton>
                     <LinkedinShareButton url={"github.com/dtofoli1"} quote={this.state.msg} hidden={this.state.odd}>
                        <LinkedinIcon size={28} round />
                     </LinkedinShareButton>
                     <WhatsappShareButton url={"github.com/dtofoli1"} quote={this.state.msg} hidden={this.state.odd}>
                        <WhatsappIcon size={28} round />
                     </WhatsappShareButton>
                </div>
            </div>
        )
    }
}