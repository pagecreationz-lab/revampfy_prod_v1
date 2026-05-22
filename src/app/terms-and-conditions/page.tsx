import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section className="section">
  <div className="container">
    <div className="admin__panel">
      <h1>Terms & Conditions</h1>

      <p className="hero__subtext">
        By accessing or purchasing from Revampfy, you agree to comply with the
        following terms and conditions.
      </p>

      <h3>Product Information</h3>
      <p>
        We strive to provide accurate product descriptions, specifications,
        images, and pricing. Minor cosmetic variations may exist in refurbished
        products.
      </p>

      <h3>Refurbished Product Nature</h3>
      <p>
        All refurbished devices undergo professional testing, cleaning, and
        quality verification before sale.
      </p>

      <h3>Pricing & Availability</h3>
      <p>
        Product prices and stock availability may change without prior notice.
        Revampfy reserves the right to cancel orders in cases involving pricing
        or inventory errors.
      </p>

      <h3>Warranty Terms</h3>
      <p>
        Warranty coverage applies only to eligible hardware-related faults under
        standard usage conditions.
      </p>

      <h3>User Responsibilities</h3>
      <p>
        Customers are responsible for providing accurate contact, billing, and
        delivery information while placing orders.
      </p>

      <h3>Intellectual Property</h3>
      <p>
        All Revampfy logos, branding, graphics, website content, and digital
        assets remain the intellectual property of Revampfy.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        Revampfy shall not be responsible for indirect damages, data loss,
        business interruption, or damages caused by improper product usage.
      </p>

      <h3>Governing Law</h3>
      <p>
        These terms shall be governed by applicable laws and regulations within
        India.
      </p>

      <h3>Contact</h3>
      <p>
        For legal or policy-related concerns, email{" "}
        <a href="mailto:support@revampfy.in">support@revampfy.in</a>.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}
