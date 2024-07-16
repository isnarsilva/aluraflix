import styles from './Card.module.css'
import { pencil } from './pencil.svg'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardVideo}>
                <iframe 
                    width="432" 
                    height="260" 
                    src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=z3Tl6zJ_CqA3xbpJ" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <div className={styles.cardRodape}>
                <p>Deletar</p>
                <p>Editar</p>
            </div>
        </div>
        
    )
}

export default Card