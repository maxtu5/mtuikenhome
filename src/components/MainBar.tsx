import {Box, Typography} from "@mui/material";
import {Navigation} from "./Navigation";
import  content  from '../data/mtuikenhome-content.json';

export function MainBar() {

    return (
        <Box>
            <Typography variant="h3" gutterBottom sx={{fontWeight: "bold", color: 'white'}}>
                {content.main.name}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
                {content.main.title}
            </Typography>
            <Typography paddingTop={3}>
                {content.main.shortLine}
            </Typography>

            <Navigation/>
        </Box>
    );
}