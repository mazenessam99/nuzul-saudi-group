import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 lg:px-8 flex-1 pt-30">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}