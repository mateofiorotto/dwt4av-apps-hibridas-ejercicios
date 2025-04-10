import fs from 'fs/promises';
const path = './users.json';

class UsersManager {
    users = [];
    constructor( users=[]){
        this.users = users;
    }
    randomID(){
        return crypto.randomUUID();
    }
    async setUser(user){
        try {
            await this.getUsers();
            user.id = this.randomID();
            this.users.push( user );
            const data = JSON.stringify(this.users, null, 2);
            
            await fs.writeFile(path, data);
            return user.id
        } catch (error) {
            console.error('No pudimos guardar el Usuarios');
        }
    }
    async getUsers(){
        try {
            const data = await fs.readFile(path, 'utf-8');
            this.users = JSON.parse(data);
            return this.users;
        } catch (error) {
            console.error('No pudimos leer los usuarios')
        }
    }
    async getUserById(id){
        const list = await this.getUsers();
        const users = list.find( item => item.id == id);
        return users ? users : undefined;
    }
    async deleteUserById(id) {
        await this.getUsers();
        const index = this.users.findIndex( u => u.id == id);
        if( index != -1){
            this.users.splice(index, 1);
            const data = JSON.stringify(this.users, null, 2);
            await fs.writeFile(path, data);
            return true
        } else {
            return false;
        }
    }
    async updateUserById(id, user) {
        await this.getUsers();
        const index = this.users.findIndex( u => u.id == id);
        if( index != -1){
            this.users[index].name = user.name;
            this.users[index].email = user.email;
            const data = JSON.stringify(this.users, null, 2);
            await fs.writeFile(path, data);
            return true
        } else {
            return false;
        }
    }
}
export default UsersManager;