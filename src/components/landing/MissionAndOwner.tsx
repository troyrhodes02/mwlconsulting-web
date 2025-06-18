import React from "react";

const MissionOwnerNarrative: React.FC = () => (
  <section style={{ background: "#fff", padding: "60px 0 80px 0", width: "100%" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: 38,
          fontWeight: 800,
          marginBottom: 18,
          color: "#222",
        }}
      >
        Mission Statement
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: 27,
          color: "#222",
          marginBottom: 60,
          maxWidth: 1050,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        To provide honest, fairness, professional service and quality solutions for small business growth.
      </p>
      <div
        style={{
          background: "#f8f9fb",
          borderRadius: 10,
          maxWidth: 1050,
          margin: "0 auto",
          padding: "38px 32px 32px 32px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: 37,
            fontWeight: 700,
            marginBottom: 22,
            color: "#222",
          }}
        >
          Background of the Owner
        </h3>
        <p
          style={{
            fontSize: 23,
            color: "#223",
            margin: 0,
            textAlign: "left",
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Michael Littlejohn was born and raised in Fort Worth TX. He Graduated from Paul Laurence Dunbar High School. He attended Trinity Valley Community College (formerly, Henderson County Junior College). He also, earned a Bachelor of Science degree from Texas A&M Commerce (formerly, East Texas State University) He became an educator in the Fort Worth Independent School District and was a member of "Outstanding Young Men of America" He has been married for over 30 years with a loving family. He brings over 35 years of experience in business consulting and strategy. He has a passion to help others where he counsels and advises other business owners. He has helped numerous small businesses structure their operations and develop successful growth strategies.
        </p>
      </div>
    </div>
  </section>
);

export default MissionOwnerNarrative; 
