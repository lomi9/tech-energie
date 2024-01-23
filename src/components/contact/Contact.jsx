import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import logo from "../../assets/logo-mtech-energie.png";


export default function Contact () {

    const form = useRef();
    const [modalMessage, setModalMessage] = useState({ sent: false, message: '' });
    const [showModal, setShowModal] = useState(false);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;


    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          setModalMessage({ sent: true, message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais." });
          setShowModal(true);
      }, (error) => {
          console.log(error.text);
          setModalMessage({ sent: false, message: "Erreur lors de l'envoie du message. Veuillez réessayer." });
            setShowModal(true);
      });
  e.target.reset();
};

const closeModal = () => {
    setShowModal(false);
};


    return (
        <section className="contact" id="contact">
            <div className="contact__header">
                <h4 className="contact__header-title">
                Vous souhaitez nous faire part de votre projet?
                </h4>
                <div className="contact__header-text">
                    <p className="contact__header-text-p">
                    Contactez nous!
                    </p>
                    <div className="contact__header-text-underline1">
                    </div>
                    <div className="contact__header-text-underline2"></div>
                </div>

            </div>
            <div className="contact__content">
                <div className="contact__content-left">
                    <form ref={form} onSubmit={sendEmail} className="contact__content-left-form">
                        <label className="contact__content-left-form-label" >Nom - Prénom</label>
                        <input className="contact__content-left-form-input" type="text" name="name" required />

                        <label className="contact__content-left-form-label">Email</label>
                        <input className="contact__content-left-form-input" type="email" name="email" required />

                        <label className="contact__content-left-form-label">Téléphone</label>
                        <input className="contact__content-left-form-input" type="tel" name="phone" required/>

                        <label className="contact__content-left-form-label">Message</label>
                        <textarea className="contact__content-left-form-textarea" name="message" required></textarea>
                        <div className="contact__content-left-form-button">
                            <input className="contact__content-left-form-button-btn" type="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>
                <div className="contact__content-right">
                    <div className="contact__content-right-image">
                        <img src={logo} alt="Logo - M-Tech ENERGIE" className="contact__content-right-image-logo"/>
                    </div>
                </div>
            </div>
            {showModal && (
            <div className="modal">
                <div className="modal__content">
                    <p className="modal__content-text">{modalMessage.message}</p>
                    <button onClick={closeModal} className="modal__content-btn">Fermer</button>
                </div>
            </div>
            )}

        </section>
    )
}