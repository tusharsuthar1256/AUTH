// src/appwrite.js

import { Client, Account, ID } from 'appwrite';

// Initialize the client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

// Initialize the account service
const account = new Account(client);

export { client, account, ID };
