<template>
  <section id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fubookclub.appspot.com/o/sld1.jpg?alt=media&token=7f82dd89-57af-401e-b623-37f081b596cb"
          class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fubookclub.appspot.com/o/sld2.jpg?alt=media&token=38034a10-39ea-43f8-af6f-baffea5f1734"
          class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fubookclub.appspot.com/o/sld3.jpg?alt=media&token=38ec97e9-d5c7-477f-8427-4c611fe068f6"
          class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </section>
</template>

<script>
export default {
  name: "HomePageSlideShow",
  computed: {
    baseURL() {
      return process.env.baseURL;
    }
  },
}
</script>

