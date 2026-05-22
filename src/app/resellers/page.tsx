import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function ResellersPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="admin__panel">
              <h1>Resellers</h1>
              <p className="hero__subtext">
                Join Revampfy reseller network to deliver quality refurbished devices to schools,
                startups, and enterprises across India.
              </p>
              <ul>
                <li>Priority bulk pricing and dedicated partner support.</li>
                <li>Assisted fulfilment in major serviceable cities.</li>
                <li>Co-branded sales enablement for regional growth.</li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                Contact: <a href="mailto:support@revampfy.in">support@revampfy.in</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
