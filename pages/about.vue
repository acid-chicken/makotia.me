<template>
  <section>
    <div>
      <navbar/>
      <div class="wrapper" id="top">
        <div class="container-left">
          <img src="~assets/makotia_icon.png" class="icon" height="300px">
        </div>
        <div class="container-right">
          <div>
            <h2 class="title">makotia (Makoto Ito)</h2>
            <div>
              <p>岩手県盛岡市出身・在住の自称学生エンジニア</p>
              <p>一関高専に通っている</p>
              <p>2002年に生まれたので永遠に成人できない</p>
              <a href="mailto:f17011@g.ichinoseki.ac.jp" class="btn btn-require-me">採用する</a>
              <a href="#carrer" class="btn btn-more">もう少し詳しく知る</a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper" id="likes">
        <div class="container-left">
          <img src="~assets/heart.svg" class="icon" height="300px">
        </div>
        <div class="container-right">
          <div>
            <h2 class="title">Likes</h2>
            <div>
              <ul>
                <li>松屋</li>
                <li>ガジェット</li>
                <li>音楽</li>
                <li>Vim</li>
                <li>スマートフォン</li>
                <li>カメラ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper" id="more">
        <div class="container-left">
          <img src="~assets/skill.svg" class="icon" height="300px">
        </div>
        <div class="container-right" id="skills">
          <div>
            <h2 class="title">Skills</h2>
            <div>
              <ul>
                <li>Ruby</li>
                <li>Node.js</li>
                <li>Ubuntu</li>
                <li>Docker</li>
                <li>Microsoft Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container" id="carrer">
          <div>
            <h2 class="title center">Career</h2>
            <div class="desk">
              <h4 class="yr">2017年</h4>
              <h5 class="mo">4月</h5>
              <p class="hist">一関高専未来創造工学科入学</p>
              <h5 class="mo">10月</h5>
              <p class="hist"><a target="_blank" href="http://www.procon.gr.jp/?page_id=59121">全国高等専門学校プログラミングコンテスト</a>課題部門に出場、特別賞を受賞</p>
              <h5 class="mo">12月</h5>
              <p class="hist"><a target="_brank" href="http://www.kosen-venture.com/">高専ベンチャー社</a>インターンに参加、<a target="_brank" href="https://lab.makotia.me">labmatching</a>という研究室ベースで大学編入を支援するシステムを開発</p>
              <p class="hist">部活用mastodonインスタンス<a href="https://mstdn.inct-densan.club">電算丼</a>をオンプレミス環境に構築。この頃より部内インフラをメインで担当するようになる</p>
              <h4 class="yr">2018年</h4>
              <h5 class="mo">4月</h5>
              <p class="hist">留年したためもう一度1年生</p>
              <p class="hist">オンプレミス環境で稼働させていた部活用mastodonインスタンス<a href="https://mstdn.inct-densan.club">電算丼</a>をAzureにデータ損失0、ダウンタイム数秒で移行</p>
              <div class="center">
                <p>高専プログラミングコンテストにてWeb技術、部活動でインフラの知識を蓄え、今に至る</p>
                <a href="mailto:f17011@g.ichinoseki.ac.jp" class="btn btn-require-me">採用する</a>
                <a href="/" class="btn btn-top">採用しないでトップに戻る</a>
              </div>
            </div>
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
li
  word-break: normal
  margin: 10px
  line-height: 1.5em
  font-size: 120%

.container
  min-height: 100vh
  max-height: 100vh
  max-width: 100vw
  display: flex
  justify-content: center
  align-items: center

.icon
  border-radius: 50%
  @media only screen and (max-width: 911px)
    max-width: 200px
    max-height: 200px

.btn-require-me
  border: 1px solid #d80073
  color: #d80073
  &:hover
    background-color: #d80073
    color: #fff

.btn-more
  border: 1px solid #0050ef
  color: #0050ef
  &:hover
    background-color: #0050ef
    color: #fff

.btn-top
  border: 1px solid #6a00ff
  color: #6a00ff
  &:hover
    background-color: #6a00ff
    color: #fff
.yr
  color: #00aba9
  font-size: 300%

.mo
  margin-left: 15px
  color: #008a00
  font-size: 200%

.hist
  margin-left: 30px

.center
  text-align: center
  content-align: center
</style>
