import Input from 'components/Input.jsx';
import Button from 'components/Button.jsx';
//TODO import Alert from 'components/Alert.jsx'
// import { signup } from 'api/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [isPasswordEqual, setIsPasswordEqual] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('') // 這邊的errorMsg是用來判斷若後端response的資料不存在或有誤，可以讓<AuthInput/>可以製造出相對的錯誤訊息

  let savedUserInfo = {} // 撈取 localStorage 中的 userInfo 協助跳轉頁面
  let savedUserInfoId = 0
  if (localStorage.getItem("userInfo")) {
    savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    savedUserInfoId = savedUserInfo.id
  }

  // 透過 API 撈初始資料
  useEffect(() => {
    if (savedUserInfoId) {
      navigate('/dashboard')
    } else {
      navigate('/signup');
    }
  }, [savedUserInfoId, navigate]);

  const handleClick = async () => {
    //檢查格式是否符合需求
    if (email.trim().length === 0 || password.trim().length === 0) return
    else if (password !== checkPassword) {
      return setIsPasswordEqual(false)
    }
    const response = await signup({ email, password, checkPassword })
    //產生錯誤訊息
    if (response.response) return setErrorMsg(response.response.data.message)
    //成功註冊
    else if (response.data.status === "success") {
      setIsSuccess(true)
      setTimeout(() => {
        navigate('/login')
      }, 1200)
    }
  }

  return (
    <div className="hero margin-inline-11 text-center flow">
      {/* TODO: <Alert /> */}

      <p className="heading-2"> Let&apos;s get started! </p>
      <p className="fs-500 clr-neutral-400"> Please fill out the information below to sign up.</p>

      <div className="form flow">
        {/* 輸入 Email */}
        <Input
          type="email"
          className="text-center"
          placeholder="your e-mail"
          onChange={(emailInput) => {
            setErrorMsg('')
            setEmail(emailInput)
          }}
        />
        {/* 輸入密碼 */}
        <Input
          type="password"
          className="text-center"
          placeholder="your password"
          onChange={(passwordInput) => {
            setIsPasswordEqual(true)
            setPassword(passwordInput)
          }}
        />
        {/* 密碼確認 */}
        <Input
          type="password"
          className="text-center"
          placeholder="confirm your password"
          onChange={(passwordConfirmInput) => {
            setIsPasswordEqual(true)
            setCheckPassword(passwordConfirmInput)
          }}
        />
      </div>
      
      <Button btn="signup" theme="primary" onClick={handleClick} />
      <Link to="/login">
        <p className="fs-100 margin-5"> Already have an account? </p>
      </Link>
      
    </div>
  )
}
