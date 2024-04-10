import React from 'react';

import Card from "../components/Card";
import Layout from "../components/Layout";
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
    return (
      <Layout>
        <Card/>
        <Analytics/>
      </Layout>
    )
  }