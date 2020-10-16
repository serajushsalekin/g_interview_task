import { Mongo } from 'meteor/mongo'

export const Students = new Mongo.Collection('students')

export const Subjects = new Mongo.Collection('subjects')