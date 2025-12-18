import {Box} from "@mui/material";
import {Details} from "./Details";
import {color_indigo} from "../utils/types";
import {MainBar} from "./MainBar";
import {IconRow} from "./IconRow";

export default function MainScreen() {
    return (
        <Box
            width="100%"
            height={{xs:'auto', md:"100vh"}}
            display="flex"
            flexDirection={{xs: "column", md: "row"}}
            sx={{
                bgcolor: color_indigo,
            }}
        >
            {/* Left Column */}
            <Box
                width={{xs: "100%", md: "40%"}}
                paddingTop={8}
                paddingBottom={6}
                paddingX={6}
                display="flex"
                flexDirection="column"
                sx={{ boxSizing: "border-box" }}
            >
                <MainBar/>

                {/* Push icons to bottom */}
                <Box mt="auto" paddingTop={4}>
                    <IconRow/>
                </Box>
            </Box>

            {/* Right Column */}
            <Box
                width={{xs: "100%", md: "60%"}}
                paddingTop={8}
                paddingX={6}
                sx={{
                    boxSizing: "border-box",
                    overflowY: { xs: "visible", md: "auto" },
                }}
            >
                <Details/>
            </Box>
        </Box>
    );
}
