import styles from './Campo.module.css'

const Campo = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.campo}>
            <label>
                {props.label}
            </label>
            <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}  />
        </div>
    )
}

export default Campo