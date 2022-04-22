import { createApp } from "vue";
import App from "./App.vue";
import FilterProducts from "@/components/FilterProducts";
import CartBody from "@/components/CartBody";
import ProductList from "@/components/CartItem";

const app = createApp(App);
//global

app.component("filter-products", FilterProducts);
app.component("cart-body", CartBody);
app.component("product-list", ProductList);
app.mount("#app");
