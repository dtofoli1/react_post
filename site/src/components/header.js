import React from 'react'

export class Header extends React.Component {
    render() {

        const {title, subtitle} = this.props;

        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong><center>{title}</center></strong>
                <small><center>{subtitle}</center></small></h2>
            </header>
        )
    }
}
export default Header