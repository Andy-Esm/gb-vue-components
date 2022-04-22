<template>
  <div class="products">
    <product-item
      v-for="item of products"
      :key="item.id_product"
      :img="img"
      :product="item"
    ></product-item></div
></template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  name: "ProductList",
  props: ["products", "img"],
  components: { ProductItem }
};
</script>

<style scoped></style>
