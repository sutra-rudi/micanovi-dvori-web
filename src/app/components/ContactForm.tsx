'use client';
import React, { FormEvent } from 'react';
import styles from '../styles/contact.module.scss';
import { useAppContext } from '../contexts/store';

import AppButton from './AppButton';
import { useFormspark } from '@formspark/use-formspark';

const ContactForm = () => {
  const [contactFormData, setContactFormData] = React.useState<Record<string, string>>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const formKey = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

  const [submit, submitting] = useFormspark({
    formId: formKey as string,
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submit(contactFormData);
  };

  const handleInputs = (inputEvent: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setContactFormData((_prev) => {
      return { ..._prev, [inputName]: inputEvent.target.value };
    });
  };

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['message']: event.target.value };
    });

  const {
    state: { userLang },
  } = useAppContext();

  const parseLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

  return (
    <div className={styles.contactFormContainer}>
      <form action='' onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formBlockLeft}>
          <input onChange={(event) => handleInputs(event, 'name')} type='text' placeholder={parseLang('Ime', 'Name')} />
          <input
            onChange={(event) => handleInputs(event, 'email')}
            type='email'
            placeholder={parseLang('Email', 'Email')}
          />
          <input
            onChange={(event) => handleInputs(event, 'phone')}
            type='text'
            placeholder={parseLang('Telefon', 'Phone')}
          />
        </div>
        <div className={styles.formBlockRight}>
          <textarea
            onChange={handleTextarea}
            name=''
            placeholder={parseLang('Poruka', 'Message')}
            id=''
            cols={30}
            rows={10}
          ></textarea>
          <AppButton isContact content={parseLang('Pošalji upit', 'Send inquiry')} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
