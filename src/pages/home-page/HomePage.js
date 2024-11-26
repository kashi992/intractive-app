import React, {useState} from 'react'
import HeroSlider from './heroSlider'
import LoginForm from '../login-page/index'

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
        {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (

        <HeroSlider/>
      )}
    </>
  )
}

export default HomePage