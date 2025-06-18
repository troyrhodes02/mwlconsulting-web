import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        background: "#2176FF",
        color: "#fff",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 48,
          paddingLeft: 60,
          paddingRight: 40,
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1, minWidth: 1050 }}>
          <h1 style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.3, marginBottom: 20 }}>
            Helping Small Businesses <span style={{ color: "#B2D0FF" }}>Win Big.</span>
          </h1>
          <p style={{ fontSize: 24, marginBottom: 32, color: "#e6e6e6" }}>
            We guide you in structuring, organizing, and executing effective business strategies to grow your reach and drive meaningful results.
          </p>
          <div
            style={{
              background: "#3574E6",
              borderRadius: 12,
              padding: "24px 32px",
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              maxWidth: 600,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", fontWeight: 600, fontSize: 30, marginBottom: 8 }}>
              <span style={{ fontSize: 25, marginRight: 10 }}>📞</span> Contact Us Today
            </span>
            <a
              href="tel:6822500536"
              style={{
                color: "#FFD600",
                fontWeight: 700,
                fontSize: 32,
                textDecoration: "none",
                marginTop: 4,
              }}
            >
              (682) 250-0536
            </a>
          </div>
          <button
            style={{
              background: "#FFD600",
              color: "#222",
              fontWeight: 900,
              fontSize: 24,
              border: "none",
              borderRadius: 8,
              padding: "18px 32px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s",
            }}
          >
            Book Your Free Strategy Call
          </button>
        </div>
        {/* Right Side */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: 0,
              overflow: "hidden",
              width: 900,
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Analytics dashboard"
              style={{ width: "100%", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: -1,
                background: "#FFD600",
                color: "#222",
                borderRadius: 8,
                padding: "8px 20px",
                fontWeight: 700,
                fontSize: 32,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              Strategic Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
