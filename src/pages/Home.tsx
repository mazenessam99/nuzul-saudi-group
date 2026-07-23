import CTA from "@/components/home/CTA";
import Destinations from "@/components/home/Destinations";
import { FAQ } from "@/components/home/FAQ";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
    return (
        <main className="">
            <Destinations/>
            <FAQ/>
            <PartnersSection/>
            
            <CTA/>
        </main>
    )
}
