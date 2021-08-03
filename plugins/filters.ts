import Vue from "vue";
import moment from "moment-timezone";

Vue.filter("date", (val: string) => moment.tz(val, "America/New_York").format("L"));
Vue.filter("time", (val: string) => moment.tz(val, "America/New_York").format("LT"));
Vue.filter("newline", (val: string) => val.replace("\n", "<br />"));