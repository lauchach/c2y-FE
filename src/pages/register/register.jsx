import styles from './register.module.scss'

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.mainbord}>
        <div className={styles.banner}>
          <div className={styles.poto}>
            <div className={styles.content}> สร้างบัญชี
              <div className={styles.minicontent}>สมัครสมาชิกเเละเริ่มใช้งาน</div>
            </div>
            <img src={`src/assets/coverRegister.png`} width="100%" height="auto" />
          </div>
        </div>
        <div className={styles.insertbord}>
          <div className={styles.inrow}>
          ชื่อ
          นามสกุล
          </div>
          <div className={styles.inrow}>
            <input id="email" type='text' placeholder="กรอกชื่อ" ></input>
            <input id="email" type='text' placeholder="กรอกนามสกุล" ></input>
          </div>
          <div className={styles.inrow}>
          เบอร์โทรศัพท์
          </div>
          <input id="email" type='text' placeholder="กรอกเบอร์โทรศัพท์" ></input>
          <div className={styles.inrow}>
          อีเมล
          </div>
          <input id="email" type='text' placeholder="กรอกชื่อ" ></input>
          <div className={styles.inrow}>
          ระหัสผ่าน
          </div>
          <input id="email" type='text' placeholder="กรอกชื่อ" ></input>
          <div className={styles.inrow}>
          ของขวัญวันเกิดรอคุณอยู่
          </div>
          <input id="email" type='text' placeholder="dd/mm/yyyy" ></input>
          <button className={styles.button}>{('signup')}</button>
        </div>
      </div>
    </div>
  )
}

export default Register