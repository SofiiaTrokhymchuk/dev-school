import { Injectable, PipeTransform } from '@nestjs/common';
import { CustomersRepository } from 'src/models/customers/customers.repository';
import { NotFoundException } from '../exceptions/not-found.exception';

@Injectable()
export class CustomerExistsPipe implements PipeTransform {
  constructor(private repository: CustomersRepository) {}

  async transform(id: number) {
    const customer = await this.repository.getById(id);

    if (!customer) throw new NotFoundException();

    return id;
  }
}
