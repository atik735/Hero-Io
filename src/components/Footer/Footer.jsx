import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-300 mt-10">
  <div class=" px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 class="text-2xl font-bold text-white">Ultra Apps</h2>
      <p class="mt-4 text-sm text-gray-400">
        Discover powerful apps that make your life easier and smarter. Built with simplicity and performance in mind.
      </p>
    </div>

   
    <div>
      <h3 class="text-white font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:text-white transition">Apps</a></li>
        <li><a href="#" class="hover:text-white transition">About</a></li>
        <li><a href="#" class="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-white font-semibold mb-4">Resources</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
        <li><a href="#" class="hover:text-white transition">FAQ</a></li>
      </ul>
    </div>


    <div>
      <h3 class="text-white font-semibold mb-4">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white transition">🌐</a>
        <a href="#" class="hover:text-white transition">📘</a>
        <a href="#" class="hover:text-white transition">🐦</a>
        <a href="#" class="hover:text-white transition">📸</a>
      </div>
    </div>

  </div>


  <div class="border-t border-gray-700">
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>© 2026 Ultra Apps. All rights reserved.</p>
      <p class="mt-2 md:mt-0">Made with ❤️ by Ultra Apps Team</p>
    </div>
  </div>
</footer>
  )
}
