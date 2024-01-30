import React from 'react';
import '../Styles/about.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="abt-container">
      <h2 className="abt-heading">About Our Shopping App</h2>
      <p className="abt-description">Welcome to our shopping app! We're dedicated to providing you with a convenient and enjoyable shopping experience.</p>
      <p className="abt-description">Our app offers a wide range of products from various categories, including electronics, clothing, home goods, and more.</p>
      <p className="abt-description">With user-friendly navigation and secure payment options, you can shop with confidence and ease.</p>
      <p className="abt-description">Thank you for choosing our shopping app. Happy shopping!</p>

      <div className="abt-details">
        <h3 className="abt-subheading">Contact Information:</h3>
        <p className="abt-info">Email: info@example.com</p>
        <p className="abt-info">Phone: +1 (123) 456-7890</p>
        <p className="abt-info">Address: 123 Shopping Street, Cityville, State, Zip</p>

        <h3 className="abt-subheading">Company Details:</h3>
        <p className="abt-info">Company Name: Your Company Name</p>
        <p className="abt-info">Registration Number: ABC123456</p>
        <p className="abt-info">Business Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>

        <h3 className="abt-subheading">About Us:</h3>
        <p className="abt-info">Our shopping app aims to revolutionize the online shopping experience by offering a diverse range of products at competitive prices.</p>
        <p className="abt-info">We strive to provide exceptional customer service and ensure that your shopping needs are met with efficiency and reliability.</p>
        <p className="abt-info">Feel free to reach out to us for any inquiries or assistance. We're here to make your shopping experience seamless and enjoyable.</p>
      </div>

      <div className="abt-map">
        {/* Add your map component or embed a map */}
        <p>Map Location: [Insert Map Component Here]</p>
      </div>
    </div>
  );
}

export default About;

