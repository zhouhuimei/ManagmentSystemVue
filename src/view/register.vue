<template>
    <div class="col-12 whole">
        <div class="login_inside">
            <div class="login">
                <div>
                    <div class="login_in">
                        <span>电话<i>：</i></span><input type="text" v-model.trim="fromline.phone" placeholder="请输入电话"/>
                        <div v-show="fromline.phoneflg" class="tips" id="login_tips">请输入正确的手机号</div>
                    </div>
                    <div class="login_in">
                        <span>密码<i>:</i></span><input type="text" v-model.trim="fromline.password" placeholder="请输入密码"/>
                        <div v-show="fromline.pwdflg" class="tips" id="password_tips">请输入密码</div>
                    </div>
                    <div class="login_in">
                        <span>确认密码<i>:</i></span><input type="text" v-model.trim="fromline.rpassword" placeholder="请再次输入密码"/>
                        <div v-show="fromline.rpwdflg" class="tips" id="rpassword_tips">两次输密码不一致</div>
                    </div>
                    <div class="login_in">
                        <span>昵称<i>:</i></span><input type="text" v-model.trim="fromline.uname" placeholder="请输入昵称"/>
                        <div v-show="fromline.umflg" class="tips" id="part">请输入昵称</div>
                    </div>
                    <div class="login_in">
                        <span>部门<i>:</i></span>
                        <select class="form-control">
                                <option v-for="item in toos" :key="item.id">
                                    {{item.label}}
                                </option>
                        </select>
                    </div>
                    <div class="login_in">
                        <button @click="loginClick">注册</button>
                    </div>
                    <div class="login_in" @click="cancel">
                        取消
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
                fromline :{
                    phone: '',
                    password: '',
                    rpassword: '',
                    uname: '',
                    part: '',
                    phoneflg:false,
                    pwdflg: false,
                    rpwdflg: false,
                    umflg: false,
                    partflg: false,
                },
                toos: [
                    {label: '人事部', id: 1},
                    {label: '产研部', id: 2},
                    {label: '教师部', id: 3}
                ]
            }
        },
        created() {

        },
        mounted() {
        },
        methods: {
            loginClick: function () {
                  let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
                if (phoneReg.test(this.fromline.phone) || this.fromline.phone==='' ) {
                    this.fromline.phoneflg = true
                } else {
                    this.fromline.phoneflg = false
                }
                if (this.fromline.password.length < 6) {
                    let dom = document.getElementById('password_tips')
                    dom.innerHTML = '密码不能小于6位'
                    this.fromline.pwdflg = true
                } else {
                    this.fromline.pwdflg = false
                }
                if (this.fromline.uname==='') {
                    this.fromline.umflg = true
                } else {
                    this.fromline.umflg = false
                }
            },
            cancel: function(){
                // this.$refs['fromline'].resetFields()
                this.fromline = {
                    phone: '',
                    password: '',
                    rpassword: '',
                    uname: '',
                    part: '',
                    phoneflg:false,
                    pwdflg: false,
                    rpwdflg: false,
                    umflg: false,
                    partflg: false,
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
        height: 565px;
        margin: 150px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .whole .login .login_in {
        margin: 20px 0;
    }
    .whole .login .login_in:nth-of-type(5){
        display: flex;
        justify-content: flex-end;
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
    .whole .login .login_in span{
        letter-spacing: 10px;
    }
    .tips {
        padding-top: 5px;
        text-align: right;
        font-size: 12px;
        color: red;
    }
    .form-control{
        width: 60%;
        float: right;
        ustify-content: center;
    }
</style>
