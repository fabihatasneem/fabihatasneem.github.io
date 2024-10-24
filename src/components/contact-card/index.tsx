import React, { useState } from 'react';
import {
  RiMailSendLine,
  RiUser3Line,
  RiMailLine,
  RiFileTextLine,
  RiMessage2Line,
} from 'react-icons/ri';
import { SanitizedContact } from '../../interfaces/sanitized-config';

interface ContactCardProps {
  contact: SanitizedContact;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact: sanitizedContact,
}) => {
  const [formData, setFormData] = useState<SanitizedContact>({
    senderName: sanitizedContact.senderName || '',
    senderEmail: sanitizedContact.senderEmail || '',
    subject: sanitizedContact.subject || '',
    message: sanitizedContact.message || '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'fabihatsnm.00@gmail.com',
        }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          senderName: '',
          senderEmail: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <div className="input-group">
              <span>
                <RiUser3Line />
              </span>
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <div className="input-group">
              <span>
                <RiMailLine />
              </span>
              <input
                type="email"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <div className="input-group">
              <span>
                <RiFileTextLine />
              </span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Email Subject"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <div className="input-group">
              <span>
                <RiMessage2Line />
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              <RiMailSendLine className="mr-2" /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
