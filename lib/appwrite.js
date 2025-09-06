import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // API Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID); // Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export default client;
