import React from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HeroSection from './components/Herosection'
import ReadMoreButton from './components/ReadMoreButton'
import CEOBox from './components/CEOBox'
import ServicesBody from './ServicesBody'
import OurWorkButton from './components/OurWorkButton'
import OurServicesButton from './OurServiceButton'
import WhoWeAreButton from './WhoWeAreButton'
import SignUpPage from './components/SignUpPage'
import WorkComponent from './WorkCommponent'
import ServicesComponent from './ServicesComponent'

const App = () => {
  return (
  <>
  
  <Navigation/>

  
  <HeroSection></HeroSection>
  
  


  <CEOBox></CEOBox>
  <OurServicesButton></OurServicesButton>
  <ServicesBody></ServicesBody>
  <OurWorkButton></OurWorkButton>
  <WorkComponent></WorkComponent>
  <ServicesComponent></ServicesComponent>
  <SignUpPage></SignUpPage>
  
  
  
  <Footer></Footer>



  
  </>  
  )
}

export default App