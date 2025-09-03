import React, { useState } from 'react';

export default function About(props) {
  const [activeItem, setActiveItem] = useState(0); // First item open by default

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
  };

  const toggleAccordion = (itemIndex) => {
    setActiveItem(activeItem === itemIndex ? -1 : itemIndex);
  };

  return (
    <div className="container">
      <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        About Us
      </h1>

      <div className="accordion" id="accordionExample">
        {/* Accordion Item 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${activeItem === 0 ? '' : 'collapsed'}`}  // 👈 ye lagao
              type="button" 
              style={myStyle}
              onClick={() => toggleAccordion(0)}
            >
              <strong>Accordion Item 1</strong>
            </button>

          </h2>
          <div 
            className={`accordion-collapse collapse ${activeItem === 0 ? 'show' : ''}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a simple utility app built for text editing.</strong>  
              It provides different features to make your work easier and faster.  
              You can convert text to uppercase or lowercase with a single click.  
              There is also an option to change text into sentence case instantly.  
              Many students find it helpful for writing assignments or projects.  
              Professionals use it for preparing reports and cleaning raw text.  
              Bloggers can also use it to quickly edit their article drafts.  
              It reduces manual effort by automating common formatting tasks.  
              The app is lightweight and runs smoothly on any modern browser.  
              You don’t need to install heavy software for basic text changes.  
              Just copy-paste your content here and get it ready within seconds.  
              It also provides a summary of the number of words and characters.  
              This feature helps writers to keep track of their writing limits.  
              Reading time is also displayed for quick estimation.  
              The app is completely free and designed for learning purposes.  
              Anyone can use it without any kind of registration or login.  
              It’s open to all and encourages students to explore React projects.  
              You can extend it further by adding more features.  
              Overall, it’s a small but very practical tool for daily usage.  
              The idea is simple but useful for people of all age groups.  
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${activeItem === 1 ? '' : 'collapsed'}`}
              type="button" 
              style={myStyle}
              onClick={() => toggleAccordion(1)}
            >
              <strong>Accordion Item 2</strong>
            </button>
          </h2>
          <div 
            className={`accordion-collapse collapse ${activeItem === 1 ? 'show' : ''}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>The design of TextUtils is clean and easy to understand.</strong>  
              It is made in such a way that even beginners can use it smoothly.  
              The navigation bar helps you switch between different sections.  
              For example, you can go to the home page or about page easily.  
              The buttons are placed clearly with proper names for actions.  
              Each button performs one dedicated task like convert or clear.  
              There is also a dark mode and light mode switch on the top.  
              This helps users work in their comfortable screen setting.  
              Many people prefer dark mode for eye comfort during long hours.  
              At the same time, light mode is better for daylight usage.  
              The overall layout is responsive and adjusts with screen size.  
              You can use it on a laptop, desktop or even a smartphone.  
              The app does not depend on heavy backend services, so it loads fast.  
              Simplicity is the main focus of its design and usability.  
              All the colors are selected to give a professional look.  
              Buttons have hover effects to make the UI feel interactive.  
              Bootstrap is used here for layout and responsive styling.  
              Students learning frontend can also study this as an example.  
              With small changes, it can be customized as per your needs.  
              The clean UI makes it friendly for both technical and non-technical people.  
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${activeItem === 2 ? '' : 'collapsed'}`}
              type="button" 
              style={myStyle}
              onClick={() => toggleAccordion(2)}
            >
              <strong>Accordion Item 3</strong>
            </button>
          </h2>
          <div 
            className={`accordion-collapse collapse ${activeItem === 2 ? 'show' : ''}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This project is created using React framework.</strong>  
              React is a powerful JavaScript library for building user interfaces.  
              It allows you to create reusable components that save coding time.  
              The About section itself is a component in this project.  
              Components make the structure modular and easy to maintain.  
              You can manage state, like dark mode, using React hooks.  
              Here, useState hook is used to toggle the accordion state.  
              This makes the app dynamic and more interactive for users.  
              Bootstrap is added for styling and quick UI setup.  
              With Bootstrap, you get responsive design without much effort.  
              The project is kept simple for students to learn React basics.  
              Clean code is followed with proper use of functions and props.  
              The project can be extended with backend integration in future.  
              For example, saving the user’s text to a database.  
              Or providing a login system to manage personal text files.  
              It can also be enhanced with AI-based grammar corrections.  
              Another idea is adding file upload and export features.  
              React makes scaling such projects much easier in future.  
              Developers can also learn about conditional rendering here.  
              Overall, it is a small but meaningful example of modern React usage.  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
