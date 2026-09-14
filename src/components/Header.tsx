export function Header() {
  return (
    <header className="site-header" id="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Airbnb home">
          <svg viewBox="0 0 48 54" aria-hidden="true" className="belo-mark">
            <path d="M24 3.4c-6.7 0-11 7.1-15.1 15C5.2 26.3.7 36.1 1.7 43.4 2.6 50 7.5 53.6 12.8 53.6c4.6 0 8.1-2.5 11.2-7.8 3.1 5.3 6.6 7.8 11.2 7.8 5.3 0 10.2-3.6 11.1-10.2 1-7.3-3.5-17.1-7.2-25C35 10.5 30.7 3.4 24 3.4Zm0 7.7c2.7 0 5.2 4.7 8.3 10.7 4.1 7.8 8.2 15.7 7.6 20.5-.4 3-2.1 4.4-4.8 4.4-3.9 0-6.2-4.4-11.1-13.2-4.9 8.8-7.2 13.2-11.1 13.2-2.7 0-4.4-1.4-4.8-4.4-.6-4.8 3.5-12.7 7.6-20.5C18.8 15.8 21.3 11.1 24 11.1Z" fill="currentColor"/>
          </svg>
          <span>airbnb</span>
        </a>

        <div className="search-pill" role="search" aria-label="Search stays">
          <button className="search-part search-where" aria-label="Choose destination">
            <strong>Anywhere</strong>
          </button>
          <span className="search-divider" aria-hidden="true" />
          <button className="search-part" aria-label="Choose dates">
            <strong>Any week</strong>
          </button>
          <span className="search-divider" aria-hidden="true" />
          <button className="search-part guests-button" aria-label="Add guests">
            <span>Add guests</span>
            <span className="search-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg>
            </span>
          </button>
        </div>

        <div className="header-actions">
          <button className="host-link">Airbnb your home</button>
          <button className="round-action" aria-label="Choose language">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21"/></svg>
          </button>
          <button className="menu-pill" aria-label="Open menu">
            <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            <span className="avatar-dot" />
          </button>
        </div>
      </div>
    </header>
  )
}
