/**
 * Zgodne z phone_conversion_number w index.html / Google Ads (krajowy numer bez spacji).
 * Wyświetlana treść linku: grupy cyfr jak na stronie Kontakt — Google dopasowuje po cyfrach.
 */
export const PHONE_CONVERSION_NUMBER = "729534719";

export const CONTACT_TEL_HREF = "tel:+48729534719";

/** Tekst widoczny w linku (spacje jak na stronie kontaktowej) */
export const CONTACT_PHONE_DISPLAY = "729 534 719";

const ContactPhoneLink = () => {
  return (
    <a id="contact-phone" href={CONTACT_TEL_HREF}>
      {CONTACT_PHONE_DISPLAY}
    </a>
  );
};

export default ContactPhoneLink;
