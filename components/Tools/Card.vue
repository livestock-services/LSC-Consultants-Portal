<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <div class="card my-4 px-2">
              Cattle
          </div>

          <div class="card my-4 px-2">
              Goats
          </div>

          <div class="card my-4 px-2">
              Sheep
          </div>

          <div class="card my-4 px-2">
              Pigs
          </div>

          <div class="card my-4 px-2">
              Dogs & Cats
          </div>

        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  props: {
    title: 'Records',
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
