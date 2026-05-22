import { Header } from "@/components/Header";
import { Topbar } from "@/components/Topbar";
import { CountUpStat } from "@/components/CountUpStat";
import { HeroImageSlider } from "@/components/HeroImageSlider";
import { ImageCompareSlider } from "@/components/ImageCompareSlider";
import { FAQTabs } from "@/components/FAQTabs";
import { getSiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

export default async function Home() {
  const siteContent = await getSiteContent();
  const homeHero =
    siteContent.pageBuilder?.homePage?.find((block) => block.type === "hero") ||
    siteContent.pageBuilder?.homePage?.[0];

  const heroSliderImages = [
    {
      src: "/images/Lenovo laptop-1.webp",
      alt: "Lenovo refurbished laptop",
    },
    {
      src: "/images/Dell laptop-1.webp",
      alt: "Dell refurbished laptop",
    },
    {
      src: "/images/HP Laptop-1.webp",
      alt: "HP refurbished laptop",
    },
  ];

  return (
    <>
      <Topbar />
      <Header />

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="eyebrow">{homeHero?.eyebrow || "Revampfy"}</p>
              <h1>{siteContent.home.title || homeHero?.title}</h1>
              <p className="hero__subtext">{siteContent.home.subtitle || homeHero?.content}</p>
              <div className="hero__cta">
                <a href="https://store.revampfy.in/">
                  <button className="primary hero__shop-btn">{homeHero?.ctaLabel || "Explore"}</button>
                </a>
                <a href="https://store.revampfy.in/">
                  <button className="secondary">Browse Categories</button>
                </a>
              </div>
              <div className="chips">
                <span>refurbished laptop</span>
                <span>refurbished desktop</span>
                <span>Intel i7</span>
                <span>AMD Ryzen</span>
                <span>Gaming</span>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__card">
                <HeroImageSlider images={heroSliderImages} />
              </div>
              <div className="hero__stat">
                <h4>1,800+</h4>
                <p>Devices deployed since 2024</p>
              </div>
              <div className="hero__stat">
                <h4>96%</h4>
                <p>Quality pass rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="sample-products">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">Featured Products</p>
                <h2>Explore popular refurbished picks</h2>
              </div>
              <a href="https://store.revampfy.in">
                <button className="ghost">View All Products</button>
              </a>
            </div>
            <div className="sample-products-grid">
              <article className="sample-product-card">
                <div className="sample-product-card__media">
                  <span className="sample-product-card__badge">Refurbished</span>
                  <img
                    src="images/Apple MacBook Air M1- updated.jpg"
                    alt="Apple MacBook Air M1"
                  />
                </div>
                <h3>Apple MacBook Air M1</h3>
                <p>16-inch productivity laptop with fast SSD, smooth multitasking, and all-day use.</p>
                <div className="sample-product-card__bottom">
                  <span>Rs 66,000</span>
                  <a href="https://store.revampfy.in/products/asus-laptop" className="sample-product-card__cta">View More</a>
                </div>
              </article>
              <article className="sample-product-card">
                <div className="sample-product-card__media">
                  <span className="sample-product-card__badge">Refurbished</span>
                  <img
                    src="/images/hp-all-in-one-pc.webp"
                    alt="HP EliteDesk 800 G3"
                  />
                </div>
                <h3>HP All-in-One PC Intel Core i5</h3>
                <p>Compact desktop built for office performance, multitasking, and daily workload.</p>
                <div className="sample-product-card__bottom">
                  <span>Rs 58,999</span>
                  <a href="https://store.revampfy.in/products/hp-all-in-one-pc" className="sample-product-card__cta">View More</a>
                </div>
              </article>
              <article className="sample-product-card">
                <div className="sample-product-card__media">
                  <span className="sample-product-card__badge">Refurbished</span>
                  <img
                    src="/images/lenovo-thinkpad.webp"
                    alt="Lenovo ThinkPad T480"
                  />
                </div>
                <h3>Lenovo ThinkPad T14 Intel Core i7</h3>
                <p>Durable productivity machine with strong keyboard, security features, and SSD.</p>
                <div className="sample-product-card__bottom">
                  <span>Rs 34,000</span>
                  <a href="https://store.revampfy.in/products/lenovo-thinkpad-t14" className="sample-product-card__cta">View More</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="usage">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">Find by Usage</p>
                <h2>Devices tailored to your workflow</h2>
              </div>
            </div>
            <div className="usage-grid">
              <div className="usage">
                <h3>Accounting</h3>
                <p>Reliable, secure systems for finance teams.</p>
              </div>
              <div className="usage">
                <h3>Coding & Data</h3>
                <p>Multi-core power with high RAM options.</p>
              </div>
              <div className="usage">
                <h3>Video & Design</h3>
                <p>Color-accurate screens and GPU-ready rigs.</p>
              </div>
              <div className="usage">
                <h3>Education</h3>
                <p>Budget-friendly devices for students.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="programs">
          <div className="container program">
            <div>
              <p className="eyebrow">Students & Partners</p>
              <h2>Dream On: build your tech journey</h2>
              <p>
                Access exclusive student discounts, campus ambassador opportunities, and
                bulk order support for institutions and startups.
              </p>
              <div className="program__cta">
                <a href="https://store.revampfy.in/">
                  <button className="primary">For Students</button>
                </a>
                <a href="/partners">
                  <button className="secondary">Become Partner</button>
                </a>
              </div>
            </div>
            <div className="program__stats-wrap">
              <div className="program__stats">
                <div>
                  <CountUpStat target={5} suffix="+" />
                  <p>Partner campuses</p>
                </div>
                <div>
                  <CountUpStat target={120} suffix="+" />
                  <p>Bulk orders delivered</p>
                </div>
                <div>
                  <CountUpStat target={4.8} decimals={1} suffix={"\u2605"} />
                  <p>Customer rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="compare">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">Before vs After</p>
                <h2>Refurbishment comparison slider</h2>
              </div>
            </div>
            <ImageCompareSlider
              beforeSrc="/images/1-final.png"
              afterSrc="/images/2- final.png"
              beforeAlt="Laptop before refurbishment"
              afterAlt="Laptop after refurbishment"
            />
          </div>
        </section>

        <section className="section" id="trust">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">Why Revampfy</p>
                <h2>Quality you can trust</h2>
              </div>
            </div>
            <div className="trust-grid">
              <article>
                <h3>Certified Refurbishment</h3>
                <p>40-point diagnostics with certified components and performance checks.</p>
              </article>
              <article>
                <h3>Warranty Included</h3>
                <p>Coverage options on selected devices with doorstep support assistance.</p>
              </article>
              <article>
                <h3>Secure Logistics</h3>
                <p>Pan-India insured shipping with careful packaging and live tracking.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="cta">
          <div className="container cta">
            <h2>Need devices for your team?</h2>
            <p>Tell us your budget and workload needs. We will suggest the right configurations.</p>
            <div>
              <a href="/bulk-orders-enquiry">
                <button className="primary">Start Bulk Enquiry</button>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="blogs">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">From Our Blog</p>
                <h2>Latest insights and buying guides</h2>
              </div>
            </div>
            <div className="content-cards-grid">
              <article className="content-card">
                <h3>How to choose a refurbished laptop in 2026</h3>
                <p>Checklist for processor, battery health, SSD type, and warranty confidence.</p>
              </article>
              <article className="content-card">
                <h3>Best devices for startup teams on a budget</h3>
                <p>Recommended specs for founders, developers, and operations teams.</p>
              </article>
              <article className="content-card">
                <h3>Desktop vs laptop: what fits your workload?</h3>
                <p>Understand trade-offs in performance, mobility, and long-term value.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="reviews">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">Customer Reviews</p>
                <h2>What buyers say about Revampfy</h2>
              </div>
            </div>
            <div className="content-cards-grid">
              <article className="content-card">
                <h3>"Great quality and fast support"</h3>
                <p>"Device condition was excellent and delivery updates were clear throughout."</p>
                <small>- IT Lead, Bengaluru</small>
              </article>
              <article className="content-card">
                <h3>"Perfect for our training lab"</h3>
                <p>"We deployed 30 systems for students with stable performance and warranty."</p>
                <small>- Admin, Education Partner</small>
              </article>
              <article className="content-card">
                <h3>"Reliable bulk procurement partner"</h3>
                <p>"Pricing and post-sales coordination were smooth for our office expansion."</p>
                <small>- Operations Manager, Chennai</small>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="container">
            <div className="section__head">
              <div>
                <p className="eyebrow">FAQs</p>
                <h2>Frequently asked questions</h2>
              </div>
            </div>
            <FAQTabs />
          </div>
        </section>
      </main>
    </>
  );
}
