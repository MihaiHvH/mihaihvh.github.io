const sLang = document.getElementById("sLang");
const nLang = document.getElementById("nLang");

const translations = {
  EN: {
    nav: {
      about: "About Me",
      achievements: "Achievements",
      projects: "Projects",
      socials: "Socials",
      cv: "Curriculum Vitae"
    },
    about: {
      title: "About Me",
      introduction: "I’m a computer science student at the University of Bucharest, Faculty of Mathematics and Computer Science, where I started in October 2026. I’m self-taught and have been writing C++ for 8 years, and I’m always learning something new. I compete in cybersecurity and informatics contests, and I took part in the national round of the National Cybersecurity Olympiad in 2026.",
      hobbies: "Away from the screen I ride bikes, mountain bikes especially, and I know how to repair them. I like being in nature. In my free time I 3D print custom models for people close to me and engrave messages in wood with the same machine.",
      skills: "Skills: C++, Python, x86 assembly, web, network, mobile and pwn security, Linux (Fedora, Kali), Windows, Arduino and ESP32, 3D modeling (FreeCAD, Tinkercad), 3D printing (Ideamaker)",
      education: "Education: Faculty of Mathematics and Computer Science, University of Bucharest (2026 to present); Colegiul Național de Informatică, Piatra Neamț (2022 to 2026); Cybersecurity course, Algolymp (2025 to 2026); informatics qualification at the “Hai la Olimpiadă” Center of Excellence (2018 to 2026)",
      volunteering: "Volunteering: Cozla Bike, supervising participants at Marea Mișcare and Gârcina Bike Tour (2023 to present); team coordination at the Team Informatics Olympiad national stage and PROSOFT@NT (2024); school days activities (2023); organizer of the “Ziua Științelor” symposium (2025)",
      language: "Languages: Romanian (native), English (B2)"
    },
    achievements: {
      title: "Achievements",
      2026: {
        mateinfoub: "Third Prize, <b>MateInfoUB</b>, Faculty of Mathematics and Computer Science, University of Bucharest",
        onsc: "First Prize, <b>National Cybersecurity Olympiad</b>, county stage, then participant in the national stage",
        onji: "Honorable mention, <b>National Informatics Olympiad</b>, county stage",
        hta: "Participant, <b>HackTheArt</b> contest"
      },
      2025: {
        unbreakable_individual: "28th of 482, <b>UNbreakable International</b>, individual phase",
        unbreakable_teams: "25th of 211, <b>UNbreakable Romania</b>, team edition",
        fiicode: "Honorable mention, <b>FIICode</b>, Cybersecurity section, national stage",
        ojsc: "Honorable mention, <b>National Cybersecurity Olympiad</b>, county stage",
        oji: "Honorable mention, <b>National Informatics Olympiad</b>, county stage"
      },
      2024: {
        oji: "Honorable mention, <b>National Informatics Olympiad</b>, county stage",
        tic: "Honorable mention, <b>National IT Olympiad</b>, ICT section, county stage"
      },
      2022: {
        iwsc: "Honorable mention, <b>Info Winter Speed Code</b>, national stage"
      }
    },
    projects: {
      title: "Projects",
      github: "C++ applications: Many projects written over 8 years of C++, published on GitHub.",
      llm_tts: "Local LLM fine-tuning and TTS: Training and optimizing language models on my own hardware with RoLlama through Unsloth, and building voice synthesis with Piper TTS.",
      embedded_systems: "Arduino and ESP32 automation: Automation systems built on Arduino and ESP32 boards, including the programming.",
      "3dprinting": "3D printing: Custom printed models for friends and family, some downloaded and some designed by me, plus wood engraving with the same printer. More at instagram.com/3dprintingpn."
    },
    socials: {
      title: "Socials"
    },
    footer: {
      copyright: "© Țuburlui Mihai. All rights reserved."
    }
  },
  RO: {
    nav: {
      about: "Despre mine",
      achievements: "Realizări",
      projects: "Proiecte",
      socials: "Rețele de socializare",
      cv: "Curriculum Vitae"
    },
    about: {
      title: "Despre mine",
      introduction: "Sunt student la Facultatea de Matematică și Informatică din cadrul Universității din București din octombrie 2026. Sunt autodidact și scriu C++ de 8 ani, fiind mereu dornic să învăț lucruri noi. Particip la concursuri de securitate cibernetică și informatică, obținând calificarea la etapa națională a Olimpiadei Naționale de Securitate Cibernetică în 2026.",
      hobbies: "Departe de ecran merg cu bicicleta, mai ales pe munte, și știu să le repar. Îmi place să petrec timpul în natură. În timpul liber printez 3D modele personalizate pentru cei apropiați și gravez mesaje pe lemn folosind același utilaj.",
      skills: "Competențe: C++, Python, asamblare x86, securitate web, rețele, mobil și pwn, Linux (Fedora, Kali), Windows, Arduino și ESP32, modelare 3D (FreeCAD, Tinkercad), printare 3D (Ideamaker)",
      education: "Educație: Facultatea de Matematică și Informatică, Universitatea din București (2026 - prezent); Colegiul Național de Informatică, Piatra Neamț (2022 - 2026); Curs de securitate cibernetică, Algolymp (2025 - 2026); pregătire informatică la Centrul de Excelență „Hai la Olimpiadă” (2018 - 2026)",
      volunteering: "Voluntariat: Cozla Bike, supravegherea participanților la Marea Mișcare și Gârcina Bike Tour (2023 - prezent); coordonare de echipă la etapa națională a Olimpiadei de Informatică pe Echipe și PROSOFT@NT (2024); activități de zilele școlii (2023); organizator al simpozionului „Ziua Științelor” (2025)",
      language: "Limbi vorbite: Română (maternă), Engleză (B2)"
    },
    achievements: {
      title: "Realizări",
      2026: {
        mateinfoub: "Premiul III, <b>MateInfoUB</b>, Facultatea de Matematică și Informatică, Universitatea din București",
        onsc: "Premiul I, <b>Olimpiada Națională de Securitate Cibernetică</b>, etapa județeană, ulterior participant la etapa națională",
        onji: "Mențiune, <b>Olimpiada Națională de Informatică</b>, etapa județeană",
        hta: "Participant, concursul <b>HackTheArt</b>"
      },
      2025: {
        unbreakable_individual: "Locul 28 din 482, <b>UNbreakable International</b>, faza individuală",
        unbreakable_teams: "Locul 25 din 211, <b>UNbreakable Romania</b>, ediția pe echipe",
        fiicode: "Mențiune, <b>FIICode</b>, secțiunea Securitate Cibernetică, etapa națională",
        ojsc: "Mențiune, <b>Olimpiada Națională de Securitate Cibernetică</b>, etapa județeană",
        oji: "Mențiune, <b>Olimpiada Națională de Informatică</b>, etapa județeană"
      },
      2024: {
        oji: "Mențiune, <b>Olimpiada Națională de Informatică</b>, etapa județeană",
        tic: "Mențiune, <b>Olimpiada Națională de Tehnologia Informației</b>, secțiunea TIC, etapa județeană"
      },
      2022: {
        iwsc: "Mențiune, <b>Info Winter Speed Code</b>, etapa națională"
      }
    },
    projects: {
      title: "Proiecte",
      github: "Aplicații C++: Multe proiecte scrise de-a lungul a 8 ani de C++, publicate pe GitHub.",
      llm_tts: "Fine-tuning LLM local și TTS: Antrenarea și optimizarea modelelor de limbaj pe propriul hardware cu RoLlama prin Unsloth, plus sinteză vocală cu Piper TTS.",
      embedded_systems: "Automatizări Arduino și ESP32: Sisteme de automatizare construite pe plăci Arduino și ESP32, inclusiv programarea acestora.",
      "3dprinting": "Printare 3D: Modele personalizate prințate pentru prieteni și familie, unele descărcate și altele proiectate de mine, plus gravură pe lemn cu aceeași imprimantă. Mai multe pe instagram.com/3dprintingpn."
    },
    socials: {
      title: "Rețele de socializare"
    },
    footer: {
      copyright: "© Țuburlui Mihai. Toate drepturile rezervate."
    }
  }
};

function getTranslation(obj, path) {
  // complitcated shi
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
}

function changeLang(lang) {
  if (!translations[lang]) {
    console.log(`Language ${lang} not found!`)
    return;
  }

  document.documentElement.lang = lang.toLowerCase();
  document.getElementById("cv").href="res/cv_" + lang.toLowerCase() + ".pdf";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getTranslation(translations[lang], key);

    if (translation !== null)
      element.innerHTML = translation;
    else
      console.log(`[${lang}] ${key} not found!`)
  });
}

// Language :P

document.addEventListener("DOMContentLoaded", changeLang("EN"));

sLang.addEventListener("click", () => {
  sLang.id = "sLang";
  nLang.id = "nLang";
  changeLang(sLang.innerText)
});

nLang.addEventListener("click", () => {
  sLang.id = "nLang";
  nLang.id = "sLang";
  changeLang(nLang.innerText)
});