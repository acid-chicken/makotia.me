<template>
  <section>
    <div>
      <navbar/>
      <div class="container">
        <h1 class = "title">プライバシーポリシー</h1>
      </div>
      <div class="container">
        <div>
          <p>お客様は、Google が個人情報として使用または認識できる情報を Google に送信したり、第三者によるかかる行為を支援または許可したりしないものとします。お客様は適切なプライバシー ポリシーを用意および遵守し、訪問者からの情報を収集するうえで、適用されるすべての法律、ポリシー、規制を遵守するものとします。お客様はプライバシー ポリシーを公開し、そのプライバシー ポリシーで、お客様がデータ収集のために Cookie を使用していることを必ず通知するものとします。また、Google アナリティクスを使用していること、および Google アナリティクスでデータが収集、処理される仕組みについても必ず開示するものとします。この情報の開示は、「ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用」のページ（<a href="https://www.google.com/intl/ja/policies/privacy/partners/">www.google.com/intl/ja/policies/privacy/partners/</a> や、Google が随時提供するその他の URL）へのリンクを目立つように表示することで実施可能です。お客様は訪問者の端末上での Cookie やその他の情報の保存や、そうした情報へのアクセスについて、そうした行為が本サービスに関連して発生する場合、およびかかる行為に関する情報の提供と訪問者からの同意が法律で求められている場合は、訪問者に明確かつ包括的な情報を提供し、同意を得るように商業上合理的な努力を払うものとします。お客様は、本サービスの一部であるプライバシー機能（たとえば、オプトアウトなど）を回避してはなりません。お客様は、Google アナリティクスおよび特定の DoubleClick ならびに Google の広告サービスの統合バージョン（「Google アナリティクス広告向け機能」）を利用することができます。お客様が Google アナリティクス広告向け機能を利用される場合、Google アナリティクス広告向け機能に関するポリシー（<a href="https://support.google.com/analytics/bin/answer.py?hl=en&topic=2611283&answer=2700409">support.google.com/analytics/bin/answer.py?hl=en&topic=2611283&answer=2700409</a> に従うものとします。お客様の、いかなる DoubleClick または Google の広告サービスへのアクセス、およびそれらの使用も、当該サービスに関するお客様と Google との間の該当する規定に従うものとします。Google アナリティクス 360 スイート ポータルを使用する場合は、<a href="https://https://360suite.google.com/terms">https://360suite.google.com/terms</a>（または Google が指定したその他の URL）に掲載されている Google アナリティクス 360 スイート ポータル利用規約（規約が改名された場合は、改名後の規約）に則って使用するものとします。この利用規約（「スイート ポータル利用規約」）は随時改訂されることがあります。本サービスの利用は、スイート ポータル利用規約の第 2 条に基づき、引き続き本契約に則るものとします。</p>
          <p><a href="https://www.google.com/intl/ja/analytics/terms/jp.html">Google アナリティクス利用規約</a></p>
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
</style>

