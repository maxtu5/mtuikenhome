import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainScreen from "./components/MainScreen";
import { Stub } from "./components/Stub";
import {color_light} from "./utils/types";

const theme = createTheme({
    palette: {
        primary: { main: color_light },
        text: { primary: color_light },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: color_light,
                },
            },
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainScreen />} />
                    <Route path="/finwin" element={<Stub />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}