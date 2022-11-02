import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BaseService } from './base.service';
import { Sort } from '../../shared/constants';
import { InformationModel, InformationType } from '../models/InformationModel';
@Injectable({
  providedIn: 'root',
})
export class InformationService extends BaseService<InformationModel> {
  constructor(apiService: ApiService) {
    super(apiService, 'information');
  }

  getPlaces(): Promise<Array<InformationModel>> {
    return this.find({
      query: {
        type: InformationType.Location,
      },
    });
  }

  getRoles(): Promise<Array<InformationModel>> {
    return this.find({
      query: {
        $sort: {
          category: Sort.Ascending,
        },
        type: InformationType.Position,
      },
    });
  }

  getTechnologies(): Promise<Array<InformationModel>> {
    return this.find({
      query: {
        type: InformationType.Technology,
      },
    });
  }

  getIndustries(): Promise<Array<InformationModel>> {
    return this.find({
      query: {
        type: InformationType.Industry,
      },
    });
  }

  getRolesAndTechnologies(): Promise<Array<InformationModel>> {
    return this.find({
      query: {
        custom: true,
        type: {
          $in: [InformationType.Position, InformationType.Technology],
        },
      },
    });
  }
}
