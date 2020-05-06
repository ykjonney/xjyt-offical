import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import( /* webpackChunkName: "index" */ '@/view/Index');
const Product = () => import( /* webpackChunkName: "index" */ '@/view/Product');
const ProductDetail = () => import( /* webpackChunkName: "index" */ '@/view/ProductDetail');
const ProductSale = () => import( /* webpackChunkName: "index" */ '@/view/ProductSale');
const Pool = () => import( /* webpackChunkName: "index" */ '@/view/Pool');
const PoolDetail = () => import( /* webpackChunkName: "index" */ '@/view/PoolDetail');
const News = () => import( /* webpackChunkName: "detail" */ '@/view/News');
const NewsDetail = () => import( /* webpackChunkName: "detail" */ '@/view/NewsDetail');
const CompanyDevelop = () => import( /* webpackChunkName: "detail" */ '@/view/CompanyDevelop');
const CompanyInfo = () => import( /* webpackChunkName: "company" */ '@/view/CompanyInfo');
const Contact = () => import( /* webpackChunkName: "company" */ '@/view/Contact');


Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/product',
			name: 'product',
			component: Product,
		},
		{
			path: '/productDetail',
			name: 'productDetail',
			component: ProductDetail,
		},
		{
			path: '/productSale',
			name: 'productSale',
			component: ProductSale,
		},

		{
			path: '/pool',
			name: 'pool',
			component: Pool,
		},
		{
			path: '/poolDetail',
			name: 'poolDetail',
			component: PoolDetail
		},

		{
			path: '/news',
			name: 'news',
			component: News
		},
		{
			path: '/newsdetail/:id',
			name: 'newsdetail',
			component: NewsDetail
		},
		{
			path: '/companyInfo',
			name: 'companyInfo',
			component: CompanyInfo
		},
		{
			path: '/companyDevelop',
			name: 'companyDevelop',
			component: CompanyDevelop
		},

		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		}

	],
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})
