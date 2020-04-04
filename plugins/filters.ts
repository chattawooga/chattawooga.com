import Vue from "vue";
import { Moment } from "moment-timezone";

Vue.filter("date", (val: Moment) => val?.format ? val.format("L") : val);
Vue.filter("time", (val: Moment) => val?.format ? val.format("LT") : val);