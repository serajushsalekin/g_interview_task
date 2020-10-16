<template>
  <div class="container">
    <h3>Edit Student Data</h3>
    <form @submit="handleUpdate">
      <div class="form-group">
        <input
            v-model="name"
            type="text"
            class="form-control"
        >
      </div>
      <div class="form-group">
        <input
            class="form-control"
            type="text"
            v-model="email"
        />
      </div>
      <div class="form-group">
        <input
            class="form-control"
            type="text"
            placeholder="Type Phone Number"
            v-model="phone"
        />
      </div>
      <div class="form-group">
        <input
            class="form-control"
            type="date"
            placeholder="Type DOB"
            v-model="dob"
        />
      </div>
      <div class="form-group">
        <multiselect v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :multiple="true" :searchable="false" :allow-empty="false" :taggable="true" @tag="addTag">
          <template slot="singleLabel" slot-scope="{ options }">{{ options.name }}</template>
        </multiselect>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>


</template>
<script>
import Multiselect from 'vue-multiselect'
import {Subjects, Students} from "../api/task.js";


export default {
name: "EditStudent",
  components: {
    Multiselect
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      dob: '',
      value: null,
      options: []
    };
  },
  mounted() {
    const id = this.$route.params.id
    const t = Students.find({_id: id}).fetch()
    this.options = this.subs
    if (id) {
      this.name = t[0].name
      this.email = t[0].email
      this.phone = t[0].phone
      this.dob = t[0].dob
      this.value = t[0].subs
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    handleUpdate(event) {
      const id = this.$route.params.id
      Students.update({_id: id},{
        name: this.name,
        email: this.email,
        phone: this.phone,
        dob: this.dob,
        subs: this.value
      })
      return this.$router.history.push('/')
    },
  },
  meteor: {
    subs() {
      return Subjects.find({}, { sort: { createdAt: -1 } }).fetch();
    }
  }
}
</script>
