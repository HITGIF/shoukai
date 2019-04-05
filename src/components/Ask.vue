<template>
  <div class="main" id="app">
    <!--<section class="top-left"></section>-->
    <section class="top"></section>
    <div class="balance"></div>
    <section class="header unselectable">{{ title }}</section>
    <div class="wrapper">
      <!--Input ここから-->
      <div class="content">
        <boarding-input v-if="answerType === 0"
                        @keyup="validateAnswer"
                        v-bind="{ answerType }"></boarding-input>
      </div>
      <!--Input ここまで-->
      <!--Option ここから-->
      <div v-if="answerType === 1" class="row center-xs option-row">
        <div class="row center-xs option-inner-row">
          <div v-for="op in opsa" :key="op.id" v-bind:class="[opac, 'option-col']">
            <div v-on:click="validateAnswer(op.id)" class="option">
              <span class="text unselectable">{{ op.text }}</span>
            </div>
          </div>
        </div>
        <div class="row center-xs option-inner-row">
          <div v-for="op in opsb" :key="op.id" v-bind:class="[opbc, 'option-col']">
            <div v-on:click="validateAnswer(op.id)" class="option">
              <span class="text unselectable">{{ op.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <!--Option ここまで-->
    </div>
    <section class="footer unselectable">{{ foot }}</section>
    <section class="bottom"></section>
  </div>

</template>

<script>

import Vue from 'vue'
import VueInputAutowidth from 'vue-input-autowidth'
import BoardingInput from './BoardingInput'
import questions from '../assets/questions.json'

export default {
  name: 'Ask',
  components: {
    BoardingInput
  },
  data () {
    return {
      show_input: false,
      show_option: true,
      answerType: 0,
      asked: [],
      quesNum: 0,
      currentQuesID: -1,
      answer_input: '',
      answer_chosen: 0,
      title: '',
      foot: '',
      text: '',
      opsa: [],
      opsb: [],
      opac: 'col-md-6',
      opbc: 'col-md-6',
      questions: []
    }
  },
  methods: {
    validateAnswer: function (answer) {
      console.log(this.currentQuesID, answer)
      // TODO handle answer
      this.getQuestion()
    },
    getQuestion: function () {
      let totalNum = this.questions.length
      if (this.asked.length === totalNum) {
        console.log('$$$ ran out')
        // TODO ran out
      } else {
        // Choose one not yet been asked
        do {
          var quesNum = Math.floor(Math.random() * totalNum)
        } while (this.asked.includes(quesNum))
        this.asked.push(quesNum)
        let question = this.questions[quesNum]
        this.currentQuesID = question.id
        this.title = question.title
        this.foot = question.foot
        this.answerType = question.answerType
        switch (this.answerType) {
          case 0:
            break
          case 1:
            let optionNum = question.options.length
            this.opsa = question.options.slice(0, Math.ceil(optionNum / 2))
            this.opsb = question.options.slice(Math.ceil(optionNum / 2), optionNum)
            this.opac = 'col-md-' + 12 / this.opsa.length
            this.opbc = 'col-md-' + 12 / this.opsb.length
            break
        }
      }
    }
  },
  mounted () {
    this.questions = questions.questions
    this.getQuestion()
  }
}

Vue.use(VueInputAutowidth)
</script>

<style>
  @import url('https://fonts.loli.net/css?family=PT+Mono');

  body {
    overflow: hidden;
    background-color: #ffffff
  }

  .main {
    height: 96vh;
    margin: 2vh;
    background-color: #ffd54f;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .option {
    background-color: transparent;
    border: 5px solid #ffffff;
    color: #ffffff;
    height: 200px;
    width: 200px;
    margin: 3vw;
    text-align: center;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    transition: 0.2s;
  }

  .option:hover {
    width: 210px;
    background-color: #ffffff;
    color: #ffd54f;
  }

  .option-correct {
    font-family: "Material Icons";
    text: "";
  }

  .option > .text {
    font-size: 30px;
    font-family: 'PT Mono', monospace;
  }

  .top-left {
    position: absolute;
    top: 2vh;
    left: 2vh;
    width: 5vh;
    height: 5vh;
    background-color: #ffffff;
  }

  .top {
    position: absolute;
    top: 0;
    left: 50%;
    width: 25vw;
    height: 5vh;
    background-color: #ffffff;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .bottom {
    position: absolute;
    top: 95vh;
    left: 50%;
    width: 25vw;
    height: 5vh;
    background-color: #ffffff;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .header {
    font-size: 30px;
    text-align: center;
    font-weight: lighter;
    color: #ffffff;
    font-family: "PT Mono", monospace;
  }

  .footer {
    font-size: 15px;
    text-align: center;
    font-weight: lighter;
    opacity: 20%;
    color: #ffffff;
    font-family: "PT Mono", monospace;
  }

  .wrapper {
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .balance {
    height: 2rem;
  }

  .content-flex {
    display: flex;
  }

  .option-col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 !important;
  }

  .option-row {
    width: 80vw;
    margin: 0 !important;
  }

  .option-inner-row {
    flex-direction: column;
    justify-content: center;
    transition: 0.2s;
    margin: 0 !important;
  }

  .abs-center {
    top: 50%;
    left: 50%;
    position: absolute;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .fab {
    margin-top: 2rem;
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media screen and (max-width: 650px) {
    .header {
      font-size: 20px;
    }

    .footer {
      font-size: 8px;
    }

    .option {
      min-height: 30vw;
      height: auto;
      width: 28vw;
    }

    .option:hover {
      width: 30vw;
    }

    .option > .text {
      font-size: 20px;
    }
  }

</style>
