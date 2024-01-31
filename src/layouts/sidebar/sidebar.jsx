import React, { useState, useEffect } from 'react';
import styles from './sidebar.module.scss'
import { Flex } from 'antd';

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const [isVisible, setIsVisible] = useState(false)

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
    <div className={Flex}>
    <div className={`${isVisible ? `${styles.sidebarContent}` : 'hidden'} md:hidden flex flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10`}>
      <div className='flex w-full justify-between'>
        <div className='flex justify-center items-center'>
          <div className={styles.user}>
            {/* <UserOutlined /> */}
          </div>
          <span>{('signin')}</span>
        </div>
        <div>
          <span className={styles.close} onClick={actionSidebar}>&times;</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
