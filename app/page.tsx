import Link from "next/link"
import Image from "next/image"
import windows from "@/public/Hero-Bloom-Logo-800x533.jpg"
import vscode from "@/public/5214745121259520.png"
import discord from "@/public/discord-new-logo.jpg"
import chrome from "@/public/chrome.jpg"
import firefox from "@/public/page-image-master.1b6efe3d5631.jpg"

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      <div className='text-center  p-10 lg:p-20'>
        <h1 className='font-extrabold text-4xl'>Popular Apps</h1>
        <p className='mt-3 text-lg'>Shortcuts for popular apps and operatings systems</p>
      </div>
      <div className="flex justify-center mx-12 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-6">
          <Link className="" href='https://www.xda-developers.com/windows-11-keyboard-shortcuts/' target="_blank">
            <div className="rounded-xl bg-zinc-200/80 dark:bg-zinc-900 shadow-lg transform transition-all hover:-translate-y-4 duration-300">
              <div className="flex p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={windows} className="h-32 rounded-xl w-64 lg:w-96 lg:h-64" alt='windows'></Image>
                </div>
                <h3 className='mt-2 text-center font-lg font-semibold'>Windows Shortcuts</h3>
              </div>
            </div>
          </Link>
          <Link href='https://www.crio.do/blog/vs-code-shortcuts/' target="_blank">
            <div className="rounded-xl bg-zinc-200/80 dark:bg-zinc-900 shadow-lg transform transition-all hover:-translate-y-4 duration-300">
              <div className="flex p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={vscode} className="h-32 w-64 lg:w-96 lg:h-64" alt='windows'></Image>
                </div>
                <h3 className='mt-2 text-center font-lg font-semibold'>VS Code Shortcuts</h3>
              </div>
            </div>
          </Link>
          <Link href='https://www.daskeyboard.com/blog/discord-slack-github-shortcuts/' target="_blank">
            <div className="rounded-xl bg-zinc-200/80 dark:bg-zinc-900 shadow-lg transform transition-all hover:-translate-y-4 duration-300">
              <div className="flex p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={discord} className="h-32 rounded-xl w-64 lg:w-96 lg:h-64" alt='windows'></Image>
                </div>
                <h3 className='mt-2 text-center font-lg font-semibold'>Discord Shortcuts</h3>
              </div>
            </div>
          </Link>
          <Link href='https://www.daskeyboard.com/blog/discord-slack-github-shortcuts/' target="_blank">
            <div className="rounded-xl bg-zinc-200/80 dark:bg-zinc-900 shadow-lg transform transition-all hover:-translate-y-4 duration-300">
              <div className="flex p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={chrome} className="h-32 rounded-xl w-64 lg:w-96 lg:h-64" alt='windows'></Image>
                </div>
                <h3 className='mt-2 text-center font-lg font-semibold'>Chrome Shortcuts</h3>
              </div>
            </div>
          </Link>
          <Link href='https://www.daskeyboard.com/blog/discord-slack-github-shortcuts/' target="_blank">
            <div className="rounded-xl bg-zinc-200/80 dark:bg-zinc-900 shadow-lg transform transition-all hover:-translate-y-4 duration-300">
              <div className="flex p-5 flex-col">
                <div className="rounded-xl overflow-hidden">
                  <Image src={firefox} className="h-32 rounded-xl w-64 lg:w-96 lg:h-64" alt='windows'></Image>
                </div>
                <h3 className='mt-2 text-center font-lg font-semibold'>Firefox Shortcuts</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </main>
  )
}
