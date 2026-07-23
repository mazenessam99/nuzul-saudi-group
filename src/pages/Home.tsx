import CTA from "@/components/home/CTA";
import Destinations from "@/components/home/Destinations";
import { FAQ } from "@/components/home/FAQ";
import PartnersSection from "@/components/home/PartnersSection";
import WhyNuzul from "@/components/home/WhyNuzul";

export default function Home() {
    return (
        <main className="">
            <Destinations/>
            <WhyNuzul/>
            <FAQ/>
            <PartnersSection/>
            <CTA/>
        </main>
    )
}
