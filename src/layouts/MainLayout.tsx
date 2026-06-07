import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className=" flex-1 pt-30">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}