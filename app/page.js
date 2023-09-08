'use client';
import React from 'react'
import { useState } from 'react'
import styles from './page.module.css'

// Generator settings as basic
const varLetters = {
  group1: ['a', 'e', 'i', 'o', 'u'],
  group2: ['r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
}

export default function Home() {

  const [groupOne, setGroupOne] = React.useState({ one: 'a' })
  const [groupTwo, setGroupTwo] = React.useState({ two: 'r' })
  const [groupThree, setGroupThree] = React.useState({ three: 'a' })
  const [groupFour, setGroupFour] = React.useState({ four: 'r' })
  const [groupFive, setGroupFive] = React.useState({ five: 'a' })
  const [groupSix, setGroupSix] = React.useState({ six: 'r' })

  function generateWord() {
    setGroupOne({one: varLetters.group1[Math.floor(Math.random() * varLetters.group1.length)]})
    setGroupTwo({two: varLetters.group2[Math.floor(Math.random() * varLetters.group2.length)]})
    setGroupThree({three: varLetters.group1[Math.floor(Math.random() * varLetters.group1.length)]})
    setGroupFour({four: varLetters.group2[Math.floor(Math.random() * varLetters.group2.length)]})
    setGroupFive({five: varLetters.group1[Math.floor(Math.random() * varLetters.group1.length)]})
    setGroupSix({six: varLetters.group2[Math.floor(Math.random() * varLetters.group2.length)]})
  }

  return (
    <main className={styles.main}>

      <div className={styles.frame}>
        
        <div>{groupOne.one}{groupTwo.two}{groupThree.three}{groupFour.four}{groupFive.five}{groupSix.six}</div>
        <div>{groupTwo.two}{groupFive.five}{groupOne.one}{groupFour.four}</div>
        <div>{groupFour.four}{groupOne.one}{groupTwo.two}{groupSix.six}{groupFive.five}</div>
        <div>{groupSix.six}{groupFive.five}{groupFour.four}{groupThree.three}{groupTwo.two}{groupOne.one}</div>
        <div>{groupTwo.two}{groupThree.three}{groupFour.four}{groupFive.five}{groupSix.six}{groupOne.one}</div>
        <div>{groupTwo.two}{groupFive.five}{groupSix.six}{groupOne.one}{groupFour.four}</div>
        <div>{groupOne.one}{groupTwo.two}{groupSix.six}{groupFive.five}{groupFour.four}</div>
        <div>{groupFour.four}{groupThree.three}{groupTwo.two}{groupOne.one}</div>
        

      </div>

      <div className={styles.bar}>
        
        <div style={{textAlign: 'left', paddingTop: '12px'}}>Brand Name Generator</div>
        <div className={styles.button} onClick={generateWord}>Generate</div>

      </div>

    </main>
  )
}
