<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

let ComunityPosts: any = ref([])

let data

const GetPosts = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/ComunityPosts',
      method: 'get'
    }).then(function (re) {
      let datas = re.data

      for (data of datas) {
        ComunityPosts.value.unshift(data)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

GetPosts()
let idCharged = ref()
let titleCharged = ref()
let nameCharged = ref()
let CreatorMailCharged = ref()
let ComunityMessages: any = ref([])
let changeMainPage = ref('Display:flex')
let changeMessagePage = ref('Display:none')

const GetMessages = async (title: any, creator: any, id: any, creatorMail: any) => {
  ComunityMessages.value = []
  try {
    await axios({
      url: 'http://localhost:3000/ComunityMessage/',
      method: 'get'
    }).then(function (re) {
      let datas = re.data

      for (data of datas) {
        if (data.titleofpost == title) {
          ComunityMessages.value.push(data)
        }
      }
    })
  } catch (error) {
    console.log(error)
  }

  CreatorMailCharged.value = creatorMail
  titleCharged.value = title
  nameCharged.value = creator
  idCharged.value = id

  changeMainPage.value = 'Display:none'
  changeMessagePage.value = 'Display:inherit'
}

const DeletePost = async (title: any, name: any, id: any, creatorMail: any) => {
  let firstCheck = prompt('Please Put The Name Of The Creator')

  let firstOn
  let secondOn
  let ThirdOn

  if (firstCheck == name) {
    firstOn = firstCheck
  } else {
    return alert('Wrong Name')
  }

  let secondCheck = prompt('Please Put The Email Of The Creator')
  if (secondCheck == creatorMail) {
    secondOn = secondCheck
  } else {
    return alert('Wrong Email ')
  }

  let thirdCheck = prompt('Confirm The Title Please')
  if (thirdCheck == title) {
    ThirdOn = thirdCheck
  } else {
    return alert('Wrong Title')
  }

  if (firstOn == name && secondOn == creatorMail && ThirdOn == title) {
    if (confirm('You Have Certain That You Want Delete The Whole Post??')) {
      let FuncDelete = async () => {
        let idToDelete = ref()
        let messagesToDelete: any = ref([])

        axios({
          url: `http://localhost:3000/ComunityMessage`,
          method: 'get'
        }).then(function (re: any) {
          for (let res of re.data) {
            if (res.titleofpost == title) {
              messagesToDelete.value.push(res)

              for (let messagetodelete of messagesToDelete.value) {
                idToDelete.value = messagetodelete.id
                axios({
                  url: `http://localhost:3000/ComunityMessage/${idToDelete.value}`,
                  method: 'delete'
                })
              }
            }
          }
        })
      }
      let funcdeleteP = async () => {
        let idToDeleteP = ref()
        idToDeleteP.value = id

        axios({
          url: `http://localhost:3000/ComunityPosts/${idToDeleteP.value}`,
          method: 'delete'
        }).then((re) => {
          console.log(re.data, re.status, re.request)
        })
      }

      let checkIFDeleted = async () => {
        let res
        let HaveMessage: any
        axios({
          url: 'http://localhost:3000/ComunityMessage',
          method: 'get'
        }).then(function (re) {
          for (res of re.data) {
            if (res.titleofpost == title) {
              HaveMessage = []
              HaveMessage.push(res)
              console.log(HaveMessage)
            }
            if (HaveMessage == undefined) {
              funcdeleteP()
              location.reload()
            } else {
              alert('Something Error, Do The Process Again')
            }
          }
        })
      }
      FuncDelete()
      setTimeout(() => {
        checkIFDeleted()
      }, 1000)
    }
  } else {
    return "We Couldn't Delete"
  }
}

const NewComment = ref({
  name: '',
  email: '',
  message: ' '
})

const SendNewComment = async () => {
  try {
    await axios({
      url: 'http://localhost:3000/ComunityMessage',
      method: 'post',
      data: {
        name: NewComment.value.name,
        email: NewComment.value.email,
        messagePosted: NewComment.value.message,
        titleofpost: titleCharged.value
      }
    }).then(function (response) {
      alert('Comment Posted')
      location.reload()
      console.log(response.status)
    })
  } catch (error) {
    console.log(error)
  }
}

const DeleteComment = (id: any, email: any) => {
  let question = prompt('Write The Email Of Who Comment To delete')
  if (question == email) {
    if (confirm('Are you sure about delete this message?')) {
      try {
        axios({
          url: `http://localhost:3000/ComunityMessage/${id}`,
          method: 'delete'
        }).then(function (re) {
          console.log(re.status)
        })
      } catch (error) {
        console.log(error)
      }

      alert('Comment Deleted')
      location.reload()
    } else {
      alert('You canceled the Delete Process!')
    }
  } else {
    alert('Wrong Email')
  }
}
</script>

<template>
  <div class="flex w-full overflow-visible">
    <main class="flex mr-1">
      <div
        class="w-full h-3/4 text-5xl items-center my-auto text-white pde p-28"
        :style="changeMainPage"
      >
        WELCOME TO OUR COMUNITY, SEE OUR POST ASIDE AND INTERACT WITH THE COMUNITY
      </div>
      <section class="w-full h-auto flex-col overflow-scroll" :style="changeMessagePage">
        <div class="flex flex-col justify-center items-center border-4 h-64">
          <div class="flex w-full h-28 pt-2 items-center">
            <Span class="w-80 text-2xl pl-1 h-14">Name of the creator :</Span>
            <p class="w-full text-center h-10 text-2xl mb-2 pl-32">
              {{ nameCharged }}
            </p>
            <button
              @click="DeletePost(titleCharged, nameCharged, idCharged, CreatorMailCharged)"
              type="submit"
              value=""
              class="w-48 text-center border h-8 text-sl break-all"
            >
              Delete The Post
            </button>
          </div>
          <div class="flex w-full border-t-2 h-32 pt-2 items-center">
            <Span class="w-64 text-2xl h-14 pl-1">Title Of The Page :</Span>
            <p class="w-full text-center h-20 text-3xl break-all">
              {{ titleCharged }}
            </p>
          </div>
        </div>
        <form action="#" method="post" @submit.prevent="SendNewComment" >
          <label for="NewMessageName">Your Name</label>
          <input
            type="text"
            name="NewMessageName"
            placeholder="Name Example"
            id="NewMessageName"
            v-model="NewComment.name"
          />

          <label for="NewMessageMail">Your email</label>
          <input
            type="email"
            name="NewMessageMail"
            placeholder="name@domain.example"
            id="NewMessageMail"
            v-model="NewComment.email"
          />

          <label for="NewMessageComment">Your Comment For Us</label>
          <textarea
            class="w-full rounded-md px-2.5 py-1 text-2xl input max-h-64"
            name="NewMessageComment"
            id="NewMessageMessage"
            placeholder="Your Comment Here"
            v-model="NewComment.message"
            maxlength="150"
            required
            rows="4"
          ></textarea>
          <button
            type="submit"
            id=""
            class=" text-xl mx-auto h-10 w-2/12 flex items-center justify-center flex-col mb-8 border-2 rounded-lg bg-gray-500"
          >
            Send Your Comment
          </button>
        </form>
        <div
          class="border mt-4 h-38 mb-4"
          v-for="ComunityMessage in ComunityMessages"
          :key="ComunityMessage.id"
        >
          <div class="flex flex-col text-xl items-start py-4 ml-7">
            <p class="text-2xl h-10">
              <Span class="text-red-800">Who Comments: </Span> {{ ComunityMessage.name }}
            </p>
            <p class="h-10">
              <Span class="text-red-800">Your Comment: </Span>{{ ComunityMessage.messagePosted }}
            </p>
            <button
              type="button"
              @click="DeleteComment(ComunityMessage.id, ComunityMessage.email)"
              class="border-2 p-1 text-xs flex-col-reverse"
            >
              Delete This Comment?
            </button>
          </div>
        </div>
      </section>
    </main>
    <aside
      class="border-4 flex flex-wrap flex-col min-h-full max-h-screen w-1/12 text-center sidebar justify-start screen overflow-auto"
    >
      <div class="flex flex-col h-fit mb-5 text-xl">
        <RouterLink class="border-4 mb-2 min-width w-3/3 mr-3" to="/Comunity/NewPost">
          <button type="button">Create a New Post Here</button>
        </RouterLink>
        <div class="border-4 min-width mr-3">All The Posts Active :</div>
      </div>
      <!-----------------------------------------------DIVISOR----------------------------------------------->
      <div v-for="ComunityPost in ComunityPosts" :key="ComunityPost.id">
        <p
          @click="
            GetMessages(
              ComunityPost.title,
              ComunityPost.creator,
              ComunityPost.id,
              ComunityPost.creatorMail
            )
          "
          class="borderblack min-width mr-3 mb-3 rounded-md text-center py-2 text-xl bg-transparent border-2 break-all"
        >
          {{ ComunityPost.title }}
        </p>
      </div>
    </aside>
  </div>
</template>

<style scoped>
* {
  overflow: auto;
  color: black;
}

span {
  color: #931f1f;
}
.pde {
  border: 3px #66fcf1 solid;
}
.borderblack {
  cursor: pointer;
  border-color: black;
}
.text-white {
  font-family: 'Caveat', cursive;
}

.min-width {
  min-width: 13vw;
  max-width: 18vw;
  max-height: 13vh;
}

span {
  font-size: 18px;
  font-weight: 900;
}

section {
  width: 100%;
}
.sidebar {
  border-color: black;
  width: 25%;
  padding: 0 15px;
  padding-bottom: 1%;
  padding-top: 1%;
}

.screen {
  max-height: 90vh;
}
main {
  width: 86%;
}

.screen {
  min-height: 90vh;
}
</style>
