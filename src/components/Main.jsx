import React from "react";
import "../components/Main.css";

const Main = () => {
  return (
    <>
      <div className="main-header">
        <h1>Create professional videos</h1>
        <h1>at a fraction of the cost</h1>
        <p>
          Produce life-like videos at scale in 140+ regional and global
          languages—no filming setup or teams required
        </p>
        <div className="input-group">
    <input type="email" placeholder="Email" />
    <button>Get a Demo</button>
</div>

      </div>
      <div class="img-youtube">
        <img src="" />
        <h1 className="trust">Trusted by 10,000+ customers worldwide</h1>
      </div>
      <div className="marquee">
      <div className="shareholders">
    <img src="src/img/shareholder.png" alt="Shareholders" className="shareholder-image" />
</div>


<div
  style={{
    width: "100%", 
    maxWidth: "1408px", 
    height: "auto", 
    display: "flex",
    flexDirection: "column", 
    gap: "40px", 
    margin: "0 auto", 
    padding: "20px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    borderRadius: "10px", 
  }}
>
  {/* First Section */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start", 
      padding: "20px", 
    }}
  >
    <div
      className="left"
      style={{
        flex: 1,
        padding: "40px 0px 40px 64px",
        gap: "24px",
        height: "100%", 
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
      }}
    >
      <h1
        style={{
          fontFamily: "Mona Sans",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "40px",
          color: "#333", 
        }}
      >
        Minutes, not Hours.
      </h1>
      <p className="video-text" style={{ color: "#555", lineHeight: "1.5", fontSize: "18px" }}>
        No need for lengthy processes like
        <br />
        filming, editing, or storyboarding,
        <br /> content can be created in minutes by
        <br /> <strong style={{ color: "#000" }}>simply providing a script.</strong> {/* Highlighting the text */}
      </p>
      <p style={{ color: "#007BFF", cursor: "pointer", fontWeight: "bold" }}>Discover More</p>
    </div>
    <div className="right" style={{ flex: 1, textAlign: "center", height: "100%" }}>
      <img
        src="src/img/video.png"
        alt="Description of the image"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }} 
      />
    </div>
  </div>

  {/* Second Section */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start", 
      padding: "20px", 
    }}
  >
    <div className="right" style={{ flex: 1, textAlign: "center", height: "100%" }}>
      <img
        src="src/img/video-3.png"
        alt="Description of the image"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }} 
      />
    </div>
    <div
      className="left"
      style={{
        flex: 1,
        padding: "40px 0px 40px 64px",
        gap: "24px",
        height: "100%", 
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
      }}
    >
      <h1
        style={{
          fontFamily: "Mona Sans",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "40px",
          color: "#333", 
        }}
      >
        Minutes, not Hours.
      </h1>
      <p className="video-text" style={{ color: "#555", lineHeight: "1.5", fontSize: "18px" }}>
        No need for lengthy processes like
        <br />
        filming, editing, or storyboarding,
        <br /> content can be created in minutes by
        <br /> <strong style={{ color: "#000" }}>simply providing a script.</strong> {/* Highlighting the text */}
      </p>
      <p style={{ color: "#007BFF", cursor: "pointer", fontWeight: "bold" }}>Discover More</p>
    </div>
  </div>
</div>


<div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start", 
      padding: "20px", 
    }}
  >
    <div
      className="left"
      style={{
        flex: 1,
        padding: "40px 0px 40px 64px",
        gap: "24px",
        height: "100%", 
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
      }}
    >
      <h1
        style={{
          fontFamily: "Mona Sans",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "40px",
          color: "#333", 
        }}
      >
        Minutes, not Hours.
      </h1>
      <p className="video-text" style={{ color: "#555", lineHeight: "1.5", fontSize: "18px" }}>
        No need for lengthy processes like
        <br />
        filming, editing, or storyboarding,
        <br /> content can be created in minutes by
        <br /> <strong style={{ color: "#000" }}>simply providing a script.</strong> {/* Highlighting the text */}
      </p>
      <p style={{ color: "#007BFF", cursor: "pointer", fontWeight: "bold" }}>Discover More</p>
    </div>
    <div className="right" style={{ flex: 1, textAlign: "center", height: "100%" }}>
      <img
        src="src/img/video-2.png"
        alt="Description of the image"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
        //add new thinks 
      />
    </div>
  </div>
        
      </div>
    </>
  );
};

export default Main;
