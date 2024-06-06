import Botao from '../Botao'
import styles from './cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src='/imagens/logo.png' alt='Logo AluraFlix' />
            <nav className={styles.navegacao}>
                <Botao to='/'>
                    Home
                </Botao>
                <Botao to='/cadastro'>
                    Novo vídeo
                </Botao>
            </nav>
        </header>
    )
}

export default Cabecalho