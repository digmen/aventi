import Image from "next/image";
import Time from "./Time";
import { CraftworkGroteskMedium } from "../font";
import { CraftworkGroteskRegular } from '../font';

export default function Navbar() {
    return (
        <nav className="px-[35px] my-[25px] flex items-center justify-between w-full">
            <section className="flex-shrink-0">
                <Image src="/assets/images/logo.svg" alt="logo" width={67} height={67} priority />
            </section>
            <section className={`flex-grow ${CraftworkGroteskRegular.className}`}>
                <Time />
            </section>
            <section className="flex-shrink-0">
                <button className={`font-medium text-primary text-[32px] ${CraftworkGroteskMedium.className}`}>
                    Menu
                </button>
            </section>
        </nav>
    )
}
