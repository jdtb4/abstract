import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20 items-center">
      <div className="grid grid-cols-2">
        <div className="flex pr-6 mb-12">
          <Image src="/img/1.png" width={40} height={40} alt="abstract" />
          <div className=" flex flex-col gap-4">
            <p className="text-2xl font-bold">Using Abstract</p>
            <p className="text-xl">
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <a className="text-lg">Learn More</a>
          </div>
        </div>

        <div className="flex pr-6 mb-12">
          <Image src="/img/2.png" width={40} height={40} alt="abstract" />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">
              Manage organizations, teams, and projects
            </p>
            <p className="text-xl">
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <a className="text-lg">Learn More</a>
          </div>
        </div>

        <div className="flex pr-6 mb-12">
          <Image src="/img/3.png" width={40} height={40} alt="abstract" />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Authenticate to Abstract</p>
            <p className="text-xl">
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <a className="text-lg">Learn More</a>
          </div>
        </div>

        <div className="flex pr-6 mb-12">
          <Image src="/img/4.png" width={40} height={40} alt="abstract" />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">Manage your account</p>
            <p className="text-xl">
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <a className="text-lg">Learn More</a>
          </div>
        </div>

        <div className="flex pr-6 mb-12">
          <Image src="/img/5.png" width={40} height={40} alt="abstract" />
          <div>
            <p>Manage your billing</p>
            <p>Change subscriptions and payment details.</p>
            <a>Learn More</a>
          </div>
        </div>
        <li>
          <p>Abstract support</p>
          <p>Get in touch with a human.</p>
          <a>Learn More</a>
        </li>
      </div>
    </div>
  );
}
