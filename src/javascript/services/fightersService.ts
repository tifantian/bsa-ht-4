import { callApi } from '../helpers/apiHelper';
import { IFighter, IFighterProperties } from '../../interfaces/interfaces';

class FighterService {
  async getFighters(): Promise<IFighter[]> {
    try {
      const endpoint = '/user';
      const apiResult = await callApi(endpoint, 'GET');
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id: string): Promise<IFighterProperties> {
    try {
      const endpoint = `/user/${_id}`;
      const apiResult = await callApi(endpoint, 'GET');
      return apiResult;
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();


// class FighterService {
//   async getFighters(): Promise<IFighter[]> {
//     try {
//       const endpoint = 'fighters.json';
//       const apiResult = await callApi(endpoint, 'GET');
//       return JSON.parse(atob(apiResult.content));
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getFighterDetails(_id: string): Promise<IFighterProperties> {
//     try {
//       const endpoint = `details/fighter/${_id}.json`;
//       const apiResult = await callApi(endpoint, 'GET');

//       return JSON.parse(atob(apiResult.content));
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// export const fighterService = new FighterService();
