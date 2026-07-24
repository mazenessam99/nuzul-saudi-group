import type { LucideIcon } from "lucide-react";


interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    padding?: string;
    showDecoration?: boolean;
}


export default function FeatureCard({
    icon: Icon,
    title,
    description,
    padding = "p-6",
    showDecoration = true,
}: FeatureCardProps) {


    return (
        <div
            className="
            group
            relative
            bg-card
            border
            border-border
            rounded-2xl
            overflow-hidden
            hover:border-gold
            hover:shadow-lg
            transition-all
            duration-300
            cursor-pointer
            "
        >

            {
                showDecoration && (
                    <div
                        className="
                        absolute
                        -top-10
                        -inset-e-12
                        w-32
                        h-32
                        rounded-full
                        bg-gold/5
                        group-hover:bg-gold/15
                        transition-all
                        duration-500
                        "
                    />
                )
            }
            <div className={`relative ${padding}`}>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl gradient-gold text-charcoal mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6"/>
                </div>
                <h3 className={`font-bold text-lg  mb-2`}>
                    {title}
                </h3>
                <p className={`text-muted-foreground text-sm leading-loose`}>
                    {description}
                </p>

            </div>




        </div>
    )
}