import { useState } from 'react'
import Botao from '../Botao'
import styles from './Formulario.module.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = (props) => {

    const categoriaItens = [
        'Front-End',
        'Back-End',
        'Mobile'
    ]

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoGuardar = (evento) => {
        evento.preventDefault()
        props.aoVideoCadastrado({
            titulo,
            categoria,
            imagem,
            video,
            descricao
        })
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setDescricao('')

    }

    const limparReset = () => {
        console.log('Ok')
    }


    return(

        <main className={styles.formulario}>
            <div className={styles.titulo}>
                <h1>novo vídeo</h1>
                <h3>Complete o formulário para criar um novo card de vídeo.</h3>
            </div>
            <section className={styles.campos}>
                <form onSubmit={aoGuardar}>
                    <p>Criar card</p>
                    <div className={styles.linhaTitulo}>
                        <Campo 
                            obrigatorio={true}
                            label='Título'
                            placeholder='Digite o título'
                            valor={titulo}
                            aoAlterado={valor => setTitulo(valor)}
                        />
                        <ListaSuspensa 
                            obrigatorio={true}
                            label='Categoria'
                            placeholder='Selecione uma categoria'
                            itens={categoriaItens}
                            valor={categoria}
                            aoAlterado={valor => setCategoria(valor)}
                        />
                    </div>
                    <div className={styles.linhaVideo}>
                        <Campo 
                            obrigatorio={true}
                            label='Imagem'
                            placeholder='O link é obrigatório'
                            valor={imagem}
                            aoAlterado={valor => setImagem(valor)}    
                        />
                        <Campo 
                            obrigatorio={true}
                            label='Vídeo'
                            placeholder='Digite o link do vídeo'
                            valor={video}
                            aoAlterado={valor => setVideo(valor)}
                        />
                    </div>
                    <label className={styles.descricao}>
                        <p>Descrição</p>
                        <textarea name='Descricao' valor={descricao} aoAlterado={valor => setDescricao(valor)} rows='8' cols='75'/>
                    </label>
                    
                    {/* <div className={styles.descricao}>
                        <Campo
                            obrigatorio={true}
                            label='Descrição'
                            placeholder='Sobre o que é esse vídeo'
                            valor={descricao}
                            aoAlterado={valor => setDescricao(valor)}
                        />
                    </div> */}
                    
                    <div className={styles.botao}>
                        <button type='submit'>Guardar</button>
                        <button type='button' >Limpar</button>
                    </div>
                </form>

            </section>
        </main>
    )
}

export default Formulario