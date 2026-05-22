import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function ReturnPolicyPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
       <section className="section">
  <div className="container">
    <div className="admin__panel">
      <h1>Return Policy</h1>

      <p className="hero__subtext">
        Every refurbished laptop, desktop, and accessory sold by Revampfy is
        tested before dispatch to ensure quality and reliability.
      </p>

      <h3>Return Eligibility</h3>
      <p>
        Returns or replacements may be accepted for wrong products delivered,
        damaged shipments, or major functional issues not mentioned in the
        product listing.
      </p>

      <h3>Return Conditions</h3>
      <p>
        Products must be returned in original condition along with accessories,
        charger, invoice, and packaging wherever applicable.
      </p>

      <h3>Non-Returnable Situations</h3>
      <p>
        Returns may not be accepted for accidental damage, liquid damage,
        software issues caused after delivery, or unauthorized repair attempts.
      </p>

      <h3>Refund Process</h3>
      <p>
        Approved refunds will be processed to the original payment method after
        product inspection and validation.
      </p>

      <h3>Warranty Support</h3>
      <p>
        Most products include limited warranty coverage for eligible hardware
        issues under normal usage conditions.
      </p>

      <h3>Support Contact</h3>
      <p>
        For return or warranty assistance, contact{" "}
        <a href="mailto:support@revampfy.in">support@revampfy.in</a>.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}
