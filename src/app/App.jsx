import React from 'react'
import { Header } from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer'
import WhyChooseUs from '../components/Block3'
import { Block4 } from '../components/Block4'
import { Block5 } from '../components/Block5'
import { Block2 } from '../components/Block2'
import { Block1 } from '../components/Block1'
import { Block6 } from '../components/Block6'
import { Block7 } from '../components/Block7'


export  function App() {
  return (
    <div>
      <Header/>
      <Block1/>
      <Block2/>
      <WhyChooseUs/>
      <Block4/> 
      <Block5/>
      <Block6/>
      <Block7/>
       <Footer/>
    </div>
  )
}
