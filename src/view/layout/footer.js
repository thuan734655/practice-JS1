import navChild from '../components/navChild';
import loadImage from '../components/image';

const listTerms = [
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: 'Terms and Conditions', href: '/terms-conditions' },
  { text: 'Cookie Policy', href: '/cookie-policy' },
];

const listFeedback = [
  { text: 'Cookie Policy', href: '/cookie-policy' },
  { text: 'Feedback', href: '/feedback' },
  { text: 'FAQs', href: '/faqs' },
];

const listAboutUs = [
  { text: 'Join Us', href: '/join-us' },
  { text: 'Contact Us', href: '/contact-us' },
];

const footer = () => {
  return `
     <footer id = "rootApp"> 
      <div class="footer--head">
       <div class="head-container">
       ${loadImage([{ srcImg: 'https://s3.cloudfly.vn/practice-js/images/ic-logo.svg', caption: 'Movies', alt: 'logo', link: '/home' }], true)}
       </div>
      </div> <!-- end footer--head -->
      <div class="footer--body">
        <div class="body-container">
         <div class="body-container--listTerms">
          <p>Terms and Conditions</p>
           <ul>
            ${navChild(listTerms)}
          </ul>
         </div> <!-- end body-container--listTerms -->
          <div class="body-container--listFeedback">
          <p>Help and feedback</p>
            <ul>
            ${navChild(listFeedback)}
          </ul>
         </div> <!-- end body-container--listFeedback -->
           <div class="body-container--AboutUs">
          <p>About us</p>
          <ul>
            ${navChild(listAboutUs)}
          </ul>
           <div class="AboutUs-icon">
             ${loadImage(
               [
                 {
                   srcImg:
                     'https://s3.cloudfly.vn/practice-js/images/icons8-fb-48.png',
                   alt: 'icon fb',
                   link: 'https://www.facebook.com/tnv05',
                 },
                 {
                   srcImg:
                     'https://s3.cloudfly.vn/practice-js/images/icons8-ig-48.png',
                   alt: 'icon ig',
                   link: 'https://www.instagram.com/tnv.16.10/',
                 },
                 {
                   srcImg:
                     'https://s3.cloudfly.vn/practice-js/images/icons8-gmail-48.png',
                   alt: 'icon gmail',
                   link: 'mailto:vanthuan678310@gmail.com',
                 },
               ],
               true
             )}
           </div>
         </div> <!-- end body-container--AboutUs -->
        </div>
      </div> <!-- end footer--body -->
     </footer>
    `;
};

export default footer;
