import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "start" | "center";
    action?: ReactNode;
}
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', action }: Props) {
    return (
        <header className={` flex flex-col gap-3 mb-10 ${align === "center" ? "items-center text-center" : "items-start text-start"}`}>
            {eyebrow && (
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-md tracking-[0.3em] text-gold font-bold">{eyebrow}</motion.span>
            )}
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold">{title}</motion.h2>
            {subtitle &&(
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-muted-foreground max-w-2xl">{subtitle}</motion.p>
            )}
            {action && <div className="mt-2">{action}</div>}
        </header>
    )
}
