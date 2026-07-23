import SectionHeader from "../shared/SectionHeader";
import { Card, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const partners = [
    { name: "رؤية 2030", color: "from-emerald-500/20 to-emerald-700/10" },
    { name: "نيوم", color: "from-sky-500/20 to-sky-700/10" },
    { name: "البحر الأحمر", color: "from-rose-500/20 to-rose-700/10" },
    { name: "بوابة الدرعية", color: "from-amber-500/20 to-amber-700/10" },
    { name: "هيئة العلا", color: "from-orange-500/20 to-orange-700/10" },
    { name: "الخطوط السعودية", color: "from-emerald-500/20 to-emerald-700/10" },
    { name: "هيئة السياحة", color: "from-teal-500/20 to-teal-700/10" },
    { name: "القدية", color: "from-indigo-500/20 to-indigo-700/10" },
];

function PartnersSection() {
    return (
        <section className="py-20 bg-muted/40 border-y border-border">
            <div className="container mx-auto px-4 lg:px-8">

                <SectionHeader
                    eyebrow="شركاء النجاح"
                    title="شركاؤنا"
                    subtitle="نفخر بشراكتنا مع نخبة من المؤسسات الرائدة"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
                    {partners.map((partner, index) => (
                        <MotionCard
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            whileHover={{ y: -6 }}
                            className={`relative flex flex-col gap-2 items-center justify-center rounded-2xl p-5 aspect-3/2 bg-linear-to-br ${partner.color} bg-card border hover:border-gold hover:shadow-luxe transition-all overflow-hidden`}
                        >
                            <CardTitle className="font-bold text-sm md:text-base text-foreground text-center">
                                {partner.name}
                            </CardTitle>

                            <span className="text-xs tracking-widest text-muted-foreground mt-0.5">
                                شريك رسمي
                            </span>
                        </MotionCard>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default PartnersSection;