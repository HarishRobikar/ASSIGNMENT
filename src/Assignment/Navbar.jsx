import React from "react";
import "./Navbar.css";
import { FaReact } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import pic from "./pic.jpg"
import pic1 from "./1st.jpg"
import pic2 from "./2nd.png"
import pic3 from "./3rd.png"
import pic4 from "./4th.png"
import pic5 from "./5th.png"
import pic6 from "./6th.png"
import pic11 from "./2nd 1.png"
import pic22 from "./2nd 1.png"
import pic33 from "./2nd 3.jpg"
import pic44 from "./2nd 4.png"
import pic55 from "./2nd 5.jpg"
import pic66 from "./2nd 6.jpg"
import phone from "./Screenshot 2024-11-29 144454.png"
import last1 from "./last 1.jpg"
import last2 from "./last 2.jpg"
import last3 from "./last 3.jpg"
const Navbar = () => {
  return (
    <section>
      <nav className="navbar">
        <div className="navbar-logo">
          <FaReact />
          <h1>Untitled UI</h1>
        </div>
        <div className="divss">
          <ul className="navbar-links">
            <li>Home</li>
            <li>
              Products
              <ul className="dropdown">

              </ul>
              <IoIosArrowDown />
            </li>
            <li>
              Resources
              <ul className="dropdown">

              </ul>
              <IoIosArrowDown />
            </li>Pricing
          </ul>
        </div>

        <div className="navbar-profile">
          <RiReactjsLine />
        </div>
      </nav>
      <div className="letter">
        <div className="newfeature">

          <button className="new">New feature</button>
          <button className="btn">Check out the team dashboard </button>
          <IoArrowForward />
        </div>
        <h2>Beautiful analytics to grow smartner</h2>



      </div>
      <div className="para">
        <p> Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className="ins">

        <button className="btn1">  <FaPlayCircle /> Demo</button>
        <button className="btn2">  Sign up</button>
      </div>
      <div className="image">
        <img src={pic} alt="" />

      </div>
      <div className="clints">
        <div class="companies-section">
          <p class="heading">Join 4,000+ companies already growing</p>
        </div>
        <div class="logos-container">
          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic1} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>Boltshift</p>
              </div>
            </div>
          </div>

          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic2} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>Lightbox</p>
              </div>
            </div>
          </div>

          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic3} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>Feather Dev</p>
              </div>
            </div>
          </div>


          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic4} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>Spherule</p>
              </div>
            </div>
          </div>


          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic5} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>GlobalBank</p>
              </div>
            </div>
          </div>

          <div class="logo">
            <div className="logos">
              <div className="images">
                <img src={pic6} alt="Boltshift" />
              </div>
              <div className="paras">
                <p>Nietzsche</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="features-section">
    <p class="section-title">Features</p>
    <h1 class="main-heading">Analytics that feels like it’s from the future</h1>
    <p class="sub-heading">
      Powerful, self-serve product and growth analytics to help you convert, engage, 
      and retain more users. Trusted by over 4,000 startups.
    </p>

    <div class="features-grid">
      <div class="feature-item">
        <img src={pic11} alt="" />
        <h3>Share team inboxes</h3>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
      <div class="feature-item">
      <img src={pic22} alt="" />
        <h3>Deliver instant answers</h3>
        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
      </div>
      <div class="feature-item">
      <img src={pic33} alt="" />
        <h3>Manage your team with reports</h3>
        <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
      </div>
      <div class="feature-item">
      <img src={pic44} alt="" />
        <h3>Connect with customers</h3>
        <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
      </div>
      <div class="feature-item">
      <img src={pic55} alt="" />
        <h3>Connect the tools you already use</h3>
        <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
      </div>
      <div class="feature-item">
      <img src={pic66} alt="" />
        <h3>Our people make the difference</h3>
        <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
      </div>
    </div>
  </div>



  
  <div class="features-section">
    <p class="section-title">Features</p>
    <h1 class="main-heading">Cutting-edge features for advanced analytics</h1>
    <p class="sub-heading">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
    </p>

    <div class="image-container">
<img src={phone} alt="" />
      
    </div>

    <div class="features-grid">
      <div class="feature-item">
      <img src={pic11} alt="" />
        <h3>Share team inboxes</h3>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        <a href="#" class="learn-more">Learn more →</a>
      </div>
      <div class="feature-item">
      <img src={pic11} alt="" />
        <h3>Deliver instant answers</h3>
        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        <a href="#" class="learn-more">Learn more →</a>
      </div>
      <div class="feature-item">
      <img src={pic11} alt="" />
        <h3>Manage your team with reports</h3>
        <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
        <a href="#" class="learn-more">Learn more →</a>
      </div>
    </div>
  </div>


  <div class="features-section">
  <h1 class="main-heading">Frequently asked Question</h1>
  <p class="sub-heading">
      Everything You need to know about the product and billing, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
    </p>
  </div>
  <div class="faq-container">
        <div class="faq-item">
            <div class="faq-question">
                <span>Is there a free trial available?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>Can I change my plan later?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                Absolutely! You can upgrade or downgrade your plan at any time to better suit your needs.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>What is your cancellation policy?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                You can cancel your subscription at any time. Any charges incurred will be prorated based on your usage.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>Can other info be added to an invoice?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                Yes, additional information such as your company name or VAT ID can be added to invoices upon request.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>How does billing work?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                Billing is handled on a monthly basis. You'll receive an invoice at the start of each billing cycle.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>How do I change my account email?</span>
                <span>+</span>
            </div>
            <div class="faq-answer">
                You can change your account email in the account settings section of your dashboard.
            </div>
        </div>
    </div>



    <div class="contact-section">
        <div class="contact-images">
            <img src={last1} alt="" />
            <img src={last2} alt="" />
            <img src={last3} alt="" />

        </div>
        <div class="contact-title">Still have questions?</div>
        <div class="contact-text">
            Can't find the answer you're looking for? Please chat to our friendly team.
        </div>
        <a href="#" class="contact-button">Get in touch</a>
    </div>




    <div class="container">
    <div class="header">
      <h1>Our blog</h1>
      
      <button>Add Post</button>
      
    </div>
    <div class="posts">
      <div class="post">
        <img src={last1} alt="" />
        <div class="info">
          <h2>UX review presentations</h2>
          <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div class="author">
          <img src={last2} alt="" />
            <span>Olivia phye </span>
          </div>
        </div>
      </div>
      <div class="post">
      <img src={last2} alt="" />
        <div class="info">
          <h2>Migrating to Linear 101

</h2>
          <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
          <div class="author">
          <img src={last1} alt="" />
            <span>Phoenix Baker</span>
          </div>
        </div>
      </div>
      <div class="post">
      <img src={last3} alt="" />
        <div class="info">
          <h2>Building your API stack

</h2>
          <p>The rise of RESTful APis has been met by a rise in tools for creating, testing, and managing them.</p>
          <div class="author">
          <img src={last1} alt="" />
            <span>Lana Steiner</span>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="container">
    <h1>Start your free trial</h1>
    <p>Join over 4,000+ startups already growing with Untitled.</p>
    <div className="lastbtn">
    <button className="last1">Learn more</button>
    <button className="last2">Get started</button>

    </div>
  </div>





<div class="footer">
  <p>&copy; 2023 Your Company Name. All rights reserved.</p>
</div>



    </section>
  );
};

export default Navbar;


  

