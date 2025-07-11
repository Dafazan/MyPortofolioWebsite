// lib/emailjs.js
import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
    return emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );
};
