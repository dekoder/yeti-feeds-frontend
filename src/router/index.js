import Vue from "vue";
import VueRouter from "vue-router";
import ObservableSearch from "../views/ObservableSearch.vue";
import ObservableList from "../views/ObservableList.vue";
import ObservableDetails from "../views/ObservableDetails.vue";
import FeedList from "../views/FeedList.vue";
import ExportList from "../views/ExportList.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "ObservableSearch",
    component: ObservableSearch
  },
  {
    path: "/browse",
    name: "ObservableList",
    component: ObservableList,
    props: route => {
      return {
        searchQuery: route.query.q
      };
    }
  },
  {
    path: "/observable/:id([a-z0-9]{24})",
    name: "ObservableDetails",
    component: ObservableDetails,
    props: true
  },
  {
    path: "/feeds",
    name: "Feeds",
    component: FeedList
  },
  {
    path: "/exports",
    name: "Exports",
    component: ExportList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
