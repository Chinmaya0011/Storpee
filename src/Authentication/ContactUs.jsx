import React from 'react';

function ContactUs() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const message = formData.get('message');
    // You can perform any necessary validation here

    // For the mailto link approach
    const mailtoLink = `mailto:imchinu17@gmail.com?subject=Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;

    // For the form submission approach (requires backend setup)
    // You would typically make an API call here to send the form data to your backend
  };

  return (
    <div>
      {/* Mailto link approach */}
      <a href={`mailto:imchinu17@gmail.com`}>Contact Us</a>

      {/* Form submission approach */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}

export default ContactUs;
