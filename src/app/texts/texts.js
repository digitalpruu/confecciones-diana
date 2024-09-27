const title = "Confecciones Diana";
const email = "Tolila19@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573115813672";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Confecciones Diana, nos especializamos en la confección de ropa para todo tipo de personas. Nuestro compromiso es ofrecer prendas de alta calidad que se adapten a las necesidades y preferencias de nuestros clientes.",
        description2: "Cada prenda es creada con cuidado y dedicación, asegurando que cada cliente reciba ropa que no solo se vea bien, sino que también sea cómoda y duradera. Confecciones Diana es tu opción ideal si buscas estilo y calidad en una sola prenda."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Calidad y compromiso en cada prenda.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/aH78wSV5wrBQzS5K/?mibextid=qi2Omg", // Facebook proporcionado
        instagram: "https://www.instagram.com/aviladianapatricia?igsh=cDZsdDU5bXJ0bzZ2", // Instagram proporcionado
        tiktok: "https://www.tiktok.com/@dianaavila357?_t=8q3X7EybfHh&_r=1", // TikTok proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
