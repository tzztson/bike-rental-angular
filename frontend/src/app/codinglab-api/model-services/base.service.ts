import { Service } from '@feathersjs/feathers';
import { ApiService } from '../api.service';

export class BaseService<Type> {
  service: Service<any>;
  apiService: ApiService;
  constructor(apiService: ApiService, serviceName: string) {
    this.service = apiService.createService(serviceName);
  }

  get(id: number): Promise<any> {
    return this.service.get(id);
  }

  create(model: Type): Promise<any> {
    return this.service.create(model);
  }

  update(id: number, model: Type): Promise<any> {
    return this.service.update(id, model);
  }

  patch(id: number, model: Partial<Type>): Promise<any> {
    return this.service.patch(id, model);
  }

  find(params: any = {}): Promise<any> {
    return this.service.find(params);
  }

  remove(id: number) {
    return this.service.remove(id);
  }
}
