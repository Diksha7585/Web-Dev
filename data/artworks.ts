export interface Artwork {
    id: string;
    title: string;
    artist: string;
    price: string; // in ₹
    category: string;
    description: string;
    folderPath: string; // Points to /paint/{artwork-name}/
    themeColor: string;
    gradient: string;
    highlights: string[];
    size: string;
    material: string;
    story: {
        title: string;
        description: string;
    };
    shipping: string;
    returnPolicy: string;
}

export const artworks: Artwork[] = [
    {
        id: "1",
        title: "Chromatose State",
        artist: "Aarav Mehta",
        price: "15,000",
        category: "Abstract Fluid",
        description: "A deep dive into the chaotic serenity of color blending in zero gravity.",
        folderPath: "/paint/chromatose",
        themeColor: "#FF3C78",
        gradient: "from-pink-500 to-rose-900",
        highlights: ["Liquid Physics", "Neon Glow", "4K Texture"],
        size: "24x36 inches",
        material: "Digital Print on Canvas",
        story: {
            title: "Born in Chaos",
            description: "Inspired by the movement of nebulae in deep space, this piece captures the exact moment matter turns into energy."
        },
        shipping: "Ships in 3-5 days",
        returnPolicy: "7-day easy return policy"
    },
    {
        id: "2",
        title: "Liquid Dreams",
        artist: "Sia Kapoor",
        price: "9,500",
        category: "Surrealism",
        description: "Melting realities captured in a single frame of existence.",
        folderPath: "/paint/liquid-dreams",
        themeColor: "#3CC8FF",
        gradient: "from-cyan-400 to-blue-900",
        highlights: ["Dreamlike", "Water Texture", "Calming"],
        size: "18x24 inches",
        material: "Glossy Metal Print",
        story: {
            title: "Flow State",
            description: "An exploration of the subconscious mind where thoughts flow like unhindered water."
        },
        shipping: "Ships in 2-4 days",
        returnPolicy: "No returns on limited editions"
    },
    {
        id: "3",
        title: "Neon Dystopia",
        artist: "Rohan Das",
        price: "3,999",
        category: "Cyberpunk",
        description: "The city lights reflecting off rain-slicked streets in a future that never was.",
        folderPath: "/paint/neon-dystopia",
        themeColor: "#A020F0",
        gradient: "from-purple-500 to-indigo-900",
        highlights: ["High Contrast", "Urban", "Electric"],
        size: "12x18 inches",
        material: "Matte Paper Print",
        story: {
            title: "Night City",
            description: "A glimpse into a world ruled by technology and neon, where darkness is the only canvas."
        },
        shipping: "Ships in 5-7 days",
        returnPolicy: "15-day return policy"
    },
    {
        id: "4",
        title: "Golden Hour",
        artist: "Priya Singh",
        price: "1,299",
        category: "Digital Oil",
        description: "The warmth of the sun captured in digital brushstrokes.",
        folderPath: "/paint/golden-hour",
        themeColor: "#FFD700",
        gradient: "from-yellow-400 to-orange-800",
        highlights: ["Warm", "Classic Style", "Textured"],
        size: "8x10 inches",
        material: "Textured Archival Paper",
        story: {
            title: "Eternal Sunset",
            description: "Preserving the fleeting magic of twilight in a permanent digital form."
        },
        shipping: "Ships in 2-3 days",
        returnPolicy: "30-day return policy"
    }
];
