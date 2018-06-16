<template>
  <div class="Navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/sns">SNS</a></li>
      <li><a href="/privacy">プライバシーポリシー</a></li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.Navbar
  position: fixed
  width: 100vw
  top: 0

ul
  list-style-type: none
  margin: 0
  padding: 0
  overflow: hidden
  background-color: #333

li
  float: left

li a
  display: block
  color: white
  text-align: center
  padding: 14px 16px
  text-decoration: none

li a:hover
  background-color: #111
</style>
