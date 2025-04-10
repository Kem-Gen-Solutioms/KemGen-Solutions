import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import Blog from "../components/Blog/blog";
import Pricing from "../components/Pricing/pricing";
import Checkout from "../components/checkout/checkout";
import Careers from "../components/Careers/Careers";

const routes = [
  {
    component: Home,
    to: '/'
  },
  {
    component: Service,
    to: '/services'
  },
  {
    component: ContactUs,
    to: '/contactUs'
  },
  {
    component: IndividualService,
    to: '/individualService'
  },

  {
    component: ProjectDetails,
    to: '/projectDetails'
  },
  {
    component: SMediaService,
    to: '/sMediaService'
  },
  {
    component: Blog,
    to: '/blog'
  },
  {
    component: Pricing,
    to: '/pricing'
  },
  {
    component:Checkout,
    to: '/checkout'
  },
  {
    component:Careers,
    to: '/careers'
  },

];

export default routes;
