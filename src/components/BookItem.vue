<template>
  <div class="book-container">
    <span class="img">
      <router-link :to="'/book/' + book?.id">
        <img :src="book?.image" alt="" />
      </router-link>
    </span>
    <div class="bookDetails">
      <h3>
        <router-link style="text-decoration: none; color: inherit" :to="'/book/' + book?.id">{{
          book?.title
        }}</router-link>
      </h3>
      <div class="authors">
        <p v-for="author of book?.authors" :key="author + Date.now()">
          {{ author }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IEntity } from "@/types";

const props = defineProps({
  book: Object as () => IEntity.Book.Single,
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.book-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid #17bb7f;
  width: 300px;
  height: 450px;
  background-color: #f3f3f3;
  padding: 20px;
  font-family: sans-serif;
  border-radius: 8px;
}

.bookDetails {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
}

.img {
  height: 80%;
  width: 100%;
  background-color: #17bb7f;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 8px 23px 0px rgba(66, 184, 131, 0.88);
  -webkit-box-shadow: 0px 8px 23px 0px rgba(66, 184, 131, 0.88);
  -moz-box-shadow: 0px 8px 23px 0px rgba(66, 184, 131, 0.88);
  transition: all 0.3s ease;
}

.img:hover {
  box-shadow: 0px 12px 40px 13px rgba(66, 184, 131, 0.47);
  -webkit-box-shadow: 0px 12px 40px 13px rgba(66, 184, 131, 0.47);
  -moz-box-shadow: 0px 12px 40px 13px rgba(66, 184, 131, 0.47);
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.img img:hover {
  scale: 1.05;
}

h3 {
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  color: #066f48;
  text-overflow: ellipsis;
  text-align: start;
  width: 200px;
}

.authors {
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px; /* Adjust the width to your desired value */
}

p {
  font-size: 18px;
  color: rgb(75, 75, 75);
}

@media screen and (max-width: 1790px) {
  .book-container {
    width: 350px;
    height: 380px;
  }
}

@media screen and (max-width: 1680px) {
  .book-container {
    width: 330px;
  }

  h3,
  .authors {
    width: 250px;
  }
}

@media screen and (max-width: 1500px) {
  .book-container {
    width: 300px;
  }
}

@media screen and (max-width: 1050px) {
  .book-container {
    width: 300px;
  }

  h3 {
    width: 180px;
  }

  .authors {
    width: 100px;
  }
}

@media screen and (max-width: 900px) {
  .book-container {
    width: 250px;
    height: 380px;
  }
}
</style>
