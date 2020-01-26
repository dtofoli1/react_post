import React from 'react'
import shallow  from 'enzyme'
import Share from './share.js'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

describe('Share Component', () => {
    it('It should render without errors', () => {
        const component = shallow(<Share />)
        const wrapper = component.find('.buttonsComponent')
        expect(wrapper.length).toBe(1)
    })
})
