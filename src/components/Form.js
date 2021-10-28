import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import TextError from './TextError';
import '../style/Form.scss';

const initialValues = {
  name: '',
  email: '',
  nachricht: '',
};

// Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Pflichfeld'),
  email: Yup.string()
    .email('Bitte geben Sie eine gültige E-Mail Adresse an')
    .required('Pflichfeld'),
  nachricht: Yup.string().required('Pflichfeld'),
});

//emailjs

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.GATSBY_EMAILJS_SERVICE,
      process.env.GATSBY_EMAILJS_TEMPLATE,
      e.target,
      process.env.GATSBY_EMAILJS_USER
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const onSubmit = { sendEmail };

const contactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="center" onSubmit={sendEmail}>
        <div className="form-control">
          <label htmlFor="name">
            Name<sup>*</sup>
          </label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">
            Email<sup>*</sup>
          </label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="nachricht">
            Nachricht<sup>*</sup>
          </label>
          <Field as="textarea" id="nachricht" name="nachricht" />
          <ErrorMessage name="nachricht" component={TextError} />
          <div>
            <sup>*</sup> bitte ausfüllen
          </div>
        </div>

        <button className="btn-sideNav" type="submit">
          Senden{' '}
        </button>
      </Form>
    </Formik>
  );
};

export default contactForm;
