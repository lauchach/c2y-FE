import styles from './carousel-exclusive.module.scss'

const carouselExclusive = () => {
  return (
    <>
      <div className={styles.carouselExclusive}>
        <div className={styles.content}>
          SUPER DEAL
          <div className={styles.line}>
            <div className={styles.linespace}>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default carouselExclusive