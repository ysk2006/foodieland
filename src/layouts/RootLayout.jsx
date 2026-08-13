import { Outlet } from "react-router";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

function RootLayout() {
    return (
        <div className="app">
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
