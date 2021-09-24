<template>
    <table width="100%">
        <thead>
            <tr>
                <th class="border"  v-for="(h, index) in headers" :key="index">{{ h }}</th>
            </tr>
        </thead>
        <tbody>   
            <tr v-for="(d, index) in data" :key="index">
                <td v-for="(h, index) in dataParams" :key="index">
                    {{ d[h.toString()] }}
                </td>
                <td>
                    <button>Add</button> <!-- SET CONDITIONS IF WHAT DO YOU WANT TO OUTPUT USING V-IF -->
                    <button>Edit</button> <!-- SET CONDITIONS IF WHAT DO YOU WANT TO OUTPUT USING V-IF -->
                    <button>Delete</button> <!-- SET CONDITIONS IF WHAT DO YOU WANT TO OUTPUT USING V-IF -->
                </td>
            </tr>   
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        headers: { 
            required: true,
            type: Array
        },
        data: {
            required: true,
        },
        dataParams: {
            required: true,
            type: Array
        }
    }
}
</script>

<style>

</style>