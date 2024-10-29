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
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xanynzvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          senderName: '',
          senderEmail: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div id="contact" className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <RiUser3Line className="mr-2" />
                Your Name
              </span>
            </label>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <RiMailLine className="mr-2" />
                Your Email
              </span>
            </label>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <RiFileTextLine className="mr-2" />
                Subject
              </span>
            </label>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <RiMessage2Line className="mr-2" />
                Message
              </span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message here..."
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitStatus === 'sending'}
            >
              <RiMailSendLine className="mr-2" />
              {submitStatus === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
        {submitStatus === 'success' && (
          <div className="alert alert-success mt-4">
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="alert alert-error mt-4">
            An error occurred. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
