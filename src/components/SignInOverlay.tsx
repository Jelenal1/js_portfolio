"use client";

import { client } from "@/utils/client";
import { SetStateAction } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const SignInOverlay = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
}) => {
  const handleSignIn = async (formData: FormData) => {
    console.log(formData.get("email"));
    const { data, error } = await client.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      dontRememberMe: formData.get("remember") === "on",
    });

    if (error) console.log(error);

    console.log(data);
  };
  if (!open) return <></>;
  return (
    <div
      className={twMerge(
        `fixed left-0 top-0 flex h-full w-full flex-col bg-zinc-800 bg-opacity-90 p-2 backdrop-blur`,
      )}
    >
      <button onClick={() => setOpen((prev) => !prev)}>
        <IoCloseCircle size={40} className="my-1 ml-auto mr-2" />
      </button>
      <form
        action={handleSignIn}
        className="relative mx-auto mt-20 flex h-full max-h-[300px] w-full max-w-4xl flex-col gap-4 rounded-3xl border-2 p-2"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-1 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="p-1 text-black"
          />
        </div>
        <div className="mb-5 flex items-center gap-2">
          <label htmlFor="remember">Remeber me?</label>
          <input type="checkbox" name="remember" className="mr-auto h-5 w-5" />
        </div>
        <input
          type="submit"
          className="mx-auto w-fit cursor-pointer rounded-md border bg-zinc-800 bg-opacity-90 px-5 py-2 text-xl"
          value="Sign in"
        />
      </form>
    </div>
  );
};

export default SignInOverlay;
