<template>
    <div class="col-12 whole">
        <div class="login_inside">
            <div class="login">
                <div>
                    <div class="login_in">
                        <span>原密码<i>：</i></span><input type="text" v-model.trim="original" placeholder="请输入用户名"/>
                        <div v-show="ordflg" class="tips">您输入的密码和原始密码不一致</div>
                    </div>
                    <div class="login_in">
                        <span style="letter-spacing: 10px;">新密码<i>:</i></span><input type="text" v-model.trim="password" placeholder="请输入密码"/>
                        <div v-show="pwflg" class="tips" id="password_tips">请输入大雨六位数的密码</div>
                    </div>
                    <div class="login_in">
                        <span style="letter-spacing: 10px;">重复新密码<i>:</i></span><input type="text" v-model.trim="rpassword" placeholder="请输入密码"/>
                        <div v-show="rpwflg" class="tips" id="">两次输入密码不一致</div>
                    </div>
                    <div class="login_in">
                        <button @click="loginClick">登录</button>
                    </div>
                    <div class="login_in">
                        <router-link to="register">
                            注册
                        </router-link>
                        <!--<a href="register.vue">注册</a>-->
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
                original: '',
                password: '',
                rpassword: '',
                ordflg: false,
                pwflg: false,
                rpwflg: false
            }
        },
        created() {

        },
        mounted() {
        },
        methods: {
            loginClick: function () {
                if (this.original == '') {
                    this.ordflg = true
                } else {
                    this.ordflg = false
                }
                if (this.password.length < 6) {
                    this.pwflg = true
                } else {
                    this.pwflg = false
                }
                if (this.password !=this.rpassword) {
                    this.rpwflg = true
                } else {
                    this.rpwflg = false
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

    .whole .login_inside div {
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

    span, a {
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

    button {
        margin-top: 20px;
        width: 268px;
        height: 40px;
        margin-left: 72px;
        border-radius: 10px;
        background: #0398ff;
        color: #fff;
    }

    .whole .login .login_in:nth-of-type(4) {
        text-align: center;
        margin-left: 75px;
    }

    .tips {
        padding-top: 5px;
        text-align: right;
        font-size: 12px;
        color: red;
    }
</style>
