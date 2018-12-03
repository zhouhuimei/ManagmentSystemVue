<template>
    <div class="col-12 whole">
        <div class="login_inside">
            <div class="login">
                <div>
                    <div class="login_in">
                        <span>用户名：</span><input type="text" v-model="uname" placeholder="请输入用户名"/>
                        <div class="tips login_tips">请输入用户名</div>
                    </div>
                    <div class="login_in">
                        <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input type="text" v-model="password" placeholder="请输入密码"/>
                        <div class="tips password_tips">请输入密码</div>
                    </div>
                    <div class="login_in">
                        <button v-on:click="loginClick">登录</button>
                    </div>
                    <div class="login_in">
                        <a>注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                uname: '',
                password: ''
            }
        },
        created() {

        },
        mounted() {
            this.console()
        },
        methods: {
            loginClick: function() {
                if(this.uname === ''){
                        alert(77)
                }
            }
        }
    }
</script>

<!--添加 scoped 属性后 当前页面的样式只在此组件生效，不会影响全局同class样式-->
<style scoped>
    .whole {
        margin: 0 auto;
        height: 900px;
        border: 1px dashed #dbdbdb;
        margin-top: 100px;
        background: #fff;
        width: 1280px;
    }

    .whole .login_inside {
        border: 1px solid #d8f2e7;
        height: 880px;
        margin: 10px 0px;
    }
    .whole .login_inside div{
        text-align: right;
    }
    .whole .login_inside .login {
        width: 700px;
        border: 1px solid #dbdbdb;
        height: 500px;
        margin: 150px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .whole .login .login_in {
        margin: 20px 0;
    }

    span, a{
        color: #222222;
        font-size: 20px;
    }
    input {
        color: #999999;
        font-size: 18px;
        border: 1px solid #dbdbdb;
        height: 40px;
        padding: 10px;
        line-height: 40px;
    }
    button{
        margin-top: 20px;
        width: 268px;
        height: 40px;
        margin-left: 72px;
        border-radius: 10px;
        background: #0398ff;
        color: #fff;
    }
    .whole .login .login_in:nth-of-type(4){
        text-align: center;
        margin-left: 75px;
    }
    .tips{
        padding-top: 5px;
        text-align: right;
        font-size: 12px;
        color: red;
        display: none;
    }
</style>
