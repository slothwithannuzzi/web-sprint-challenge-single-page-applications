import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  const routeToPizza = () => {
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://media.timeout.com/images/105745571/750/422/image.jpg'
        alt='Failed to load'
      />
      <button
        onClick={routeToPizza}
        className='pizza-button'
      >
        Pizza?
      </button>
    </div>
  )
}