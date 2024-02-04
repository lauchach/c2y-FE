import styles from './register.module.scss'

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.mainbord}>
        <div className={styles.banner}>
          <div className={styles.poto}>
            <div className={styles.content}> 
              สร้างบัญชี
              <div className={styles.minicontent}>
                สมัครสมาชิกเเละเริ่มใช้งาน
              </div>
            </div>
            <img src={`src/assets/coverRegister.png`} width="100%" height="auto" />

          </div>

        </div>
        <div className={styles.insertbord}></div>
      </div>
    </div>
  )
}

export default Register