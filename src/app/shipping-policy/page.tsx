import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function ShippingPolicyPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section className="section">
  <div className="container">
    <div className="admin__panel">
      <h1>Shipping Policy</h1>

      <p className="hero__subtext">
        Revampfy ensures secure packaging and reliable delivery across India
        through trusted logistics partners.
      </p>

      <h3>Order Processing</h3>
      <p>
        Orders are generally processed within 1–3 business days after payment
        confirmation and successful quality verification.
      </p>

      <h3>Delivery Timeline</h3>
      <p>
        Delivery timelines may vary based on customer location and courier
        service availability. Metro cities usually receive orders faster than
        remote locations.
      </p>

      <h3>Shipping Charges</h3>
      <p>
        Shipping charges, if applicable, are displayed during checkout before
        payment confirmation.
      </p>

      <h3>Tracking Information</h3>
      <p>
        Customers will receive tracking updates once orders are shipped through
        courier partners.
      </p>

      <h3>Damaged Packages</h3>
      <p>
        Customers are advised to inspect packages during delivery and report any
        visible damage or tampering immediately with supporting photos or videos.
      </p>

      <h3>Delivery Issues</h3>
      <p>
        Failed deliveries caused by incorrect address details or customer
        unavailability may require additional re-shipping charges.
      </p>

      <h3>Shipping Support</h3>
      <p>
        For shipping assistance, contact{" "}
        <a href="mailto:support@revampfy.in">support@revampfy.in</a>.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}
