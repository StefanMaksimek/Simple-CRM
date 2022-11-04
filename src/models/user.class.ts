export class User {
  userID: any;
  firstName!: any;
  lastName!: any;
  birthdate!: any;
  email!: any;
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
    this.userID = obj ? obj.userID : '';
  }

  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate,
      email: this.email,
      phone: this.phone,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      userID: this.userID,
    };
  }

  createID(length: number) {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength)); // adding one random character of characters to result
    }
    return result;
  }
}
