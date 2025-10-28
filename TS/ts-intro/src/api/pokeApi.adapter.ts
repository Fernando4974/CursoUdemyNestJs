//SOLID

//Inyeccion de dependencias
//--->
//las clases de nuestra app no debe dependeder directamente de dependencias externas
//asi que debemos crear clases para cada dependecia externa y usar los metodos de
//esas clases creadas en las clases de nuestra app y no los metodos propios de las
//dependencias externas en caso de que estos metodos cambien, no afecte la clase de
//nuestra app, estas dependencias echas clases las vamos a ocultar como un atributo
//de la clase de la app, ejemplo:
//
//class claseApp
// constructor(){
//     private readonly http:ApiAxioAdapter -->este tipo contiene los metodos de
//  la dependecia externa Axio
// }
//
//complementa esta idea con el siguiente comentario -->

//Principio de sustitucion de liskov
//-->
//Las clases creadas, ahora son nuestras dependecias y las asignamos como atributos a la clase.
//Pero aun estan ancladas a la propia funcionalidad de una dependecia individiual {Axio}
//para esto debemos crear las clases de esas dependecias usando una interfaz para unificar
//los metodos y hacer que nuestras dependencias creadas se comporten todas de la misma forma
//

import axios from "axios";

export interface httpAdapter {
  get<T>(url: string): Promise<T>;
}
export class PokeApiFetchAdapter implements httpAdapter {

    //interfaz implementada
  async get<T>(url: string): Promise<T> {
        //logica individual de la dependecia
    const res = await fetch(url);
    const data = res.json();
    return data;
  }
}

export class PokeApiAdapter implements httpAdapter {
  private readonly axios = axios;
  //interfaz implementada
  // se le asigana un tipo a la funcion <T> y a su retorno <T> para que al implementar
  // permita usar lainterface propia dela api que y hemos creado en interfaces/pokeapi-response.interface.ts
  async get<T>(url: string): Promise<T> {
    //logica individual de la dependecia
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
