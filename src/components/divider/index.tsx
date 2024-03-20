import styles from './style.module.css'

const Divider = () => {
    return (
        <div className={styles.dividerBlock}>
            <div className={styles.divider} />
            <div className={styles.dividerText}>OR</div>
            <div className={styles.divider} />
        </div>
    )
}

export default Divider