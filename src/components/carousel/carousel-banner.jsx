import styles from './carousel-banner.module.scss'

const carouselBanner = () => {
  return (
    <>
      <div className={`${styles.bannerDesktop} rounded-2xl`}></div>
      <div className={`${styles.bannerMobile} rounded-2xl`}></div>
    </>
  )
}

export default carouselBanner