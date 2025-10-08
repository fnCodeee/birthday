import React, { useEffect, useState } from "react";

const ButtonDirect = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay fade-in 3 detik setelah mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
    const handleClick = () => {
    window.location.href = "http://127.0.0.1:5500/index.html"; // direct ke halaman tujuan
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 2.5s ease-in-out",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          marginTop: "2em",
          fontSize: "2em",
          display: "flex",
          position: "relative",
          animation: "arrowMove 1s linear infinite",
        }}
      >
       <p style={{color: "#f0f0f0"}}>Click Here</p> &#8594;
      </div>

      {/* Animasi panah horizontal */}
      <style>{`
        @keyframes arrowMove {
          0% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
    </div>
  );
};

export default ButtonDirect;
