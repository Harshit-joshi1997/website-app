const { MongoClient } = require('mongodb');
const { ChatGPTAPI } = require('chatgpt');
const openai = require('openai'); // Assuming 'openai' is a wrapper for OpenAI's API

// MongoDB connection
const client = new MongoClient('your_mongodb_connection_string');
await client.connect();
const db = client.db('your_database');
const collection = db.collection('your_collection');

// OpenAI API initialization
openai.apiKey = 'your_openai_api_key';

// ChatGPT API initialization
const chatgpt = new ChatGPTAPI({
  apiKey: 'your_openai_api_key',
});

// Example function to handle user queries
async function handleUserQuery(userQuery) {
  // Generate a MongoDB query using ChatGPT
  const chatResponse = await chatgpt.sendMessage(userQuery);
  const generatedQuery = chatResponse.text;

  // Execute the generated query on MongoDB
  const results = await collection.find(JSON.parse(generatedQuery)).toArray();
  return results;
}
