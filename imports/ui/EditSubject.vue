<template>
  <div class="container">
    <h3>Edit Subject</h3>
    <form @submit="handleUpdate">
      <div class="form-group">
        <input
            v-model="name"
            type="text"
            class="form-control"
        >
<!--        <multiselect class="m-2" v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :multiple="true" :searchable="false" :allow-empty="false" :taggable="true" @tag="addTag">-->
<!--          <template slot="singleLabel" slot-scope="{ options }">{{ options.name }}</template>-->
<!--        </multiselect>-->
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>


</template>

<script>
import {Subjects} from "../api/task";

export default {
  name: "EditSubject",
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const id = this.$route.params.id
    const t = Subjects.find({_id: id}).fetch()
    if (id) this.name = t[0].name
  },
  methods: {
    handleUpdate(event) {
      Subjects.update({_id: this.$route.params.id},{
        name: this.name
      })
      return this.$router.history.push('/')
    }
  }
}
</script>
