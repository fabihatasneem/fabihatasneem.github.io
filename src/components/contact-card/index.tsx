import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { SanitizedContact } from '../../interfaces/sanitized-config';

interface ContactCardProps {
  contact: SanitizedContact;
}

const ContactCard: React.FC<ContactCardProps> = ({ }) => {
  const handleGmailRedirect = () => {
    const email = 'fabihatsnm.00@gmail.com';
    const subject = 'Hello from your portfolio';
    const body = 'Hi Fabiha,\n\nI came across your portfolio and wanted to reach out...';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div
      id="contact"
      className="card shadow-lg compact bg-base-100 max-w-md mx-auto"
    >
      <div className="card-body text-center">
        {/* Simple Header */}
        <div className="mb-4">
          <h2 className="card-title text-xl mb-2 justify-center">Let's Connect! 💬</h2>
          <p className="text-base-content/70 text-sm">
            Have a question or want to collaborate?
          </p>
        </div>

        {/* Gmail Button */}
        <button
          onClick={handleGmailRedirect}
          className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-200"
        >
          <RiMailSendLine className="mr-2" />
          Send me an email ✨
        </button>

        {/* Simple note */}
        <p className="text-xs text-base-content/60 mt-3">
          This will open Gmail in a new tab
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
