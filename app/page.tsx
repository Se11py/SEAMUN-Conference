import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import HelpSystem from "@/components/HelpSystem";
import HomeModals from "./HomeModals";
import ScrollAnimator from "@/components/ScrollAnimator";
import LeadershipCarousel from "@/components/LeadershipCarousel";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <HelpSystem />
      <AnnouncementBar />
      <Header showHelp />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <p className="hero-badge" data-animate="scale">January 23–24, 2027</p>
            <h1 className="hero-title" data-animate>SEAMUN I Conference</h1>
            <p className="hero-tagline" data-animate>Policies with a Purpose</p>
            <p className="hero-audience" data-animate>
              A mid- and high school conference (grades 7–12)
            </p>
            <p className="hero-lead" data-animate>
              A student-led, non-profit{" "}
              <span className="help-wrap">
                Model UN{" "}
                <button
                  type="button"
                  className="help-icon"
                  aria-label="What is Model UN?"
                  data-help="mun-basics"
                >
                  ?
                </button>
              </span>{" "}
              conference focused on global healthcare and sustainability. Join
              200 delegates, 22 chairs, and 10 committees for two days of
              policy-driven debate. 100% of surplus is donated to the Thai Red
              Cross Society.
            </p>
            <div className="hero-actions" data-animate>
              <Link className="btn btn-primary" href="/committees">
                Explore committees
              </Link>
              <a
                className="btn btn-secondary"
                href="https://forms.gle/iy57uXzA89d3WVYy8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show interest
              </a>
            </div>
          </div>
          <div className="hero-fade" />
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2 className="section-title" data-animate="left">About</h2>
            <div className="about-grid" data-animate-stagger="">
              <div className="about-card" data-animate>
                <h3>What is Model UN?</h3>
                <p>
                  Model UN (MUN) is a simulation where students role-play as
                  delegates of countries or characters. They debate real or
                  fictional topics, follow rules of procedure, and try to pass
                  resolutions. A Secretariat runs the conference; chairs lead
                  each committee.
                </p>
              </div>
              <div className="about-card" data-animate>
                <h3>What makes SEAMUN special?</h3>
                <p>
                  <strong>Digital note passing</strong> — Send and receive notes
                  to fellow delegates online.{" "}
                  <strong>Personalized dashboard</strong> — Track your
                  committee, allocations, and schedule in one place.{" "}
                  <strong>100% donation</strong> — All surplus goes to the Thai
                  Red Cross Society. Student-led, non-profit, focused on global
                  healthcare and sustainability.
                </p>
              </div>
              <div className="about-card" data-animate>
                <h3>Purpose</h3>
                <p>
                  100% of conference surplus is donated to the Thai Red Cross
                  Society. We connect global policy debate with local impact.
                </p>
              </div>
              <div className="about-card" data-animate>
                <h3>Collaboration</h3>
                <p>
                  <span className="help-wrap">
                    Delegates
                    <button
                      type="button"
                      className="help-icon"
                      aria-label="What is a delegate?"
                      data-help="delegate"
                    >
                      ?
                    </button>
                  </span>
                  ,{" "}
                  <span className="help-wrap">
                    chairs
                    <button
                      type="button"
                      className="help-icon"
                      aria-label="What is a chair?"
                      data-help="chair"
                    >
                      ?
                    </button>
                  </span>
                  , and advisors work across 10{" "}
                  <span className="help-wrap">
                    committees
                    <button
                      type="button"
                      className="help-icon"
                      aria-label="What is a committee?"
                      data-help="committee"
                    >
                      ?
                    </button>
                  </span>
                  —resolution-writing, caucusing, and committee activities.
                </p>
              </div>
              <div className="about-card" data-animate>
                <h3>Diplomacy</h3>
                <p>
                  Rules of procedure, moderated debate, and formal diplomacy. We
                  train the next generation in negotiation and public speaking.
                </p>
              </div>
            </div>
            <div className="meta-row" data-animate>
              <span>
                <strong>Audience:</strong> Mid- and high school (grades 7–12)
              </span>
              <span>
                <strong>Location:</strong> Venue TBD (Bangkok)
              </span>
              <span>
                <strong>Fees:</strong> 2,500 THB (school) / 3,000 THB
                (independent). Chair: 800 THB.
              </span>
              <span>
                <strong>Capacity:</strong> 250
              </span>
            </div>
          </div>
          <div className="section-fade section-fade-to-alt" />
        </section>

        <section className="section section-alt" id="committees">
          <div className="container">
            <h2 className="section-title" data-animate="right">Committees</h2>
            <p className="section-desc" data-animate>
              Ten committees. Click a card for topics, allocations, and details.
            </p>
            <div className="home-committee-cards" data-animate-stagger="">
              {[
                { id: "ecosoc", logo: "/assets/ecosoclogotrans-full.png", full: true, name: "ECOSOC", info: "Economic and Social Council" },
                { id: "press", logo: "/assets/presscorpsemblem-e3b83ea3-1a9b-4ac8-89eb-dc22525d7f50.png", full: false, name: "Press Corps", info: "Media" },
                { id: "unhrc", logo: "/assets/unhrcemblem-cf4880dc-fd97-4810-893e-cad759e685ed.png", full: false, name: "UNHRC", info: "United Nations Human Rights Council" },
                { id: "unodc", logo: "/assets/unodcemblem-a5fbe716-a294-4ca6-b854-e483b0be890b.png", full: false, name: "UNODC", info: "United Nations Office on Drugs and Crime" },
                { id: "unsc", logo: "/assets/unscemblem-63d2a66d-4869-47fc-bddb-eca272b4273f.png", full: false, name: "UNSC", info: "United Nations Security Council (CRISIS)" },
                { id: "unwomen", logo: "/assets/unwomenemblem-75768fc7-e173-4395-b282-823d48a735d1.png", full: false, name: "UN Women", info: "United Nations Entity for Gender Equality and the Empowerment of Women" },
                { id: "disec", logo: "/assets/disecemblem-0dcf6e55-f215-434d-9c08-ab82f8e808f5.png", full: false, name: "DISEC", info: "Disarmament and International Security Committee" },
                { id: "fwc", logo: "/assets/fwclogotrans-full.png", full: true, name: "FWC", info: "Fantasy World Committee (CRISIS)" },
                { id: "interpol", logo: "/assets/interpolemblem-9d12df52-1131-4853-a8db-447deeb02d6d.png", full: false, name: "Interpol", info: "International Criminal Police Organization" },
                { id: "who", logo: "/assets/whoemblem-bd37b638-7568-40c3-88eb-ecadd89c1592.png", full: false, name: "WHO", info: "World Health Organization" },
              ].map((c) => (
                <Link
                  key={c.id}
                  href={`/committee?c=${c.id}`}
                  className={`home-committee-card home-committee-${c.id}`}
                  data-animate
                >
                  <div className="home-committee-emblem">
                    <img
                      src={c.logo}
                      alt=""
                      className={`home-committee-logo${c.full ? " home-committee-logo-full" : ""}`}
                    />
                  </div>
                  <div className="home-committee-label">
                    <span className="home-committee-name">{c.name}</span>
                    <span className="home-committee-info">{c.info}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="section-fade section-fade-to-warm" />
        </section>

        <section className="section section-warm" id="schedule">
          <div className="container">
            <h2 className="section-title" data-animate="left">Schedule</h2>
            <p className="section-desc" data-animate>
              Two-day program with opening and closing ceremonies.{" "}
              <a href="/assets/SEAMUN-I-2027.ics" className="schedule-ics">
                Add to calendar
              </a>
            </p>
            <div className="schedule-grid">
              <div className="schedule-day" data-animate>
                <h3 className="schedule-day-title">
                  Day 1 — Saturday, January 23, 2027
                </h3>
                <ul className="schedule-list">
                  <li><span className="schedule-time">7:30</span> Arrival</li>
                  <li><span className="schedule-time">8:00</span> Registration</li>
                  <li><span className="schedule-time">8:30</span> Opening Ceremony</li>
                  <li><span className="schedule-time">9:30</span> Break &amp; Photo Ops</li>
                  <li><span className="schedule-time">10:00</span> Icebreakers</li>
                  <li><span className="schedule-time">10:30</span> Committee Session 1a</li>
                  <li><span className="schedule-time">11:05</span> In-Committee Break (Optional)</li>
                  <li><span className="schedule-time">11:15</span> Committee Session 1b</li>
                  <li><span className="schedule-time">12:00</span> Lunch</li>
                  <li><span className="schedule-time">13:00</span> Committee Session 2a</li>
                  <li><span className="schedule-time">13:35</span> In-Committee Break (Optional)</li>
                  <li><span className="schedule-time">13:45</span> Committee Session 2b</li>
                  <li><span className="schedule-time">14:30</span> Break &amp; Photo Ops</li>
                  <li><span className="schedule-time">15:00</span> Committee Session 3a</li>
                  <li><span className="schedule-time">15:35</span> In-Committee Break (Optional)</li>
                  <li><span className="schedule-time">15:45</span> Committee Session 3b</li>
                  <li><span className="schedule-time">16:30</span> Feedback Sessions &amp; Departure</li>
                  <li><span className="schedule-time">17:00</span> Departure</li>
                </ul>
              </div>
              <div className="schedule-day" data-animate>
                <h3 className="schedule-day-title">
                  Day 2 — Sunday, January 24, 2027
                </h3>
                <ul className="schedule-list">
                  <li><span className="schedule-time">8:00</span> Arrival</li>
                  <li><span className="schedule-time">9:00</span> Registration &amp; Photo Ops</li>
                  <li><span className="schedule-time">9:30</span> Committee Session 1a</li>
                  <li><span className="schedule-time">10:30</span> In-Committee Break (Optional)</li>
                  <li><span className="schedule-time">11:00</span> Committee Session 1b</li>
                  <li><span className="schedule-time">12:00</span> Lunch</li>
                  <li><span className="schedule-time">13:00</span> Committee Session 2a</li>
                  <li><span className="schedule-time">13:35</span> In-Committee Break (Optional)</li>
                  <li><span className="schedule-time">13:45</span> Committee Session 2b</li>
                  <li><span className="schedule-time">14:30</span> Break</li>
                  <li><span className="schedule-time">15:00</span> Committee Session 3</li>
                  <li><span className="schedule-time">16:00</span> Feedback &amp; Break</li>
                  <li><span className="schedule-time">16:30</span> Closing Ceremony</li>
                  <li><span className="schedule-time">17:30</span> Photo Ops &amp; Departure</li>
                </ul>
              </div>
            </div>
          </div>
        </section >

        <section className="section section-warm" id="leadership">
          <div className="container">
            <h2 className="section-title" data-animate="right">
              <span className="help-wrap">
                Secretariat{" "}
                <button
                  type="button"
                  className="help-icon"
                  aria-label="What is the Secretariat?"
                  data-help="secretariat"
                >
                  ?
                </button>
              </span>{" "}
              &amp; Leadership
            </h2>
            <LeadershipCarousel />
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container">
            <h2 className="section-title" data-animate>Contact</h2>
            <p className="contact-lead" data-animate>
              For registration, partnerships, or general enquiries:
            </p>
            <a className="contact-email" href="mailto:information@seamun.com" data-animate>
              information@seamun.com
            </a>
            <button
              type="button"
              className="btn btn-secondary contact-form-btn"
              data-open="contact-modal"
              data-animate
            >
              Send a message
            </button>
            <p className="contact-note" data-animate>
              Venues &amp; sponsors: see our capacity (250), venue requirements,
              and donation pledge. Contact the Secretary General at the email
              above.
            </p>
          </div>
        </section>
      </main >

      <HomeModals />
      <Footer />
    </>
  );
}
