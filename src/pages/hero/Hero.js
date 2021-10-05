import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroHeader">
        <h1>Creative Thinking & Innovation</h1>
      </div>
      <div className="heroPara">
        <p>
          Crown Hill School is one the leading school in the Country, we teach
          and educate young minds to think in a direction of innovation. Every
          student in our school in been treated unique and creative.
        </p>
      </div>
      <div className="heroBtn">
        <button className="btn">SEE PROGRAMS</button>
        <button className="btn">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Hero;
