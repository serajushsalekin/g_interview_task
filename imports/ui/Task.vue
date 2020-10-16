<template>
  <tr>
    <td class="btn">
      <router-link :to="{name: 'student', params: {id: this.stu._id}}">
        <i class="fas fa-edit"></i>
      </router-link>
    </td>
    <td>
      <button class="btn" @click="deleteThisTask">
        <i class="far fa-trash-alt"></i>
      </button>
    </td>
    <td>
      {{ this.stu.name }}
    </td>
    <td>{{ this.stu.email }}</td>
    <td>{{this.stu.phone}}</td>
    <td>{{this.stu.dob}}</td>
    <td>{{ this.stu.subs ? this.stu.subs.map(item => item.name).toString() : '' }}</td>
  </tr>

</template>

<script>
import Multiselect from 'vue-multiselect'
import {Subjects, Students} from "../api/task.js";

export default {
  props: ["stu"],
  components: {
    Multiselect
  },
  data() {
    return {
      name: this.stu.name,
      email: this.stu.email,
      value: this.stu.sub,
      options: []
    };
  },
  mounted() {
    this.options = this.sub
  },
  methods: {
    deleteThisTask() {
      Students.remove(this.stu._id);
    }
  }
};
</script>
<style>
.inp {
  min-height: 40px;
  min-width: 100%;
  display: block !important;
  padding: 8px 40px 0 8px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 14px;
}
body {
  margin:0px;
  height:100vh;
  font-family:"Open Sans",sans-serif;
  background:linear-gradient(to right, #00acee, #205172);
}
.p-4{
  padding: 4px;
}
.m-2{
  margin: 2px;
}

#popup {
  position:fixed;
  top:0px;
  left:0px;
  width:100vw;
  height:100vh;
  background:rgba(0,0,0,0.75);
  display:none;
}
#popup .popup-content {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:400px;
  padding:10px 20px;
  background:#eee;
}
#popup a.close-popup {
  position:absolute;
  top:20px;
  right:20px;
  font-size:20px;
  font-weight:600;
  text-decoration:none;
}
#popup:target {
  display:block;
}
</style>