import { items } from "@/data/faq";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

interface FAQAccordionProps {
    limit?: number;
    category?: string;
    search?: string;
}

export default function FAQAccordion({
    limit,
    category = "الكل",
    search = "",
}: FAQAccordionProps) {
    let faqItems = items;

    if (category !== "الكل") {
        faqItems = faqItems.filter(
            (item) => item.category === category
        );
    }

    if (search.trim() !== "") {
        faqItems = faqItems.filter((item) =>
            item.trigger.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (limit) {
        faqItems = faqItems.slice(0, limit);
    }

    if (faqItems.length === 0) {
        return (
            <div className="text-center py-10 text-muted-foreground">
                لا توجد نتائج مطابقة للبحث
            </div>
        );
    }

    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-3"
        >
            {faqItems.map((item) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="bg-card border border-border rounded-xl px-6 transition-all hover:shadow-md"
                >
                    <AccordionTrigger className="text-right">
                        {item.trigger}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground leading-7">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}