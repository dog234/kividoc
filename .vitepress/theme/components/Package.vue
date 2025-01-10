<template>
  <div class="pkg" @click="handleOpen(pkg.links.npm ?? pkg.links.repository)">
    <div>
      <h3>
        <span>{{ pkg.name.replace('kivibot-p-', '') }}</span>
        <span :class="`label ${pkg.version === '0.0.0' ? 'wip' : 'none'}`">
          {{ pkg.version === '0.0.0' ? '开发中' : '' }}
        </span>
        <span v-if="isHighQuality(pkg)"><svg style="margin: 0 3px;display: inline" width="18" height="18" fill="#e49400"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg></span>
        <span v-if="isOfficial(pkg)"><svg style="margin: 0 4px;display: inline;" width="17" height="17" fill="#00b782"
            viewBox="0 0 16 16">
            <path
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg></span>
        <!--<span class="label community" v-if="!isHighQuality(pkg) && !isOfficial(pkg)">社区插件</span>-->
      </h3>
      <p>{{ pkg.description }}</p>
    </div>

    <div class="footer">
      <span title="发布版本"><svg style="width: 18px;float: left;" viewBox="0 0 20 20">
          <path
            d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708">
          </path>
        </svg>{{ pkg.version }}</span>
      <div :title="getName(pkg)">
        <span>{{ getName(pkg) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getName, isOfficial, isHighQuality, getAvatar } from '../utils'

export interface PackageInfo {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  author: {
    name: string;
    email: string;
    url: string;
    username: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  maintainers: {
    username: string;
    email: string;
  }[];
}

const { pkg } = defineProps<{ pkg: PackageInfo }>()

function handleOpen(link: string) {
  window.open(link)
}


</script>

<style lang="less" scoped>
.pkg {
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider-light);
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
  margin: 12px 12px;
  max-width: 230px;
  min-width: 230px;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: var(--vp-c-brand);
  }

  h3 {
    font-size: 24px;
    margin: 12px 0;

    .label {
      color: #ffffff;
      font-size: 10px;
      background-color: #e99b74;
      border-radius: 3px;
      padding: 1px 3px;
      margin: 0 3px;
    }

    .official {
      background-color: #00b782;
    }

    .wip {
      background-color: #2986ff;
    }

    .community {
      background-color: #dfa355;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.footer {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #213547;

  &>div {
    color: var(--vp-c-text-2);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

}

.none {
  display: none;
}

.avatar {
  max-width: 24px !important;
  border-radius: 12px !important;
  margin-right: 4px;
}

@media (max-width: 712px) {
  .pkg {
    height: 200px;
    max-width: 300px;
    min-width: 300px;

    p {
      max-height: 84px;
    }
  }
}
</style>