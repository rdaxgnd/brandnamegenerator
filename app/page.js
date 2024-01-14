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
        <div>{groupTwo.two}{groupFive.five}{groupSix.six}{groupFour.four}{groupOne.one}{groupTwo.two}</div>

      </div>

      <div className={styles.bar}>
        
        <div className={styles.barItem}>Brand Name Generator</div>
        <div className={styles.button} onClick={generateWord}>Generate</div>

      </div>

      <div className={styles.textFrame}>
        <div>In a world saturated with businesses and products, finding the perfect brand name has become a crucial element of success. Whether you&apos;re starting a new venture or rebranding an existing one, the right name can make all the difference. This is where brand name generator websites step in as invaluable tools for entrepreneurs and marketers alike. The process of finding the ideal brand name is a delicate balance between creativity and strategy.</div>
        <div>Brand name generator websites are designed to streamline this process. They employ algorithms that consider factors like industry relevance, keyword incorporation, and brand uniqueness. These platforms analyze vast databases of existing names and trending terms to generate suggestions that align with your business goals.</div>
        <div>One of the primary advantages of using a brand name generator website is the sheer volume of possibilities they offer. These platforms can generate hundreds, if not thousands, of name ideas within seconds. This not only saves time but also exposes you to a diverse array of choices you may not have considered otherwise. It&apos;s like having a team of creative thinkers at your disposal, working tirelessly to brainstorm the perfect name.</div>
        <div>The importance of securing a domain name cannot be overstated in today&apos;s digital age. A brand name generator website often checks the availability of domain names simultaneously, ensuring that your chosen name is not only unique but also accessible online. This seamless integration of domain availability simplifies the registration process, helping you avoid the frustration of discovering that your perfect name is already taken in the virtual realm.</div>
        <div>Brand name generator websites also empower you to explore variations, prefixes, or suffixes of your preferred name. This flexibility allows you to fine-tune your choice until it resonates perfectly with your brand identity. Moreover, many of these platforms offer additional features like logo design, ensuring that your visual branding aligns seamlessly with your chosen name.</div>
        <div>In conclusion, brand name generator websites have become invaluable resources in the journey of creating a distinctive and memorable brand. They combine creativity, data-driven insights, and practicality to offer a wide array of brand name suggestions tailored to your unique requirements. With these tools at your disposal, you can confidently embark on the exciting path of naming your business, knowing that you&apos;ve harnessed the power of technology to find the perfect name for your brand.</div>
      </div>

    </main>
  )
}
