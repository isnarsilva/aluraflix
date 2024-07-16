import { useState } from "react";
import Formulario from "../../componentes/Formulario";

export default function Cadastro() {
    
    const [videos, setVideos] = useState([])

    const aoNovoVideoAdicionado = (video) => {
        console.log(video)
        setVideos([...videos, video])
    }
    
    return (
        <Formulario aoVideoCadastrado = {video => aoNovoVideoAdicionado(video)}/>
    )
}