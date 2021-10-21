import { useState, Fragment } from 'react'

const Home = () => {

    const [textHelp, setTextHelp] = useState('');
    const [isRecording, setRecording] = useState('');

    const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition;
    const reconocimiento = new reconocimientoVoz();

    reconocimiento.onstart = () => {
        isRecording(true);
        setTextHelp('Estamos grabando la voz...');
    }
    reconocimiento.onresult = (event) => {

        const mensaje = event.results[0][0].transcript;
        isRecording(false);
        setTextHelp(mensaje);
        leerTextoSimple(mensaje);
    }

    const leerTextoSimple = (mensaje) => {
        const voz = new SpeechSynthesisUtterance();
        voz.text = mensaje;
        window.speechSynthesis.speak(voz);
    }

    return (
        <Fragment>
            <p> {textHelp} </p>
            <button onClick={() => reconocimiento.start()} >
                Grabar
            </button>
        </Fragment>

    )
}

export default Home;
