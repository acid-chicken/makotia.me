<template>
  <section>
    <div>
      <navbar/>
      <div class="container">
        <div>
          <h1 class = "title">
            SNS
          </h1>
          <div class="links">
            <a
              href="https://github.com/mak0tia"
              target="_blank"
              class="btn btn-github">GitHub</a>
            <a
              href="https://twitter.com/hs6a"
              target="_blank"
              class="btn btn-twitter">Twitter</a>
            <a
              href="https://theboss.tech/@makotia"
              target="_blank"
              class="btn btn-mstdn">theboss.tech(ボス鯖)</a>
            <a
              href="https://mstdn.maud.io/@makotia"
              target="_blank"
              class="btn btn-mstdn">mstdn.maud.io(:don:)</a>
            <a
              href="https://mstdn.inct-densan.club/@makotia"
              target="_blank"
              class="btn btn-mstdn">mstdn.inct-densan.club(電算丼)</a>
            <a
              href="https://t.me/makotia"
              target="_blank"
              class="btn btn-telegram">Telegram</a>
            <a
              href="https://www.facebook.com/mak0tia"
              target="_blank"
              class="btn btn-facebook">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass" scoped>
.container
  min-height: 100vh
  max-height: 100vh
  max-width: 100vw
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.btn
  display: inline-block
  border-radius: 4px
  text-decoration: none
  padding: 10px 30px
  margin: 5px
  &:hover
    color: #fff

.btn-github
  border: 1px solid #333
  color: #333
  &:hover
    background-color: #333

.btn-twitter
  border: 1px solid #1da1f2
  color: #1da1f2
  &:hover
    background-color: #1da1f2

.btn-mstdn
  border: 1px solid #282c37
  color: #282c37
  &:hover
    background-color: #282c37

.btn-telegram
  border: 1px solid #0088cc
  color: #0088cc
  &:hover
    background-color: #0088cc

.btn-facebook
  border: 1px solid #3b5998
  color: #3b5998
  &:hover
    background-color: #3b5998
</style>
