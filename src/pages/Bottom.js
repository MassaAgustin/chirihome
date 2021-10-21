import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './pages.scss';

const Bottom = () => {
    return (
        <div className="bottomnav">
            <Card sx={{ maxWidth: 345, maxHeight: 320 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/chiri.jpg"
                    alt="Chiri cat"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Chiri cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Chiri es un gatuno feliz, le encanta mimir en la cama por la noche,
                        y salir por la mañana y tarde al techo a chusmear.
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, maxHeight: 320 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/piti.jpeg"
                    alt="Chiri cat"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Piti plant
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Piti es un potus de limon, mejor conocido como Epipremnum,
                        no le gusta mucho el agua y tampoco que le de el sol directo,
                        pero esta feliz con su hermoso hogar.
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}

export default Bottom;
