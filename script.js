const jwt = require('jsonwebtoken');

// Secret key used to sign and verify the token
const secretKey = 'your-secret-key'; // Replace this with a secure key, do not hardcode in production!

// Encrypt function to generate the token from a payload
const encrypt = (payload) => {
  // Sign the payload and create a token
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token will expire in 1 hour
  return token;
};

// Decrypt function to decode the token and get the payload
const decrypt = (token) => {
  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, secretKey);
    return decoded; // Return the decoded payload if the token is valid
  } catch (error) {
    // Handle any error (e.g., token is invalid or expired)
    console.error('Invalid or expired token:', error);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};
