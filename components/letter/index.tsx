import React, { useState } from 'react'
import styles from './style.module.css'


const Letter = (props) => {
  const [state, setState] = useState({ showTranslation: false })
  const { capital, small, url } = props

  const toggleTranslation = (e: MouseEventHandler<HTMLDivElement>) => {
    if(e.target.className !== 'letter__audio') {
      setState({ showTranslation: !state.showTranslation })
      setTimeout(() => setState({ showTranslation: false }), 3000)
    }
  }

  const playAudio = () => {
    new Audio(url).play();
  }

  return (
    <div className="letter" onClick={toggleTranslation}>
      <div className={`letter__sign ${state.showTranslation ? 'hidden' : ''}`}>
        <h2>{props.capital}, {props.small}</h2>
      </div>
      <div className={`letter__translation ${state.showTranslation ? '' : 'hidden'}`}>
        <h2>{props.likeEng}</h2>
      </div>
      <button className="letter__audio" onClick={playAudio}>Audio</button>
    </div>
  )
}

export default Letter
