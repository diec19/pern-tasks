import {useAuth} from '../context/AuthContext'
import {Card} from '../components/ui'

const ProfilePage = () => {

  const {user}=useAuth()
  return (
    <div>
      <Card>
      <pre>
          {JSON.stringify(user,null,2)}
      </pre>
      </Card>
      
    </div>
  )
}

export default ProfilePage