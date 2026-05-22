"use client";

import { useState } from "react";

const faqItems = [
  {
    title: "Are your devices quality tested?",
    content:
      "Yes. Every refurbished laptop and desktop goes through diagnostics, cleaning, and performance checks before dispatch.",
  },
  {
    title: "Do you provide warranty?",
    content:
      "Warranty terms are clearly mentioned on invoice and listing. Our support team helps with claim guidance for eligible products.",
  },
  {
    title: "Can businesses place bulk orders?",
    content:
      "Absolutely. We support schools, startups, and enterprises with quantity-based pricing and configuration planning.",
  },
  {
    title: "How fast is delivery?",
    content:
      "Delivery ETA depends on city and stock location. We share expected timelines during order confirmation.",
  },
  {
    title: "How do returns work?",
    content:
      "Return requests are handled according to invoice terms and product condition verification. Contact support for quick assistance.",
  },
];

export function FAQTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="faq-tabs">
      <div className="faq-tabs__nav" role="tablist" aria-label="FAQ tabs">
        {faqItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`faq-tabs__tab ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="faq-tabs__panel" role="tabpanel">
        <h3>{faqItems[activeIndex].title}</h3>
        <p>{faqItems[activeIndex].content}</p>
      </div>
    </div>
  );
}
