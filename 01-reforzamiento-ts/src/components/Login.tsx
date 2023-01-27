import { useReducer, useEffect } from "react"

interface AuthState {
  validate: boolean;
  token: string | null;
  username: string;
  name: string
}

const initialState: AuthState = {
  validate: true,
  token: null,
  username: '',
  name: ''
}

type LoginAction = { username: string, name: string }
type Authaction = { type: 'logout' } | { type: 'login', payload: LoginAction }

const authReducer = (state: AuthState, action: Authaction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validate: false,
        token: null,
        username: '',
        name: ''
      };
    case 'login':
      const { name, username } = action.payload
      return {
        validate: false,
        token: 'AAAA123',
        name: name,
        username: username
      }
    default:
      return state;
  }
}


export const Login = () => {
  const [{ validate, token, name }, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout', })
    }, 1500);
  }, [])

  if (validate) {

    return <>
      <div className="alert alert-info">
        Loading...
      </div>
    </>
  }

  const login = () => {
    dispatch({ type: 'login', payload: { name: 'Luis', username: 'MrLACC' } })
  }
  const logout = () => {
    dispatch({ type: 'logout' })
  }
  return (
    <div>
      <h3>Login</h3>
      {token
        ? <div className="alert alert-success">Autenticado : {name}</div>
        : <div className="alert alert-danger">No autenticado</div>}

      {token
        ? <button className="btn btn-danger" onClick={logout}>Logout</button>
        : <button className="btn btn-primary" onClick={login}>Login</button>
      }
    </div>
  )
}
