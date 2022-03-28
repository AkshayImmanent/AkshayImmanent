import { FC } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile: FC = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user as Exclude<typeof user, undefined>;

  return (
    <div className="container-fluid p-4">
      <h3> User Profile </h3>
      <div className="row">
        <pre className="col-12 rounded border border-4 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
