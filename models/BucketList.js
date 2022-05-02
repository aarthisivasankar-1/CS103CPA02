'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var BucketListSchema = Schema( {
  userId: ObjectId,
  title: String,
  description:String,
  location: String,
  completed: Boolean,
  createdAt: Date,
} );

module.exports = mongoose.model( 'BucketList', BucketListSchema );
