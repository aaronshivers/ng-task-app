export class User {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public username: string,
    public id?: number,
  ) {}
}
