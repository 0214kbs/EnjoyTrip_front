<template>
  <div>
    <!-- Start Recent Work -->
    <section class="py-4 mt-6" id="Korea-trip">
      <div class="container">
        <div class="page-name">
          <span class="title">나의 일정</span>
          <button class="button_1" @click="showInsertModal">+</button>
        </div>
        <hr />
        <div class="card-container wrap">
          <div class="card" v-for="card in cards" :key="card.id">
            <div class="card-header">
              <h2 class="card-title">{{ card.title }}</h2>
            </div>
            <div class="card-body">
              <img :src="card.image" alt="Card Image" class="card-image" />
              <p class="card-text">{{ card.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Card 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          title: "Card 2",
          content: "Praesent non lorem ac ante commodo suscipit eget quis ipsum.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 3,
          title: "Card 3",
          content: "Sed at felis pretium, tempus tortor ac, elementum lacus.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 4,
          title: "Card 4",
          content: "Sed at felis pretium, tempus tortor ac, elementum lacus.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 4,
          title: "Card 4",
          content: "Sed at felis pretium, tempus tortor ac, elementum lacus.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 4,
          title: "Card 4",
          content: "Sed at felis pretium, tempus tortor ac, elementum lacus.",
          image: "https://via.placeholder.com/300",
        },
      ],
    };
  },
};
</script>

<style scoped>
span.title {
  font-size: 25px;
}
button.button_1 {
  border: 0;
  outline: none;
  font-size: 15px;
  background: #4298f3;
  color: #e7ecef;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
}
.page-name {
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
}
.card-container {
  display: flex;
  margin-left: 20px;
}
.card-container.wrap {
  flex-wrap: wrap;
}
.card {
  width: 250px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
}

.card-header {
  padding: 16px;
  border-bottom: 1px solid #ebebeb;
}

.card-title {
  font-size: 20px;
  color: #333333;
  margin: 0;
}

.card-body {
  padding: 16px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-text {
  margin-top: 8px;
  color: #666666;
  font-size: 14px;
  line-height: 1.4;
}
</style>
