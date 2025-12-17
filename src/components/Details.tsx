import {Box, Link as MuiLink, Typography} from "@mui/material";
import {PositionCard, ProjectCard} from "./Card";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {Link as RouterLink} from "react-router-dom";
import  content  from '../data/mtuikenhome-content.json';
import config from "../config/mtuikenhome-config";

export function Details() {
    return (
        <Box>
            {/* About Section */}
            <Box id="about" mb={24}>
                {content.about.map((paragraph, idx) => (
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
                {content.experience.map((pos, idx) => (
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
                {content.projects.map((proj, idx) => (
                    <ProjectCard key={idx} project={proj}/>
                ))}
            </Box>
        </Box>
    );
}