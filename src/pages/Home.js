import { useState, Fragment } from 'react'

import LoadingButton from '@mui/lab/LoadingButton';
import MicIcon from '@mui/icons-material/Mic';

const Home = () => {

    const [textHelp, setTextHelp] = useState('Que deseas ?');
    const [isRecording, setRecording] = useState(false);

    const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition;
    const reconocimiento = new reconocimientoVoz();

    reconocimiento.onstart = (event) => {
        try {
            setRecording(true);
            setTextHelp('Estamos grabando la voz...');
        } catch (error) {
            setRecording(false);
        }

    }

    reconocimiento.onresult = (event) => {

        try {
            const mensaje = event.results[0][0].transcript;
            setRecording(false);
            setTextHelp(mensaje);
            leerTextoSimple(mensaje);
        } catch {
            setRecording(false);
        }
    }

    const leerTextoSimple = (mensaje) => {
        const voz = new SpeechSynthesisUtterance();
        voz.text = mensaje;
        window.speechSynthesis.speak(voz);
    }

    return (
        <Fragment>
            <h4> {textHelp} </h4>
            <LoadingButton
                color="secondary"
                onClick={(e) => reconocimiento.start(e)}
                loading={isRecording}
                loadingPosition="start"
                startIcon={<MicIcon />}
                variant="contained"
            > Grabar </LoadingButton>
        </Fragment>

    )
}

export default Home;
