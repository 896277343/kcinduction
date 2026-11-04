import type { Locale } from "./config";

export const messages = {
  en: { skip: "Skip to main content", language: "Language", discuss: "Discuss your project", website: "Website", rights: "All rights reserved.", home: "Home", products: "Products", solutions: "Solutions", whyInduction: "Why Use Induction", whyUs: "Why Us", industries: "Industries", contact: "Contact", fifthGeneration: "5th Generation" },
  ar: { skip: "انتقل إلى المحتوى الرئيسي", language: "اللغة", discuss: "ناقش مشروعك", website: "الموقع", rights: "جميع الحقوق محفوظة.", home: "الرئيسية", products: "المنتجات", solutions: "الحلول", whyInduction: "لماذا التسخين بالحث", whyUs: "لماذا نحن", industries: "القطاعات", contact: "اتصل بنا", fifthGeneration: "الجيل الخامس" },
  ru: { skip: "Перейти к основному содержанию", language: "Язык", discuss: "Обсудить ваш проект", website: "Сайт", rights: "Все права защищены.", home: "Главная", products: "Продукция", solutions: "Решения", whyInduction: "Почему индукция", whyUs: "Почему мы", industries: "Отрасли", contact: "Контакты", fifthGeneration: "5-е поколение" },
  es: { skip: "Ir al contenido principal", language: "Idioma", discuss: "Hablemos de su proyecto", website: "Sitio web", rights: "Todos los derechos reservados.", home: "Inicio", products: "Productos", solutions: "Soluciones", whyInduction: "Por qué la inducción", whyUs: "Por qué nosotros", industries: "Industrias", contact: "Contacto", fifthGeneration: "5.ª generación" },
  de: { skip: "Zum Hauptinhalt springen", language: "Sprache", discuss: "Projekt besprechen", website: "Website", rights: "Alle Rechte vorbehalten.", home: "Startseite", products: "Produkte", solutions: "Lösungen", whyInduction: "Warum Induktion", whyUs: "Warum wir", industries: "Branchen", contact: "Kontakt", fifthGeneration: "5. Generation" },
  ko: { skip: "본문으로 이동", language: "언어", discuss: "프로젝트 상담", website: "웹사이트", rights: "모든 권리 보유.", home: "홈", products: "제품", solutions: "솔루션", whyInduction: "유도가열을 선택하는 이유", whyUs: "KC를 선택하는 이유", industries: "산업", contact: "문의", fifthGeneration: "5세대" },
} satisfies Record<Locale, Record<string, string>>;

export type MessageKey = keyof typeof messages.en;
