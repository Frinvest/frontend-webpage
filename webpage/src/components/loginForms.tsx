"use client";
import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginType } from "@/types/loginTypes";
import logIn from "@/utils/firebaseUtils";
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()
	const [data, setData] = useState<LoginType>({
		email: '',
		password: '',
	});
    const { toast } = useToast()
    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            let test = await logIn(data.email, data.password);
            console.log("hi",test)
            router.push('/dashboard')

        } catch (error: any) {
            await toast({
                variant: "destructive" ,
                title: "Error",
                description: "Wrong password. Try again or click Forgot password to reset it.",
            })
            console.log(error.message);
        }

  };

  	// Destructure data from the data object
	const { ...allData } = data;

	// Disable submit button until all fields are filled in
	const canSubmit = [...Object.values(allData)].every(Boolean);
  return (
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="focus:ring-blue-500 focus:border-blue-500 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                placeholder="test@example.com"
                pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                required
                onChange={(e: any) => {
                    setData({
                        ...data,
                        email: e.target.value,
                    });
                }}
              />
                <span className="mt-1 hidden text-sm text-red-400">
                        Please enter a valid email address.{' '}
                </span>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
                onChange={(e: any) => {
                    setData({
                        ...data,
                        password: e.target.value,
                    });
                }}
              />
            </div>
            <Button disabled={!canSubmit} type="submit" className="w-full" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
  );
}


export default LoginForm;