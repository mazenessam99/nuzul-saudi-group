import { attractions } from "@/data/attraction";
import SectionHeader from "../shared/SectionHeader";
import { Link } from "react-router-dom";


export default function Destinations() {
    const topAttractions=attractions.slice(0,6)
    return (
        <section className="py-20 bg-muted/40">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader eyebrow="اكتشف المملكة" title="وجهات لا تُنسى"/>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {topAttractions.map((attraction,index)=>(
                        <Link to={'/destinations'} className="group relative aspect-[3/4] rounded-xl overflow-hidden" key={index}>
                            <img src={attraction.image} alt={attraction.name} className="w-full h-full object-over absolute group-hover:scale-110 transition-transform duration-600"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-3 inset-x-3">
                                <h6 className="text-xs text-gold tracking-wider">{attraction.category}</h6>
                                <p className="text-sm font-bold">{attraction.city}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
