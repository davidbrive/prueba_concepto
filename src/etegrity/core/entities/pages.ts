// Especifica los datos y su tipado, para las instancias de las pantallas

export interface Pages {
  id_type_page: number;
  id_section: number;
  information: Array<any>;
  test_id: number;
  candidate_id: number;
}
export interface PageFields {
  title: boolean;
  image: boolean;
  text: boolean;
  questions: boolean;
}
