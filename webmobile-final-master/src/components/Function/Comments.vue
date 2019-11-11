<template>
<v-container>
  <v-layout>
    <v-content>
      <v-flex>
        <span>
          <v-text-field v-model="text" label="댓글을 입력해 주세요" required append-outer-icon="add_comment" @click:append-outer="insert">
          </v-text-field>
        </span>
      </v-flex>

      <v-flex v-for="i in idcomments.length">
        <div>
          <div>
            <div v-if="idcomments[i - 1].portid == thisid">
              <div class="overline">
                <v-chip class="ma-2">
                  <strong>{{ idcomments[i - 1].writer }}</strong>
                </v-chip>
                {{
                    idcomments[i - 1].created_at | moment("YYYY년 MM월 DD일")
                  }}


              </div>
              <div class="ma-3">
                {{ idcomments[i - 1].text }}
              </div>
              <span>
                <!-- 좋아요 싫어요 -->
                <div style="text-align:right">
                  <v-btn flat icon color="red" @click="likeG(idcomments[i - 1].id,  idcomments[i - 1].good,  idcomments[i - 1].bad)" >
                    <v-icon>thumb_up</v-icon>
                    {{
                      idcomments[i - 1].good,
                    }}
                  </v-btn>

                  <v-btn flat icon color="blue" @click="likeB(idcomments[i - 1].id,  idcomments[i - 1].good,  idcomments[i - 1].bad)">
                    <v-icon>thumb_down</v-icon>
                    {{
                      idcomments[i - 1].bad
                    }}
                  </v-btn>
                </div>
                <v-card-actions v-if="idcomments[i - 1].writer == thislogin">
                  <v-btn v-if="check == ''" flat icon @click="check = idcomments[i - 1].id">
                    <v-icon>comment</v-icon>&nbsp
                    {{
                        idcomments[i - 1].replynum
                      }}
                  </v-btn>
                  <v-btn v-else-if="check == idcomments[i - 1].id" flat icon @click="check = ''">
                    <v-icon>arrow_back</v-icon>
                  </v-btn>
                  <v-btn v-else flat icon @click="check = idcomments[i - 1].id">
                    <v-icon>comment</v-icon>&nbsp
                    {{
                        idcomments[i - 1].replynum
                      }}
                  </v-btn>
                  <!-- 여기에 수정버튼,모달창 -->


                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                      <v-btn flat icon v-on="on">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2" primary-title>
                        수정하실 댓글을 적어주세요</v-card-title>

                      <v-card-text>
                        <v-text-field v-model="idcomments[i - 1].text" required>
                        </v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="
                              set(idcomments[i - 1].id, idcomments[i - 1].text)
                            ">
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn flat icon @click="del(idcomments[i - 1].id)">
                    <v-icon>close</v-icon>
                  </v-btn>


                </v-card-actions>

                <v-card-actions v-else>
                  <v-btn v-if="check == ''" flat icon @click="check = idcomments[i - 1].id">
                    <v-icon>comment</v-icon>&nbsp
                    {{
                        idcomments[i - 1].replynum
                      }}
                  </v-btn>
                  <v-btn v-else-if="check == idcomments[i - 1].id" flat icon @click="check = ''">
                    <v-icon>arrow_back</v-icon>
                  </v-btn>
                  <v-btn v-else flat icon @click="check = idcomments[i - 1].id">
                    <v-icon>comment</v-icon>&nbsp
                    {{
                        idcomments[i - 1].replynum
                      }}
                  </v-btn>
                </v-card-actions>
              </span>
              <hr class="bottomline" style="margin:10px 0px" />
            </div>
          </div>

          <!-- 대댓글부분 -->
          <div v-if="check == idcomments[i - 1].id" class="ml-5">
            <span>
              <v-container style="padding:0px">
                <v-flex>
                  <span>
                    <v-text-field v-model="reply" label="댓글을 입력해 주세요" required append-outer-icon="add_comment" @click:append-outer="replyinsert(idcomments[i - 1].id, idcomments[i - 1].replynum)">
                    </v-text-field>
                  </span>
                </v-flex>
              </v-container>
              <v-flex v-for="i in idcomments.length">
                <div>
                  <div>
                    <div v-if="idcomments[i - 1].portid == check">

                      <div class="overline">
                        <v-icon color="teal darken-2">subdirectory_arrow_right</v-icon>
                        <v-chip class="ma-2"><strong>{{
                              idcomments[i - 1].writer
                            }}</strong></v-chip>
                        {{
                            idcomments[i - 1].created_at
                              | moment("YYYY년 MM월 DD일")
                          }}

                      </div>
                      <div class="ma-3">{{
                          idcomments[i - 1].text
                        }}</div>
                        <!-- 좋아요 싫어요 -->
                        <div style="text-align:right">
                          <v-btn flat icon color="blue" @click="likeG(idcomments[i - 1].id,  idcomments[i - 1].good,  idcomments[i - 1].bad)" >
                            <v-icon>thumb_up</v-icon>
                            {{
                              idcomments[i - 1].good,
                            }}
                          </v-btn>

                          <v-btn flat icon color="red" @click="likeB(idcomments[i - 1].id,  idcomments[i - 1].good,  idcomments[i - 1].bad)">
                            <v-icon>thumb_down</v-icon>
                            {{
                              idcomments[i - 1].bad
                            }}
                          </v-btn>
                        </div>
                      <v-card-actions v-if="idcomments[i - 1].writer == thislogin">
                        <v-dialog v-model="dialog" width="500">
                          <template v-slot:activator="{ on }">
                            <v-btn flat icon v-on="on">
                              <v-icon>edit</v-icon>
                            </v-btn>
                          </template>

                          <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                              수정하실 댓글을 적어주세요
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="idcomments[i - 1].text" required>
                              </v-text-field>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" @click="
                                    set(
                                      idcomments[i - 1].id,
                                      idcomments[i - 1].text
                                    )
                                  ">
                                I accept
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <v-btn flat icon @click="del(idcomments[i - 1].id)">
                          <v-icon>close</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <hr class="bottomline" style="margin:10px 0px" />
                    </div>
                  </div>
                </div>
              </v-flex>
            </span>
          </div>
        </div>
      </v-flex>
    </v-content>
  </v-layout>
</v-container>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "comments",
  data: () => ({
    idcomments: [],
    idlike: [],
    portid: "",
    fk: "",
    text: "",
    retext: "",
    reply: "",
    writer: "",
    thisid: "",
    thisurl: "",
    thislogin: "",
    check: "",
    replynum: 0,
    good: 0,
    bad: 0,
  }),
  mounted() {
    this.getcommentsByIndex();
    this.getlike();

  },
  methods: {
    async getcommentsByIndex() {
      this.idcomments = await FirebaseService.getcommentsByIndex(
        this.$route.query.id
      );
      this.thisid = this.$route.query.id;
      this.thislogin = this.$store.state.user.displayName;
    },
    async getlike() {
      this.idlike = await FirebaseService.getlike(
      );
    },
    setting(good){
      console.log(good)
    },
    insert(portid) {
      if (this.idcomments.length == 0) {
        this.thisurl = document.location.href;
        this.portid = FirebaseService.comments(
          (this.portid = this.$route.query.id),
          (this.fk = 1),
          this.text,
          (this.writer = this.$store.state.user.displayName),
          this.replynum = 0,
          this.good=0,
          this.bad=0
        );
        location.href = this.thisurl;
      } else {
        this.thisurl = document.location.href;
        this.portid = FirebaseService.comments(
          (this.portid = this.$route.query.id),
          this.idcomments[0].fk + 1,
          this.text,
          (this.writer = this.$store.state.user.displayName),
          this.replynum = 0,
          this.good= 0,
          this.bad= 0
        );
        location.href = this.thisurl;
      }
    },
    replyinsert(portid, num) {
      if (this.idcomments.length == 0) {
        this.thisurl = document.location.href;
        this.portid = FirebaseService.comments(
            (this.portid = this.check),
            (this.fk = 1),
            this.reply,
            (this.writer = this.$store.state.user.displayName),
            this.replynum = 0,
            this.good= 0,
            this.bad= 0
          ),
          FirebaseService.setcount(portid, num + 1)
        location.href = this.thisurl;
      } else {
        this.thisurl = document.location.href;
        this.portid = FirebaseService.comments(
            (this.portid = this.check),
            this.idcomments[0].fk + 1,
            this.reply,
            (this.writer = this.$store.state.user.displayName),
            this.replynum = 0,
            this.good= 0,
            this.bad= 0
          ),
          FirebaseService.setcount(portid, num + 1)
        location.href = this.thisurl;
      }
    },
    del(id) {
      this.thisurl = document.location.href;
      this.portid = FirebaseService.delcomment(id);
      location.href = this.thisurl;
    },
    set(id, retext) {
      this.thisurl = document.location.href;
      this.portid = FirebaseService.setcomment(id, retext);
      location.href = this.thisurl;
    },
    async likeG(id, good, bad) {
      this.thisurl = document.location.href;
      var ok =  await FirebaseService.check(id, this.$store.state.user.displayName)
      if(ok==1){
      var num = await FirebaseService.goodcheck(id, this.$store.state.user.displayName)
      console.log(this.ok)
        if(num!=1){
          await FirebaseService.setlike(id, good+1, bad-1)
          await FirebaseService.likecheck(id, this.$store.state.user.displayName, 1, 0)
          }
      }

      if(ok==0){
        await FirebaseService.likegood(id, this.$store.state.user.displayName);
        await FirebaseService.setlike(id, good+1, bad)
      }
      this.idcomments = await FirebaseService.getcommentsByIndex(
        this.$route.query.id
      );
    },
    async likeB(id, good, bad) {
    var ok =  await FirebaseService.check(id, this.$store.state.user.displayName)
    if(ok==1){
      var num = await FirebaseService.badcheck(id, this.$store.state.user.displayName)
      if(num!=1){
        await FirebaseService.setlike(id, good-1, bad+1)
        await FirebaseService.likecheck(id, this.$store.state.user.displayName, 0, 1)
      }
    }
      if(ok==0){
        await FirebaseService.likebad(id, this.$store.state.user.displayName);
        await FirebaseService.setlike(id, good, bad+1)
      }
      this.idcomments = await FirebaseService.getcommentsByIndex(
        this.$route.query.id
      );
     }
  }
}
</script>

<style media="screen">
.comments {
  border-color: transparent !important;
}
</style>
