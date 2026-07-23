
import type { LucideIcon } from "lucide-react"
interface statCardProps{
    icon:LucideIcon,
    number:string,
    title:string

} 
export default function StatCard({icon,number,title}:statCardProps) {
    const Icon=icon
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-card rounded-2xl p-6 text-center border border-border transition-all duration-300 hover:border-gold hover:shadow-lg cursor-pointer">
            <Icon className="text-gold w-7 h-7"/>
            <h3 className="font-bold text-3xl">{number}</h3>
            <p className="text-xs text-muted-foreground">{title}</p>
        </div>
    )
}
