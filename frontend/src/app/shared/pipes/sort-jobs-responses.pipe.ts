import { Pipe, PipeTransform } from '@angular/core';
import { JobResponseModel } from 'src/app/codinglab-api/models/JobResponseModel';
@Pipe({
  name: 'sortJobsResponses',
})
export class SortJobsResponsesPipe implements PipeTransform {
  transform(responses: JobResponseModel[], path: string[], order: number): JobResponseModel[] {
    // Check if is not null
    if (!responses || !path || !order) {
      return responses;
    }

    return responses.sort((a: JobResponseModel, b: JobResponseModel) => {
      // We go for each property followed by path
      path.forEach((property) => {
        a = a[property];
        b = b[property];
      });

      // Order * (-1): We change our order
      return a > b ? order : order * -1;
    });
  }
}
