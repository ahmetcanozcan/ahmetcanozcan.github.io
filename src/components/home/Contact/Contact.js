import classNames from 'classnames';
import React, { useCallback, useState, useRef } from 'react';
import SectionTitle from '../../SectionTitle';
import { Element } from 'react-scroll';

import useParallax from '../../hooks/useParallax';

import * as styles from './Contact.module.css';

import { email, socials, phone } from '../../../data/contact';

const defaultForm = {
  name: '',
  email: '',
  message: '',
};

const formspreeUrl = 'https://formspree.io/f/xpzkydqe';

const Contact = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const wrapper = useRef(null);
  useParallax(wrapper);

  const onFieldChange = useCallback(
    (field, value) => {
      setFormData({
        ...formData,
        [field]: value,
      });
    },
    [formData]
  );



  const onSubmit = useCallback(() => {
    setSubmitting(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.set(key, value));

    // setTimeout(() => {
    //   setFormData(defaultForm);
    //   setSubmitting(false);
    //   setSubmitted(true);
    // }, 800);
    fetch(formspreeUrl, {
      method: 'POST',
      body: data,
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setFormData(defaultForm);
        setSubmitted(true);
      })
      .catch(error => {
        alert('Ops! Your message can not be sent!')
        console.error(error)
      })
      .finally(() => setSubmitting(false));
  }, [formData, setSubmitting, setSubmitted, setFormData]);

  console.log('submitted', submitting);
  const valid = Object.values(formData).reduce(
    (acc, curr) => acc && curr,
    true
  );

  return (
    <Element name="contact" className={styles.wrapper}>
      <div ref={wrapper}  className={classNames(styles.container, 'container')}  >
        <div className={styles.left} data-animation="slide-right"  >
          <SectionTitle animate={false} title="Contact" invert small />
          <div className="content">
            <p>
              Hi, do you have a question? feel free to contact me.
            </p>

            <p className={styles.socialWrapper}>
              <p className="content-header">Social Media</p>
              {socials.map(({ img, link }, index) => (
                <a key={index} className={styles.icon} href={link}>
                  {' '}
                  <img src={img} alt='Message sent icon' />{' '}
                </a>
              ))}{' '}
            </p>

            <p>
              <p className="content-header">Email</p>
              <a href={`mailto://${email}`}> {email} </a>
            </p>

            <p>
              <p className="content-header">Phone</p>
              <a href={`mailto://${email}`}> {phone} </a>
            </p>
          </div>
        </div>
        <div className={classNames(styles.right, { submitting })} data-depth="0.4" data-animation="slide-left"  >
          {submitted ? (
            <div className={styles.message}>
              <img src="/img/check.svg" alt='Checked icon' />
              <p>Thanks for your message!</p>
            </div>
          ) : (
            <>
              <h2>Send Message </h2>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => onFieldChange('name', e.target.value)}
                  required="required"
                />
                <span>Name</span>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  value={formData.email}
                  onChange={e => onFieldChange('email', e.target.value)}
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className={styles.inputBox}>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={e => onFieldChange('message', e.target.value)}
                  type="text"
                  required="required"
                ></textarea>
                <span>Message</span>
              </div>
              <div className={styles.buttonBox}>
                <button disabled={!valid} onClick={onSubmit}>
                  {' '}
                  Send{' '}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Element>
  );
};

export default Contact;
