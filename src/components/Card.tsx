import {Box, Typography, Link as MuiLink} from "@mui/material";
import {color_indigo, color_light, Position} from "../utils/types";
import {Link as RouterLink} from "react-router-dom";

// Pill-shaped skill badge
function Skill({skill}: { skill: string }) {
    return (
        <Box
            component="span"
            sx={{
                bgcolor: "#0a3d62",
                color: "#e0e0e0",
                px: 2,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: 500,
                mr: 1,
                mb: 1,
                display: "inline-block",
            }}
        >
            {skill.trim()}
        </Box>
    );
}

// Generic card props
interface BaseCardProps {
    title: string;
    subtitle?: string;   // e.g. dates for positions
    description: string;
    stack: string;
    image?: string;      // e.g. project image
    url?: string;        // optional link for projects
}

// Reusable card layout
export function BaseCard({title, subtitle, description, stack, image, url}: BaseCardProps) {
    return (
        <Box
            sx={{
                borderRadius: 2,
                m: -2,
                transition: "background-color 0.3s, box-shadow 0.3s, transform 0.2s",
                "&:hover": {
                    bgcolor: "rgba(255,255,255,0.03)",
                    boxShadow: 3,
                    transform: "translateY(-2px)",
                },
                mb: 3,
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
            }}
        >
            {/* Left column: subtitle or image */}
            <Box
                sx={{
                    width: {xs: "100%", md: "20%"},
                    mb: {xs: 2, md: 2},
                    p: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        style={{maxWidth: "100%"}}
                    />
                ) : (
                    subtitle && (
                        <Typography variant="subtitle1">
                            {subtitle}
                        </Typography>
                    )
                )}
            </Box>

            {/* Right column: main content */}
            <Box sx={{width: {xs: "100%", md: "80%"}, pt: 1.5}}>
                {url ? (
                    <MuiLink variant={'h6'}
                             sx={{
                                 color: 'primary',
                             }}
                             fontWeight="bold"
                             underline={'none'}
                             component={RouterLink} to= {url}>
                        {title}
                    </MuiLink>
                ) : (
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                )}
                <Typography paragraph>{description}</Typography>

                <Box sx={{display: "flex", flexWrap: "wrap", mb: 1}}>
                    {stack.split(",").map((item, idx) => (
                        <Skill key={idx} skill={item}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

// Specialization for positions
export function PositionCard({position}: { position: Position }) {
    return (
        <BaseCard
            title={position.role}
            subtitle={position.dates}
            description={position.description}
            stack={position.stack}
        />
    );
}

// Specialization for projects
interface Project {
    name: string;
    image: string;
    description: string;
    stack: string;
    url?: string;
}

export function ProjectCard({project}: { project: Project }) {
    return (
        <BaseCard
            title={project.name}
            description={project.description}
            stack={project.stack}
            image={project.image}
            url={project.url}
        />
    );
}