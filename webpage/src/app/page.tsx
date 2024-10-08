"use client";
import Image from "next/image";
import LoginForm from "../components/loginForms";
import LogInImage from "../pictures/logIn.jpg"
export default function Home() {

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center col-span-2 lg:col-span-1">
        <LoginForm />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src={LogInImage}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
