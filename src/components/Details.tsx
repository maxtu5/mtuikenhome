import {Box, Link as MuiLink, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import config from "../config/mtuikenhome-config";
import {PositionCard, ProjectCard} from "./Card";
import {Position, Project} from "../utils/types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {Link as RouterLink} from "react-router-dom";

export function Details() {
    const [aboutText, setAboutText] = useState<string[]>([]);
    const [experience, setExperience] = useState<Position[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch(config.jsonPath)
            .then(res => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then(data => {
                setAboutText(data.about);
                setExperience(data.experience);
                setProjects(data.projects);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <Box>
            {/* About Section */}
            <Box id="about" mb={24}>
                {aboutText.map((paragraph, idx) => (
                    <Typography key={idx} paragraph>
                        {paragraph}
                    </Typography>
                ))}
            </Box>

            {/* Experience Section */}
            <Box id="experience" mb={24} gap={1}>
                <Typography variant={'h3'} mb={4} color={'white'}>
                    Experience
                </Typography>
                {experience.map((pos, idx) => (
                    <PositionCard key={idx} position={pos}/>
                ))}
                <MuiLink variant={'h6'}
                         sx={{
                             color: 'primary',
                         }}
                         fontWeight="bold"
                         underline={'none'}
                         component={RouterLink} to={config.resumeLink}
                         target="_blank"
                >
                    View full resume
                    <OpenInNewIcon sx={{mx: 1}} fontSize="small"/>
                </MuiLink>
            </Box>

            {/* Projects Section */}
            <Box id="projects" mb={14}>
                <Typography variant={'h3'} mb={4} color={'white'}>
                    Projects
                </Typography>
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} project={proj}/>
                ))}
            </Box>
        </Box>
    );
}