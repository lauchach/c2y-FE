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
          <div className={styles.superdeal}>
            <div className={styles.layout}>
              <div className={styles.card}>
              <div className={styles.botton}>
                  <div className={styles.text}>
                  Add to Cart
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.botton}>
                  <div className={styles.text}>
                  Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.superdeal}>
            <div className={styles.layout}>
              <div className={styles.card}>
              <botton className={styles.botton}>
                  <div className={styles.text}>
                  Add to Cart
                  </div>
                </botton>
              </div>
              <div className={styles.card}>
              <div className={styles.botton}>
                  <div className={styles.text}>
                  Add to Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default carouselExclusive