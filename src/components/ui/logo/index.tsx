import styles from './style.module.css'
import logo from '@assets/qencode-logo.png'

const Logo = () => {
    return (
        <img src={logo} className={styles.logo} />
    )
}

export default Logo