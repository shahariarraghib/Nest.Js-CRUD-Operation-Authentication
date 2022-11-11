import { Injectable } from '@nestjs/common';


export type User = {
id: Number;
name: String;
userName: String;
password: String
}

@Injectable()
export class UsersService {

    private readonly Users:User[] =[
        {
            id: 1,
            name: "admin",
            userName: "adminadmin",
            password: "admin12345" 
        },
        {
            id: 2,
            name: "admin2",
            userName: "adminadmin2",
            password: "admin212345" 
        }
    ]

    async findOne(userName: String): Promise<User | undefined>{
        return this.Users.find(user => user.userName === userName)
    }
}
