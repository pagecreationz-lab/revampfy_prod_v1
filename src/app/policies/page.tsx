import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";
import { SitePageBuilderRenderer } from "@/components/SitePageBuilderRenderer";
import { getSiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

export default async function PoliciesPage() {
  const content = await getSiteContent();

  return (
    <>
      <Topbar />
      <Header />
      <main>
        <SitePageBuilderRenderer blocks={content.pageBuilder.policiesPage} />
        <section className="section">
          <div className="container">
            <div className="admin__panel">
              <h2>Customer Policies</h2>
              <div className="admin__grid">
                <div className="admin__item">
                  <strong>Privacy Policy</strong>
                  <small>
                    We use your information only for support, fulfillment, and compliance.
                    <a href="/privacy-policy"> Read full Privacy Policy.</a>
                  </small>
                </div>
                <div className="admin__item">
                  <strong>Shipping Policy</strong>
                  <small>
                    Shipping timelines and coverage are confirmed at order time.
                    <a href="/shipping-policy"> Read full Shipping Policy.</a>
                  </small>
                </div>
                <div className="admin__item">
                  <strong>Return Policy</strong>
                  <small>
                    Returns are processed for eligible cases as per stated policy terms.
                    <a href="/return-policy"> Read full Return Policy.</a>
                  </small>
                </div>
                <div className="admin__item">
                  <strong>Terms & Conditions</strong>
                  <small>
                    Website usage, ordering, and service terms are governed by our conditions.
                    <a href="/terms-and-conditions"> Read full Terms &amp; Conditions.</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
