import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getcategories() {
    return ['Mobile', 'Tablet ', 'Desktop'];
  }
}
