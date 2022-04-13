import React, { useState } from 'react'
import getConfig from 'next/config'

interface Props {
  capital: string;
  small: string;
  url: string;
  likeEng: string;
  tabIndex: number;
}
const { publicRuntimeConfig } = getConfig()

const Letter = (props: Props) => {
  const [state, setState] = useState({ showTranslation: false })
  const { capital, small, url, likeEng, tabIndex } = props

  const toggleTranslation = (e: any) => {
    if(e.target.className !== 'letter__audio') {
      setState({ showTranslation: !state.showTranslation })
      setTimeout(() => setState({ showTranslation: false }), 3000)
    }
  }

  const playAudio = () => {
    new Audio(`${publicRuntimeConfig.assetPrefix}${url}`).play()
  }

  return (
    <div className="letter" onClick={toggleTranslation} onKeyDown={toggleTranslation} role="button" tabIndex={tabIndex}>
      <div className={`letter__sign ${state.showTranslation ? 'hidden' : ''}`}>
        <h2>{capital}, {small}</h2>
      </div>
      <div className={`letter__translation ${state.showTranslation ? '' : 'hidden'}`}>
        <h2>{likeEng}</h2>
      </div>
      <button type="button" className="letter__audio" onClick={playAudio}>Audio</button>
    </div>
  )
}

export default Letter
