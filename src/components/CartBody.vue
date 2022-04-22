<template>
  <div class="cart-block" v-show="visibility">
    <cart-item
      v-for="item of cartItems"
      :key="item.id_product"
      :img="img"
      :cart-item="item"
    >
    </cart-item>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
export default {
  name: "CartBody",
  props: ["cartItems", "img", "visibility"],
  components: { CartItem }
};
</script>

<style scoped></style>
