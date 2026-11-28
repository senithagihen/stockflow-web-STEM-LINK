import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import AuthLayout from "../../layouts/AuthLayout"

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(form))
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-sm flex flex-col items-center">
    <Link
      to="/"
      className="mb-4 text-2xl font-bold text-gray-500 hover:text-orange-500 text-center "
    >
      StockFlow
    </Link>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourname@email.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required onChange={handleChange} />
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 mt-5 mb-1">
            Login
          </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
        </CardFooter>
      </Card>
      </div>
    </AuthLayout>
  )
}


export default Login;