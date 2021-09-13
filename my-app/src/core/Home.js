import React from "react";
import Base from "./Base";
import banner from "../Assets/Images/19362653 1.png";
import gif from "../Assets/Images/Codex.gif";
import Slider from "./Slider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
const Home = () => {
  const openInNewTab = (event) => {
    event.preventDefault();
    window.open('https://github.com/codex-iter', '_blank', 'noopener,noreferrer')
  }
  return (
    <div>
      <Base>
        <div className='container'>
          <section className='split'>
            <div>
              <div className='container1'>
                {" "}
                <span className='heading'>A Community of Coders from ITER</span>
                <p className='p'>
                  We Code, <br />
                  We Explore.
                </p>
                <ContactInfo></ContactInfo>
                <button className='btn-github' onClick={openInNewTab}>
                  <div className='btn-container'>
                    <div>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                          marginLeft: "0",
                          marginRight: "10px",
                          padding: "0px",
                          display: "inline-block",
                        }}
                        src='https://img.icons8.com/fluency-systems-filled/48/000000/github.png'
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: "1.2em" }}> Visit Github</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <img
                className='banner'
                style={{ width: "110%",height:"85%"}}
                src={banner}
                alt=''
              />
            </div>
          </section>
        </div>
        <section style={{ backgroundColor: "#0c1b38" }}>
          <div className='container container-spe'>
            {" "}
            <section className='split2'>
              <div className='display'>
                <img src='https://img.icons8.com/fluency-systems-regular/48/000000/guest-male.png' />
                <br/>
                <h1>100+</h1>
                <br/>
                <h2>Members</h2>
              </div>
              <div className='display'>
                <img src='https://img.icons8.com/ios/50/000000/repository.png' />
                <br/>
                <h1>30+</h1>
                <br/>
                <h2>Projects</h2>
              </div>
              <div className='display'>
                <img src='https://img.icons8.com/ios-filled/50/000000/merge-git.png' />
                <br/>
                <h1>1K+</h1>
                <br/>
                <h2>Commits</h2>
              </div>
            </section>
          </div>
        </section>
        <div className='container  .container-spe'>
          {" "}
          <section className='slider'>
            <div className='container-testimonial-2'>
              <Slider></Slider>
            </div>
          </section>
        </div>
        <section className='contact-form'>
          <ContactForm></ContactForm>
        </section>
      </Base>
    </div>
  );
};

export default Home;
