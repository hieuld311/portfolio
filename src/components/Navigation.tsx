import { useState } from "react";

interface NavigationProps {
  activeSection: "web" | "android";
  onSectionChange: (section: "web" | "android") => void;
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (section: "web" | "android") => {
    onSectionChange(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      {/* Desktop Navigation */}
      <ul className="nav-list">
        <li>
          <button
            className={`nav-item ${activeSection === "web" ? "active" : ""}`}
            onClick={() => handleSectionClick("web")}
            aria-current={activeSection === "web" ? "page" : undefined}
          >
            Web
          </button>
        </li>
        <li>
          <button
            className={`nav-item ${
              activeSection === "android" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("android")}
            aria-current={activeSection === "android" ? "page" : undefined}
          >
            Android
          </button>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="nav-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="nav-toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {mobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className={`nav-item ${activeSection === "web" ? "active" : ""}`}
          onClick={() => handleSectionClick("web")}
          aria-current={activeSection === "web" ? "page" : undefined}
        >
          Web
        </button>
        <button
          className={`nav-item ${activeSection === "android" ? "active" : ""}`}
          onClick={() => handleSectionClick("android")}
          aria-current={activeSection === "android" ? "page" : undefined}
        >
          Android
        </button>
      </div>
    </nav>
  );
}
