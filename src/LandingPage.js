import React from "react";
import "./LandingPage.css";
import videoValo from "./assets/video/valo.mp4";
import imgValo from "./assets/image/imageValo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source
            src={videoValo}
            type="video/mp4"
            style={{ backgroundColor: "black", opacity: 0.85 }}
          />
        </video>
      </div>
      <div style={{ paddingTop: "250px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={imgValo} style={{ width: "40%" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/login" style={{textDecoration: "none"}}>
            <button className="btn-play-free">
              PLAY FREE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
