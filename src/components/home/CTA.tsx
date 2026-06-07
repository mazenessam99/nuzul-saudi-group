import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";


export default function CTA() {
    return (
        <section className="py-20 container mx-auto px-4 lg:px-8">
            <div className="rounded-3xl gradient-hero p-12 md:p-20 text-center text-white relative overflow-hidden ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك معنا</h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8">احجز إقامتك في أحد فنادقنا الفاخرة واكتشف ضيافة سعودية لا مثيل لها.</p>
                <Button asChild variant={"gold"} size={'xl'}>
                    <Link to={'/hotels'} className="inline-flex items-center ">احجز إقامتك<ArrowLeft className="w-4 h-4"/> </Link>
                </Button>
            </div>

        </section>
    )
}
