import SectionHeader from "../shared/SectionHeader"
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FAQAccordion from "../shared/FAQAccordion";

export const FAQ = () => {


    return (
        <section className="py-20 bg-muted/40 border-b border-border">

            <SectionHeader
                eyebrow="الأسئلة الشائعة"
                title="الأسئلة الشائعة"
                subtitle="إجابات على أكثر الأسئلة شيوعاً"
            />

            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <FAQAccordion limit={5}/>
            </div>

            <div className="text-center mt-8">
                <Button asChild variant={"gold"} size={'xl'} >
                    <Link to={'/FAQ'} className="inline-flex items-center ">عرض جميع الأسئلة<ArrowLeft className="w-4 h-4" /> </Link>
                </Button>
            </div>
        </section>
    )
}