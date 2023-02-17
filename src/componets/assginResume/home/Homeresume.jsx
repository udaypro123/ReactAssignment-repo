import React from 'react'
import Bodypart from '../body/Bodypart';
import Contentbody from '../body/Contentbody';
import Skills from '../body/Skills';

const Homeresume = () => {
  return (
    <>
      
      <Bodypart name="Bittoo Agarawal" />
      <Contentbody mainheading="Experience" subheading="Software dveloper at Amazon" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor recusandae, quos animi vero nihil atque natus in aliquid harum eos, soluta est saepe nam totam aut nostrum incidunt, ratione accusamus temporibus? Ratione mollitia fugiat perspiciatis nulla consectetur vero quasi est?" />
      <Contentbody subheading="Educator at geekster" para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor recusandae, quos animi vero nihil atque natus in aliquid harum eos, soluta est saepe nam totam aut nostrum incidunt, ratione accusamus temporibus? Ratione mollitia fugiat perspiciatis nulla consectetur vero quasi est?" />

      <Skills subheading="Skills" ele1="Html" ele2="Css" ele3="Reactjs" ele4="javaScript" />
      <hr/>
      <Skills subheading="Hobbies" ele1="Dancing" ele2="Reading books" ele3="palying chess" ele4="playing cricket" />

    </>
  )
}

export default Homeresume;
