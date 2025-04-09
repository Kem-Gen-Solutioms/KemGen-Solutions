import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';
import Quotation from "../components/Quotations/Quotation";
import CompanyTeam from "../components/Team/Team";
import Blog from "../components/Blog/blog";
import Pricing from "../components/Pricing/pricing";
import Checkout from "../components/checkout/checkout";
import Careers from "../components/Careers/Careers";

const routes = [
  {
    component: Home,  // Pass the component reference (not JSX)
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
    component: AboutUs,
    to: '/aboutUs'
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
    component: CompanyTeam,
    to: '/Team'
  },
  {
    component: Quotation,
    to: '/Quotation'
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
