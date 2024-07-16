import styles from './Banner.module.css'
import imagemVideo from './banner.png'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerTexto}>
                <span>front end</span>
                <h1>SEO com React</h1>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div className={styles.bannerImagem}>
                {<img src={imagemVideo} alt='Imagem do vídeo NEXT.js' />}
            </div>
        </section>
    )
}