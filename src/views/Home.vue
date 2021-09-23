<template>
    <v-table :headers="headers" :data="users" :dataParams="params"/>
</template>
<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(){
        const store = useStore()
        const headers = ref(['Full Name','Username','E-mail', 'Actions'])
        const params = ref(['name','username','email'])
        const getAllUsers = () => store.dispatch('user/getAllUsers')
        const users = computed(()=> store.state.user.users)
        onMounted(()=> getAllUsers())
        return {
            headers,
            users,
            params
        }
    }
}
</script>