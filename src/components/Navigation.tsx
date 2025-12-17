import {Box, Link} from "@mui/material";
import {useEffect, useState} from "react";

export function Navigation() {
    const [active, setActive] = useState<string>("about");

    useEffect(() => {
        const sections = ["about", "experience", "projects"];
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {rootMargin: "-20% 0px -60% 0px"} // triggers when section is in middle view
        );

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const linkStyle = (id: string) => ({
        fontWeight: active === id ? "bold" : "normal",
        fontSize: active === id ? "1.25rem" : "1rem",
        transition: "all 0.2s ease",
        color: active === id ? 'white' : 'primary',
    });

    return (
        <Box
            sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "sticky",
                top: 120,
            }}
        >
            <Link href="#about" underline="hover" sx={linkStyle("about")}>
                - About
            </Link>
            <Link href="#experience" underline="hover" sx={linkStyle("experience")}>
                - Experience
            </Link>
            <Link href="#projects" underline="hover" sx={linkStyle("projects")}>
                - Projects
            </Link>
        </Box>
    );
}