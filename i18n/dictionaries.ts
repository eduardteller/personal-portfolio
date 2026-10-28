import { isLocale } from "./config";

const en = {
  meta: {
    description: "Fullstack Web & Mobile Developer",
  },
  languageSwitch: "Choose language",
  hero: {
    greeting: "hi👋, my name is",
    tagline: "Full Stack Developer with expertise in",
  },
  about: {
    eyebrow: "about",
    title: "My Story",
    hi: "Hi, I'm",
    rolePrefix: "a ",
    role: "Fullstack Web Developer",
    placePrefix: "based in ",
    place: "Tallinn, Estonia",
    paragraphs: [
      "I hold a Bachelor's degree from TalTech and currently work as a Back End Developer at Helmes. Before that, I worked as a Full Stack Engineer at AI Eesti and built many personal projects along the way.",
      "While studying hardware development, I found a strong interest in software engineering. Since then, I've spent a lot of time learning and improving my skills in different areas of software development. I like building solutions that help solve real problems.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "I Excel At",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    devops: "DevOps",
    native: "Native Development",
    tools: "Tools & Systems",
    testing: "Testing",
  },
  projects: {
    eyebrow: "projects",
    title: "Some of My Work",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    koolitech: {
      title: "KooliTech - E-Kell",
      desc: "A software solution for schools to manage bells and alarms via desktop or web. Easily control, schedule, and monitor systems remotely, enhancing safety and efficiency.",
    },
    kahoot: {
      title: "Kahoot! Clone",
      desc: "I recreated the popular quiz game Kahoot as a full-stack web application. This project includes features like user authentication, real-time multiplayer quizzes, and a responsive design for different devices.",
    },
    events: {
      title: "Events Management System",
      desc: "A Web App that allows users to create and manage events and also add the participants to the event, add existing participants to other events.",
    },
    solana: {
      title: "Solana Scanner - Telegram Bot",
      desc: "My Solana Scanner Telegram Bot makes it easy to check key stats for any new token on the Solana blockchain. Just enter the contract address, and the bot shows details like burn/mint status, price, market cap, liquidity, all-time high, rug pull warnings, developer info, social links, holders, and more.",
    },
    reddit: {
      title: "Reddit-Like Forum",
      desc: "A web app inspired by Reddit, where users can create, share, and discuss content within various communities. Engage in conversations, upvote posts, and explore trending topics in a clean, user-friendly interface.",
    },
    neosec: {
      title: "NeoSec Website",
      desc: "A landing page for NeoSec, an Estonian cybersecurity company, built with Next.js and Tailwind CSS.",
    },
  },
  experience: {
    eyebrow: "Professional Journey",
    title: "Experience & Education",
    experience: "Experience",
    education: "Education",
    helmes: {
      title: "Back End Developer",
      org: "Helmes · Full-time",
      location: "Tallinn, Harjumaa, Estonia · Hybrid",
      date: "Aug 2025 – Present",
    },
    aiEesti: {
      title: "Full Stack Engineer",
      date: "Feb 2025 – Jun 2025",
    },
    taltech: {
      title: "Bachelor of Hardware Development and Programming",
      org: "Tallinn University of Technology (TalTech)",
      date: "Sept 2022 – Jun 2025",
      courses: [
        "Web Technologies",
        "Data Security and Cryptology",
        "Programming II",
        "Algorithms and Data Structures",
        "Software Engineering",
        "Software Project",
        "Foundations of Cyber Security",
      ],
    },
  },
  contact: {
    eyebrow: "contact",
    title: "Let's Connect",
    text: "Send me an Email or Fill out the form and I'll get back to you within 24 hours.",
    copied: "Copied",
    form: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Your Email",
      emailPlaceholder: "john@example.com",
      message: "Your Message",
      messagePlaceholder: "Tell me about your project",
      send: "Send",
      sending: "Sending...",
      nameTooShort: "Name is too short",
      invalidEmail: "Invalid email",
      messageTooShort: "Message is too short",
      sendError: "Error while sending info",
      sent: "Message Sent",
    },
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
export type ContactFormText = Dictionary["contact"]["form"];

const et: Dictionary = {
  meta: {
    description: "Full Stack veebi- ja mobiiliarendaja",
  },
  languageSwitch: "Vali keel",
  hero: {
    greeting: "tere👋, minu nimi on",
    tagline: "Full Stack arendaja, kelle tugevus on",
  },
  about: {
    eyebrow: "minust",
    title: "Minu lugu",
    hi: "Tere, mina olen",
    rolePrefix: "",
    role: "Full Stack veebiarendaja",
    placePrefix: "",
    place: "Tallinnast",
    paragraphs: [
      "Mul on TalTechi bakalaureusekraad ja praegu töötan Helmeses Back End arendajana. Varem töötasin AI Eestis Full Stack insenerina ning olen aja jooksul loonud palju isiklikke projekte.",
      "Riistvaraarendust õppides tekkis mul suur huvi tarkvaratehnika vastu. Sellest ajast saadik olen pühendanud palju aega õppimisele ja oma oskuste arendamisele tarkvaraarenduse eri valdkondades. Mulle meeldib luua lahendusi, mis aitavad lahendada päris probleeme.",
    ],
  },
  skills: {
    eyebrow: "Oskused",
    title: "Milles olen tugev",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Andmebaasid",
    devops: "DevOps",
    native: "Natiivarendus",
    tools: "Tööriistad ja süsteemid",
    testing: "Testimine",
  },
  projects: {
    eyebrow: "projektid",
    title: "Valik minu töödest",
    viewCode: "Vaata koodi",
    liveDemo: "Vaata demot",
    koolitech: {
      title: "KooliTech - E-Kell",
      desc: "Tarkvaralahendus koolidele kellade ja häirete haldamiseks töölaua- või veebirakenduse kaudu. Süsteeme saab mugavalt eemalt juhtida, ajastada ja jälgida, mis tõstab turvalisust ja tõhusust.",
    },
    kahoot: {
      title: "Kahoot! kloon",
      desc: "Lõin populaarse viktoriinimängu Kahoot uuesti full stack veebirakendusena. Projektis on kasutajate autentimine, reaalajas mitme mängijaga viktoriinid ja eri seadmetele kohanduv disain.",
    },
    events: {
      title: "Ürituste haldamissüsteem",
      desc: "Veebirakendus, kus kasutajad saavad luua ja hallata üritusi, lisada neile osalejaid ning lisada olemasolevaid osalejaid ka teistele üritustele.",
    },
    solana: {
      title: "Solana Scanner - Telegrami bot",
      desc: "Minu Solana Scanneri Telegrami bot teeb Solana plokiahela uute tokenite põhinäitajate kontrollimise lihtsaks. Sisesta lepingu aadress ja bot näitab infot nagu burn/mint staatus, hind, turuväärtus, likviidsus, kõigi aegade tipp, rug pull hoiatused, arendaja info, sotsiaalmeedia lingid, hoidjad ja palju muud.",
    },
    reddit: {
      title: "Redditi-laadne foorum",
      desc: "Redditist inspireeritud veebirakendus, kus kasutajad saavad eri kogukondades sisu luua, jagada ja arutada. Osale vestlustes, anna postitustele poolthääli ja avasta populaarseid teemasid selges ja kasutajasõbralikus liideses.",
    },
    neosec: {
      title: "NeoSeci veebileht",
      desc: "Maandumisleht Eesti küberturbeettevõttele NeoSec, ehitatud Next.js-i ja Tailwind CSS-iga.",
    },
  },
  experience: {
    eyebrow: "Minu teekond",
    title: "Töökogemus ja haridus",
    experience: "Töökogemus",
    education: "Haridus",
    helmes: {
      title: "Back End arendaja",
      org: "Helmes · Täistööaeg",
      location: "Tallinn, Harjumaa, Eesti · Hübriidtöö",
      date: "aug 2025 – praegu",
    },
    aiEesti: {
      title: "Full Stack insener",
      date: "veebr 2025 – juuni 2025",
    },
    taltech: {
      title: "Riistvara arenduse ja programmeerimise bakalaureus",
      org: "Tallinna Tehnikaülikool (TalTech)",
      date: "sept 2022 – juuni 2025",
      courses: [
        "Veebitehnoloogiad",
        "Andmeturve ja krüptoloogia",
        "Programmeerimine II",
        "Algoritmid ja andmestruktuurid",
        "Tarkvaratehnika",
        "Tarkvaraprojekt",
        "Küberturbe alused",
      ],
    },
  },
  contact: {
    eyebrow: "kontakt",
    title: "Võtame ühendust",
    text: "Saada mulle e-kiri või täida vorm ja vastan sulle 24 tunni jooksul.",
    copied: "Kopeeritud",
    form: {
      name: "Nimi",
      namePlaceholder: "Mari Maasikas",
      email: "Sinu e-post",
      emailPlaceholder: "mari@example.com",
      message: "Sinu sõnum",
      messagePlaceholder: "Räägi mulle oma projektist",
      send: "Saada",
      sending: "Saadan...",
      nameTooShort: "Nimi on liiga lühike",
      invalidEmail: "Vigane e-posti aadress",
      messageTooShort: "Sõnum on liiga lühike",
      sendError: "Sõnumi saatmine ebaõnnestus",
      sent: "Sõnum saadetud",
    },
  },
  footer: {
    rights: "Kõik õigused kaitstud.",
  },
};

const dictionaries = { en, et };

export function getDictionary(lang: string): Dictionary {
  return dictionaries[isLocale(lang) ? lang : "en"];
}
