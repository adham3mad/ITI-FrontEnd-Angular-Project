export class AuthService{
    logout(){
        localStorage.removeItem("token")
      }
      login(){
        localStorage.setItem("token","ahmed")
      }
}