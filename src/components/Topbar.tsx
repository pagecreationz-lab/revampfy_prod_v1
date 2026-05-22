export function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__social" aria-label="Social media links">
          <a
            className="topbar__social-link topbar__social-link--instagram"
            href="https://www.instagram.com/revampfy/"
            target="_blank"
            rel="noreferrer"
            aria-label="Revampfy on Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="17.1" cy="6.9" r="1.15" />
            </svg>
          </a>
          <a
            className="topbar__social-link topbar__social-link--facebook"
            href="https://www.facebook.com/revampfy"
            target="_blank"
            rel="noreferrer"
            aria-label="Revampfy on Facebook"
            title="Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6 20v-7h2.35l.35-2.85H13.6V8.32c0-.82.23-1.38 1.4-1.38h1.5V4.39c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.1H8.18V13h2.45v7h2.97Z" />
            </svg>
          </a>
          <a
            className="topbar__social-link topbar__social-link--whatsapp"
            href="https://wa.me/918248003564"
            target="_blank"
            rel="noreferrer"
            aria-label="Revampfy on WhatsApp"
            title="WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.48 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.88 11.88 0 0 0 5.75 1.47h.01c6.57 0 11.93-5.35 11.93-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.25c0-5.43 4.42-9.84 9.86-9.84 2.63 0 5.1 1.02 6.96 2.9a9.79 9.79 0 0 1 2.89 6.95c0 5.43-4.43 9.86-9.86 9.86Zm5.4-7.37c-.3-.16-1.8-.89-2.08-.99-.28-.1-.48-.16-.68.16-.2.3-.77.99-.95 1.19-.17.2-.35.22-.65.07-.3-.16-1.24-.45-2.37-1.45-.88-.77-1.47-1.72-1.64-2.01-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.53-.07-.16-.68-1.65-.93-2.26-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.37-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.23 5.12 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.57-.08 1.8-.73 2.05-1.43.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
            </svg>
          </a>
        </div>
        <div className="topbar__right">
          <a className="topbar__link" href="tel:+918248003564">
            Sales Experts: +91 8248003564
          </a>
          <span className="divider" />
          <a className="topbar__link" href="mailto:support@revampfy.in">
            Connect: support@revampfy.in
          </a>
        </div>
      </div>
    </div>
  );
}
