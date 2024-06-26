import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export function LandingDisplay() {
  const { openConnectModal } = useConnectModal();

  return (
    <div className="flex grow flex-col justify-center">
      <div className="flex flex-col items-center justify-center gap-14 relative">
        <div className="absolute left-10 -top-60">
          <Image alt="pattern left" width={700} height={700} src="/pattern-left.svg" priority />
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-56 mb-5">
            <Image alt="upDev logo" width={400} height={200} src="/logo.svg" />
          </div>
          <div className="badge badge-outline badge-accent rounded-sm px-0.5 border-2 font-bold">BETA V2.0</div>
        </div>
        <div className="text-center">
          <h3 className="text-white text-5xl">Your pass to new opportunities.</h3>
          <p className="p-5">
            Check our&nbsp;
            <a
              href="https://github.com/bshevchenko/updev"
              target="_blank"
              className="text-green-400 hover:underline"
              rel="noreferrer"
            >
              GitHub repo
            </a>
            &nbsp;to learn more about upDev.
          </p>
        </div>
        <div className="z-1 absolute right-10 -bottom-60">
          <Image alt="pattern right" width={700} height={700} src="/pattern-right.svg" />
        </div>
        <div className="z-0">
          <button className="btn btn-accent px-6 capitalize" onClick={openConnectModal} type="button">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
