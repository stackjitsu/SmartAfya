import './Home.css'
import { useState } from 'react'

function Home() {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResponse(null)

    try {
      const formData = new FormData(e.target)
      const symptoms = formData.get('symptoms')

      const res = await fetch('http://localhost:4000/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="home" className="page home">
      <div className="home__intro">
        <p className="eyebrow">Symptom Check-in</p>
        <h1>Quick, calm guidance for symptoms</h1>
        <p className="lead">
          Describe your signs and symptoms in your own words. We will offer
          general, safety-first next steps that are easy to understand.
        </p>
      </div>

      <form className="home__form" onSubmit={handleSubmit} aria-describedby="home-note">
        <label className="home__label" htmlFor="symptoms">
          Your signs and symptoms
        </label>
        <textarea
          id="symptoms"
          className="input"
          name="symptoms"
          placeholder="Example: headache and fever for two days, low energy"
          rows={6}
        />
        <div className="home__actions">
          <button className="button" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Get next steps'}
          </button>
          <span className="home__helper">
            No account required to use the check-in.
          </span>
        </div>
        <p className="home__note" id="home-note">
          General information only. If symptoms feel severe, sudden, or worrying,
          contact a healthcare professional.
        </p>
      </form>

      {error && <div className="home__error">{error}</div>}
      {response && (
        <div className="home__response">
          <h2>Next Steps</h2>
          <p>{JSON.stringify(response, null, 2)}</p>
        </div>
      )}
    </section>
  )
}

export default Home
