import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import data from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
                <img
                  src={port.image}
                  className="portfolio-img"
                  alt="portfolio"
                />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.srcCode)}>
                  code
                </button>
                <button className="btn" onClick={() => window.open(port.url)}>
                  Page
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(data.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
