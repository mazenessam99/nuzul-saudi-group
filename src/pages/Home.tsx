import CTA from "@/components/home/CTA";
import Destinations from "@/components/home/Destinations";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
    return (
        <main className="">
            <Destinations/>
            <PartnersSection/>
            <CTA/>
        </main>
    )
}
