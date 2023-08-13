import React from "react";
import "../styles/styles.css";

//Funtionality: Introduce Some Team Member of Ambula with card format

//Purpose :   Provide information about the company or team or project

function About() {
  return (
    <div className="App">
      <h1>About Us</h1>
      <p>
        Ambula is an App based on UHI(Unified Health Interface) popularly known
        as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime
        Minister which connects patients live with the unified health network
        across India for all healthcare needs. Ambula is committed to bridge all
        the communication gaps prevalent in healthcare delivery and Ambula will
        impart it's contribution to this Noble Vision. We are always available
        there for you if you find any discomfort of health. Your trust empowers
        us to serve you more.
      </p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://ambula.app/assets/images/team/madam.png"
              className="card-img-top center"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Prof (Dr) Sanghamitra Mishra Director
              </h5>
              <p className="card-text">
                Dr. Sanghamitra Mishra with over a 35+ years of experience in
                healthcare industry who is expert in Anaesthesia & Critical care
                and currently serving as the Professor of Critical care & Dean
                of IMS & SUM hospital, SOA University, Bhubaneswar.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://ambula.app/assets/images/team/basantasir.png"
              className="card-img-top center "
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Dr. Basanta Kumar Pati Director</h5>
              <p className="card-text">
                Dr. Basanta Pati with over a 40+ years of experience in
                healthcare industry who is a leading Obstetrician and
                Gynaecologist of India and currently serving as Professor, O&G
                at IMS & SUM Hospital, SOA University, Bhubaneswar and
                Founder-Director of Sum Ultimate Care Hospital, Bhubaneswar.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://ambula.app/assets/images/team/AvinashSir.png"
              className="card-img-top center"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Avinash Jha Architecture & Tech Mentor
              </h5>
              <p className="card-text">
                Avinash jha, graduated from NIT Trichy and With over a decade
                and a half of expertise in designing and building robust,
                distributed systems, He has a proven track record of success.
                His experience includes creating and implementing infrastructure
                on AWS and developing a seamless CI/CD pipeline for these
                systems, ensuring their smooth and efficient operation.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://ambula.app/assets/images/team/Abhishek.png"
              className="card-img-top center"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Abhishek Kumar Gautam Founder</h5>
              <p className="card-text">
                Surya is a seasoned management professional with the ability to
                network across the globe with professionals across domains in
                order to build new business. He is passionate about technology's
                potential to solve our pressing Sustainability/ESG issues
                majorly to solve societal challenges like achieving{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
