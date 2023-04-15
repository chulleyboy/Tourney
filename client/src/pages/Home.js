import React from 'react';
import { useQuery } from '@apollo/client';

import TourneyList from '../components/TourneyList';
import TourneyForm from '../components/TourneyForm';

import { QUERY_TOURNEYS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TOURNEYS);
  const tourneys = data?.tourneys || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TourneyForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TourneyList
              tourneys={tourneys}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
