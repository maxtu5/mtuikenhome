import {Box, Typography} from "@mui/material";
import {Navigation} from "./Navigation";
import {useEffect, useState} from "react";
import config from "../config/mtuikenhome-config";
import {color_highlight, MainData} from "../utils/types";

export function MainBar() {

    const [main, setMain] = useState<MainData>({});

    useEffect(() => {
        fetch(config.jsonPath)
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(data => {
                setMain(data.main);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <Box>
            <Typography variant="h3" gutterBottom sx={{fontWeight: "bold", color: 'white'}}>
                {main.name}
            </Typography>
            <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
                {main.title}
            </Typography>
            <Typography paddingTop={3}>
                {main.shortLine}
            </Typography>

            <Navigation/>
        </Box>
    );
}