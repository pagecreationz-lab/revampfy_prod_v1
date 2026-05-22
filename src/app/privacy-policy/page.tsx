import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <section className="section">
  <div className="container">
    <div className="admin__panel">
      <h1>Privacy Policy</h1>

      <p className="hero__subtext">
        Revampfy collects only the information required to provide product support,
        enquiries, order communication, warranty assistance, and service updates.
      </p>

      <h3>What We Collect</h3>
      <p>
        We may collect your name, email address, phone number, billing or delivery
        address, business details, device information, and enquiry content when
        you interact with our website or services.
      </p>

      <h3>How We Use Data</h3>
      <p>
        Information collected is used for customer support, order processing,
        warranty coordination, shipping updates, fraud prevention, and improving
        overall service experience. Revampfy does not sell or rent personal data
        to third parties.
      </p>

      <h3>Payment Security</h3>
      <p>
        Payments are securely processed through trusted payment gateways. Revampfy
        does not store complete card or banking credentials on its servers.
      </p>

      <h3>Cookies & Analytics</h3>
      <p>
        Our website may use cookies and analytics tools to improve performance,
        understand visitor behaviour, and enhance user experience.
      </p>

      <h3>Data Security</h3>
      <p>
        Reasonable technical and organizational safeguards are applied to protect
        your personal information from unauthorized access, misuse, or disclosure.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        Trusted third-party services such as shipping providers, payment gateways,
        and analytics platforms may access limited information only when necessary
        to perform their services.
      </p>

      <h3>User Rights</h3>
      <p>
        Users may request access, correction, or deletion of personal information
        and may opt out of promotional communications anytime.
      </p>

      <h3>Contact</h3>
      <p>
        For privacy-related requests, email{" "}
        <a href="mailto:support@revampfy.in">support@revampfy.in</a>.
      </p>
    </div>
  </div>
</section>
      </main>
    </>
  );
}
