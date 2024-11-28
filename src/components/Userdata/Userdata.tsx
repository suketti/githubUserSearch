import { userType } from '../../type/type'
import './userdata.css'

type userProps = {
    user: userType;
}

const Userdata = ({user}: userProps) => {
  return (
    <div className='user-card'>
        <div className='user-top'>
            <img className='avatar' src={user.avatar_url}>
            </img>
        </div>
        <div className='userinfo'>
            <div className='userinfo-inner'>
                <h2>{user.name}</h2>
            </div>
        </div>
        <div className='user-middle'>

        </div>
        <div className='user-bottom'></div>
    </div>
  )
}

export default Userdata
