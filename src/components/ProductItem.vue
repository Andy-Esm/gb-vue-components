<template>
  <div class="product-item">
    <img :src="img" alt="Some img" />
    <div class="desc">
      <h3>{{ product.product_name }}</h3>
      <p>{{ product.price }}</p>
      <button class="buy-btn" @click="$parent.$emit('add-product', product)">
        Купить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product", "img"]
};
</script>

<style scoped></style>
