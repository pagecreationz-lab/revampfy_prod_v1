import Link from "next/link";
import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function SitemapPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="admin__panel">
              <h1>Site Map</h1>
              <div className="footer__links" style={{ gap: "0.55rem" }}>
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/partners">Partners</Link>
                <Link href="/resellers">Resellers</Link>
                <Link href="/contact-us">Contact Us</Link>
                <Link href="/bulk-orders-enquiry">Bulk Orders</Link>
                <Link href="/stores">Stores</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/return-policy">Return Policy</Link>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
