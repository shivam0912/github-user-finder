/* eslint-disable react/prop-types */
import React from 'react';

function Repository({ repo }) {
  return (
    <div className="border border-black w-full p-4 mb-4 rounded bg-white">
      <h3 className="text-lg font-bold mb-2">{repo.name}</h3>
      <p className="text-gray-600">{repo.language}</p>
      <p className="text-blue-500">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          Repository URL
        </a>
      </p>
      <p className="text-gray-700">{repo.description || 'N/A'}</p>
      <p>Fork Count: {repo.fork_count}</p>
    </div>
  );
}

export default Repository;
