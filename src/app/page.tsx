"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { WrenchScrewdriverIcon, PresentationChartBarIcon, DevicePhoneMobileIcon, WrenchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Servicio', href: '#service' },
  { name: 'Sobre mí', href: '#aboutMe' },
]

const features = [
  {
    name: 'Consulta gratuita',
    description:
      'Me podes escribir por whatsapp comentandome tu problema, duda o pedido.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Asesoramiento',
    description:
      'Te asesoro para que veas cuales son las opciones que tenés para resolver tu problema.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Solución problema simple',
    description:
      'Si es un problema muy simple te digo como resolverlo.',
    icon: WrenchIcon,
  },
  {
    name: 'Presupuesto en caso de ser necesario',
    description:
      'Si veo que realmente necesitás la ayuda de una persona técnica te paso un presupuesto acorde al trabajo.',
    icon: WrenchScrewdriverIcon,
  },

]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <p className="md:text-lg lg:text-xl tracking-tight text-gray-900 capitalize "> amigo </p>
              <p className="md:text-lg lg:text-xl tracking-tight text-gray-900 capitalize">  programador</p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className="text-l lg:text-xl tracking-tight text-gray-900 capitalize "> amigo </p>
                <p className="text-l  tracking-tight text-gray-900 capitalize">  programador</p>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">

              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>


            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div id='home' className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Soy ese amigo programador, que necesitás tener.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Si estás con dudas relacionadas al mundo digital, ¡consúltame antes de gastar en algo que no necesitás!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ¡Estoy para ayudarte!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://wa.me/+5491132021849?text=Hola+Joaco,+tengo+una+consulta:"
                target='_blank'
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Consultá gratis
              </Link>

            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div id='examples' className='bg-indigo-700 py-6 text-center'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mt-6 text-lg leading-8 text-white">
            Te puedo ayudar con cualquier duda de tecnología que tengas relacionada a tu negocio.
          </p>
          <p className="mt-6 text-base leading-8 text-white italic">
            Puede ser páginas web, mails, Whatsapp, redes sociales, automatizacioes,
            Mercadopago, Tiendanube, códigos QR, reserva de turnos, etc.
          </p>
        </div>

      </div>

      <div id='service' className='my-6'>
        <div className="bg-white ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="mt-2 text-3xl text-center font-semibold tracking-tight text-indigo-900 sm:text-4xl">
                ¿Cómo te puedo ayudar?
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div id='aboutMe' className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-fit">
          <div className="max-w-2xl">
            <h2 className="mt-2 text-3xl text-center font-semibold tracking-tight text-indigo-900 sm:text-4xl">Sobre mí...</h2>
            <div className="flex items-center gap-x-6 my-6" >
              <Image className="h-16 w-16 rounded-full" width={500} height={500} src='/profile-web-dev.jpeg' alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Joaco</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">Desarrollador Web</p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hace 4 años que trabajo como desarrollador web en empresas de tecnología y anterior a eso me dedicaba al marketing digital, especificamente de contenidos.

            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vivo en Argentina y trabajé por muchos años de manera independiente antes de trabajar con empresas más grandes, así que conozco muchas de las dificultades de ambos mundos.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Actualmente ayudo a personas, negocios y empresas a potenciarse con tecnología de la manera más simple, rápida y eficiente posible.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="https://wa.me/+5491132021849?text=Hola+Joaco,+tengo+una+consulta:"
            target='_blank'
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Escribime a whatsapp acá
          </Link>

        </div>
      </div>
    </div >
  )
}
