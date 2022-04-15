import React, { useState, useCallback } from 'react'
import { useLongPress } from 'use-long-press'
import { useRouter } from 'next/router'

import getConfig from 'next/config'
import styles from './style.module.css'


interface Props {
  capital: string;
  small: string;
  url: string;
  likeEng: string;
  tabIndex: number;
  klass: string;
}
const { publicRuntimeConfig } = getConfig()

const Letter = (props: Props) => {
  const router = useRouter()
  const [state, setState] = useState({
    showTranslation: false,
    longPressed: false,
  })
  const { capital, small, url, likeEng, tabIndex, klass } = props

  const playAudio = () => {
    new Audio(`${publicRuntimeConfig.assetPrefix}${url}`).play()
  }

  const callback = useCallback(() => {
    router.push(`/examples/${capital}`)
  }, [])

  const bind = useLongPress(callback, {
    threshold: 500,
  })

  const toggleTranslation = () => {
    setState({ ...state, showTranslation: !state.showTranslation })
    setTimeout(() => setState({ ...state, showTranslation: false }), 3000)
    playAudio()
  }

  return (
    <div
      className={`${styles.letter} ${klass}`}
      onClick={toggleTranslation}
      onKeyDown={toggleTranslation}
      role="button" tabIndex={tabIndex}
      {...bind}
      >
      <div className={`letter__sign ${state.showTranslation ? 'hidden' : ''}`}>
        <h2>{capital}, {small}</h2>
      </div>
      <div className={`letter__translation ${state.showTranslation ? '' : 'hidden'}`}>
        <h2>{likeEng}</h2>
      </div>
    </div>
  )
}

export default Letter
