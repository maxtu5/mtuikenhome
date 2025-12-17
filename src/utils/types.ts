export interface Position {
    role: string;
    dates: string;
    description: string;
    stack: string;
}

export type LinkIconData = {
    icon: "github" | "linked" | "email";
    link: string;
};

export type MainData = {
    name?: string;
    title?: string;
    shortLine?: string
};

export interface Project {
    name: string;
    image: string;
    description: string;
    stack: string;
    url?: string; // optional link
}

export const color_light="rgb(156,175,195)"
export const color_highlight="rgb(196,225,225)"
export const color_indigo="#0a1f44"


