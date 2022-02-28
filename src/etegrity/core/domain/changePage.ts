import { PageFields } from "../entities/pages";

export function getNextPageType(sectionId: number): PageFields {
  // Esta funcion define e tipo de pagina a mostrar
  if (sectionId === 1) {
    //instrucciones
    return {
      title: true,
      image: true,
      text: true,
      questions: false,
    };
  } else if (sectionId === 2) {
    //historia
    return {
      title: false,
      image: true,
      text: true,
      questions: false,
    };
  } else if (sectionId === 3) {
    // historia y preguntas
    return {
      title: false,
      image: true,
      text: true,
      questions: true,
    };
  } else if (sectionId === 4) {
    return {
      title: false,
      image: false,
      text: true,
      questions: false,
    };
  } else {
    return {
      title: false,
      image: false,
      text: false,
      questions: false,
    };
  }
}
