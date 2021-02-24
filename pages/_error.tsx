import { NextPage } from 'next';
import Layout from '../components/Layout'

const ErrorPage: NextPage = () => (
  <Layout title="404 Not Found">
    <p>
      <h1>404 Not Found</h1>
    </p>
  </Layout>
);

export default ErrorPage;
