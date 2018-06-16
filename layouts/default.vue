<template>
  <div>
    <nuxt/>
  </div>
</template>


  border: 1px solid #00aba9
  color: #00aba9
  &:hover
    background-color: #00aba9<style>
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

/* end reset css */
body {
  font-family: 'Roboto', "Rounded Mplus 1c", sans-serif;
}

.btn {
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  margin: 5px;
}

.btn:hover {
  color: #fff;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.wrapper {
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.container-left {
  float: left;
  min-height: 100vh;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-right {
  float: right;
  min-height: 100vh;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  word-break: normal;
  margin: 10px;
  line-height: 1.5em;
  font-size: 120%;
}

a {
  color: #d80073;
}

/* 幅が細い端末用 */
@media screen and (max-width: 911px) {
  .title {
    font-size: 50px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .container-left {
    min-height: 50vh;
    min-width: 100vw;
  }
  .container-right {
    min-height: 50vh;
    min-width: 100vw;
  }
}
</style>
