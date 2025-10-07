import React from 'react';
import { useLanguage } from '../../LanguageContext';
import ArticleLayout from '../../components/ArticleLayout';

export default function WebAssembly2025() {
  const { lang } = useLanguage();

  const title = lang === 'fr'
    ? 'WebAssembly en 2025 : Le futur du développement web haute performance'
    : 'WebAssembly in 2025: The future of high-performance web development';

  const date = lang === 'fr' ? '18 Mars 2025' : 'March 18, 2025';
  const category = lang === 'fr' ? 'Performance' : 'Performance';
  const image = '/images/articles/webassembly.webp';

  return (
    <ArticleLayout title={title} date={date} category={category} image={image}>
      <div className="article-content text-gray-300">
        {lang === 'fr' ? (
          <>
            <p className="lead text-xl mb-8">
              WebAssembly (Wasm) révolutionne le web en permettant d'exécuter du code à vitesse quasi-native directement dans le navigateur. En 2025, cette technologie est devenue incontournable pour les applications web performantes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 Qu'est-ce que WebAssembly ?</h2>
            <p className="mb-6">
              WebAssembly est un format binaire bas niveau qui s'exécute dans les navigateurs modernes. Il permet de compiler du code écrit en C, C++, Rust, Go ou autres langages vers un format ultra-optimisé.
            </p>

            <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-blue-400 mb-3">💡 Performances comparées :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>JavaScript</strong> : 1x (baseline)</li>
                <li><strong>WebAssembly</strong> : 10-20x plus rapide pour calculs intensifs</li>
                <li><strong>Natif (C++)</strong> : 30x plus rapide</li>
              </ul>
              <p className="mt-4 text-sm">
                Pour des tâches comme le traitement d'image, crypto, compression, Wasm surpasse largement JavaScript.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🎯 Cas d'usage concrets en 2025</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Éditeurs en ligne (Figma, Photopea)</h3>
            <p className="mb-6">
              <strong>Figma</strong> utilise WebAssembly pour offrir des performances proches d'un logiciel natif :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Rendu de milliers d'objets sans lag</li>
              <li>Export d'images haute résolution instantané</li>
              <li>Manipulation de fichiers volumineux fluide</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Gaming dans le navigateur</h3>
            <p className="mb-6">
              Des jeux AAA tournent maintenant directement dans Chrome/Firefox grâce à Wasm :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Unity</strong> exporte vers WebAssembly</li>
              <li><strong>Unreal Engine</strong> supporte Wasm</li>
              <li>Jeux 3D à 60 FPS sans installation</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Applications de traitement vidéo/audio</h3>
            <p className="mb-6">
              Montage vidéo, compression, transcoding directement dans le navigateur :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>FFmpeg</strong> compilé en Wasm pour conversion vidéo</li>
              <li>Éditeurs audio professionnels (DAW) web</li>
              <li>Compression d'images sans serveur</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Machine Learning dans le navigateur</h3>
            <p className="mb-6">
              TensorFlow.js avec backend Wasm pour l'inférence ML rapide :
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Reconnaissance d'image en temps réel</li>
              <li>Traduction instantanée côté client</li>
              <li>Modèles IA qui tournent localement</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🛠️ Comment démarrer avec WebAssembly</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Option 1 : Rust → WebAssembly</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// Installation
cargo install wasm-pack

// fibonacci.rs
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}

// Build
wasm-pack build --target web

// Utilisation en JavaScript
import init, { fibonacci } from './pkg/fibonacci.js';
await init();
console.log(fibonacci(40)); // Ultra rapide!`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Option 2 : C/C++ → WebAssembly (Emscripten)</h3>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// hello.c
#include <emscripten.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
int multiply(int a, int b) {
    return a * b;
}

// Compilation
emcc hello.c -o hello.js \\
  -s EXPORTED_FUNCTIONS='["_multiply"]' \\
  -s WASM=1

// Utilisation
const result = Module._multiply(5, 7); // 35`}
              </pre>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Option 3 : AssemblyScript (TypeScript-like)</h3>
            <p className="mb-6">
              Pour les développeurs JavaScript/TypeScript, <strong>AssemblyScript</strong> offre une syntaxe familière :
            </p>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <pre className="text-sm overflow-x-auto">
{`// assembly/index.ts
export function add(a: i32, b: i32): i32 {
    return a + b;
}

// Compile
npm run asbuild

// Usage
import { add } from "./build/optimized.js";
console.log(add(10, 20)); // 30`}
              </pre>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">⚡ Bonnes pratiques WebAssembly</h2>

            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-green-400 mb-3">✅ À faire :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Utilisez Wasm pour <strong>calculs intensifs</strong>, pas pour DOM manipulation</li>
                <li>Optimisez la <strong>taille du fichier .wasm</strong> (gzip, brotli)</li>
                <li>Mettez en cache le module compilé</li>
                <li>Communiquez efficacement entre JS et Wasm (minimisez les allers-retours)</li>
                <li>Utilisez <strong>SharedArrayBuffer</strong> pour données volumineuses</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-red-400 mb-3">❌ À éviter :</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Utiliser Wasm pour des tâches simples (overhead inutile)</li>
                <li>Négliger le temps de chargement initial</li>
                <li>Oublier les fallbacks pour navigateurs anciens</li>
                <li>Passer trop de données entre JS et Wasm</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🔮 WebAssembly en 2025 : Nouvelles fonctionnalités</h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">WASI : WebAssembly System Interface</h3>
            <p className="mb-6">
              <strong>WASI</strong> permet à Wasm de s'exécuter <strong>en dehors du navigateur</strong> : serveurs, IoT, CLI tools.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Threads et SIMD</h3>
            <p className="mb-6">
              Support du multithreading et des instructions SIMD pour performances maximales sur calculs vectoriels.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Garbage Collection</h3>
            <p className="mb-6">
              GC intégré facilitant l'intégration de langages comme Java, C#, Python vers Wasm.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">📊 Exemples de performances réelles</h2>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Benchmark : Calcul de nombres premiers jusqu'à 1 million</h4>
              <ul className="space-y-2">
                <li><strong>JavaScript</strong> : 2450ms</li>
                <li><strong>WebAssembly (Rust)</strong> : 185ms <span className="text-green-400">(13x plus rapide)</span></li>
                <li><strong>Natif (C++)</strong> : 120ms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 Frameworks et outils populaires</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">🦀 Rust + wasm-pack</h4>
                <p className="text-sm">L'écosystème le plus mature. Excellent pour performance.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">⚙️ Emscripten</h4>
                <p className="text-sm">Pour porter du code C/C++ existant vers le web.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">📘 AssemblyScript</h4>
                <p className="text-sm">Syntaxe TypeScript, courbe d'apprentissage douce.</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-bold text-white mb-2">🌐 Wasmer/Wasmtime</h4>
                <p className="text-sm">Runtimes Wasm pour serveurs et CLI.</p>
              </div>
            </div>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                WebAssembly n'est plus une technologie expérimentale mais une solution production-ready pour applications web exigeantes. En 2025, maîtriser Wasm devient un avantage compétitif majeur.
              </p>
              <p className="mb-0">
                <strong>Quand l'utiliser ?</strong> Si votre app nécessite calculs intensifs, traitement temps réel, ou performances natives, WebAssembly est votre meilleur allié. Commencez par identifier les goulots d'étranglement de votre app JavaScript et migrez ces parties vers Wasm.
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="lead text-xl mb-8">
              WebAssembly (Wasm) revolutionizes the web by enabling near-native code execution directly in browsers. In 2025, this technology has become essential for high-performance web applications.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">🚀 What is WebAssembly?</h2>
            <p className="mb-6">
              WebAssembly is a low-level binary format that runs in modern browsers. It allows compiling code written in C, C++, Rust, Go or other languages to an ultra-optimized format.
            </p>

            <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-6 mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Conclusion</h3>
              <p className="mb-4">
                WebAssembly is no longer an experimental technology but a production-ready solution for demanding web applications. In 2025, mastering Wasm becomes a major competitive advantage.
              </p>
              <p className="mb-0">
                <strong>When to use it?</strong> If your app requires intensive calculations, real-time processing, or native performance, WebAssembly is your best ally. Start by identifying bottlenecks in your JavaScript app and migrate those parts to Wasm.
              </p>
            </div>
          </>
        )}
      </div>
    </ArticleLayout>
  );
}
