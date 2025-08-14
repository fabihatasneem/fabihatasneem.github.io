import React, { useState } from 'react';
import {
  RiFileTextLine,
  RiMailLine,
  RiMailSendLine,
  RiMessage2Line,
  RiShieldCheckLine,
  RiUser3Line,
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
  const [honeypot, setHoneypot] = useState(''); // Hidden spam trap

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam protection: Check honeypot
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

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
        setHoneypot('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div
      id="contact"
      className="card shadow-lg compact bg-base-100 max-w-2xl mx-auto"
    >
      <div className="card-body">
        {/* Friendly Header */}
        <div className="text-center mb-6">
          <h2 className="card-title text-2xl mb-2">Let's Connect! 💬</h2>
          <p className="text-base-content/70 text-sm">
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field - Hidden from users but visible to bots */}
          <div className="hidden">
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center text-base-content/80">
                <RiUser3Line className="mr-2 text-primary" />
                What should I call you? *
              </span>
            </label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              placeholder="e.g., John Doe"
              className="input input-bordered w-full focus:input-primary transition-colors"
              required
              autoComplete="name"
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center text-base-content/80">
                <RiMailLine className="mr-2 text-primary" />
                Your email address *
              </span>
            </label>
            <input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleInputChange}
              placeholder="john.doe@example.com"
              className="input input-bordered w-full focus:input-primary transition-colors"
              required
              autoComplete="email"
            />
            <label className="label">
              <span className="label-text-alt text-base-content/60">
                I'll only use this to get back to you - no spam, promise! 📧
              </span>
            </label>
          </div>

          {/* Subject Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center text-base-content/80">
                <RiFileTextLine className="mr-2 text-primary" />
                What's this about? *
              </span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g., Project collaboration, Question about your work"
              className="input input-bordered w-full focus:input-primary transition-colors"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center text-base-content/80">
                <RiMessage2Line className="mr-2 text-primary" />
                Tell me more! *
              </span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Share your thoughts, questions, or project ideas here..."
              className="textarea textarea-bordered w-full h-32 focus:textarea-primary transition-colors resize-none"
              required
            ></textarea>
            <label className="label">
              <span className="label-text-alt text-base-content/60">
                Feel free to be as detailed as you'd like! 📝
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full hover:btn-primary-focus transition-all duration-200"
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Sending your message...
                </>
              ) : (
                <>
                  <RiMailSendLine className="mr-2" />
                  Send Message ✨
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="alert alert-success mt-4">
            <RiShieldCheckLine className="text-xl" />
            <span>🎉 Thanks for reaching out! I'll get back to you soon.</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="alert alert-error mt-4">
            <span>
              😔 Something went wrong. Please try again or email me directly.
            </span>
          </div>
        )}

        {/* Privacy Note */}
        <div className="mt-6 p-4 bg-base-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <RiShieldCheckLine className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-base-content/70">
              <p className="font-medium mb-1">Your privacy matters to me</p>
              <p>
                I'll never share your information with anyone else. This form is
                protected by Formspree's secure infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
