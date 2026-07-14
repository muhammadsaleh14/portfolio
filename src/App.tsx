import { useState } from 'react'
import { sections } from './data/portfolio'
import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = sections[activeIndex]

  return (
    <main className="portfolio">
      <div className="portfolio__layout">
        <nav className="dot-nav" aria-label="Portfolio sections">
          {sections.map((section, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={section.id}
                type="button"
                className={`dot-nav__dot${isActive ? ' dot-nav__dot--active' : ''}`}
                aria-label={section.title}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            )
          })}
        </nav>

        <article
          className="detail"
          key={active.id}
          aria-live="polite"
        >
          <h1 className="detail__title">{active.title}</h1>
          <p className="detail__body">{active.body}</p>
          {active.links && (
            <ul className="detail__links">
              {active.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </main>
  )
}

export default App
