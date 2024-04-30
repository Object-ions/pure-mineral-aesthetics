import React from 'react';

const Credits = () => {
  return (
    <div>
      {' '}
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <h3>Credits</h3>
        <p>
          Special thanks to the following companies for allowing the use of
          their product information and images:
        </p>
        <ul>
          <li>
            <a
              href="https://www.laprairie.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LA Prairie
            </a>
            - for their product information and images.
          </li>
          <li>
            <a
              href="https://laparfaitcosmetics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              La Parfait Skincare
            </a>
            - for their hero image.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credits;
