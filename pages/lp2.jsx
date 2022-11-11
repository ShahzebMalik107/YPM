import React, { Fragment } from 'react'
import Banner from '../components/landingpagecomponents/banner/banner'
import IntegratedSolutions from '../components/landingpagecomponents/integratedSolution/integratedSolutions'
import GetStarted from '../components/landingpagecomponents/getstarted/getStarted'
import AmazingFeatures from '../components/landingpagecomponents/amazingFeatures/amazingFeatures'


const lp2 = () => {
  return (
    <Fragment>
      <Banner />
      <IntegratedSolutions />
      <GetStarted />
      <AmazingFeatures />
    </Fragment>
  
  )
}

export default lp2