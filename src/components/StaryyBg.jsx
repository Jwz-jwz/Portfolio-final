"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Random x position (0-100%)
          y: Math.random() * 100, // Random y position (0-100%)
          size: Math.random() * 2 + 1, // Random size (1-3)
          animationDuration: Math.random() * 3 + 2, // Random duration (2-5s)
          animationDelay: Math.random() * 2, // Random delay (0-2s)
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-blue-900 to-black">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `twinkle ${star.animationDuration}s linear infinite`,
            animationDelay: `${star.animationDelay}s`,
          }}
        >
          <Star
            className="text-white transform rotate-45"
            size={star.size * 8}
            fill="white"
            strokeWidth={0.5}
          />
        </div>
      ))}

      {/* Add shooting stars */}
      <div className="absolute w-full h-full">
        <div className="shooting-star" />
        <div className="shooting-star" style={{ animationDelay: "2s" }} />
        <div className="shooting-star" style={{ animationDelay: "4s" }} />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .shooting-star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: shoot 4s linear infinite;
          opacity: 0;
        }

        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            transform: translate(30vw, 30vh) rotate(45deg);
            opacity: 0;
          }
          100% {
            transform: translate(30vw, 30vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
