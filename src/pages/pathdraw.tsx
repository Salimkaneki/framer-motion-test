import React from "react";
import { motion } from "framer-motion";

export default function PathDrawing() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.3, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.3, duration: 0.01 },
            },
        }),
    };

    return (
        <svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            style={{ maxWidth: "80vw" }}
        >
            {/* Cercle animé (à gauche) */}
            <motion.circle
                cx="250"  // Positionné à gauche
                cy="300"
                r="120"
                stroke="#FF0055"
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
                initial="hidden"
                animate="visible"
                variants={draw}
                custom={0}
            />

            {/* Première ligne de la croix ( / ) - Déplacée à droite */}
            <motion.line
                x1="500"
                y1="200"
                x2="700"
                y2="400"
                stroke="#FF0055"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="283"
                initial="hidden"
                animate="visible"
                variants={draw}
                custom={1}
            />

            {/* Deuxième ligne de la croix ( \ ) - Déplacée à droite */}
            <motion.line
                x1="700"
                y1="200"
                x2="500"
                y2="400"
                stroke="#7700FF"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="283"
                initial="hidden"
                animate="visible"
                variants={draw}
                custom={2}
            />

            <text 
                x="100" y="150" font-size="24" fill="black">
                Hello SVG
            </text>

            <line x1="50" y1="50" x2="200" y2="200" stroke="black" stroke-width="5"/>


        </svg>
    );
}
