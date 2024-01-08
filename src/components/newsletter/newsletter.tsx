import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Input from '../input/input';
import Button from '../button/button';
import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from './newsletter.style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: any) => {
    if(e.type == "email")
      setEmail(e.target.value);
    else if (e.type == "name")
      setName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }: any) => {
        if (result !== 'success') {
          throw msg;
        }
        setSuccess(msg);
        setError('');
        setEmail('');
      })
      .catch((err: any) => {
        setError(err);
        setSuccess('');
        setEmail('');
      });
  };
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          📰 Want to know more about ETechWeekly and upcoming events and content? 📰
        </NewsletterTitle>
        <NewsletterDescription>
          📧 Subscribe to our newsletter and stay updated.
          (We don't sell, nor spam, email boxes)
        </NewsletterDescription>

        <NewsletterInputWrapper onSubmit={handleSubmit}>
          {success ? (
            <SuccessMessage>{success} 🙂</SuccessMessage>
          ) : (
            <>
              <Input
                type="email"
                name="email"
                placeholder="Write your email here"
                onChange={handleChange}
                value={email}
                required={true}
              />
              <Input
                type="name"
                name="name"
                placeholder="Write your name here"
                onChange={handleChange}
                value={name}
                required={true}
              />
              <Button title="Subscribe" type="submit" />
            </>
          )}
        </NewsletterInputWrapper>
        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInnerWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
