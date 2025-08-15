// import React, { useState, useEffect } from 'react';
// import './PageStyles.css';

// const Contact = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const sections = document.querySelectorAll('.fade-section');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     sections.forEach((section) => observer.observe(section));

//     const canvas = document.createElement('canvas');
//     canvas.id = 'firefly-canvas';
//     document.body.appendChild(canvas);
//     const ctx = canvas.getContext('2d');

//     let fireflies = [];
//     const numFireflies = 40;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     class Firefly {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 1;
//         this.speedX = (Math.random() - 0.5) * 0.6;
//         this.speedY = (Math.random() - 0.5) * 0.6;
//         this.opacity = Math.random();
//       }
//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

//         this.opacity += (Math.random() - 0.5) * 0.05;
//         if (this.opacity < 0.1) this.opacity = 0.1;
//         if (this.opacity > 1) this.opacity = 1;
//       }
//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 150, ${this.opacity})`;
//         ctx.shadowBlur = 8;
//         ctx.shadowColor = 'yellow';
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < numFireflies; i++) {
//       fireflies.push(new Firefly());
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       fireflies.forEach((f) => {
//         f.update();
//         f.draw();
//       });
//       requestAnimationFrame(animate);
//     };
//     animate();

//     canvas.style.position = 'fixed';
//     canvas.style.top = '0';
//     canvas.style.left = '0';
//     canvas.style.zIndex = '-1';
//     canvas.style.pointerEvents = 'none';

//     return () => {
//       document.body.removeChild(canvas);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return (
//     <div className="page-container centered-page fade-in fade-section">
//       <h1 className="page-title">Get in Touch</h1>
//       <p className="page-text">
//         Want to collaborate, sponsor, or just say hi? Fill out the form below and we’ll get back to you.
//       </p>

//       {loading && <div className="spinner">Loading form…</div>}

//       <div className="form-card">
//         <iframe
//           src="https://docs.google.com/forms/d/e/1FAIpQLSeMw0vZxiIPGkuOu52A0NUJl6XJPi-aLLX-FeWGYlCkGi6G9A/viewform?embedded=true"
//           title="Contact Form"
//           loading="lazy"
//           onLoad={() => setLoading(false)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import './PageStyles.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);

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
    <div className="page-container centered-page fade-in fade-section">
      <h1 className="page-title">Get in Touch</h1>
      <p className="page-text">
        Want to collaborate, sponsor, or just say hi? Fill out the form below and we’ll get back to you.
      </p>

      {loading && <div className="spinner">Loading form…</div>}

      <div className="form-card">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeMw0vZxiIPGkuOu52A0NUJl6XJPi-aLLX-FeWGYlCkGi6G9A/viewform?embedded=true"
          title="Contact Form"
          loading="lazy"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Contact;
