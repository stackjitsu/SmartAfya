import './About.css'

function About() {
  return (
    <section id="about" className="page about">
      <header className="about__intro">
        <p className="eyebrow">About</p>
        <h1>Built for calm, clear next steps</h1>
        <p className="lead">
          This project helps the general public describe symptoms in plain
          language and receive simple, safety-first guidance.
        </p>
      </header>

      <div className="about__cards">
        <article className="card">
          <h3>What this site does</h3>
          <p>
            We focus on clarity, not diagnosis. The goal is to help you organize
            what you are feeling and understand safe next steps you can take.
          </p>
        </article>
        <article className="card card--tint">
          <h3>Safety disclaimer</h3>
          <p>This site provides general health information for education only.</p>
          <p>It is not medical advice and does not replace a clinician.</p>
          <p>
            If symptoms are severe, worsening, or you feel unsafe, seek medical
            care.
          </p>
          <p>For emergencies, contact local emergency services immediately.</p>
        </article>
      </div>

      <section className="facts">
        <div className="facts__header">
          <p className="eyebrow">Fun Healthy Facts</p>
          <h2>Small habits, big impact</h2>
          <p className="lead">
            Simple routines can make a noticeable difference over time.
          </p>
        </div>
        <div className="facts__grid">
          <article className="fact-card">
            Regular sleep helps support immune function and mood.
          </article>
          <article className="fact-card">
            Staying hydrated can improve energy and focus throughout the day.
          </article>
          <article className="fact-card">
            Short walks after meals can aid digestion and circulation.
          </article>
          <article className="fact-card">
            Handwashing reduces the spread of common infections.
          </article>
          <article className="fact-card">
            Fiber-rich foods support gut health and steady energy.
          </article>
          <article className="fact-card">
            Consistent meal times can help maintain stable blood sugar.
          </article>
          <article className="fact-card">
            Daily sun protection helps protect skin over time.
          </article>
          <article className="fact-card">
            Regular stretch breaks can reduce stiffness and tension.
          </article>
        </div>
      </section>
    </section>
  )
}

export default About
