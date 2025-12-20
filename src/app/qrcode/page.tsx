import Link from "next/link";

export default function QRCodeWelcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-md w-full space-y-8 text-center">

        {/* Friendly Header */}
        <div className="animate-fade-in-up">
          <div className="mx-auto h-24 w-24 bg-indigo-100 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
            🤯
          </div>
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-2 tracking-tight">
            Incroyable.
          </h1>
          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Vous avez vraiment scanné ce QR Code.
          </h2>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">
            Honnêtement ? Je l'ai mis juste pour avoir l'air "tech" et moderne. <br/>
            Je ne pensais pas qu'on en arriverait là, vous et moi. 😳
          </p>
        </div>

        {/* Personal Note */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-50 transform transition hover:scale-105 duration-300">
          <p className="text-gray-700 mb-4 font-medium text-lg">
            Bon, puisqu'on est là...
          </p>
          <p className="text-gray-600">
            Je m'appelle Danny GRANGEOT. Je sauve les entreprises des sites web lents, moches et codés avec les pieds. <br/>
            <span className="text-sm italic text-gray-400">(Oui, je parle de celui de votre concurrent).</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-4 pt-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Allez, on arrête de tourner autour du pot :
          </p>

          <Link
            href="/realisations"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
          >
            <span className="absolute left-4 text-xl">🧐</span>
            Voir mes projets
          </Link>

          <Link
            href="/contact"
            className="group relative w-full flex justify-center py-4 px-4 border-2 border-indigo-100 text-base font-medium rounded-xl text-indigo-700 bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <span className="absolute left-4 text-xl">💸</span>
            Me donner votre argent (contre un site)
          </Link>

          <div className="pt-6">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-indigo-500 transition-colors flex items-center justify-center gap-2"
            >
              <span>🏃</span> Fuir lâchement vers l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
