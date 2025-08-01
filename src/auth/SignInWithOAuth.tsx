import { SignInWithApple } from "@/auth/oauth/SignInWithApple";
import { SignInWithGitHub } from "@/auth/oauth/SignInWithGitHub";
import { SignInWithGoogle } from "@/auth/oauth/SignInWithGoogle";
import { SignInWithKeycloak } from "./oauth/SignInWithKeycloak";

export function SignInWithOAuth() {
  return (
    <div className="flex flex-col min-[460px]:flex-row w-full gap-2 items-stretch">
      <SignInWithGitHub />
      <SignInWithGoogle />
      <SignInWithApple />
      <SignInWithKeycloak />
    </div>
  );
}
