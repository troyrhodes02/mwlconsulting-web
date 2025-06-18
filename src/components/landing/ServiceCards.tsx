import React from "react";

const services = [
  {
    icon: "🏢", title: "Business Structure & Systems Design",
    description:
      "Build a strong operational foundation with customized systems that support scalability and efficiency.",
  },
  {
    icon: "🎯",
    title: "Strategic Planning & Execution",
    description:
      "Develop actionable business plans that align with your goals and drive intentional growth.",
  },
  {
    icon: "📈",
    title: "Growth & Scaling Support",
    description:
      "Identify growth opportunities and implement strategies that expand your reach and impact.",
  },
];

const ServiceCards: React.FC = () => {
  return (
    <section
      style={{
        background: "#f8f9fb",
        padding: "60px 0 80px 0",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 45,
            fontWeight: 800,
            marginBottom: 16,
            color: "#222",
          }}
        >
          Our Services
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#444",
            marginBottom: 48,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We help you structure, organize, and execute strategic business solutions that expand your reach, amplify your impact, and turn vision into measurable growth.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
          }}
        >
          {services.map((service, idx) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "32px 28px 28px 28px",
                minWidth: 300,
                maxWidth: 400,
                flex: "1 1 320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                <div
                  style={{
                    background: "#e6f0ff",
                    borderRadius: 10,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    marginRight: 14,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1a2233",
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>
              <p style={{ fontSize: 17, color: "#444", marginBottom: 0 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
