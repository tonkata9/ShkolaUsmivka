import './style.css'

const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu')
const yearEl = document.getElementById('year')

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString()
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open')
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  })
}

// Active nav link (desktop)
const navLinks = Array.from(document.querySelectorAll('.nav a'))
const path = window.location.pathname.replace(/\/$/, '/index.html')
navLinks.forEach((a) => {
  const href = a.getAttribute('href')
  if (!href) return
  const normalized = href === '/' ? '/index.html' : href
  if (path.endsWith(normalized)) {
    a.classList.add('active')
  }
})

// Contact form backend submit with basic validation (email or phone required)
const form = document.getElementById('contactForm')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const name = (formData.get('name') || '').toString().trim()
    const email = (formData.get('email') || '').toString().trim()
    const phone = (formData.get('phone') || '').toString().trim()
    const course = (formData.get('course') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    const msg = document.getElementById('formMsg')
    if (!email && !phone) {
      if (msg) msg.textContent = 'Моля, въведете имейл или телефон.'
      return
    }

 fetch('/.netlify/functions/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone, course, message })
})
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text())
        if (msg) msg.textContent = 'Благодарим! Запитването е изпратено.'
        form.reset()
      })
      .catch((err) => {
        if (msg) msg.textContent = 'Възникна грешка при изпращане. Опитайте отново.'
        console.error(err)
      })
  })
}
