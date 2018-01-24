'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NewsFeedSchema = new Schema({
    userAvatar: {
        type: String,
      },
      author: {
        type: String,
      },
      imageUp: {
        type: String,
      },
      numLike: {
        type: Number,
      },
      time: {
        type: Date,
        default: Date.now
      },
      description: {
        type: String,
      },
      level: {
        type: String,
      },
      numComment: {
        type: Number,
      },
      commentList:[{
          imageAvatar: String,
          comment: String
      }],
})


var TaskSchema = new Schema({
  userId:{
    type: String,
  },
  avatar:{
    type: String,
  },
  name:{
    type: String,
  },
  numFollow:{
    type: Number
  },
  listNews:[{
    newsFeed: NewsFeedSchema
  }]
 
});

module.exports = mongoose.model('Tasks', TaskSchema);