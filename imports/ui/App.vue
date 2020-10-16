<template>
  <div class="row">
    <div class="container">
      <header>
        <h1>Student Form</h1>
        <form class="new-task" @submit.prevent="handleSubmit">
          <input
              type="text"
              placeholder="Type Student Name"
              v-model="stu_name"
          />
          <input
              type="email"
              placeholder="Type Email"
              v-model="email"
          />
          <input
              type="text"
              placeholder="Type Phone Number"
              v-model="phone"
          />
          <input
              type="date"
              placeholder="Type DOB"
              v-model="dob"
          />
          <input type="submit" value="save" />
        </form>
      </header>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Remove</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
          <th scope="col">Subjects</th>
        </tr>
        </thead>
        <tbody>
          <Task v-for="stu in students" v-bind:key="stu._id" v-bind:stu="stu" />
        </tbody>
      </table>
    </div>
    <div class="container">
      <header>
        <h1>Add Subject</h1>
        <form class="new-task" @submit.prevent="addSub">
          <input
              type="text"
              placeholder="enter subject name"
              v-model="name"
          />
          <input
              type="submit"
              value="save"
          />
        </form>
      </header>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Remove</th>
          <th scope="col">Name</th>
        </tr>
        </thead>
        <tbody>
        <Subject v-for="sub in subjects" v-bind:key="sub._id" v-bind:sub="sub" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Task from "./Task.vue"
import Subject from "./Subject";
import {Subjects, Students} from "../api/task.js"

export default {
  components: {
    Task, Subject, Multiselect
  },
  data() {
    return {
      stu_name: "",
      email: "",
      phone: "",
      dob: "",
      name: "",
    }
  },
  methods: {
    handleSubmit(event) {
      Students.insert({
        name: this.stu_name,
        email: this.email,
        phone: this.phone,
        dob: this.dob,
        createdAt: new Date() // current time
      });
      // Clear form
      this.stu_name = "";
      this.email = ""
    },
    addSub(e) {
      Subjects.insert({
        name: this.name,
        createdAt: new Date()
      })
      this.name = ""
    }
  },
  meteor: {
    students() {
      return Students.find({}, { sort: { createdAt: -1 } }).fetch()
    },
    subjects() {
      return Subjects.find({}, { sort: { createdAt: -1 } }).fetch();
    }
  }
};
</script>
