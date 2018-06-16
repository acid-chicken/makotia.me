<template>
  <section class="container">
    <div>
      <MakotiaIcon/>
      <h1 class="title">
        makotia (Makoto Ito)
      </h1>
      <h2 class="alert">このWebページはモバイルには最適化されていません。PCやタブレットなどで御覧ください。</h2>
      <div class="links">
        <a
          href="/about"
          class="btn btn-about">About</a>
        <a
          href="/sns"
          class="btn btn-sns">SNS</a>
      </div>
    </div>
  </section>
</template>

<script>
import MakotiaIcon from '~/components/MakotiaIcon.vue'

export default {
  components: {
    MakotiaIcon
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

.alert
  display: none
  @media only screen and (max-width:960px)
    display: inline
    color: #a20025
    font-size: 200%

.links
  padding-top: 15px

.btn-about
  border: 1px solid #d80073
  color: #d80073
  &:hover
    background-color: #d80073
    color: #fff

.btn-sns
  border: 1px solid #00aba9
  color: #00aba9
  &:hover
    background-color: #00aba9
    color: #fff
</style>
