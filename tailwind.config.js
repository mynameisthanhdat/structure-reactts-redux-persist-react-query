/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '480px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1439px' },
        mw1346: { max: '1346px' },
        mw926: { max: '926px' },
        mw736: { max: '736px' },
        mw1314: { max: '1314px' },
        mw1023: { max: '1023px' },
      },
      colors: {
        primary: {
          1: '#523280',
          shade1: '#342052',
          shade2: '#6A41A6',
          shade3: '#A989D8',
          shade4: '#EBDDFF',
          shade5: '#D4C2E7',
        },
        secondary: {
          1: '#42C0D4',
          bold1: '#1092A7',
          light1: '#77DDED',
          2: '#F04E53',
          bold2: '#CF1E24',
          light2: '#FF979A',
          3: '#FFA45F',
          bold3: '#EF7214',
          bold32: '#FF6A00',
          light3: '#FFBE8C',
          4: '#F5EBDE',
          bold4: '#F7CF9C',
          light4: '#FFF6EB',
        },
        indicator: {
          red: '#CF1E24',
          green: '#3B994A',
          yellow: '#FFF278',
          yellow2: '#FAB400',
          purple: '#40008E',
        },
        neutral: {
          1: '#09050F',
          2: '#16121B',
          3: '#312E36',
          4: '#68666C',
          5: '#918F93',
          6: '#DEDEDF',
          7: '#F2F2F2',
          8: '#FDFDFD',
          '7-header-footer': '#F8F8F8',
        },
      },
      boxShadow: {
        '1xl': '0px 4px 8px rgb(0, 0, 0, 0.1)',
        '2xl': '0px 12px 24px rgba(0, 0, 0, 0.2)',
        '3xl': '0px 16px 32px rgba(0, 0, 0, 0.25)',
        toggle: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        dropdown: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        headline1: [
          '52px',
          {
            fontWeight: '600',
            lineHeight: '68px',
          },
        ],
        headline2: [
          '40px',
          {
            fontWeight: '600',
            lineHeight: '52px',
          },
        ],
        headline3: [
          '32px',
          {
            fontWeight: '600',
            lineHeight: '40px',
          },
        ],
        headline4: [
          '26px',
          {
            fontWeight: '600',
            lineHeight: '32px',
          },
        ],
        headline5: [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '28px',
          },
        ],
        headline5A: [
          '18px',
          {
            fontWeight: '700',
            lineHeight: '28px',
          },
        ],
        body1: [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '24px',
          },
        ],
        body2: [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '20px',
          },
        ],
        body3: [
          '12px',
          {
            fontWeight: '500',
            lineHeight: '16px',
          },
        ],
        hairline1: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '16px',
          },
        ],
        hairline2: [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '14px',
          },
        ],
        hairline3: [
          '12px',
          {
            fontWeight: '600',
            lineHeight: '12px',
          },
        ],
        'body1-med': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '30px',
          },
        ],
        signature: [
          '30px',
          {
            fontWeight: '500',
            lineHeight: '48px',
          },
        ],
      },
    },
  },
  plugins: [],
}
