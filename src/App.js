import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-layout">
      <header>
        <h1>Welcome to India</h1>
      </header>

      {/* Navigation */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a href="index.html">Home</a>
        <a href="#about">About</a>
        <a href="map">MAP</a>
        <a href="#explore">Explore</a>
      </nav>

      {/* Main Content */}
      <main>
        <section id="about">
          <h2>About Us</h2>
      <p>India is one of the most diverse, historically rich, and rapidly modernizing nations in the world.Explored places in india Taj Mahal(Agra, Uttar Pradesh), Golden Gate of india and Jaipur(Rajasthan). </p>
    <img src="india.jpg" alt="india" className="img-responsive" width="45%" height="65%" />
    <img src="india-logo.jpg" alt="india map" className="img-responsive" width="45%" height="65%"/> 
     </section>

{/* Map content */}
    <section id="map">
      <h2>Maps</h2>
      <img src="/explored_map.png" alt="Explored map" className="img-responsive" width="50%" height="80%" />
      <img src="/Golden_map.jpg" alt="Golden map" className="img-responsive" width="50%" height="80%" />
      </section> 

      <section id="explore">
      <h2>Explore</h2>

      {/* Taj Mahal Section */}
    <section id="taj-mahal">
        <h3>Taj Mahal</h3>
        <p>
          The Taj Mahal is a well-known mausoleum constructed by the Mughal Emperor in Agra, India. 
              Built between 1632 and 1653, it is made of white marble with intricate carvings and inlay work with semi-precious stones.
              It attracts millions of visitors each year and is recognized as one of the Seven Wonders of the World.
            </p>
            <a href="https://www.enchantingtravels.com/travel-blog/what-to-see-at-the-taj-mahal/" 
               target="_blank" 
               rel="noopener noreferrer">
              <img src="/Taj_mahal.jpg" alt="Taj Mahal" className="img-responsive" width="50%" height="50%" />
            </a>
          </section>

          {/* Jaipur Section */}
          <section id="jaipur">
            <h3>Jaipur</h3>
            <p>Jaipur, also known as the Pink City, is the capital of Rajasthan and is famous for its royal palaces and forts.Jaipur, the Pink City of India, is filled with breathtaking historical sites, architectural marvels, and vibrant markets. Here are some of the top places to explore in Jaipur:Amber fort & palace,hawa mahal, Albert hall Museum and jal mahal.</p>
            <a href="https://www.britannica.com/place/Jaipur-India/" target="_blank" rel="noopener noreferrer">
            <img src="/Japiur.jpg" alt="Jaipur" className="img-responsive" width="50%" height="50%" /> </a>
          </section>

          {/* Gateway of India Section */}
          <section id="golden-gateway">
            <h3>Golden Gateway of India</h3>
            <p>The Gateway of India is a historical monument in Mumbai, built in 1924 to commemorate the visit of King George V and Queen Mary.It was the ceremonial entrance for British viceroys and governors when they arrived in India.

The last British troops exited India through this gateway in 1948 after independence.</p>
            <a href="https://www.britannica.com/topic/India-Gate/" target="_blank" rel="noopener noreferrer">
            <img src="/Gloden.jpg" alt="Golden Gateway" className="img-responsive" width="50%" height="50%" />
            <img src="/gateway.png" alt="Gateway" className="img-responsive" width="50%" height="40%" /> </a>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 India Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
