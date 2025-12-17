import {Box, IconButton} from "@mui/material";
import {JSX} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import  content  from '../data/mtuikenhome-content.json';

const iconMap: Record<string, JSX.Element> = {
    github: <GitHubIcon/>,
    linked: <LinkedInIcon/>,
    email: <EmailIcon/>
};

export function IconRow() {

    return (

    <Box display="flex" gap={2} paddingTop={4}>
        {content.links.map((item, index) => (
            <IconButton
                key={index}
                component="a"
                href={item.link}
                target={item.icon !== "email" ? "_blank" : undefined}
                rel={item.icon !== "email" ? "noopener noreferrer" : undefined}
                color="primary"
            >
                {iconMap[item.icon]}
            </IconButton>
        ))}
    </Box>
    );
}