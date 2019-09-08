import { BaseEntity } from 'src/model/base-entity';

export class NewUser implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public companyName?: string,
        public price?: string,
        public email?: string,
    ) {
    }
}
