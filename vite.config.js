import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        kursove: './kursove.html',
        tsenorazpis: './tsenorazpis.html',
        maturi: './maturi.html',
        uchiteli: './uchiteli.html',
        kontakti: './kontakti.html',
        // Predmeti pages
        matematika: './predmeti/matematika.html',
        bel: './predmeti/bel.html',
        fizika: './predmeti/fizika.html',
        himia: './predmeti/himia.html',
        medicina: './predmeti/medicina.html',
        angliiski: './predmeti/angliiski.html',
        ruski: './predmeti/ruski.html',
        nemski: './predmeti/nemski.html',
        ispanski: './predmeti/ispanski.html',
        'foreign-languages': './predmeti/foreign-languages.html',
        'de-a1': './predmeti/de-a1.html',
        'de-a2': './predmeti/de-a2.html',
        'en-a1': './predmeti/en-a1.html',
        'en-a2': './predmeti/en-a2.html',

        'math-4': './predmeti/math-4.html',
        'math-6': './predmeti/math-6.html',
        'math-nvo': './predmeti/math-nvo.html',
        'bel-nvo': './predmeti/bel-nvo.html',
        'sastez-math': './predmeti/sastez-math.html',
        'su-math': './predmeti/su-math.html',
        grupi: './predmeti/grupi.html'
      }
    }
  }
})
