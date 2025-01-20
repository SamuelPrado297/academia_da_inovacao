import Link from "next/link";
import Page from "./components/templates/page";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiTypescript, SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Home() {
  return (
    <Page className="body">
      <div className="flex flex-col justify-center items-center p-48">
        <p className="flex p-2 justify-center items-center text-4xl">CRUD Project</p>
        <p className="flex justify-center items-center pb-3 font-semibold">Tecnologias Usadas</p>
        <div className="flex justify-between gap-3 pb-5">
          <BiLogoPostgresql className="w-10 h-10 text-blue-400" />
          <SiPrisma className="w-10 h-10 text-blue-950" />
          <TbBrandNextjs className="w-10 h-10 text-green-500" />
          <SiNestjs className="w-10 h-10 text-red-600" />
          <RiTailwindCssFill className="w-10 h-10 text-cyan-600" />
          <SiTypescript className="w-10 h-10 text-blue-800 bg-white border-0 rounded" />
        </div>
        <button className="bg-red-700 px-4 py-2 rounded-md"><Link href="/internal/user">Acessar</Link></button>
      </div>
    </Page>
  );
}