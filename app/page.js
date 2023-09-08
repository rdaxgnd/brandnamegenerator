'use client';
import React from 'react'
import { useState } from 'react'
import styles from './page.module.css'

// Generator settings as basic
const varLetters = {
  group1: ['a', 'e', 'a', 'e', 'i', 'o', 'u', 'u'],
  group2: ['r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'k', 'l', 'z', 'c', 'v', 'b', 'n', 'm'],
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
        <div>{groupFour.four}{groupOne.one}{groupTwo.two}{groupFive.five}</div>
        <div>{groupFive.five}{groupTwo.two}{groupOne.one}{groupFour.four}</div>
        <div>{groupThree.three}{groupFour.four}{groupFive.five}{groupSix.six}{groupOne.one}{groupTwo.two}</div>
        <div>{groupOne.one}{groupFour.four}{groupTwo.two}{groupFive.five}{groupSix.six}</div>
        <div>{groupSix.six}{groupFive.five}{groupTwo.two}{groupOne.one}{groupFour.four}{groupThree.three}</div>
        <div>{groupTwo.two}{groupThree.three}{groupOne.one}{groupFour.four}{groupFive.five}{groupSix.six}</div>
        <div>{groupFive.five}{groupSix.six}{groupOne.one}{groupFour.four}</div>
        <div>{groupOne.one}{groupTwo.two}{groupSix.six}{groupFive.five}{groupFour.four}{groupOne.one}{groupTwo.two}</div>

      </div>

      <div className={styles.bar}>
        
        <div className={styles.barItem}>Brand Name Generator</div>
        <div className={styles.button} accessKey={'g'} onClick={generateWord}>Generate</div>

      </div>

    </main>
  )
}
