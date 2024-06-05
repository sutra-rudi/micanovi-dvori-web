'use client';
import React, { FormEvent } from 'react';
import styles from '../styles/contact.module.scss';
import { useAppContext } from '../contexts/store';

import AppButton from './AppButton';
import { useFormspark } from '@formspark/use-formspark';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const ContactForm = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
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

  return (
    <div className={styles.contactFormContainer}>
      <form action='' onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formBlockLeft}>
          <input
            onChange={(event) => handleInputs(event, 'name')}
            type='text'
            placeholder={parseByLang('Ime', 'Name')}
          />
          <input
            onChange={(event) => handleInputs(event, 'email')}
            type='email'
            placeholder={parseByLang('Email', 'Email')}
          />
          <input
            onChange={(event) => handleInputs(event, 'phone')}
            type='text'
            placeholder={parseByLang('Telefon', 'Phone')}
          />
        </div>
        <div className={styles.formBlockRight}>
          <textarea
            onChange={handleTextarea}
            name=''
            placeholder={parseByLang('Poruka', 'Message')}
            id=''
            cols={30}
            rows={10}
          ></textarea>
          <AppButton isContact content={parseByLang('Pošalji upit', 'Send inquiry')} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
