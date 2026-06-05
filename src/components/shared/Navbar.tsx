import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { useEffect, useState } from "react";
import { Globe, Heart, LogIn } from "lucide-react";
import { navLinks } from "@/data/links";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header className={`fixed top-0 right-0 left-0 z-50 py-2 transition-all duration-300 ${scrolled ? "glass border-b border-border shadow-sm" : "bg-transparent"}`}>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
                    
                    <Link className="flex items-center justify-between gap-4" to={'/'}>
                        <div className="gradient-gold w-10 h-10 rounded-full font-bold flex items-center justify-center text-charcoal text-lg">ن</div>
                        <div>
                            <div className="font-bold text-lg leading-tight">نُزُل</div>
                            <div className="text-[10px] text-muted-foreground leading-tight">مجموعة نُزُل السعودية</div>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink key={link.to} to={link.to} end={link.to === "/"}
                                className={({isActive})=>`px-3 py-2 rounded-md text-sm font-meduim transition-colors ${isActive ? 'text-gold' :'text-foreground hover:text-gold'}`}>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center  gap-1">
                        <button className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-md text-foreground hover:bg-muted text-sm font-medium cursor-pointer" aria-label="lang" >
                            <Globe className="w-4 h-4"/>ar
                        </button>
                        <ModeToggle />
                        <Link to={'/favorites'} className="relative p-2 mr-2 rounded-md hover:bg-muted" aria-label="favorites" >
                            <Heart className=" w-5 h-5"/>
                            <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">2</span>
                        </Link>
                        <Link to={'/login'} className="hidden gradient-gold sm:inline-flex items-center gap-1.5 px-3 py-2 text-charcoal text-sm rounded-md font-bold">
                        <LogIn/> دخول
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </header>
    )
}
