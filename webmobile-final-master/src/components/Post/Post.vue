<template>
  <div>
    <v-flex>
      <v-flex
        hidden-md-and-down
        v-if="idx == 1 || idx % 13 == 1"
        class="hex hex-1 hex-gap"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-md-and-down
        v-else-if="idx != 1 && idx % 13 != 1 && (idx == 3 || idx % 4 == 0)"
        class="hex hex-2"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-md-and-down
        v-else-if="idx != 1 && idx % 13 != 1 && (idx == 3 || idx % 5 == 0)"
        class="hex hex-3"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>

      <v-flex
        hidden-md-and-down
        v-else-if="idx != 1 && idx % 13 != 1 && (idx == 3 || idx % 3 == 0)"
        class="hex hex-1"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex hidden-md-and-down v-else class="hex">
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>

      <v-flex
        hidden-sm-and-down
        hidden-lg-and-up
        v-if="idx == 1 || idx % 9 == 1"
        class="hex hex-1 hex-gap"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        hidden-lg-and-up
        v-else-if="idx != 1 && idx % 9 != 1 && (idx == 3 || idx % 4 == 0)"
        class="hex hex-2"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-sm-and-down
        hidden-lg-and-up
        v-else-if="idx != 1 && idx % 9 != 1 && (idx == 3 || idx % 5 == 0)"
        class="hex hex-3"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
        <a href="#"></a>
      </v-flex>

      <v-flex
        hidden-sm-and-down
        hidden-lg-and-up
        v-else-if="idx != 1 && idx % 9 != 1 && (idx == 3 || idx % 3 == 0)"
        class="hex hex-1"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex hidden-sm-and-down hidden-lg-and-up v-else class="hex">
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>

      <v-flex
        hidden-md-and-up
        hidden-xs-and-down
        v-if="idx == 1 || idx % 3 == 1"
        class="hex hex-1 hex-gap"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-md-and-up
        hidden-sm-only
        v-else-if="idx != 1 && idx % 3 != 1 && (idx == 3 || idx % 4 == 0)"
        class="hex hex-2"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex
        hidden-md-and-up
        hidden-xs-and-down
        v-else-if="idx != 1 && idx % 3 != 1 && (idx == 3 || idx % 5 == 0)"
        class="hex hex-3"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>

      <v-flex
        hidden-md-and-up
        hidden-xs-and-down
        v-else-if="idx != 1 && idx % 3 != 1 && (idx == 3 || idx % 3 == 0)"
        class="hex hex-1"
      >
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <v-flex hidden-md-and-up hidden-xs-and-down v-else class="hex">
        <div class="corner-1"></div>
        <div class="corner-2"></div>
        <div class="inner" @click="linkToPage">
          <h2 class="text2">{{ subject.translate }}</h2>
          <hr />
          <p style="width:150px;">{{ content.translate }}</p>
        </div>
      </v-flex>
      <!--pad만 잘 보이게 될때까지 살리지 않을 예정.... -->
    </v-flex>
  </div>
</template>

<script>
import Translate from "@/services/Translate";
import EventBus from "../../eventBus.js";

export default {
  name: "Post",
  props: {
    date: {
      type: Date
    },
    title: {
      type: String
    },
    body: {
      type: String
    },
    id: {
      type: String
    },
    userid: {
      type: String
    },
    idx: {
      type: Number
    }
  },
  computed: {
    formatedDate() {
      return `${this.date.getFullYear()}년 ${this.date.getMonth() +
        1}월 ${this.date.getDate()}일`;
    }
  },
  data() {
    return {
      subject: {
        translate: this.title,
        original: this.title
      },
      content: {
        translate: this.body,
        original: this.body
      },
      index: {
        id: this.id
      },
      userId: {
        userid: this.userId
      }
    };
  },
  created() {
    EventBus.$on("translate", language => {
      if (language == "original") {
        this.subject.translate = this.subject.original;
        this.content.translate = this.content.original;
      } else {
        Translate.translate(language, this.subject.original).then(res => {
          this.subject.translate = res;
        });
        Translate.translate(language, this.content.original).then(res => {
          this.content.translate = res;
        });
      }
    });
  },
  methods: {
    linkToPage() {
      this.$router.push("/psDetail?id=" + this.id);
    }
  }
};
</script>

<style>
.color-666 {
  color: #666;
}

.color-333 {
  color: #333;
}

.h-100 {
  height: 100%;
}

.hex {
  width: 150px;
  height: 86px;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  -webkit-background-size: auto 173px;
  -moz-background-size: auto 173px;
  -ms-background-size: auto 173px;
  -o-background-size: auto 173px;
  position: relative;
  float: left;
  margin: 25px 5px;
  text-align: center;
  zoom: 1;
}

.hex.hex-gap {
  margin-left: 86px;
}

.hex a {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -9999em;
  position: absolute;
  top: 0;
  left: 0;
}

.hex .corner-1,
.hex .corner-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hex .corner-1 {
  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  -o-transform: rotate(60deg);
  transform: rotate(60deg);
}

.hex .corner-2 {
  -webkit-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -o-transform: rotate(-60deg);
  transform: rotate(-60deg);
}

.hex .corner-1:before,
.hex .corner-2:before {
  width: 173px;
  height: 173px;
  content: "";
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  background: inherit;
  background-repeat: no-repeat;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hex .corner-1:before {
  -webkit-transform: rotate(-60deg) translate(-87px, 0px);
  -moz-transform: rotate(-60deg) translate(-87px, 0px);
  -ms-transform: rotate(-60deg) translate(-87px, 0px);
  -o-transform: rotate(-60deg) translate(-87px, 0px);
  transform: rotate(-60deg) translate(-87px, 0px);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0;
}

.hex .corner-2:before {
  -webkit-transform: rotate(60deg) translate(-48px, -11px);
  -moz-transform: rotate(60deg) translate(-48px, -11px);
  -ms-transform: rotate(60deg) translate(-48px, -11px);
  -o-transform: rotate(60deg) translate(-48px, -11px);
  transform: rotate(60deg) translate(-48px, -11px);
  bottom: 0;
}

.hex .inner {
  color: #eee;
  position: absolute;
}

.hex h2 {
  font-family: "Josefin Sans", sans-serif;
  margin: 0;
}

.hex hr {
  border: 0;
  border-top: 1px solid #eee;
  width: 60%;
  margin: 15px auto;
}

.hex p {
  font-size: 16px;
  font-family: "Kotta One", serif;
  width: 150px;
}

.hex.hex-1 {
  background: #74cddb;
  z-index: 1;
}

.hex.hex-2 {
  background: #f5c53c;
}

.hex.hex-3 {
  background: #80b971;
}
</style>
