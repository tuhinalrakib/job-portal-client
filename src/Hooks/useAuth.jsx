import { use } from "react"
import AuthContext from "../contexts/AuthContext"


const useAuth = ()=>{
    const auth = use(AuthContext)
    if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return auth
}

export default useAuth;