import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center text-center px-4">
            <motion.section initial={{opacity:0,y:80,scale: 0.175}} animate={{opacity:1,y:0,scale: 1}} transition={{duration:0.5}} className="text-center" >
                <div className="text-8xl font-bold text-gold mb-4">404</div>
                <h1 className="text-2xl font-bold mb-2 ">الصفحة غير موجودة</h1>
                <p className="text-muted-foreground mb-12">عذراً، لم نتمكن من العثور على ما تبحث عنه.</p>
                <Button asChild variant={'gold'} size={"xl"}><Link to={'/'}>العودة للرئيسية</Link></Button>
            </motion.section>
        </main>
    )
}
