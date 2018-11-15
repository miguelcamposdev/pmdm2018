export class Usuario {
    email: string;
    username: string;
    photoUrl: string;
    age: number;

    constructor(email: string, username: string, photoUrl: string, age: number) {
        this.email = email;
        this.username = username;
        this.photoUrl = photoUrl;
        this.age = age;
    }
}
