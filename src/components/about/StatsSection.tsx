import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import StatCard from "../shared/StatCard";

export default function StatsSection() {
    return (
        <section className="bg-muted/30 py-20">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.08,
                            }}
                        >
                            <StatCard
                                icon={stat.icon}
                                number={stat.number}
                                title={stat.title}
                            />
                        </motion.div>
                    ))}

            </div>
        </section>

    )
}
