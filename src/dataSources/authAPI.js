const {RESTDataSource}  = require('apollo-datasource-rest'); //leer fuentes de datos de rest
const serverConfig      = require('../server'); //despliegues

class AuthAPI extends RESTDataSource{
    constructor(){
        super(); //iniciaciose la clase con los atributos de la clase padre
        this.baseURL    = serverConfig.auth_api_url;
    }
 //'login/'
    async authRequest(credentials){
       credentials = new Object(JSON.parse(JSON.stringify(credentials)));
       return await this.post('/login/',credentials)
    }
 //'user/'
    async createUser(user){
      user = new Object(JSON.parse(JSON.stringify(user)));
      return await this.post('/user/',user);
    }
 // 'user/<int:pk>/'
    async getUser(userId){
      return await this.get(`/user/${userId}/`);
    }
 // 'refresh/'
   async refreshToken(token){
      token = new Object(JSON.parse(JSON.stringify(token)));
      return await this.post('/refresh/',token);
   }

} 

module.exports = AuthAPI