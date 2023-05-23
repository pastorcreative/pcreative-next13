
import Layout from '../components/layout'
import '../styles/globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import About from "../components/About";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  page: Page,
  About: About
};

storyblokInit({
  accessToken: 'LhwsKzzUX74OUhRZbGW3KQtt',
  use: [apiPlugin],
  components,
});


export default function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}