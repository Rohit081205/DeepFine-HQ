import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './PageStyles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));

    const canvas = document.createElement('canvas');
    canvas.id = 'firefly-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let fireflies = [];
    const numFireflies = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Firefly {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random();
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.opacity += (Math.random() - 0.5) * 0.05;
        if (this.opacity < 0.1) this.opacity = 0.1;
        if (this.opacity > 1) this.opacity = 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 150, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'yellow';
        ctx.fill();
      }
    }

    for (let i = 0; i < numFireflies; i++) {
      fireflies.push(new Firefly());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireflies.forEach((f) => {
        f.update();
        f.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    return () => {
      document.body.removeChild(canvas);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="page-container home-container fade-in">
      <h1 className="page-title fade-section">
        <Typewriter
          words={[
            'DeepFine HQ',
            'Cricket. Caught Differently.',
            'Your Game. Your Spotlight.',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h1>

      <div className="gif-container hover-zoom fade-section">
        <iframe
          src="https://giphy.com/embed/SGZPmDJpkc0ak"
          width="200"
          height="200"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Cricket Animation"
        />
      </div>

      <p className="page-subtitle fade-section">
        Shining the spotlight on turf cricket stars
      </p>
      <p className="page-text fade-section">
        DeepFine HQ is your platform to share your game, showcase your moments,
        and get noticed. Whether you're a turf warrior, a net beast, or just
        someone who lives and breathes cricket — this is your place.
      </p>

      <h2 className="gallery-title fade-section">GALLERY</h2>

      <div className="parallax-gallery fade-section spaced-gallery">
        <div className="parallax-track">
          {Array(10).fill('Claim Your Spotlight').map((text, idx) => (
            <div className="parallax-item" key={idx}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/about')}
        className="cta-btn hover-zoom fade-section"
      >
        What’s DeepFine HQ
      </button>
    </div>
  );
};

export default Home;