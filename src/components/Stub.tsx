import {Box, Typography} from "@mui/material";
import {color_indigo, color_light} from "../utils/types";

export function Stub() {
    return (<Box width={'100%'} height={'100%'} padding={5}
                 sx={{
                     bgcolor: color_indigo,
                 }}>
        <Typography variant={'h3'}>
            Coming soon
        </Typography>
    </Box>);
}