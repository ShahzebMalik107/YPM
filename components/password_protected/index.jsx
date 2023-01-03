import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "../../consts"

const PasswordProtected = ({ redirectPath }) => {
  const [password, setPassword] = useState("")
  return (
    <div style={{marginTop: '150px',display:'flex',justifyContent:'center',marginBottom: '50px'}}>
      <form>
        <label style={{display: 'block' ,maxWidth:'500px'}}>
          <span style={{fontWeight: '700'}}>Password </span>
          <input
            type="text"
            style={{width: '100%',padding:'15px 10px',margin:'10px 0px', borderRadius:'5px'}}
            placeholder="Your site password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          style={{background: '#04AA6D', border:'none' ,padding: '10px 25px' ,borderRadius:'3px'}}
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: "/",
            })
            window.location.href = redirectPath ?? "/talent"
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default PasswordProtected