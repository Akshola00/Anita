import React, { useEffect } from "react";

const Modal = ({ which, onClose }) => {
  useEffect(() => {
    const modalElement = document.getElementById("my_modal_4");
    if (which && modalElement) {
      modalElement.showModal();
    }

    // Cleanup function to close the modal when the component is unmounted
    return () => {
      if (modalElement) {
        modalElement.close();
      }
    };
  }, [which]);

  // Define the dynamic heading and content based on `which`
  const renderContent = () => {
    switch (which) {
      case 1:
        return {
          heading: "Daily Dose",
          content: (
            <div>
              <p>
                Welcome to your Daily Dose! This collection will keep you
                inspired for a month and a few days, helping you stay on track to
                rediscover your strength. Each quote is paired with advice to
                empower you on your journey.
              </p>
              <ul>
                <li>
                  <strong>Day 1:</strong> “The only way to do great work is to love what you do.” – Steve Jobs
                  <br />
                  <em>Advice:</em> Find what excites you and pursue it passionately. Your enthusiasm will drive your success.
                </li>
                <li>
                  <strong>Day 2:</strong> “Believe you can and you're halfway there.” – Theodore Roosevelt
                  <br />
                  <em>Advice:</em> Trust in your abilities. Confidence is the first step toward achieving your goals.
                </li>
                <li>
                  <strong>Day 3:</strong> “Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill
                  <br />
                  <em>Advice:</em> Embrace setbacks as learning opportunities. Keep moving forward, one step at a time.
                </li>
              </ul>
            </div>
          ),
        };
      case 2:
        return {
          heading: "About Us",
          content: (
            <div>
              <p>
                Welcome to <strong>Inspire and Motivate with Anita!</strong> We believe in the transformative power of positivity and personal growth.
              </p>
              <p>
                <em>Anita</em> is dedicated to sharing insights, stories, and resources that empower individuals to unlock their potential and lead fulfilling lives.
              </p>
              <p>
                Through thoughtful reflections and daily encouragement, we aim to uplift spirits and inspire action. Join us on this journey of inspiration and motivation!
              </p>
            </div>
          ),
        };
      case 3:
        return {
          heading: "Quick Inspirations",
          content: (
            <div>
              <p>
                Discover <strong>Quick Inspirations</strong>! In this section, find uplifting quotes and affirmations that spark immediate positivity.
              </p>
              <p>
                These short bursts of motivation remind you of your strength to overcome challenges and guide you toward a more positive mindset, whether you need a morning boost or a gentle reminder throughout the day.
              </p>
            </div>
          ),
        };
      case 4:
        return {
          heading: "Contact Us",
          content: (
            <div>
              <p>
                We’d Love to Hear from You! At <strong>Inspire and Motivate with Anita</strong>, we value your thoughts and feedback.
              </p>
              <p>
                Whether you have questions, suggestions, or want to share your own stories of inspiration, we’re here to listen!
              </p>
              <p>
                <strong>Get in Touch:</strong>
              </p>
              <ul>
                <li>Email: <a href="mailto:shehuanitaolamide@gmail.com">shehuanitaolamide@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/message/WH6TOR2KYNYPN1" target="_blank">Click here to chat</a> or call: +234 903 628 0582</li>
                <li>Phone: +234 903 628 0582</li>
              </ul>
            </div>
          ),
        };
      default:
        return {
          heading: "Default Heading",
          content: <p>Default content or error message.</p>,
        };
    }
  };

  // Get the content for the current modal
  const { heading, content } = renderContent();

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* Dynamic heading */}
          <h3 className="font-bold text-lg">{heading}</h3>

          {/* Dynamic content */}
          <div className="py-4">{content}</div>

          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
