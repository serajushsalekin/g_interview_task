<template>
  <tr>
    <td>
      <router-link :to="this.sub._id">
        <i class="fas fa-edit"></i>
      </router-link>
    </td>
    <td>
      <button class="btn" @click="deleteThisTask">
        <i class="far fa-trash-alt"></i>
      </button>
    </td>
    <td>
      {{ this.sub.name }}
    </td>
  </tr>

</template>

<script>
import {Students, Subjects} from "../api/task";

export default {
name: "subject",
  props: ["sub"],
  data() {
  return {
    name: ""
  }
  },
  methods : {
    deleteThisTask() {
      Subjects.remove(this.sub._id);
    }
  }

}
</script>
