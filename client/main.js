import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from "vue-router";
import App from "../imports/ui/App";
import VueMeteorTracker from 'vue-meteor-tracker';
import Main from "../imports/ui/Main";
import EditSubject from "../imports/ui/EditSubject";
import EditStudent from "../imports/ui/EditStudent";
Vue.use(VueMeteorTracker);

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/:id', component: EditSubject},
  {path: '/student/:id', name: 'student', component: EditStudent}
]

const router = new VueRouter({ mode: "history", routes})
Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...Main
  })
});

