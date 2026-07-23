import { Compass, Crown, Heart, Leaf } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";


export default function ValuesSection() {
    const features = [
        {
            icon: Crown,
            title: "الفخامة الأصيلة ",
            description:
                "نقدم تجارب راقية مستوحاة من إرث المملكة العريق وضيافتها الكريمة.",
        },
        {
            icon: Heart,
            title: " خدمة من القلب",
            description:
                "كل ضيف هو قصة، ونحرص أن تكون كل تفصيلة مصممة خصيصاً له.",
        },
        {
            icon: Leaf,
            title: "استدامة مسؤولة",
            description:
                "نحترم البيئة والمجتمع، ونعمل وفق أعلى معايير الاستدامة.",
        },
        {
            icon: Compass,
            title: "رؤية 2030",
            description:
                "شركاء في تحقيق رؤية المملكة لقطاع سياحة عالمي.",
        },
    ];
    return (
        <section className="py-20">
            <SectionHeader eyebrow="ما يميزنا" title="قيمنا" subtitle="أربع ركائز تبني تجربة نُزُل لكل ضيف"/>
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    features.map((feature)=>(
                        <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} showDecoration={false} />
                    ))
                }

            </div>

        </section>
    )
}
