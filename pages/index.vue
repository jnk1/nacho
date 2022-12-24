<template>
  <div>
    <h2>fetch data on click</h2>
    <pre>{{ pages2 }}</pre>
    <p>==========================================</p>
    <!-- <pre>{{ pages3 }}</pre> -->
    <div>
      削除するデータID
      <input id="" v-model="deleteId" type="text" name="">
    </div>
    <div>
      更新するデータID
      <input id="" v-model="updateId" type="text" name="">
    </div>
    <div>
      <button @click="get">
        get
      </button>
      <button @click="add">
        add
      </button>
      <button @click="del">
        del
      </button>
      <button @click="update">
        update
      </button>
    </div>
    <h2>fetch data on mount</h2>
    <pre>{{ pages }}</pre>
  </div>
</template>

<script setup>
const pages = ref()
const pages2 = ref()
// const pages3 = ref()
const deleteId = ref("")
// const delId = ref("")
const updateId = ref("")
const add = async () => {
  // クリック時に叩くAPI処理
  await useFetch("/api/add", {
    method: "POST",
    query: {
      col: "test"
    },
    body: {
      param1: "param1",
      param2: "param2"
    }
  })
}
const del = async () => {
  console.log("click DEL button")
  // await $fetch("/api/add?col=test&document={title:this is title}")
  const { data: result } = await useFetch("/api/delete", {
    method: "GET",
    query: {
      col: "test",
      id: deleteId
    }
  })
  // delId.value = result
}
const get = async () => {
  console.log("click GET button")
  const { data: result } = await useFetch("/api/query", {
    query: {
      col: "test"
    }
  })
  pages2.value = result
}
const update = async () => {
  await useFetch("/api/update", {
    method: "POST",
    query: {
      col: "test",
      id: updateId
    },
    body: {
      param1: "param11",
      param2: "param22"
    }
  })
}
onMounted(async () => {
  // ここでuseFetchを使うとエラーになる。原因不明。
  const { result } = await $fetch("/api/query?col=test")
  pages.value = result
})
</script>
<style></style>