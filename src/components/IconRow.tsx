import {Box, IconButton} from "@mui/material";
import {JSX, useEffect, useState} from "react";
import {LinkIconData} from "../utils/types";
import config from "../config/mtuikenhome-config";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const iconMap: Record<string, JSX.Element> = {
    github: <GitHubIcon/>,
    linked: <LinkedInIcon/>,
    email: <EmailIcon/>
};

export function IconRow() {
    const [links, setLinks] = useState<LinkIconData[]>([]);

    useEffect(() => {
        fetch(config.jsonPath)
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(data => {
                setLinks(data.links);
            })
            .catch(err => console.error(err));
    }, []);

    return (

    <Box display="flex" gap={2} paddingTop={4}>
        {links.map((item, index) => (
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