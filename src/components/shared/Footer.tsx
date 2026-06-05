import { Mail,MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { footerLinks } from "@/data/links";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="mt-20 bg-[#1a1a1f] text-slate-100 dark:bg-[#0f0f12]">
            <div className=" container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <div className="flex items-center gap-4 mb-4" >
                            <div className="gradient-gold w-10 h-10 rounded-full font-bold flex items-center justify-center text-charcoal text-lg">ن</div>
                            <div>
                                <div className="font-bold text-gold text-lg leading-tight">نُزُل</div>
                                <div className="text-xs text-slate-300 leading-tight">مجموعة نُزُل السعودية</div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed">نُزُل مجموعة سعودية رائدة في الضيافة الفاخرة، مستوحاة من رؤية 2030.</p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gold">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm text-slate-200">
                            {footerLinks.map((link, index) => (
                                <li><Link to={link.to} key={index} className="hover:text-gold transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gold">تواصل معنا</h4>
                        <ul className="space-y-3 text-sm text-slate-200">
                            <li className="flex items-start gap-2 hover:text-gold transition-colors cursor-pointer">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />حي السفارات، الرياض، المملكة العربية السعودية
                            </li>
                            <li className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                                <Phone className="w-4 h-4 shrink-0 text-gold" />
                                <span dir="ltr">+966 11 123 4567</span></li>
                            <li className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer">
                                <Mail className="w-4 h-4 shrink-0 text-gold" />
                                hello@nuzul.sa
                            </li>
                        </ul>
                        <div className="flex gap-2 mt-4">
                            <a
                                href="#"
                                className="w-9 h-9 border border-gold/30 rounded-full text-slate-300 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-300"
                            >
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 border border-gold/30 rounded-full text-slate-300 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-300"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 border border-gold/30 rounded-full text-slate-300 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-300"
                            >
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 border border-gold/30 rounded-full text-slate-300 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-300"
                            >
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 font-bold text-gold">اشترك في النشرة البريدية</h4>
                        <form className="flex flex-col gap-2">
                            <input className="w-full bg-white/10 px-3 py-2 border border-gold/30  text-white text-sm rounded-md focus:outline-0 focus:border-gold placeholder:text-slate-300" placeholder="بريدك الإلكترونى" />
                            <Button className="gradient-gold text-charcoal font-bold text-center hover:opacity-90 transition" type="submit">اشترك</Button>
                        </form>
                    </div>

                </div>
                <div className=" mt-12 pt-12 sm:pt-8 border-t border-white/10  text-center text-xs text-slate-300">جميع الحقوق محفوظة © نُزُل 2026</div>
            </div>
        </footer>
    )
}
