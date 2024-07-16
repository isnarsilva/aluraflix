import Banner from '../../componentes/Banner'
import Videos from '../../componentes/Videos'
import styles from './Inicio.module.css'

export default function Inicio() {
    
    const categoriaItens = [
        {
          nome: 'Front-End',
          cor: '#6BD1FF'
        },
        {
          nome: 'Back-End',
          cor: '#00C86F'
        },
        {
          nome: 'Mobile',
          cor: '#FFBA05'
        }
      ]
    
    
    return (
        <>
            <Banner />
            <div className={styles.inicio}>
              {categoriaItens.map(categoria => <Videos 
                key={categoria.nome} 
                nome={categoria.nome} 
                cor={categoria.cor}
              />)}
            </div>
            
        </>
    )
}