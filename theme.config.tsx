import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg
        width="200"
        height="44"
        viewBox="0 0 322 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M177.709 12.8123L190.646 0L191.268 0.616412L143.419 48L142.797 47.3871L155.354 34.9509C152.78 32.1614 151.208 28.449 151.208 24.3779C151.208 15.7272 158.298 8.70638 167.033 8.70638C171.143 8.70638 174.892 10.2631 177.709 12.8123ZM172.726 17.7471L160.337 30.0161C159.029 28.4977 158.241 26.5266 158.241 24.3779C158.241 19.5719 162.18 15.6715 167.033 15.6715C169.202 15.6715 171.193 16.4516 172.726 17.7471Z"
          fill="#0F1722"
        />
        <path
          d="M181.756 18.6247C182.466 20.4077 182.857 22.3475 182.857 24.3779C182.857 33.0285 175.767 40.0493 167.033 40.0493C164.982 40.0493 163.024 39.6628 161.223 38.9593L167.156 33.0842C171.91 33.0181 175.757 29.2082 175.824 24.4997L181.756 18.6247Z"
          fill="#0F1722"
        />
        <path
          d="M163.076 32.1544C163.966 32.6002 164.944 32.8997 165.974 33.0215L160.355 38.5867C159.514 38.2001 158.716 37.7404 157.964 37.218L163.076 32.1544Z"
          fill="#0F1722"
        />
        <path
          d="M179.998 15.3964C180.525 16.1416 180.989 16.9322 181.38 17.7645L175.76 23.3296C175.637 22.3092 175.335 21.3446 174.885 20.46L179.998 15.3964Z"
          fill="#0F1722"
        />
        <path
          d="M215.475 32.5025L232.896 40.0492H221.538C214.758 40.0492 211.312 38.7189 209.515 36.6049C208.154 35.003 207.472 32.7776 207.472 29.6015H214.505C214.505 29.7472 214.503 29.8885 214.502 30.0251C214.493 30.9304 214.486 31.6357 214.899 32.1229C215.043 32.2901 215.236 32.398 215.475 32.4816V32.5025Z"
          fill="#0F1722"
        />
        <path
          d="M235.604 27.3239V34.9263L207.472 22.7374V15.135L235.604 27.3239Z"
          fill="#0F1722"
        />
        <path
          d="M227.6 16.2529L210.18 8.70623H221.538C228.317 8.70623 231.764 10.0366 233.561 12.1505C234.921 13.7524 235.604 15.9778 235.604 19.1539H228.571C228.571 19.0081 228.572 18.8669 228.573 18.7302C228.582 17.825 228.589 17.1197 228.177 16.6325C228.033 16.4654 227.839 16.3574 227.6 16.2738V16.2529Z"
          fill="#0F1722"
        />
        <path
          d="M281.317 19.1539H270.768V26.119H281.317V40.0492H288.35V8.70623H281.317V19.1539Z"
          fill="#0F1722"
        />
        <path
          d="M267.251 31.3428V8.70623H260.219V24.3777L267.251 31.3428Z"
          fill="#0F1722"
        />
        <path d="M320 8.70623H312.967V40.0492H320V8.70623Z" fill="#0F1722" />
        <path
          d="M112.528 22.6364V27.8603L123.401 40.0492H131.868V39.1785L121.519 28.0866C124.561 26.2513 126.594 22.9359 126.594 19.1539C126.594 13.4007 121.885 8.72364 116.079 8.70623H101.978V15.6713H116.044C117.985 15.6713 119.561 17.2315 119.561 19.1539C119.561 21.0693 117.996 22.626 116.065 22.6364H112.528Z"
          fill="#0F1722"
        />
        <path
          d="M101.978 26.119H101.985L109.011 33.9965V40.0492H101.978V26.119Z"
          fill="#0F1722"
        />
        <path
          d="M66.8131 8.70623H80.879V15.6713H69.9779L48.9072 40.0492H40.4395V39.1785L66.8131 8.70623Z"
          fill="#0F1722"
        />
        <path
          d="M73.199 22.6364H80.879V40.0492H73.846V28.7309H67.7977L73.199 22.6364Z"
          fill="#0F1722"
        />
        <path
          d="M7.03295 8.70623V20.735L17.5296 8.70623H26.3736V9.21816L14.3683 23.0056L7.03295 31.4264V40.0492H0V8.70623H7.03295Z"
          fill="#0F1722"
        />
        <path
          d="M14.3683 23.0056L26.3736 39.1785V40.0492H17.9059L14.5301 35.3791L14.3683 23.0056Z"
          fill="#0F1722"
        />
        <path
          d="M2.3 54.66V68H0.78V54.66H2.3ZM40.1441 54.66V68H37.7041L30.2041 55.94V68H28.7441V54.66H31.1841L38.6841 66.84V54.66H40.1441ZM66.5323 68V54.66H72.6923C74.6923 54.66 76.0057 55.1467 76.6323 56.12C77.259 57.08 77.5723 58.4933 77.5723 60.36V61.64C77.5723 63.2933 77.3457 64.7667 76.8923 66.06C76.439 67.3533 75.1657 68 73.0723 68H66.5323ZM68.0123 66.7H72.3723C72.5323 66.7 72.699 66.7 72.8723 66.7C73.059 66.7 73.2457 66.6867 73.4323 66.66C73.7923 66.6333 74.139 66.5667 74.4723 66.46C74.819 66.34 75.099 66.14 75.3123 65.86C75.5523 65.5533 75.7257 65.1867 75.8323 64.76C75.939 64.3333 76.0057 63.8867 76.0323 63.42C76.0457 63.2067 76.0523 63 76.0523 62.8C76.0657 62.5867 76.0723 62.38 76.0723 62.18V61.52C76.0723 60.9867 76.0657 60.46 76.0523 59.94C76.039 59.4067 75.999 58.88 75.9323 58.36C75.799 57.3333 75.439 56.6867 74.8523 56.42C74.2657 56.14 73.539 56 72.6723 56H68.0123V66.7ZM112.852 54.66H114.352V64C114.352 65.3733 114.092 66.38 113.572 67.02C113.052 67.6467 112.046 67.9867 110.552 68.04C110.299 68.0533 110.046 68.06 109.792 68.06C109.552 68.0733 109.306 68.08 109.052 68.08C107.426 68.08 106.139 67.8867 105.192 67.5C104.259 67.1 103.792 65.9333 103.792 64V54.66H105.312V64C105.312 65.1467 105.512 65.9 105.912 66.26C106.326 66.6067 107.092 66.78 108.212 66.78H109.672C110.859 66.78 111.686 66.62 112.152 66.3C112.619 65.98 112.852 65.2133 112.852 64V54.66ZM150.363 58.32H148.903C148.85 57.3333 148.663 56.68 148.343 56.36C148.023 56.0267 147.35 55.86 146.323 55.86H145.603C145.43 55.86 145.23 55.8667 145.003 55.88C144.79 55.88 144.563 55.8867 144.323 55.9C144.043 55.9267 143.77 55.9667 143.503 56.02C143.236 56.0733 143.016 56.1533 142.843 56.26C142.63 56.3933 142.47 56.5733 142.363 56.8C142.27 57.0267 142.21 57.26 142.183 57.5C142.17 57.6067 142.156 57.7133 142.143 57.82C142.143 57.9267 142.143 58.0267 142.143 58.12C142.143 58.8533 142.256 59.4133 142.483 59.8C142.723 60.1733 143.27 60.3867 144.123 60.44C144.416 60.4667 144.703 60.4867 144.983 60.5C145.263 60.5 145.543 60.5 145.823 60.5C147.143 60.5267 148.27 60.7 149.203 61.02C150.15 61.3267 150.623 62.3533 150.623 64.1C150.623 65.1133 150.47 65.9867 150.163 66.72C149.87 67.44 149.116 67.86 147.903 67.98C147.69 67.9933 147.476 68 147.263 68C147.05 68.0133 146.843 68.0267 146.643 68.04C146.43 68.0533 146.216 68.06 146.003 68.06C145.79 68.06 145.576 68.06 145.363 68.06C143.976 68.06 142.83 67.8867 141.923 67.54C141.016 67.18 140.563 66.16 140.563 64.48C140.563 64.4267 140.563 64.3733 140.563 64.32C140.563 64.2667 140.57 64.2133 140.583 64.16C140.583 64.1067 140.583 64.0533 140.583 64C140.596 63.9467 140.603 63.8933 140.603 63.84H142.043C142.043 65.0533 142.21 65.8467 142.543 66.22C142.89 66.5933 143.676 66.78 144.903 66.78H146.163C147.27 66.78 148.036 66.6467 148.463 66.38C148.89 66.1 149.103 65.3933 149.103 64.26C149.103 63.3667 148.97 62.7733 148.703 62.48C148.45 62.1867 147.89 62.02 147.023 61.98C146.823 61.9667 146.623 61.96 146.423 61.96C146.223 61.9467 146.023 61.94 145.823 61.94C144.423 61.8867 143.21 61.6933 142.183 61.36C141.156 61.0267 140.643 59.9733 140.643 58.2C140.643 56.5867 141.056 55.58 141.883 55.18C142.71 54.78 143.816 54.58 145.203 54.58H145.563C146.95 54.58 148.096 54.7467 149.003 55.08C149.91 55.4 150.363 56.4133 150.363 58.12V58.32ZM182.17 56.08V68H180.63V56.08H176.29V54.66H186.45V56.08H182.17ZM212.256 68V54.66H218.576C219.962 54.66 220.962 54.9467 221.576 55.52C222.202 56.0933 222.516 57.0933 222.516 58.52C222.516 59.4133 222.416 60.1733 222.216 60.8C222.016 61.4133 221.336 61.8267 220.176 62.04C220.949 62.0933 221.502 62.3533 221.836 62.82C222.169 63.2733 222.336 63.8667 222.336 64.6V68H220.796V64.94C220.796 64.06 220.589 63.4533 220.176 63.12C219.776 62.7867 219.142 62.62 218.276 62.62H213.736V68H212.256ZM213.736 61.38H218.076C219.089 61.38 219.822 61.22 220.276 60.9C220.729 60.5667 220.956 59.8933 220.956 58.88C220.956 57.92 220.836 57.2 220.596 56.72C220.356 56.2267 219.689 55.98 218.596 55.98H213.736V61.38ZM250.314 54.66V68H248.794V54.66H250.314ZM278.218 56V60.52H285.018V61.78H278.218V66.72H285.318V68H276.758V54.66H285.318V56H278.218ZM320.867 58.32H319.407C319.354 57.3333 319.167 56.68 318.847 56.36C318.527 56.0267 317.854 55.86 316.827 55.86H316.107C315.934 55.86 315.734 55.8667 315.507 55.88C315.294 55.88 315.067 55.8867 314.827 55.9C314.547 55.9267 314.274 55.9667 314.007 56.02C313.74 56.0733 313.52 56.1533 313.347 56.26C313.134 56.3933 312.974 56.5733 312.867 56.8C312.774 57.0267 312.714 57.26 312.687 57.5C312.674 57.6067 312.66 57.7133 312.647 57.82C312.647 57.9267 312.647 58.0267 312.647 58.12C312.647 58.8533 312.76 59.4133 312.987 59.8C313.227 60.1733 313.774 60.3867 314.627 60.44C314.92 60.4667 315.207 60.4867 315.487 60.5C315.767 60.5 316.047 60.5 316.327 60.5C317.647 60.5267 318.774 60.7 319.707 61.02C320.654 61.3267 321.127 62.3533 321.127 64.1C321.127 65.1133 320.974 65.9867 320.667 66.72C320.374 67.44 319.62 67.86 318.407 67.98C318.194 67.9933 317.98 68 317.767 68C317.554 68.0133 317.347 68.0267 317.147 68.04C316.934 68.0533 316.72 68.06 316.507 68.06C316.294 68.06 316.08 68.06 315.867 68.06C314.48 68.06 313.334 67.8867 312.427 67.54C311.52 67.18 311.067 66.16 311.067 64.48C311.067 64.4267 311.067 64.3733 311.067 64.32C311.067 64.2667 311.074 64.2133 311.087 64.16C311.087 64.1067 311.087 64.0533 311.087 64C311.1 63.9467 311.107 63.8933 311.107 63.84H312.547C312.547 65.0533 312.714 65.8467 313.047 66.22C313.394 66.5933 314.18 66.78 315.407 66.78H316.667C317.774 66.78 318.54 66.6467 318.967 66.38C319.394 66.1 319.607 65.3933 319.607 64.26C319.607 63.3667 319.474 62.7733 319.207 62.48C318.954 62.1867 318.394 62.02 317.527 61.98C317.327 61.9667 317.127 61.96 316.927 61.96C316.727 61.9467 316.527 61.94 316.327 61.94C314.927 61.8867 313.714 61.6933 312.687 61.36C311.66 61.0267 311.147 59.9733 311.147 58.2C311.147 56.5867 311.56 55.58 312.387 55.18C313.214 54.78 314.32 54.58 315.707 54.58H316.067C317.454 54.58 318.6 54.7467 319.507 55.08C320.414 55.4 320.867 56.4133 320.867 58.12V58.32Z"
          fill="#0F1722"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}></span>
    </>
  ),
  project: {
    link: 'https://github.com/kensholabs/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/kensholabs/karoshi-docs',
  footer: {
    text: 'KAROSHI Docs',
  },
}

export default config
