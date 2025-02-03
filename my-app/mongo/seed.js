const Post = require('./post');
const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../config/db.config');


const PORT = process.env.NODE_DOCKER_PORT || 8080;


async function seedDB() {
  try {
    if (process.env.DB_HOST) {
      await mongoose.connect(db.url);
      console.log('Connected to database');

      await Post.deleteMany({});
      console.log('Database cleared');

      let posts = [];
      for (let i = 0; i < 100; i++) {
        posts.push({
          title: faker.random.words(),
          body: faker.lorem.paragraphs(),
        });
      }

      await Post.insertMany(posts);
      console.log("Database seeded with 100 records");
    }
  } catch (err) {
    console.error(err);
  } 
}

module.exports = seedDB;