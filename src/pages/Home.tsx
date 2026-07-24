import CTASection from "@/components/home/CTASection";
import DestinationsSection from "@/components/home/DestinationsSection";
import { FAQSection } from "@/components/home/FAQSection";
import PartnersSection from "@/components/home/PartnersSection";
import WhyNuzulSection from "@/components/home/WhyNuzulSection";

export default function Home() {
    return (
        <main className="">
            <DestinationsSection/>
            <WhyNuzulSection/>
            <FAQSection/>
            <PartnersSection/>
            <CTASection/>
        </main>
    )
}
