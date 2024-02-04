import styles from './carousel-banner.module.scss'

const carouselBanner = () => {
  return (
    <>
      <div className={`${styles.bannerDesktop} rounded-2xl`}>
        <div className={styles.bordImg}>
          <img src={`src/assets/brodimg.jpg`}/>
        </div>  
      </div>
      <div className={`${styles.bannerMobile} rounded-2xl`}></div>
    </>
  )
}

export default carouselBanner