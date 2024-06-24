import Image from "next/image";
import firefox from '../../public/assets/firefox.png'
import facebook from '../../public/assets/facebook.png'
import instagram from '../../public/assets/instagram.png'
import twitter from '../../public/assets/twitter.png'
import logo from '../../public/assets/logo.png'
import email from '../../public/assets/email.svg'
import senha from '../../public/assets/senha.svg'

import { fredoka } from "./utils/fonts";

export default function Home() {
  return (
    <main className="bg-main bg-cover w-full h-full sm:h-screen flex items-center justify-center">
      {/* //Sessão dupla (firefox + login)*/}
      <section className="lg:w-[75%] w-[90%] h-[85%] flex rounded-3xl">
        {/* //Sessão firefox*/}
        <section className="bg-orange hidden lg:flex bg-cover w-full rounded-l-3xl">
          <div className="m-auto h-full flex flex-col justify-around items-center">
            <div className="items-center flex flex-col">
              <Image
                src={firefox}
                alt="firefox"
                className=""
              />
              <p style={fredoka.style} className="lg:text-5xl text-3xl text-center w-[80%] mt-10 font-medium">Uma plataforma única que ajuda no seu monitoramento</p>
            </div>
            <section className="flex gap-2">
              <div className="rounded-full bg-white w-7 h-7 flex justify-center items-center shadow-lg shadow-black/30">
                <Image
                  src={facebook}
                  alt="facebook"
                  className="font-normal"
                  width={"18"}
                  height={"18"}
                />
              </div>
              <div className="rounded-full bg-white w-7 h-7 flex justify-center items-center shadow-lg shadow-black/30">
                <Image
                  src={instagram}
                  alt="instagram"
                  className="font-normal"
                  width={"18"}
                  height={"18"}
                />
              </div>
              <div className="rounded-full bg-white w-7 h-7 flex justify-center items-center shadow-lg shadow-black/30">
                <Image
                  src={twitter}
                  alt="twitter"
                  className="font-normal"
                  width={"18"}
                  height={"18"}
                />
              </div>
            </section>
          </div>
        </section>
        {/* //Sessão login*/}
        <section className="bg-[#FEF9F3] w-full flex flex-col items-center px-10 md:mx-auto pt-10 rounded-r-3xl rounded-l-3xl lg:rounded-l-none">
          <div className="">
            <Image
              src={logo}
              alt="logo"
              className="mx-auto"
            />
            <p style={fredoka.style} className="text-black text-center mx-auto font-normal w-[80%] lg:text-xl lg:w-80 mb-10">Uma plataforma única que ajuda no seu monitoramento</p>
            {/* Input de email */}
            <div className="mb-4 lg:w-full w-auto px-auto">
              <div className="flex items-center p-2 bg-gray-200 rounded-lg md:w-full">
                <Image
                  src={email}
                  alt="email"
                  className="mr-2"
                />
                <input className="flex-1 bg-transparent outline-none text-sm md:text-base lg:text-lg text-gray-800" type="email" placeholder="Digite seu e-mail" />
              </div>
            </div>
            {/* Input de senha */}
            <div className="mb-6 w-full">
              <div className="flex items-center p-2 bg-gray-200 rounded-lg">
                <Image
                  src={senha}
                  alt="senha"
                  className="mr-2"
                />
                <input className="flex-1 bg-transparent outline-none text-sm md:text-base lg:text-lg text-gray-800" type="password" placeholder="Digite sua senha" />
              </div>
            </div>
            {/* Botão de Login */}
            <button className="w-full bg-[#FC8B1F] text-white rounded-lg py-3 text-sm md:text-base lg:text-lg  uppercase shadow-md hover:bg-primary-600">
              Entrar
            </button>
            <div className="flex items-center justify-between w-full mt-6">
              <div className="flex items-center gap-2">
                <input id="custom-checkbox" type="checkbox" className="h-5 w-5 accent-orange-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                <label className="text-gray-700">Lembrar de mim</label>
              </div>
              <button className="text-orange-500 underline"> Esqueci a senha</button>
            </div>
          </div>
        </section>
      </section>
    </main>

  );
}
