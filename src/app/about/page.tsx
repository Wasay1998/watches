import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="about"
        style={{ backgroundImage: "url(about-us-bg.jpg)" }}
      >
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <p>
            At Rolex, we believe that a watch is not just a timekeeper, but an
            expression of style, craftsmanship, and precision. Our journey began
            with a passion for creating timeless pieces that combine modern
            design with traditional artistry. Each watch in our collection is
            meticulously crafted, using the finest materials and the latest
            technology, ensuring that every piece not only looks beautiful but
            also stands the test of time. Whether you re seeking elegance for
            everyday wear or a statement piece for a special occasion, we are
            committed to offering watches that reflect your unique personality
            and elevate your lifestyle.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
