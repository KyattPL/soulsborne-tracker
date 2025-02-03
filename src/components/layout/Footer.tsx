import { FaYoutube } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className=" text-zinc-400">
                        Built with passion for the Soulsborne community
                    </div>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://github.com/kyattpl/soulsborne-tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <LuGithub className="h-5 w-5" />
                        </a>
                        <a
                            href="https://kyattpl.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <TbWorldWww className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.youtube.com/@kyatt_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <FaYoutube className="h-5 w-5" />
                        </a>
                        <a
                            href="https://x.com/KyattPL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <FaXTwitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}