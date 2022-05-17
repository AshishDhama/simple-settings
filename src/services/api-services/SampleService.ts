import { baseApiService } from './BaseApiService';

class SampleService {
  static getInstance(): SampleService {
    return new SampleService();
  }

  async fetchList(data: any): Promise<any> {
    return baseApiService.post(`/sample/list`, data);
  }

  async fetchOne(id: number): Promise<any> {
    return baseApiService.get(`/sample/${id}`);
  }

  async create(data: any): Promise<any> {
    return baseApiService.post(`/sample`, data);
  }

  async update(id: number, data: any): Promise<any> {
    return baseApiService.put(`/sample/${id}`, data);
  }

  async delete(id: number): Promise<any> {
    return baseApiService.delete(`/sample/${id}`);
  }

  async clone(id: number): Promise<any> {
    return baseApiService.post(`/sample/${id}/clone`);
  }

  async bulkUpdate(data: any): Promise<any> {
    return baseApiService.put(`/sample`, data);
  }
}

export const sampleService = SampleService.getInstance();
