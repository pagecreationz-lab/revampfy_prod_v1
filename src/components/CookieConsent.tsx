"use client";

import { useState, useSyncExternalStore } from "react";

type ConsentChoice = "accepted" | "declined";

const CONSENT_KEY = "revampfy_cookie_consent";
const SNAPSHOT_KEY = "revampfy_cookie_snapshot";
type PolicyType = "privacy" | "terms" | "return" | null;

const POLICY_CONTENT: Record<Exclude<PolicyType, null>, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "We collect only essential details needed to serve your enquiry, process support, and improve website performance.",
      "We do not sell your personal data. Information is used only for service communication, order support, and compliance needs.",
      "You may request data correction or deletion by contacting support@revampfy.in.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "By using this website, you agree to use content and services lawfully and not misuse forms, contact channels, or protected content.",
      "Product availability, pricing, and service timelines may change without prior notice based on stock and operational factors.",
      "Any dispute will be handled under applicable Indian laws and jurisdiction.",
    ],
  },
  return: {
    title: "Return Policy",
    body: [
      "Returns are supported for eligible orders within the stated return window after delivery, subject to inspection and policy checks.",
      "Devices must be returned in the delivered condition with accessories and invoice for faster processing.",
      "For return assistance, contact support@revampfy.in with order details.",
    ],
  },
};

export function CookieConsent() {
  const [dismissed, setDismissed] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const consentState = useSyncExternalStore(
    () => () => {},
    () => {
      if (typeof window === "undefined") return "unknown";
      return window.localStorage.getItem(CONSENT_KEY) ? "has-consent" : "needs-consent";
    },
    () => "unknown"
  );

  const saveChoice = (choice: ConsentChoice) => {
    if (typeof window === "undefined") return;

    const snapshot = {
      choice,
      capturedAt: new Date().toISOString(),
      path: window.location.pathname,
      cookieString: document.cookie || "",
      cookieNames: (document.cookie || "")
        .split(";")
        .map((item) => item.trim().split("=")[0])
        .filter(Boolean),
    };

    window.localStorage.setItem(CONSENT_KEY, choice);
    window.localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot));
    document.cookie = `revampfy_cookie_consent=${choice}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setDismissed(true);
  };

  if (dismissed || consentState !== "needs-consent") return null;

  return (
    <>
      <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
        <p>
          We use cookies to improve your browsing experience, analyze site traffic, and support key
          features. See our{" "}
          <button type="button" className="cookie-consent__inline-link" onClick={() => setActivePolicy("privacy")}>
            Privacy Policy
          </button>
          ,{" "}
          <button type="button" className="cookie-consent__inline-link" onClick={() => setActivePolicy("terms")}>
            Terms & Conditions
          </button>
          , and{" "}
          <button type="button" className="cookie-consent__inline-link" onClick={() => setActivePolicy("return")}>
            Return Policy
          </button>
          .
        </p>
        <div className="cookie-consent__actions">
          <button type="button" className="secondary" onClick={() => saveChoice("declined")}>
            Decline
          </button>
          <button type="button" className="primary" onClick={() => saveChoice("accepted")}>
            Accept
          </button>
        </div>
      </div>
      {activePolicy ? (
        <div className="policy-modal-backdrop" role="presentation" onClick={() => setActivePolicy(null)}>
          <div
            className="policy-modal"
            role="dialog"
            aria-label={POLICY_CONTENT[activePolicy].title}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="policy-modal__header">
              <h3>{POLICY_CONTENT[activePolicy].title}</h3>
              <button type="button" className="policy-modal__close" onClick={() => setActivePolicy(null)}>
                Close
              </button>
            </div>
            <div className="policy-modal__body">
              {POLICY_CONTENT[activePolicy].body.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
