<template>
  <div v-if="plugins.objects.length">
    <h1>KiviBot 插件列表</h1>

    <div class="search">
      <div>
        共计 {{ word? pkgs.length + ' / ' : '' }}{{ plugins.objects.length }} 个 npm 插件，来自 {{ developers.size }} 个开发者
      </div>
      <input type="text" class="search__input" placeholder="通过插件的标识、介绍、作者进行搜索" v-model="word" />
    </div>

    <div class="packages">
      <Package :pkg="pkg" v-for="pkg in pkgs" :key="pkg.name" />
    </div>
  </div>

  <div v-else>
    <div v-if="error">
      插件列表加载失败。
    </div>
    <div v-else>
      正在加载插件列表...
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

import Package from '../../components/Package.vue'
import { getName, isBlack, isHighQuality, isOfficial } from "../../utils";

import type { PackageInfo } from '../../components/Package.vue'


const plugins = ref({ total: 0, objects: [] as { package: PackageInfo, score: any }[], time: new Date() })
const word = ref("")
const error = ref()

onMounted(async () => {
  try {
    const api = 'https://registry.npmjs.org/-/v1/search?text=kivibot-p-&size=250'
    const res = await fetch(api)
    const data = await res.json()

    data.objects = data.objects.filter((p: any) => !isBlack(p.package))

    plugins.value = data

  } catch (err) {
    error.value = err
  }
})



const pkgs = computed(() => {
  if (!plugins.value) {
    return []
  }


  const ps = plugins.value.objects.filter((pkg: { package: PackageInfo }) => {
    const kw = word.value.toLowerCase()


    const hitName = pkg.package.name.includes(kw)
    const hitDescription = pkg.package.description.includes(kw)
    const hitAuthor = getName(pkg.package).toLowerCase().includes(kw)

    return (hitName || hitDescription || hitAuthor)
  })


  ps.forEach(e => {
    const desc = e.package.description.replace(/kivi\s*bot/gi, 'kivibot')

    e.package.description = desc
  })

  ps.sort((a, b) => a.score.final - b.score.final)

  ps.sort((e: { package: PackageInfo }) => {
    return isHighQuality(e.package) ? 1 : -1
  })

  ps.sort((e: { package: PackageInfo }) => {
    return isOfficial(e.package)||isHighQuality(e.package) ? 1 : -1
  })

  ps.sort((e: { package: PackageInfo }) => {
    const isWip = e.package.version === '0.0.0'
    return isWip ? 1 : -1
  })

  return ps.map(e => e.package)
})

const developers = computed(() => {
  const names = pkgs.value.map(e => getName(e).toLowerCase())

  return new Set(names)
})

</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  margin: 2px 0 8px;
}

.packages {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &>div {
    margin: 8px;
  }

  &>input {
    text-align: center;
    width: 480px;
    font-family: inherit;
    font-size: inherit;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 30px;
    transition: all ease-in-out .3s;
    background-color: var(--vp-c-bg-alt);
  }

  @media (max-width: 712px) {
    &>input {
      width: 300px;
    }
  }
}

@media (max-width: 712px) {
  .packages {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>