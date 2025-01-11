import { Button } from '@auth0-nextjs-example/service-components';
import { useState } from 'react';

const ProtectedForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/api/articles/protected-post-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);
      setMessage(data.message);
    }

    if (response.status === 401) {
      setSubmitted(true);
      setMessage(data.message);
    }

    setEmail('');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">
        Protected Form
      </h1>
      <p className="mb-4 text-center">
        This requires you to be logged in to submit to the server.
        <br />
        When not logged in you will see an Unauthorised response.
      </p>
      {submitted ? (
        <div className="flex flex-col items-center">
          <p role="alert" aria-live="assertive" className="text-lg">
            {message}
          </p>
          <br />
          <Button onClick={() => setSubmitted(false)}>
            Retry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Protected Form',
    },
  };
}

export default ProtectedForm;