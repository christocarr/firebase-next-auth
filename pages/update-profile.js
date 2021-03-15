import Layout from '../components/Layout/Layout';
import { UpdateEmailPassword } from '../components/Auth';
import UpdateProfileImage from '../components/UpdateProfileImage';
import { FormButton } from '../components/Form';
import { useRouter } from 'next/router';

function UpdateProfile() {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <FormButton onClick={() => router.push('/profile')}>Back</FormButton>
      </div>
      <UpdateEmailPassword />
    </Layout>
  );
}

export default UpdateProfile;
