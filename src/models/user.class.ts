export class User {
  firstName!: string;
  lastName!: string;
  birthdate!: string;
  email!: string;
  phone!: number;
  street!: string;
  zipCode!: number;
  city!: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthdate = obj ? obj.birthdate : '';
    this.email = obj ? obj.email : '';
    this.phone = obj ? obj.phone : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }
}
