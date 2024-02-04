import React, { useState, useEffect } from 'react';
import styles from './sidebar.module.scss'
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false)

  const navigateTo = (path) => {
    if (path) {
      navigate(path)
      window.location.reload()
    }
  }

  useEffect(() => {
    console.log('useEffect ss', isOpenSidebar)
    setIsVisible(isOpenSidebar)
    console.log('useEffect ss', isOpenSidebar, 'isVisible', isVisible)
  }, [isOpenSidebar, onCloseSidebar])

  const actionSidebar = () => {
    setIsVisible(!isOpenSidebar)
    setTimeout(() => {
      isOpenSidebar = isVisible
      console.log('actionSidebar isOpenSidebar', isOpenSidebar, 'isVisible', isVisible)
      onCloseSidebar()
    }, 300);
  }

  return (
    <div className={`${isVisible ? `${styles.sidebarContent}` : `${styles.displayNone}`} md:hidden flex flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10`}>
      <div>
        <span className={styles.close} onClick={actionSidebar}>&times;</span>
      </div>
      <div className={styles.allbutton}>
        <div className={styles.button}>
          <button className={styles.singup}><span onClick={() => navigateTo('/register')}>{('Register')}</span></button>
        </div>
        <div className={styles.button}>
          <button className={styles.singin}><span >{('Login')}</span></button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
