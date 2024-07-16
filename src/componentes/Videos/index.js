import Card from '../Card'
import styles from './Videos.module.css'

const Videos = (props) => {
    return (
        
        <section className={styles.videos}>
            <h3 style={{ backgroundColor: props.cor }}>{props.nome}</h3>
            <Card />
        </section>
    )
}

export default Videos
