import Image from "next/image";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-centertext-lg font-medium">
            Pet-TAG
          </div>
          <Image
            src="/qr-code-all-orange.svg"
            alt="QR code scanner"
            width={300}
            height={300}
            className="relative self-center justify-center items-center m-auto"
            priority
          />
          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Helped find my dog in foreign country when he ran away!
                <br />
                Great <b>free</b> tool!&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthenticationLayout;
