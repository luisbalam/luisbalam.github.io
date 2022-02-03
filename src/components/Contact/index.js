import React from 'react';

import { Container } from 'react-bootstrap';

import { FaPhoneAlt } from 'react-icons/fa';

import { MdMail } from 'react-icons/md';

import classes from './index.module.css';

const index = ({ title, phone, email, country, }) => {
  return (
    <section id='contact' className={`${classes.Contact} pt-5`}>
      <Container>
        <h3>{title}</h3>
        <p><FaPhoneAlt /> <a href={`tel:${phone}`}>{phone}</a></p>
        <p><MdMail /> <a href={`mailto:${email}`}>{email}</a></p>
        
      </Container>

    </section>
  )
}

export default index;

