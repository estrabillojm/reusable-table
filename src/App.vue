<template>
  <router-view/>
</template>

<style>
  *{
    font-size:14px;
    padding:0;
    margin:0;
  }

  .form-group{
    @apply w-full;
    padding:0 10px;
    box-sizing:border-box;
  }
  
  .input{
    @apply border rounded-md px-5 py-1 w-full;
    outline:none;
  }

  .input::placeholder{
    color:#ccc;
  }
  .input[type="date"]{
    color:#ccc;
  }

    .input[type="date"]:focus{
    color:black;
  }

  input:focus{
    @apply border-2 border-blue-400 shadow-md;
  }


</style>
