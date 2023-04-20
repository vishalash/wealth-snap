import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => {
  const heartStyle = {
    color: 'red'
  }
  return (
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} {AppConfig.site_name}. Made with{' '}
      <span role="img" aria-label="Love" style={heartStyle}>
        ♥
      </span>{' '}
      by <a href="https://www.linkedin.com/in/vishal-ash-91b56b73/">Vishal Ash</a>
      <style jsx>
        {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
      </style>
    </div>
  );
};

export { FooterCopyright };
