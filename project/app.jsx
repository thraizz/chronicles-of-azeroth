// Chronicle of Azeroth — React components

const { useState, useEffect, useRef } = React;

function Ornament() {
  return (
    <div className="ornament">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2 L13 9 L20 11 L13 13 L11 20 L9 13 L2 11 L9 9 Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">A Chronicle of the Worldsoul</div>
      <h1>
        Chronicle of <span className="gold">Azeroth</span>
      </h1>
      <Ornament />
      <p className="hero-sub">
        From the first clash of Light and Void, through the rise of the Old Gods and
        the betrayal of a champion — a recorded journey through the ages no living
        mortal can remember.
      </p>
      <div className="hero-meta">
        <span>Begin
          <strong>Mythos</strong>
        </span>
        <span>End
          <strong>−20,055</strong>
        </span>
        <span>Chapters
          <strong>VII</strong>
        </span>
      </div>
      <div className="scroll-cue">Descend</div>
    </section>
  );
}

function EventCard({ ev }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`event reveal ${ev.side} ${ev.feature ? "feature" : ""}`}
    >
      <div className="event-node"></div>
      <div className="event-connector"></div>
      <div
        className={`event-card ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>

        <div className="event-kicker">
          <span className="glyph">{ev.glyph}</span>
          <span>{ev.kicker}</span>
        </div>
        <h3 className="event-title">{ev.title}</h3>
        <p className="event-body">{ev.body}</p>

        <div className="event-detail">
          <div className="event-detail-divider">Lore</div>
          <p className="event-detail-body">{ev.detail}</p>
          {ev.refs && ev.refs.length > 0 && (
            <div className="event-refs">
              Cited in
              <ul>
                {ev.refs.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="event-foot">
          <div className="event-tags">
            {ev.tags && ev.tags.map((t, i) => <span key={i}>{t}</span>)}
          </div>
          <span className="event-expand">
            {open ? "Seal" : "Unfurl"}
            <span className="chev">▾</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Era({ era, events }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("in")),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="era" data-palette={era.palette} id={`era-${era.id}`}>
      <header className="era-header reveal" ref={ref}>
        <div className="era-chapter">Chapter {era.chapter}</div>
        <h2 className="era-title">{era.title}</h2>
        <div className="era-subtitle">{era.subtitle}</div>
        <div className="era-date">{era.dateLabel}</div>
        <p className="era-blurb">{era.blurb}</p>
        <Ornament />
      </header>
      <div className="timeline">
        {events.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  );
}

function EraNav({ eras, active }) {
  return (
    <nav className="eranav">
      {eras.map((e) => (
        <a
          key={e.id}
          href={`#era-${e.id}`}
          className={`eranav-item ${active === e.id ? "active" : ""}`}
        >
          <span className="dot"></span>
          <span className="num">{e.chapter}</span>
          <span className="lbl">{e.title}</span>
        </a>
      ))}
    </nav>
  );
}

function Progress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setPct(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" style={{ transform: `scaleX(${pct})` }}></div>;
}

function App() {
  const eras = window.TIMELINE_ERAS;
  const events = window.TIMELINE_EVENTS;
  const [active, setActive] = useState(eras[0].id);

  useEffect(() => {
    const sections = eras
      .map((e) => document.getElementById(`era-${e.id}`))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.2) {
            const id = e.target.id.replace("era-", "");
            setActive(id);
          }
        });
      },
      { threshold: [0.2, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Group events by era preserving order
  const grouped = eras.map((era) => ({
    era,
    events: events.filter((ev) => ev.era === era.id),
  }));

  return (
    <>
      <Progress />
      <div className="starfield"></div>
      <EraNav eras={eras} active={active} />
      <Hero />
      {grouped.map(({ era, events }, i) => (
        <React.Fragment key={era.id}>
          <Era era={era} events={events} />
          {i === 2 && (
            <div className="pullquote reveal">
              <p>
                The world dreams in nightmares. The titans, in their kindness, do not
                wake it.
              </p>
              <cite>— Marginalia, Chronicle Vol. 1</cite>
            </div>
          )}
        </React.Fragment>
      ))}
      <footer className="foot">
        <Ornament />
        <div className="foot-mark">For the Worldsoul</div>
        <p className="foot-note">
          Sourced from Blizzard's published chronicles, supplemental novels, and the
          words spoken — perhaps unwisely — by characters who claimed to remember.
        </p>
      </footer>
    </>
  );
}

// Reveal observer for pullquote and other reveals outside React state
function attachReveals() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
setTimeout(attachReveals, 100);
