const {RESTDataSource}  = require('apollo-datasource-rest'); //leer fuentes de datos de rest
const serverConfig      = require('../server'); //despliegues

class AuthAPI extends RESTDataSource{
   constructor() {
      super();
      this.baseURL = serverConfig.auth_api_url;
   }
 //'login/'
    async authRequest(credentials){
       credentials = new Object(JSON.parse(JSON.stringify(credentials)));
       return await this.post('/login/',credentials)
    }
 //'user/register'
    async createUser(user){
      user = new Object(JSON.parse(JSON.stringify(user)));
      return await this.post('/user/',user);
    }
 // 'userByToken'
   async getUserByToken(token){
      token = new Object(JSON.parse(JSON.stringify({ token: token })));
      return await this.post(`/userByToken/`, token);
    }
 // 'user/<int:pk>/'
   async getUser(userId){
      return await this.get(`/user/${userId}`);
    }
   async getBasicUser(userId){
      return await this.get(`/user/${userId}`);
    }
 // 'users/'
    async getAllUsers(){
      return await this.get(`/users/`);
    }
 // 'refresh/'
   async refreshToken(refresh) {
      refresh = new Object(JSON.parse(JSON.stringify({ refresh: refresh })));
      return await this.post(`/refresh/`, refresh);
   }
   //--------------------------------------------------------------------------
   // Get all drivers 
   async getAllDrivers(){
      return await this.get(`/drivers`)
   }
   // Get a car by driverID
   async getCarByDriverID(idDriver) {
      return await this.get(`/car-driver/${idDriver}`);
   }
   // Get all cars 
   async getAllCars(){
      return await this.get(`/cars`);
   }
} 

module.exports = AuthAPI